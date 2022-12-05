import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

function Signup() {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  // use token
  const token = useToken(gUser || user);

  let loadingButton;
  let signupError;

  if (gLoading || loading || updating) {
    loadingButton = (
      <button className="btn loading w-full max-w-xs" type="submit">
        Loading
      </button>
    );
  } else {
    loadingButton = (
      <input className="btn w-full max-w-xs" type="submit" value="Sign up" />
    );
  }
  if (gError || error || updateError) {
    signupError = (
      <p className="text-red-500">
        <small>
          {gError?.message || error?.message || updateError.message}
        </small>
      </p>
    );
  }
  if (token) {
    navigate('/');
  }

  const onSubmit = async (data) => {
    // console.log(data);
    await signInWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    // navigate('/');
  };

  return (
    <div className="flex justify-center items-center my-16">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl font-bold">
            Sign up
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* daisy */}
            <div className="form-control w-full max-w-xs">
              {/* >-> Name <-< */}
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                type="name"
                placeholder="Your name"
                className="input input-bordered w-full max-w-xs"
                {...register('name', { required: { value: true, message: 'Name is Required' } })}
              />
              <label className="label">
                {errors.name?.type === 'required' && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.name.message}
                </p>
                )}
              </label>
              {/* >-> Email <-< */}
              <label className="label">
                <span className="label-text">Your email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full max-w-xs"
                {...register('email', { required: { value: true, message: 'Email is Required' }, pattern: { value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, message: 'Provide a valid Email' } })}
              />
              <label className="label">
                {errors.email?.type === 'required' && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.email.message}
                </p>
                )}
                {errors.email?.type === 'pattern' && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.email.message}
                </p>
                )}
              </label>
              {/* >-> password <-< */}
              <label className="label">
                <span className="label-text">Your password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full max-w-xs"
                {...register('password', { required: { value: true, message: 'Password is Required' }, minLength: { value: 6, message: 'Minimum 6 character is required' } })}
              />
              <label className="label">
                {errors.password?.type === 'required' && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.password.message}
                </p>
                )}
                {errors.password?.type === 'minLength' && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.password.message}
                </p>
                )}
              </label>
            </div>
            {/* Error message */}
            {signupError}
            {/* Login button */}
            {loadingButton}
          </form>
          <p className="">
            <small>
              Already have an account?
              {' '}
              <Link className="text-primary" to="/login">
                please login
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-accent"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
