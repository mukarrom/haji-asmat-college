import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

function Login() {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const navigate = useNavigate();
    const location = useLocation();

    // use token
    const token = useToken(gUser || user);
    // console.log(gUser?.user?.email)
    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, navigate, token]);
    // if(token){
    //     navigate('/');
    // }

    let loadingButton;
    let loginError;

    if (gLoading || loading) {
        loadingButton = (
            <button className="btn loading w-full max-w-xs" type="submit">
                Loading
            </button>
        );
    } else {
        loadingButton = (
            <input className="btn w-full max-w-xs" type="submit" value="Login" />
        );
    }
    if (gError || error) {
        loginError = (
            <p className="text-red-500">{gError?.message || error?.message}</p>
        );
    }


    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center text-3xl font-bold">
                        Login
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* daisy */}
                        <div className="form-control w-full max-w-xs">
                            {/* >-> Email <-< */}
                            <label className="label">
                                <span className="label-text">Your email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email is Required',
                                    },
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
                                    required: {
                                        value: true,
                                        message: 'Password is Required',
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Minimum 6 character is required',
                                    },
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
                        {loginError}
                        {/* Login button */}
                        {loadingButton}
                    </form>
                    <p className="">
                        <small>
                            New to Haji Asmat College?
                            {' '}
                            <Link className="text-primary" to="/signup">
                                Create new account
                            </Link>
                        </small>
                    </p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn "
                    >
                        <FcGoogle className="text-4xl" /> &nbsp;  Continue with google
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
