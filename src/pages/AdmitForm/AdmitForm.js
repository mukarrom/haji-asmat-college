import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PageHeading from '../../components/PageHeading';
import {useForm} from "react-hook-form";
import DatePicker from "react-datepicker";
import Footer from "../../components/Footer";

function AdmitForm() {
  const [startDate, setStartDate] = useState();
  const {
    register,
    formState: {errors},
    handleSubmit,
    // reset,
  } = useForm();
  const onSubmit = async (e) => {
  };
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
        {/*************************************************************/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/************ class name **************/}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="">শ্রেণির নাম <strong className="text-red-500">*</strong></span>
            </label>
            <select className="select select-bordered bg-base-100 dark:text-white">
              <option>একাদশ</option>
              <option>দ্বাদশ</option>
              <option>ডিগ্রি ১ম বর্ষ</option>
              <option>ডিগ্রি ২য় বর্ষ</option>
              <option>ডিগ্রি ৩য় বর্ষ</option>
              <option>অনার্স ১ম বর্ষ</option>
              <option>অনার্স ২য় বর্ষ</option>
              <option>অনার্স ৩য় বর্ষ</option>
              <option>অনার্স ৪র্থ বর্ষ</option>
              <option>মাস্টার্স ১ম বর্ষ</option>
            </select>
          </div>
          {/************ শাখা/বিভাগের নাম **************/}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="">শাখা/বিভাগের নাম <strong className="text-red-500">*</strong></span>
            </label>
            <select className="select select-bordered bg-base-100 dark:text-white">
              <option>বিজ্ঞান</option>
              <option>মানবিক</option>
              <option>ব্যবসায়িক শিক্ষা</option>
              <option>কম্পিউটার</option>
              <option>কারিগরী</option>
            </select>
          </div>
          {/************ class name **************/}
          {/*
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="">শিক্ষবর্ষ (সেশন) <strong className="text-red-500">*</strong></span>
          </label>
          <select className="select select-bordered bg-base-100 dark:text-white">
            <option>একাদশ</option>
            <option>দ্বাদশ</option>
            <option>ডিগ্রি ১ম বর্ষ</option>
            <option>ডিগ্রি ২য় বর্ষ</option>
            <option>ডিগ্রি ৩য় বর্ষ</option>
            <option>অনার্স ১ম বর্ষ</option>
            <option>অনার্স ২য় বর্ষ</option>
            <option>অনার্স ৩য় বর্ষ</option>
            <option>অনার্স ৪র্থ বর্ষ</option>
            <option>মাস্টার্স ১ম বর্ষ</option>
          </select>
        </div>
        */}
        </div>
        {/**************************************************************/}
        {/*======================================= Name =======================================*/}
        <div className="my-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {/*----------- name bn -------------*/}
            <div className="form-control w-full max-w-xs">
              <h4>Full name (Bangla) <stron className="text-red-800 font-bold">*</stron></h4>
              <input
                type="text"
                placeholder="পূর্ণ নাম (বাংলা)"
                className="input input-bordered w-full max-w-xs"
                {...register('nameBn', {
                  required: {
                    value: true,
                    message: 'সম্পূর্ণ নাম বাংলায় অবশ্যয় দিতে হবে',
                  },
                })}
              />
              <label className="label">
                {errors.nameBn?.type === 'required' && (
                  <p className="label-text-alt text-red-500" role="alert">
                    {errors.nameBn.message}
                  </p>
                )}
              </label>
            </div>
            {/*----------- Full name English -------------*/}
            <div className="form-control w-full max-w-xs">
              <h4>Full name (English) <stron className="text-red-800 font-bold">*</stron></h4>
              <input
                type="text"
                placeholder="পূর্ণ নাম (ইংরেজি)"
                className="input input-bordered w-full max-w-xs"
                {...register('nameEn', {
                  required: {
                    value: true,
                    message: 'সম্পূর্ণ নাম ইংরেজিতে অবশ্যয় দিতে হবে',
                  },
                })}
              />
              <label className="label">
                {errors.nameEn?.type === 'required' && (
                  <p className="label-text-alt text-red-500" role="alert">
                    {errors.nameEn.message}
                  </p>
                )}
              </label>
            </div>
            {/*----------- Birth of date -------------*/}
            <div className="form-control w-full max-w-xs">
              <h4>Birth Date <stron className="text-red-800 font-bold">*</stron></h4>
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
              <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked/>
              <span className="label-text">Male</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked/>
              <span className="label-text">Female</span>
            </label>
          </div>
        </div>
        {/*------------------------ father's information --------------------------------*/}
        <h1 className="text-center text-bold text-2xl text-primary font-bn-hand mt-6 mb-2">
          <span className="py-2 px-8 shadow-xl">পিতা</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {/*----------- Father's name -------------*/}
          <div className="form-control w-full max-w-xs">
            <h4>পিতার নাম
              <stron className="text-red-800 font-bold"> *</stron>
            </h4>
            <input
              type="text"
              placeholder="পিতার নাম"
              className="input input-bordered w-full max-w-xs"
              {...register('fatherName', {
                required: {
                  value: true,
                  message: 'Father\'s name is required',
                },
              })}
            />
            <label className="label">
              {errors.fatherName?.type === 'required' && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.fatherName.message}
                </p>
              )}
            </label>
          </div>
          {/*----------- Father's Occupation -------------*/}
          <div className="form-control w-full max-w-xs">
            <h4>পেশা
              <stron className="text-red-800 font-bold"></stron>
            </h4>
            <input
              type="text"
              placeholder="পেশা"
              className="input input-bordered w-full max-w-xs"
              {...register('fOccupation')}
            />
          </div>
          {/*----------- ফোন নাম্বার -------------*/}
          <div className="form-control w-full max-w-xs">
            <h4>মোবাইল
              <stron className="text-red-800 font-bold"></stron>
            </h4>
            <input
              type="tel"
              placeholder="মোবাইল"
              className="input input-bordered w-full max-w-xs"
              {...register('fMobile')}
            />
          </div>
          {/*----------- NID নাম্বার -------------*/}
          <div className="form-control w-full max-w-xs">
            <h4>এনআইডি নাম্বার
              <stron className="text-red-800 font-bold"></stron>
            </h4>
            <input
              type="number"
              placeholder="এনআইডি নাম্বার"
              className="input input-bordered w-full max-w-xs"
              {...register('fNID')}
            />
          </div>
        </div>

        {/*------------------------ mother's information --------------------------------*/}
        <h1 className="text-center text-bold text-2xl text-primary font-bn-hand mt-6 mb-2">
          <span className="py-2 px-8 shadow-xl">মাতা</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {/*----------- Mother's name -------------*/}
          <div className="form-control w-full max-w-xs">
            <h4>মাতার নাম
              <stron className="text-red-800 font-bold"> *</stron>
            </h4>
            <input
              type="text"
              placeholder="মাতার নাম"
              className="input input-bordered w-full max-w-xs"
              {...register('motherName', {
                required: {
                  value: true,
                  message: 'Mother\'s name is required',
                },
              })}
            />
            <label className="label">
              {errors.motherName?.type === 'required' && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.motherName.message}
                </p>
              )}
            </label>
          </div>
          {/*----------- Mother's Occupation -------------*/}
          <div className="form-control w-full max-w-xs">
            <h4>পেশা
              <stron className="text-red-800 font-bold"></stron>
            </h4>
            <input
              type="text"
              placeholder="পেশা"
              className="input input-bordered w-full max-w-xs"
              {...register('mOccupation')}
            />
          </div>
          {/*----------- ফোন নাম্বার -------------*/}
          <div className="form-control w-full max-w-xs">
            <h4>মোবাইল
              <stron className="text-red-800 font-bold"></stron>
            </h4>
            <input
              type="tel"
              placeholder="মোবাইল"
              className="input input-bordered w-full max-w-xs"
              {...register('mMobile')}
            />
          </div>
          {/*----------- NID নাম্বার -------------*/}
          <div className="form-control w-full max-w-xs">
            <h4>এনআইডি নাম্বার
              <stron className="text-red-800 font-bold"></stron>
            </h4>
            <input
              type="number"
              placeholder="এনআইডি নাম্বার"
              className="input input-bordered w-full max-w-xs"
              {...register('mNID')}
            />
          </div>
        </div>

        {/*################################# অভিভাবক #####################################*/}
        <h1 className="text-center text-bold text-2xl text-primary font-bn-hand mt-6 mb-2">
          <span className="py-2 px-8 shadow-xl">অভিভাবক</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {/*----------- অভিভাবকের নাম -------------*/}
          <div className="form-control w-full max-w-xs">
            <h4>অভিভাবকের নাম
              <stron className="text-red-800 font-bold"> *</stron>
            </h4>
            <input
              type="text"
              placeholder="অভিভাবকের নাম"
              className="input input-bordered w-full max-w-xs"
              {...register('gName', {
                required: {
                  value: true,
                  message: 'অভিভাবকের নাম দিন',
                },
              })}
            />
            <label className="label">
              {errors.gName?.type === 'required' && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.gName.message}
                </p>
              )}
            </label>
          </div>
          {/*----------- Mother's Occupation -------------*/}
          <div className="form-control w-full max-w-xs">
            <h4>সম্পর্ক
              <stron className="text-red-800 font-bold"></stron>
            </h4>
            <input
              type="text"
              placeholder="সম্পর্ক"
              className="input input-bordered w-full max-w-xs"
              {...register('relation')}
            />
          </div>
          {/*----------- ফোন নাম্বার -------------*/}
          <div className="form-control w-full max-w-xs">
            <h4>মোবাইল
              <stron className="text-red-800 font-bold"></stron>
            </h4>
            <input
              type="tel"
              placeholder="মোবাইল"
              className="input input-bordered w-full max-w-xs"
              {...register('gMobile')}
            />
          </div>
        </div>

        {/*  ############################### Address ####################################*/}
        <h1 className="text-center text-bold text-2xl text-primary font-bn-hand mt-6 mb-2">
          <span className="py-2 px-8 shadow-xl">ঠিকানা</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {/*----------- জেলা -------------*/}
          <div className="form-control w-full max-w-xs">
            <h4>জেলা
              <stron className="text-red-800 font-bold"> *</stron>
            </h4>
            <input
              type="text"
              placeholder="জেলা"
              className="input input-bordered w-full max-w-xs"
              {...register('district', {
                required: {
                  value: true,
                  message: 'জেলার নাম দিন',
                },
              })}
            />
            <label className="label">
              {errors.district?.type === 'required' && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.district.message}
                </p>
              )}
            </label>
          </div>
          {/*----------- উপজেলা -------------*/}
          <div className="form-control w-full max-w-xs">
            <h4>উপজেলা
              <stron className="text-red-800 font-bold"> *</stron>
            </h4>
            <input
              type="text"
              placeholder="উপজেলা"
              className="input input-bordered w-full max-w-xs"
              {...register('thana', {
                required: {
                  value: true,
                  message: 'উপজেলার নাম দিন',
                },
              })}
            />
            <label className="label">
              {errors.thana?.type === 'required' && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.thana.message}
                </p>
              )}
            </label>
          </div>
          {/*----------- ডাকঘর -------------*/}
          <div className="form-control w-full max-w-xs">
            <h4>ডাকঘর
              <stron className="text-red-800 font-bold"> *</stron>
            </h4>
            <input
              type="text"
              placeholder="ডাকঘর"
              className="input input-bordered w-full max-w-xs"
              {...register('post', {
                required: {
                  value: true,
                  message: 'ডাকঘরের নাম দিন',
                },
              })}
            />
            <label className="label">
              {errors.post?.type === 'required' && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.post.message}
                </p>
              )}
            </label>
          </div>
          {/*----------- গ্রাম -------------*/}
          <div className="form-control w-full max-w-xs">
            <h4>গ্রাম
              <stron className="text-red-800 font-bold"> *</stron>
            </h4>
            <input
              type="text"
              placeholder="গ্রাম"
              className="input input-bordered w-full max-w-xs"
              {...register('village', {
                required: {
                  value: true,
                  message: 'গ্রামের নাম দিন',
                },
              })}
            />
            <label className="label">
              {errors.village?.type === 'required' && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.village.message}
                </p>
              )}
            </label>
          </div>
        </div>

        {/*  ############################# submit button #################################*/}
        <div className="grid grid-cols-2 gap-2 my-10">
          <input className="btn btn-success btn-outline" type="submit" value="জমা করুন"/>
          <input className="btn btn-error btn-outline" type="reset" value="রিসেট করুন"/>
        </div>
      </form>
      {/* Admission Form */}
      <Footer/>
    </div>
  );
}

export default AdmitForm;
