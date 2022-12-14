import React, { useEffect, useState } from 'react';
import JoditEditor from 'jodit-react';
import { useAuthState } from 'react-firebase-hooks/auth';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useGetData from '../../../hooks/useGetData';
import Loading from '../../../components/Loading';

function UpdateTest() {
    const [form, setForm] = useState({});
    const { id } = useParams();
    const [isLoading, error, data] = useGetData('test', id);
    // const [tData, setTData] = useState(data);
    const [user] = useAuthState(auth);
    useEffect(() => {
        setForm({
            heading: data?.heading,
            category: data?.category,
            actionTime: data?.actionTime,
            article: data?.article,
        });
    }, [data]);
    if (isLoading) return <Loading />;
    if (error) return `An error has occurred: ${error.message}`;

    console.log(form);
    // start upload image in imgbb
    const formData = new FormData();
    const url =
        'https://api.imgbb.com/1/upload?key=f49ab4cb58a5ae6bbc130fa701be81a2';
    let img;
    let deleteUrl;
    const handleFormSubmit = async e => {
        e.preventDefault();

        function uploadToDb() {
            // check data exist or not
            if (e) {
                const finalData = {
                    ...form,
                    image: img,
                    // posterEmail: user.email,
                    // postedOn: new Date().toLocaleString('in'),
                    updaterEmail: user?.email,
                    updatedOn: new Date().toLocaleString('in'),
                };
                // send to your database
                fetch(`http://localhost:3001/api/v1/dynamic/${id}`, {
                    method: 'PUT',
                    headers: {
                        dynamic: 'test',
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                    body: JSON.stringify(finalData),
                })
                    .then(res => res.json())
                    .then(testData => {
                        console.log(testData);
                        if (testData?.modifiedCount) {
                            // if (data?.modifiedCount) {
                            toast.success('The test post updated in database successfully');
                            // }
                            // if (data?.result?.modifiedCount) {
                            //     toast.success('The test post  updated in database successfully');
                            // }
                        } else {
                            toast.error('failed to update in database');
                        }
                    });
            } else {
                toast.error('No data found, Please insert data correctly or image upload fail');
            }
        }

        // check image file selected or not
        if (e?.image) {
            formData.append('image', e.image[0]);
            console.log('image appended');

            // upload in imgbb cloud
            fetch(url, {
                method: 'POST',
                body: formData,
            }).then(res => res.json()).then(imgData => {
                // console.log(imgData);
                // check image upload success or fail
                if (imgData.success) {
                    img = imgData.data.url;
                    deleteUrl = imgData.delete_url;
                    // goNext = true;
                    // console.log({ success: true, url: img, message: 'image upload in cloud success' });
                    uploadToDb();
                } else {
                    // goNext = false;
                    toast.error('Sorry, image not uploaded, please try again');
                }
            });
        } else {
            // goNext = true;
            console.log('Image not selected');
            uploadToDb();
        }
    };
    // "_id": {"$oid": "638f381ddd2ff452158701d7"}, Automatic
    // "image": "https://akjdjflad", input file
    // "heading": "test 2", input text
    // "category": "event 2", input text
    // "article": "<p>my event data 2</p>", judit text editor
    // "time: "5/12/2022 17.16.36", react datepicker
    // "postedOn": "5/12/2022 17.16.36", upload function
    // "posterEmail": "mukarrom.hosain.1@gmail.com" upload function
    // "updatedOn": "", not
    // "updaterEmail": "" not
    return (
        <div>
            <div className="flex justify-center items-center lg:mx-6">
                {/* >------> react form-hook starts <------< */}
                <form onSubmit={handleFormSubmit} className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-2">
                    <div className="form-control w-full ">
                        {/* >-------------->1. Heading input <--------------< */}
                        <label className="label">
                            <span className="label-text">Write Test Heading</span>
                        </label>
                        <input
                            name="heading"
                            type="text"
                            required
                            placeholder="Heading"
                            value={form.heading}
                            onChange={e => {
                                setForm({
                                    ...form,
                                    heading: e.target.value,
                                });
                            }}
                            className="input input-bordered w-full max-w-xs"
                        />

                    </div>
                    {/* >-------------->1. Heading input end <--------------< */}
                    {/* >-------------->2. Category input <--------------< */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Write Test Category</span>
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
                    {/* >-------------->2. Category input end <--------------< */}
                    {/* >-------------->3. date picker  input <--------------< */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Select a date</span>
                        </label>
                        <DatePicker
                            name="actionDate"
                            selected={Date.parse(form?.actionTime)}
                            onChange={(date) => {
                                setForm({
                                    ...form,
                                    actionTime: date,
                                });
                            }}
                            // onChange={(date) => setStartDate(date)}
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    {/* >-------------->3. Date input end <--------------< */}

                    {/* >-------------->4. Image upload <--------------< */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Upload image for test</span>
                        </label>
                        <input
                            type="file"
                            className="file-input file-input-bordered w-full max-w-xs"
                            name="image"
                        />
                        {/* <label className="label"> */}
                        {/*    {errors.image?.type === 'required' && ( */}
                        {/*        <p className="label-text-alt text-red-500" role="alert"> */}
                        {/*            {errors.image.message} */}
                        {/*        </p> */}
                        {/*    )} */}
                        {/* </label> */}
                    </div>
                    {/* >-------------->4. Image upload ends <--------------< */}
                    {/* >-------------->5. Article Text Editor <--------------< */}
                    <div className="form-control lg:col-span-2">
                        <label className="label">
                            <span className="label-text">Your test post</span>
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
                    {/* >-------------->5. Article Text Editor ends <--------------< */}
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

export default UpdateTest;
