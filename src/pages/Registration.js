import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigete = useNavigate();

  useEffect(() => {
    if (user) {
      navigete("/");
    }
  }, []);
  console.log(email);
  const register = (event) => {
    event.preventDefault();
    setEmail(event.target.email.value);
    setPassword(event.target.password.value);
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <div class="hero mx-auto">
        <div class="hero-content w-full gap-8 flex-col lg:flex-row">
          <div class="text-center">
            <h2 className="text-4xl font-bold">Registration</h2>
            <p class="py-6">Welcome to our college.</p>
          </div>
          <form onSubmit={register}>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    class="input input-bordered"
                    name="displayName"
                  />
                </div>
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
                    type="password"
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
                    Registration
                  </button>
                  <div>
                    <span style={{ fontSize: "12px", cursor: "pointer" }}>
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
};

export default Registration;
