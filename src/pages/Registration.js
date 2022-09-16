import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    createUserWithEmailAndPassword, user, loading, error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);
  console.log(email);
  const register = (event) => {
    event.preventDefault();
    setEmail(event.target.email.value);
    setPassword(event.target.password.value);
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <div className="hero mx-auto">
        <div className="hero-content w-full gap-8 flex-col lg:flex-row">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Registration</h2>
            <p className="py-6">Welcome to our college.</p>
          </div>
          <form onSubmit={register}>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    name="displayName"
                  />
                </div>
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
                    type="password"
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
                    Registration
                  </button>
                  <div>
                    <span style={{ fontSize: '12px', cursor: 'pointer' }}>
                      <NavLink to="/login">
                        Already have an account. Login!
                      </NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
