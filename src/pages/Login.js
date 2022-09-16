import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

function Login() {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const emailSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const navigete = useNavigate();

  if (user) {
    navigete('/');
  }

  return (
    <div className="hero mx-auto">
      <div className="hero-content w-full gap-8 flex-col lg:flex-row">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Log in</h2>
          <p className="py-6">Welcome to our college.</p>
        </div>
        <form onSubmit={emailSignIn}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn w-full  bg-primary grid h-14 flex-grow card place-items-center hover:bg-primary_lighter cursor-pointer text-white rounded-md"
                >
                  Login me
                </button>
                <div>
                  <span style={{ fontSize: '12px', cursor: 'pointer' }}>
                    <NavLink to="/register">Don&apos;t have an account? Sign Up</NavLink>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
