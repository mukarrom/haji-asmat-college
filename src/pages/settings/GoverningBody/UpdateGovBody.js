import React, {useEffect, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {toast} from 'react-toastify';
import {useNavigate, useParams} from 'react-router-dom';
import auth from '../../../firebase.init';
import useGetData from '../../../hooks/useGetData';
import Loading from '../../../components/Loading';
import {useForm} from "react-hook-form";
import JoditEditor from "jodit-react";

function UpdateGovBody() {
  const [form, setForm] = useState({});
  const [uploading, setUploading] = useState(false);
  const {id} = useParams();
  const [isLoading, error, data] = useGetData('gov_body', id);
  // console.log(form);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm();

  useEffect(() => {
    setForm({
      name: data?.name,
      email: data?.email,
      position: data?.position,
      about: data?.about,
      image: data?.image,
    });
  }, [data]);

  if (isLoading) return <Loading/>;
  if (error) return `An error has occurred: ${error.message}`;

  // start upload image in imgbb
  const formData = new FormData();
  const url =
    'https://api.imgbb.com/1/upload?key=f49ab4cb58a5ae6bbc130fa701be81a2';
  const onSubmit = async (e) => {
    function uploadToDb(imgUrl = '') {
      // check data exist or not
      if (form) {
        const finalData = {
          ...form,
          image: imgUrl ? imgUrl : form?.image,
          // posterEmail: user.email,
          // postedOn: new Date().toLocaleString('in'),
          updaterEmail: user.email,
          updatedOn: new Date().toLocaleString('in'),
        };
        console.log(finalData);
        // send to your database
        fetch(`https://mmh.cyclic.app/api/v2/body/${id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify(finalData),
        })
          .then((res) => res.json())
          .then((updated) => {
            // console.log(data);
            if (updated.modifiedCount) {
              navigate('/gov_body')
              if (imgUrl) {
                toast.success(
                  'The body updated in database successfully'
                );
              }
              if (!imgUrl) {
                toast.success('Only texts updated in database successfully');
              }
            } else {
              toast.error('failed to add new governing body in database');
            }
          });
      } else {
        toast.error(
          'No data found, Please insert data correctly or image upload fail'
        );
      }
    }

    // ============= check image file selected or not ===============\\
    if (e && e.image[0]) {
      formData.append('image', e.image[0]);
      setUploading(true);
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
            setForm({...form, image: imgData.data.url})
            uploadToDb(imgData.data.url);
            setUploading(false);
          } else {
            toast.error('Sorry, image not uploaded, please try again');
          }
        });
    } else {
      uploadToDb();
      toast.error('Image not selected');
    }
  };
  return (
    <div>
      <div className="flex justify-center">
				<span className="text-center text-4xl font-bold text-primary uppercase my-8 shadow-xl rounded-lg p-4">
					Update the Body
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
              onChange={(e) => setForm({...form, name: e.target.value})}
              type="text"
              placeholder="Full Name"
              value={form?.name}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* >-------------->1. full name ends <--------------< */}
          {/* >-------------->1. email <--------------< */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              onChange={(e) => setForm({...form, email: e.target.value})}
              required
              value={form?.email}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
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
          {/* >-------------->2. position starts  <--------------< */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">position</span>
            </label>
            <input
              onChange={e => {
                setForm({
                  ...form,
                  position: e.target.value
                })
              }
              }
              value={form?.position}
              type="number"
              placeholder="Number of position"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.position?.type === 'required' && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.position.message}
                </p>
              )}
            </label>
            <label className="label">
              {errors.position?.type === 'minLength' && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.position.message}
                </p>
              )}
            </label>
          </div>
          {/* >-------------->2. post end <--------------< */}
          {/*/!* >-------------->1. Description textarea <--------------< *!/*/}
          {/*<div>*/}
          {/*  <label className="label">*/}
          {/*    <span className="label-text">Image Description</span>*/}
          {/*  </label>*/}
          {/*  <textarea*/}
          {/*    type="text"*/}
          {/*    placeholder="Description of Image"*/}
          {/*    className="textarea w-full max-w-xs"*/}
          {/*    {...register('description', {*/}
          {/*      minLength: 3,*/}
          {/*    })}*/}
          {/*  />*/}
          {/*  <label className="label">*/}
          {/*    {errors.description?.type === 'minLength' && (*/}
          {/*      <p className="label-text-alt text-red-500" role="alert">*/}
          {/*        {errors.description.message}*/}
          {/*      </p>*/}
          {/*    )}*/}
          {/*  </label>*/}
          {/*</div>*/}
          {/*/!* >-------------->1. Description ends <--------------< *!/*/}

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

          {/* >-------------->5. Article Text Editor <--------------< */}
          <div className="form-control lg:col-span-2">
            <label className="label">
              <span className="label-text">details</span>
            </label>
            <JoditEditor
              required
              value={form?.about}
              onBlur={newContent => setForm({...form, about: newContent})}
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
            {/*<input*/}
            {/*  className="btn btn-error w-1/3"*/}
            {/*  type="reset"*/}
            {/*  value="Reset"*/}
            {/*  onClick={() => setContent('')}*/}
            {/*/>*/}
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateGovBody;
