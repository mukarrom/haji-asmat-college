import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const navigete = useNavigate();

  if (user) {
    navigete("/");
  }

  return (
    <div class="hero mx-auto">
      <div class="hero-content w-full gap-8 flex-col lg:flex-row">
        <div class="text-center">
          <h2 className="text-4xl font-bold">Log in</h2>
          <p class="py-6">Welcome to our college.</p>
        </div>
        <form onSubmit={emailSignIn}>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                  name="email"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  class="input input-bordered"
                  name="password"
                />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button
                  type="submit"
                  class="btn w-full  bg-primary grid h-14 flex-grow card place-items-center hover:bg-primary_lighter cursor-pointer text-white rounded-md"
                >
                  Login me
                </button>
                <div>
                  <span style={{ fontSize: "12px", cursor: "pointer" }}>
                    <NavLink to="/regi">Don't have an account? Sign Up</NavLink>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
