import JoditEditor from 'jodit-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

function BlogsSetting() {
    // const editor = useRef();
    const [content, setContent] = useState('');
    const [whoActive, SetWhoActive] = useState('blog');
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
    const onSubmit = async e => {
        const url =
            'https://api.imgbb.com/1/upload?key=f49ab4cb58a5ae6bbc130fa701be81a2';
        let img;

        function uploadToDb() {
            // check data exist or not
            if (e) {
                const finalData = {
                    category: e.category,
                    heading: e.heading,
                    image: img,
                    article: content,
                    posterEmail: user.email,
                    postedTime: new Date().toLocaleString('in'),
                };
                // console.log(finalData);
                // send to your database
                fetch(`http://localhost:3001/api/v1/blogs/${whoActive}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                    body: JSON.stringify(finalData),
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            reset();
                            if (data?.result?.upsertedCount) {
                                toast.success(`The new ${whoActive} post  uploaded in database successfully`);
                            }
                            if (data?.result?.modifiedCount) {
                                toast.success(`The ${whoActive} post  updated in database successfully`);
                            }
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

            // console.log('image appended');

            // upload in imgbb cloud
            fetch(url, {
                method: 'POST',
                body: formData,
            }).then(res => res.json()).then(imgData => {
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
    // ------------==============-----------------
    // fetch(url, {
    //     method: 'POST',
    //     body: formData,
    // })
    //     .then(res => res.json())
    //     .then(imgData => {
    //
    //         if (imgData.success) {
    //             // const img = imgData.data.url;
    //             const finalData = {
    //                 category: e.category,
    //                 heading: e.heading,
    //                 image: img,
    //                 article: content,
    //                 posterEmail: user.email,
    //                 postedTime: new Date().toLocaleString('in'),
    //             };
    //             // console.log(finalData);
    //             // send to your database
    //             fetch(`http://localhost:3001/api/v1/blogs/${whoActive}`, {
    //                 method: 'PUT',
    //                 headers: {
    //                     'content-type': 'application/json',
    //                     authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    //                 },
    //                 body: JSON.stringify(finalData),
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     // console.log(data);
    //                     /*
    //                      acknowledged: true,
    //                       insertedId: ObjectId("638d888a41295d50ac7247fa"),
    //                       matchedCount: 0,
    //                       modifiedCount: 0,
    //                       upsertedCount: 1
    //                      */
    //                     if (data.success) {
    //                         reset();
    //                         if (data?.result?.upsertedCount) {
    //                             toast.success(`The new ${whoActive} post  uploaded in database successfully`);
    //                         }
    //                         if (data?.result?.modifiedCount) {
    //                             toast.success(`The ${whoActive} post  updated in database successfully`);
    //                         }
    //                     } else {
    //                         toast.error('failed to upload/update in database');
    //                     }
    //                 });
    //         } else {
    //             toast.error('Failed to upload image file in "imgbb" cloud');
    //         }
    //     });
    // };

    return (
        /**
         * blog post some structure
         * 1. category
         * 2. heading
         * 3. image
         * 4. blog
         * 5. poster id and email
         * 6. posted date and time
         * 7. update date and time
         */
        <div className="flex justify-center items-start">
            <div className="card w-full max-w-5xl bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="w-full flex justify-center">
                        <input
                            value="Blog"
                            className={`btn ${whoActive === 'blog' ? 'btn-active btn-primary' : 'btn-active btn-ghost'} w-1/2`}
                            onClick={() => SetWhoActive('blog')}
                        />
                        <input
                            value="Event"
                            className={`btn w-1/2 ${whoActive === 'event' ? 'btn-active btn-primary' : 'btn-active btn-ghost'}`}
                            onClick={() => SetWhoActive('event')}
                        />
                    </div>
                    <h2 className="card-title justify-center text-3xl font-bold">
                        Create new <span className="text-success">{whoActive}</span>
                    </h2>
                    {/* >------> react form-hook starts <------< */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full ">
                            {/* >-> Category type input <-< */}
                            <label className="label">
                                <span className="label-text">Write {whoActive} category</span>
                            </label>
                            <input
                                type="text"
                                placeholder={`${whoActive} category`}
                                className="input input-bordered w-full"
                                {...register('category')}
                                // aria-invalid={errors.name ? 'true' : 'false'}
                            />

                            {/* >----> Blog/Event Heading <----< */}
                            <label className="label">
                                <span className="label-text">Write {whoActive} Heading</span>
                            </label>
                            <input
                                type="text"
                                placeholder={`${whoActive} Heading`}
                                className="input input-bordered w-full"
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
                            {/* >----> Blog/Event Image <----< */}
                            <label className="label">
                                <span className="label-text">Upload image for {whoActive}</span>
                            </label>
                            <input type="file"
                                   className="file-input file-input-bordered w-full max-w-xs"
                                   {...register('image')}
                            />

                            {/* Text area */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your post</span>
                                </label>
                                <JoditEditor
                                    // required
                                    // ref={editor}
                                    value={content}
                                    onBlur={newContent => setContent(newContent)}

                                />

                            </div>

                        </div>
                        {/* button */}
                        <div className="flex justify-center gap-6 mt-5">
                            <input className="btn btn-primary w-1/3" type="submit" value={`Submit ${whoActive}`} />
                            <input
                                className="btn btn-error w-1/3"
                                type="reset"
                                value={`reset ${whoActive}`}
                                onClick={() => setContent('')}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BlogsSetting;
