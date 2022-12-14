import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import auth from '../../../firebase.init';

function AddBlog() {
    const [form, setForm] = useState({
        title: '',
        category: '',
        article: '',
    });
    const [file, setFile] = useState();
    // const { id } = useParams();
    // const [isLoading, error, data] = useGetData('blogs');
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    // useEffect(() => {
    //     setForm({
    //         title: data?.title,
    //         category: data?.category,
    //         image: '',
    //         article: data?.article,
    //     });
    // }, [data]);
    // console.log(form);
    // if (isLoading) return <Loading />;
    // if (error) return `An error has occurred: ${error.message}`;
    // start upload blog in imgbb
    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    // if (file) console.log(file);

    const handleFormSubmit = async e => {
        e.preventDefault();

        // console.log(e.target.file);
        function uploadToDb(image = '') {
            // check data exist or not
            if (form) {
                const finalData = {
                    ...form,
                    image,
                    posterEmail: user.email,
                    postedOn: new Date().toLocaleString('in'),
                    // updaterEmail: user?.email,
                    // updatedOn: new Date().toLocaleString('in'),
                };
                // send to your database
                fetch('http://localhost:3001/api/v1/dynamic/', {
                    method: 'POST',
                    headers: {
                        dynamic: 'blogs',
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                    body: JSON.stringify(finalData),
                })
                    .then(res => res.json())
                    .then(updated => {
                        // "acknowledged": true,
                        // "modifiedCount": 1,
                        // "upsertedId": null,
                        // "upsertedCount": 0,
                        // "matchedCount": 1
                        if (updated.insertedId) {
                            navigate('/blogs');
                            // setContent('');
                            if (file) {
                                toast.success('The blogs added in database successfully');
                            }
                            if (!file) {
                                toast.success('texts updated in database successfully');
                            }
                        } else {
                            toast.error('failed to Add blog in database');
                        }
                    });
            } else {
                toast.error('No data found, Please insert data correctly or blog upload fail');
            }
        }

        // check image file selected or not, if select get url, if not upload without image
        if (file) {
            const formData = new FormData();
            // imgbb url to upload image with api
            const url =
                'https://api.imgbb.com/1/upload?key=f49ab4cb58a5ae6bbc130fa701be81a2';
            formData.append('image', file);
            console.log('image appended');
            // upload in imgbb cloud
            fetch(url, {
                method: 'POST',
                body: formData,
            }).then(res => res.json()).then(imgData => {
                console.log(imgData);
                // check image upload success or fail
                if (imgData.success) {
                    // if image upload success in imgbb, send image url in argument of function call
                    uploadToDb(imgData.data.url);
                } else {
                    // if image upload fail, show error toast
                    toast.error('Sorry, image not uploaded, please try again');
                }
            });
        } else {
            // if blog upload without image
            toast.info('image not selected, only texts will be update, not image');
            uploadToDb();
        }
    };
    return (
        <div>
            <div className="flex justify-center">
                <span
                    className="text-center text-4xl font-bold text-primary uppercase my-8 shadow-xl rounded-lg p-4"
                >
                    Add the blog
                </span>
            </div>
            <div className="flex justify-center items-center lg:mx-6">
                {/* >------> react form-hook starts <------< */}
                <form onSubmit={handleFormSubmit} className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-2">
                    <div className="form-control w-full ">
                        {/* >-------------->1. Title input <--------------< */}
                        <label className="label">
                            <span className="label-text">Write blog title</span>
                        </label>
                        <input
                            name="title"
                            type="text"
                            required
                            placeholder="Title"
                            value={form.title}
                            onChange={e => {
                                setForm({
                                    ...form,
                                    title: e.target.value,
                                });
                            }}
                            className="input input-bordered w-full max-w-xs"
                        />

                    </div>
                    {/* >-------------->1. title input end <--------------< */}

                    {/* >-------------->2. Category input <--------------< */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Write blog Category</span>
                        </label>
                        <input
                            name="category"
                            type="text"
                            placeholder="Category"
                            className="input input-bordered w-full max-w-xs"
                            value={form.category}
                            onChange={e => {
                                setForm({
                                    ...form,
                                    category: e.target.value,
                                });
                            }}
                        />
                    </div>
                    {/* >-------------->2. Category  input end <--------------< */}
                    {/* /!* >-------------->1. Description textarea <--------------< *!/ */}
                    {/* <div> */}
                    {/*    <label className="label"> */}
                    {/*        <span className="label-text">blog Description</span> */}
                    {/*    </label> */}
                    {/*    <textarea */}
                    {/*        type="text" */}
                    {/*        value={form?.description} */}
                    {/*        onChange={e => setForm({ */}
                    {/*            ...form, */}
                    {/*            description: e.target.value, */}
                    {/*        })} */}
                    {/*        placeholder="Description of blog" */}
                    {/*        className="textarea w-full max-w-xs" */}
                    {/*    /> */}
                    {/* </div> */}
                    {/* /!* >-------------->1. Description ends <--------------< *!/ */}

                    {/* >-------------->4. blog image update <--------------< */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Upload image for blog</span>
                        </label>
                        <input
                            onChange={handleFileChange}
                            type="file"
                            name="image"
                            className="file-input file-input-bordered w-full max-w-xs"
                        />
                    </div>
                    {/* >-------------->4. blog update ends <--------------< */}

                    {/* /!* >-------------->3. date picker  input <--------------< *!/ */}
                    {/* <div className="form-control w-full max-w-xs"> */}
                    {/*    <label className="label"> */}
                    {/*        <span className="label-text">Select a date</span> */}
                    {/*    </label> */}
                    {/*    <DatePicker */}
                    {/*        name="dateTime" */}
                    {/*        selected={Date.parse(form?.dateTime)} */}
                    {/*        onChange={(date) => { */}
                    {/*            setForm({ */}
                    {/*                ...form, */}
                    {/*                dateTime: date, */}
                    {/*            }); */}
                    {/*        }} */}
                    {/*        // onChange={(date) => setStartDate(date)} */}
                    {/*        className="input input-bordered w-full max-w-xs" */}
                    {/*    /> */}
                    {/* </div> */}
                    {/* /!* >-------------->3. Date input end <--------------< *!/ */}

                    {/* >-------------->5. blog Text Editor <--------------< */}
                    <div className="form-control lg:col-span-2">
                        <label className="label">
                            <span className="label-text">Your blog article</span>
                        </label>
                        <JoditEditor
                            required
                            // ref={editor}
                            value={form.article}
                            // onBlur={newContent => setContent(newContent)}
                            onChange={(newContent) => {
                                setForm({
                                    ...form,
                                    article: newContent,
                                });
                            }}
                        />
                    </div>
                    {/* >-------------->5. blog Text Editor ends <--------------< */}
                    {/* >--------------> Buttons <--------------< */}
                    <div className="flex justify-center gap-6 my-10 lg:col-span-2">
                        <input
                            className="btn btn-success w-1/3"
                            type="submit"
                            value="Submit"
                        />
                        {/* <input */}
                        {/*    className="btn btn-error w-1/3" */}
                        {/*    type="reset" */}
                        {/*    value="Reset" */}
                        {/*    onClick={() => setForm()} */}
                        {/* /> */}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddBlog;
