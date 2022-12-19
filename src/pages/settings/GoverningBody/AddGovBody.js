import React, {useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useForm} from 'react-hook-form';
import {toast} from 'react-toastify';
import auth from '../../../firebase.init';
import JoditEditor from "jodit-react";

function AddGovBody() {
  // const editor = useRef();
  const [content, setContent] = useState('');
  const [uploading, setUploading] = useState(false);
  // React date picker
  // const [startDate, setStartDate] = useState(new Date());
  const [user] = useAuthState(auth);
  // React form-hook
  const {
    register,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm();

  // start upload image in imgbb
  const formData = new FormData();
  const url =
    'https://api.imgbb.com/1/upload?key=f49ab4cb58a5ae6bbc130fa701be81a2';
  // let img;
  const onSubmit = async (e) => {
    function uploadToDb(imgUrl) {
      // check data exist or not
      if (e) {
        const finalData = {
          name: e.name,
          email: e.email,
          // position: 0,
          // description: e.description,
          // actionTime: startDate,
          image: imgUrl,
          about: content,
          posterEmail: user.email,
          postedOn: new Date().toLocaleString('in'),
          updaterEmail: '',
          updatedOn: '',
        };

        // const serverUrl = 'https://mmh.cyclic.app/api/v1/dynamic';
        const serverUrl = 'https://mmh.cyclic.app/api/v2/body';
        // send to your database
        fetch(serverUrl, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify(finalData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              reset();
              // setContent('');
              // if (data?.updatedOne) {
              toast.success(
                'The new Body uploaded in database successfully'
              );
              setUploading(false);
              // }
              // if (data?.result?.modifiedCount) {
              //     toast.success('The test post  updated in database successfully');
              // }
            } else {
              toast.error('failed to add new governing body image in database');
            }
          });
      } else {
        toast.error(
          'No data found, Please insert data correctly or image upload fail'
        );
      }
    }

    // let goNext = false;
    // console.log(e.heading);
    // check image file selected or not
    if (e && e.image[0]) {
      formData.append('image', e.image[0]);
      setUploading(true);
      // console.log('image appended');

      // upload in imgbb cloud
      fetch(url, {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          // console.log(imgData);
          // check image upload success or fail
          if (imgData.success) {
            // img = imgData.data.url;
            // goNext = true;
            // console.log({ success: true, url: img, message: 'image upload in cloud success' });
            uploadToDb(imgData.data.url);
          } else {
            // goNext = false;
            toast.error('Sorry, image not uploaded, please try again');
          }
        });
    } else {
      toast.error('Image not selected');
      // uploadToDb();
    }
  };
  // "_id": {"$oid": "638f381ddd2ff452158701d7"}, Automatic
  // "image": "https://akjdjflad", input file
  // "name": "test 2", input text
  // "email": "event 2", input text
  // "about": "<p>my event data 2</p>", judit text editor
  // "position: "1",
  // "postedOn": "5/12/2022 17.16.36", upload function
  // "posterEmail": "mukarrom.hosain.1@gmail.com" upload function
  // "updatedOn": "", not
  // "updaterEmail": "" not
  return (
    <div>
      <div className="flex justify-center">
				<span className="text-center text-4xl font-bold text-primary uppercase my-8 shadow-xl rounded-lg p-4">
					Add new Body
				</span>
      </div>
      <div className="flex justify-center items-center">
        {/* >------> react form-hook starts <------< */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-2"
        >
          {/* >-------------->1. Full name input <--------------< */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs"
              {...register('name', {
                required: {
                  value: true,
                  message: 'name is Required',
                },
                minLength: 3,
              })}
              // aria-invalid={errors.name ? 'true' : 'false'}
            />
            <label className="label">
              {errors.title?.type === 'required' && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.title.message}
                </p>
              )}
            </label>
            <label className="label">
              {errors.title?.type === 'minLength' && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.title.message}
                </p>
              )}
            </label>
          </div>
          {/* >-------------->1. full name ends <--------------< */}
          {/* >-------------->1. email <--------------< */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
              {...register('email', {
                required: {value: true, message: 'Email is Required'},
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Provide a valid Email',
                },
              })}
              // aria-invalid={errors.name ? 'true' : 'false'}
            />
            <label className="label">
              {errors.email?.type === 'required' && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.email.message}
                </p>
              )}
            </label>
            <label className="label">
              {errors.email?.type === 'pattern' && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.email.message}
                </p>
              )}
            </label>
          </div>
          {/* >-------------->1. email ends <--------------< */}
          {/*/!* >-------------->2. position starts  <--------------< *!/*/}
          {/*<div className="form-control w-full max-w-xs">*/}
          {/*  <label className="label">*/}
          {/*    <span className="label-text">position</span>*/}
          {/*  </label>*/}
          {/*  <input*/}
          {/*    {...register('position')}*/}
          {/*    type="number"*/}
          {/*    placeholder="Number of position"*/}
          {/*    className="input input-bordered w-full max-w-xs"*/}
          {/*  />*/}
          {/*</div>*/}
          {/*/!* >-------------->2. position end <--------------< *!/*/}

          {/* >-------------->4. Image upload <--------------< */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Upload image</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              {...register('image')}
            />
          </div>
          {
            uploading ? <div className="form-control w-full max-w-xs">Image ulploading...
              <progress className="progress w-56"></progress>
            </div> : null
          }
          {/* >-------------->4. Image upload ends <--------------< */}

          {/* >-------------->3. date picker  input <--------------< */}
          {/* <div className="form-control w-full max-w-xs"> */}
          {/*    <label className="label"> */}
          {/*        <span className="label-text">Select a date</span> */}
          {/*    </label> */}
          {/*    <DatePicker */}
          {/*        required */}
          {/*        selected={startDate} */}
          {/*        onChange={(date) => setStartDate(date)} */}
          {/*        className="input input-bordered w-full max-w-xs" */}
          {/*    /> */}
          {/* </div> */}
          {/* >-------------->3. Date input end <--------------< */}
          {/* >-------------->5. Article Text Editor <--------------< */}
          <div className="form-control lg:col-span-2">
            <label className="label">
              <span className="label-text">details</span>
            </label>
            <JoditEditor
              required
              value={content}
              onBlur={newContent => setContent(newContent)}
            />
          </div>
          {/*>-------------->5. Article Text Editor ends <--------------< */}
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
              // onClick={() => setContent('')}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddGovBody;
