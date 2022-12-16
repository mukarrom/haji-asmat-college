import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageHeading from '../../components/PageHeading';
import {useForm} from "react-hook-form";
import DatePicker from "react-datepicker";

function AdmitForm() {
  const [startDate, setStartDate] = useState();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (e) => {};
  return (
    <div>
      <PageHeading>
        <div className="h1">Admission Form</div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/home" className="hover:text-yellow-600">Home</Link>
            </li>
            <li className="hover:text-yellow-600">Admission Form</li>
          </ul>
        </div>
      </PageHeading>
      {/*--------------- form starts -----------------*/}
      <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[95%] md:w-[80%] mx-auto mt-5 rounded-2xl min-h-[50vh] px-5"
      >
        <h2 className="text-3xl font-semibold text-gray-800">Admissions Form</h2>
        <p>Enter your admission information below</p>
        {/*======================================= Name =======================================*/}
        <div className="my-4">
          <h4>Name <stron className="text-red-800 font-bold">*</stron></h4>
          <div className="flex gap-3">
            {/*----------- first name -------------*/}
            <div className="form-control w-full max-w-xs">
              <input
                  type="text"
                  placeholder="First name"
                  className="input input-bordered w-full max-w-xs"
                  {...register('fName', {
                    required: {
                      value: true,
                      message: 'First Name is Required',
                    },
                  })}
                  // aria-invalid={errors.name ? 'true' : 'false'}
              />
              <label className="label">
                <span className="label-text-alt text-gray-600">First Name</span>
              </label>
              <label className="label">
                {errors.fName?.type === 'required' && (
                    <p className="label-text-alt text-red-500" role="alert">
                      {errors.fName.message}
                    </p>
                )}
              </label>
            </div>
            {/*----------- Middle name -------------*/}
            <div className="form-control w-full max-w-xs">
              <input
                  type="text"
                  placeholder="Middle Initial"
                  className="input input-bordered w-full max-w-xs"
                  {...register('mName')}
              />
              <label className="label">
                <span className="label-text-alt text-gray-600">Middle Initial</span>
              </label>
            </div>
            {/*----------- Last name -------------*/}
            <div className="form-control w-full max-w-xs">
              <input
                  type="text"
                  placeholder="Last name"
                  className="input input-bordered w-full max-w-xs"
                  {...register('lName', )}
                  // aria-invalid={errors.name ? 'true' : 'false'}
              />
              <label className="label">
                <span className="label-text-alt text-gray-600">First Name</span>
              </label>
            </div>
          </div>
        </div>
        {/*======================================= Birth Date =======================================*/}
        <div className="my-4 max-w-xs">
          <h4>Birth Date <stron className="text-red-800 font-bold">*</stron></h4>
          <div className="flex gap-3">
            <div className="form-control w-full max-w-xs">
              <DatePicker
                  required
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>
        {/*======================================= Gender =======================================*/}
        <div className="my-4 w-32">
          <h4>Gender <stron className="text-red-800 font-bold">*</stron></h4>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
              <span className="label-text">Male</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
              <span className="label-text">Female</span>
            </label>
          </div>
        </div>
      </form>
      {/* Admission Form */}
    </div>
  );
}

export default AdmitForm;
