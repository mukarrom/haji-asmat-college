import React, {useEffect, useState} from 'react';
import {useAuthState, useUpdateEmail, useUpdatePassword, useUpdateProfile} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import useToken from "../../hooks/useToken";
import {toast} from "react-toastify";

function Profile() {
  const [user] = useAuthState(auth);
  const [updateProfile, profileUpdating, updateError] = useUpdateProfile(auth);
  const [updateEmail, emailUpdating, emailError] = useUpdateEmail(auth);
  const [updatePassword, passUpdating, passError] = useUpdatePassword(auth);
  const [profile, setProfile] = useState({});
  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  // use token
  const token = useToken(user);

  useEffect(() => {
    setProfile({
      ...profile,
      displayName: user?.displayName,
    })
  }, [])

  let loadingButton;
  let signupError;

  if (profileUpdating || emailUpdating || passUpdating) {
    loadingButton = (
      <button className="btn loading w-full max-w-xs" type="submit">
        Loading
      </button>
    );
  } else {
    loadingButton = (
      <input className="btn w-full max-w-xs" type="submit" value="Update"/>
    );
  }
  if (updateError || emailError || passError) {
    signupError = (
      <p className="text-red-500">
        <small>
          {updateError?.message || emailError?.message || passError.message}
        </small>
      </p>
    );
  }
  // if (token) {
  //   navigate('/');
  // }

  const onSubmit = async (e) => {
    console.log(e);
    // await signInWithEmailAndPassword(data.email, data.password);
    // await updateProfile({displayName: e.name});
    const successName = await updateProfile(e?.name);
    if (successName) {
      toast.success('Updated email address');
    } else {
      toast.error("sorry, name has not updated")
    }
    const successMail = await updateEmail(e?.email);
    if (successMail) {
      toast.success('Updated email address');
    } else {
      toast.error("sorry, email not updated");
    }
    console.log('updated')
  };

  return (
    <div>
      {/*
      <div className="">
        <div className="w-full flex justify-center my-3">
          <img src={user?.photoURL} alt="user photo" className="w-[360px] rounded-full"/>
        </div>
        <div>
          <div className="text-center px-14">
            <h2 className="text-gray-800 text-3xl font-bold">{user?.displayName}</h2>
            <p className="text-gray-400 mt-2 hover:text-blue-500">{user?.email}</p>
          </div>
        </div>
      </div>
      */}
      <div className="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
        <div
          className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out"
        >
          <div className=" h-32 overflow-hidden">
            <img className="w-full"
                 src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                 alt=""
            />
          </div>
          <div className="flex justify-center px-5  -mt-12">
            <img className="h-32 w-32 bg-white p-2 rounded-full   " src={user?.photoURL} alt=""/>

          </div>
          <div className=" ">
            <div className="text-center px-14">
              <h2 className="text-gray-800 text-3xl font-bold">{user?.displayName}</h2>
              <p className="text-gray-400 mt-2 hover:text-blue-500">{user?.email}</p>
              {/*  -------------------------- inputs -------------------- */}
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* daisy */}
                <div className="form-control w-full max-w-xs">
                  {/* >-----------------> Name <----------------------< */}
                  <label className="label">
                    <span className="label-text">Update your name</span>
                  </label>
                  <input
                    type="name"
                    placeholder={user?.displayName}
                    // onChange={(e) => setProfile({
                    //   ...profile,
                    //   displayName: user?.displayName,
                    // })}
                    // value={profile?.displayName}
                    className="input input-bordered w-full max-w-xs"
                    {...register('name')}
                  />
                </div>
                {/* >-----------------> Email <------------------< */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Update your email</span>
                  </label>
                  <input
                    type="email"
                    placeholder={user?.email}
                    className="input input-bordered w-full max-w-xs"
                    {...register('email', {
                      pattern: {
                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                        message: 'Provide a valid Email',
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === 'pattern' && (
                      <p className="label-text-alt text-red-500" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </label>
                </div>
                {/* Error message */}
                {signupError}
                {/* Login button */}
                {loadingButton}
              </form>
            </div>
            {/*--------------- reset password and delete account -------------------*/}
            <hr className="mt-6"/>
            <div className="flex  bg-gray-50 ">
              <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <p>
                  <span className="font-semibold text-red-600">Delete Account</span>
                </p>
              </div>
              <div className="border"/>
              <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <p>
                  <Link to="update">Reset Password</Link>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
