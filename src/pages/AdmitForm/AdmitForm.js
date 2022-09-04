import React from "react";

const AdmitForm = () => {
  return (
    <div>
      <div className="w-full h-24 bgGradientCrimson flex justify-center items-center text-white">
        <div className="h1">Student Admission Form</div>
      </div>
      {/* Admission Form */}
      <div className="shadow-xl w-[95%] md:w-[80%] mx-auto mt-5 bg-base-100 rounded-2xl min-h-[50vh] px-5">
        <div className="title py-3">
          <h2 className="font-semibold text-center">Registration Form</h2>
        </div>
        <form className="py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {/* first name */}
            <div className="flex flex-col">
              <div className="h6">First name</div>
              <input
                placeholder="First name"
                type="text"
                name="fname"
                className="inputMedium"
                required
              />
            </div>
            {/* last name  */}
            <div className="flex flex-col">
              <div className="h6">Last name</div>
              <input
                placeholder="Last name"
                type="text"
                name="lname"
                className="inputMedium"
                required
              />
            </div>
            {/* Birth date */}
            <div className="flex flex-col">
              <div className="h6">Date of Birth</div>
              <input type="date" name="date" className="inputMedium" required />
            </div>
            {/* Email*/}
            <div className="flex flex-col">
              <div className="h6">Email</div>
              <input
                placeholder="Email"
                type="email"
                name="email"
                className="inputMedium"
                required
              />
            </div>
            {/* Email*/}
            <div className="flex flex-col">
              <div className="h6">Phone number</div>
              <input
                placeholder="01xxx-xxx-xxx"
                type="tel"
                name="tel"
                className="inputMedium"
                required
              />
            </div>
          </div>
          {/* ----------------radio button -------------- */}
          <div className="my-5 flex space-x-5">
            <h6>Gender: </h6>
            <div className="flex justify-center items-center space-x-3 h-4">
              <span className="block font-semibold">Male</span>
              <input
                type="radio"
                name="radio-1"
                class="radio block radio-primary"
                checked
              />
            </div>
            <div className="flex justify-center items-center space-x-3 h-4">
              <span className="block font-semibold">Female</span>
              <input
                type="radio"
                name="radio-1"
                class="radio block radio-primary"
              />
            </div>
            <div className="flex justify-center items-center space-x-3 h-4">
              <span className="block font-semibold">Others</span>
              <input
                type="radio"
                name="radio-3"
                class="radio block radio-primary"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary bgGradientCrimson hover:bgGradientBl w-[50%] block mx-auto text-xl"
          />
        </form>
      </div>
    </div>
  );
};

export default AdmitForm;
