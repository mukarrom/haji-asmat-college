import React, { useState } from 'react';
import JoditEditor from 'jodit-react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

function UploadTest() {
    // const editor = useRef();
    const [content, setContent] = useState('');
    // React date picker
    const [startDate, setStartDate] = useState(new Date());
    const [user] = useAuthState(auth);
    // React form-hook
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    // start upload image in imgbb
    const formData = new FormData();
    const url =
        'https://api.imgbb.com/1/upload?key=f49ab4cb58a5ae6bbc130fa701be81a2';
    let img;
    const onSubmit = async e => {
        function uploadToDb() {
            // check data exist or not
            if (e) {
                const finalData = {
                    heading: e.heading,
                    category: e.category,
                    actionTime: startDate,
                    image: img,
                    article: content,
                    posterEmail: user.email,
                    postedOn: new Date().toLocaleString('in'),
                    updaterEmail: '',
                    updatedOn: '',
                };
                // send to your database
                fetch('http://localhost:3001/api/v1/dynamic', {
                    method: 'POST',
                    headers: {
                        dynamic: 'test',
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                    body: JSON.stringify(finalData),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            reset();
                            setContent('');
                            // if (data?.updatedOne) {
                            toast.success('The new test post  uploaded in database successfully');
                            // }
                            // if (data?.result?.modifiedCount) {
                            //     toast.success('The test post  updated in database successfully');
                            // }
                        } else {
                            toast.error('failed to upload/update in database');
                        }
                    });
            } else {
                toast.error('No data found, Please insert data correctly or image upload fail');
            }
        }

        // let goNext = false;
        // console.log(e.heading);
        // check image file selected or not
        if (e && e.image[0]) {
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
            <div className="flex justify-center items-center">
                {/* >------> react form-hook starts <------< */}
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-2">
                    <div className="form-control w-full ">
                        {/* >-------------->1. Heading input <--------------< */}
                        <label className="label">
                            <span className="label-text">Write Test Heading</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Heading"
                            className="input input-bordered w-full max-w-xs"
                            {...register('heading', {
                                required: {
                                    value: true,
                                    message: 'Heading is Required',
                                },
                            })}
                            // aria-invalid={errors.name ? 'true' : 'false'}
                        />
                        <label className="label">
                            {errors.heading?.type === 'required' && (
                                <p className="label-text-alt text-red-500" role="alert">
                                    {errors.heading.message}
                                </p>
                            )}
                        </label>
                    </div>
                    {/* >-------------->1. Heading input end <--------------< */}
                    {/* >-------------->2. Category input <--------------< */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Write Test Category</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Category"
                            className="input input-bordered w-full max-w-xs"
                            {...register('category', {
                                required: {
                                    value: true,
                                    message: 'Category is Required',
                                },
                            })}
                            // aria-invalid={errors.name ? 'true' : 'false'}
                        />
                        <label className="label">
                            {errors.category?.type === 'required' && (
                                <p className="label-text-alt text-red-500" role="alert">
                                    {errors.category.message}
                                </p>
                            )}
                        </label>
                    </div>
                    {/* >-------------->2. Category input end <--------------< */}
                    {/* >-------------->3. date picker  input <--------------< */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Select a date</span>
                        </label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
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
                            {...register('image')}
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
                            value={content}
                            onBlur={newContent => setContent(newContent)}
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
                        <input
                            className="btn btn-error w-1/3"
                            type="reset"
                            value="Reset"
                            onClick={() => setContent('')}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UploadTest;
