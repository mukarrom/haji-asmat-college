import {useEffect, useState} from 'react';
import {useAuthState, useUpdateEmail, useUpdatePassword, useUpdateProfile} from 'react-firebase-hooks/auth';
import {useForm} from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

function UpdateProfile() {
  const [user, loading, error] = useAuthState(auth);
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
      <input className="btn w-full max-w-xs" type="submit" value="Sign up"/>
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

  const onSubmit = async (data) => {
    // console.log(data);
    // await signInWithEmailAndPassword(data.email, data.password);
    await updateProfile({displayName: data.name});
    // navigate('/');
  };

  return (
    <div className="flex justify-center items-center my-16">
      <div className="card w-96 bg-base-100 dark:text-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl font-bold">
            Update your profile
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
                placeholder={user?.displayName}
                // onChange={(e) => setProfile({
                //   ...profile,
                //   displayName: user?.displayName,
                // })}
                // value={profile?.displayName}
                className="input input-bordered w-full max-w-xs"
                {...register('name', {required: {value: true, message: 'Name is Required'}})}
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
                placeholder={user?.email}
                className="input input-bordered w-full max-w-xs"
                {...register('email', {
                  required: {value: true, message: 'Email is Required'},
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'Provide a valid Email',
                  },
                })}
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
                {...register('password', {
                  required: {value: true, message: 'Password is Required'},
                  minLength: {value: 6, message: 'Minimum 6 character is required'},
                })}
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
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
