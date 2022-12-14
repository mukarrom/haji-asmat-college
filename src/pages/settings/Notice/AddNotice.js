import React, { useState } from 'react';
import JoditEditor from 'jodit-react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

function AddNotice() {
	const [content, setContent] = useState('');
	// React date picker
	const [startDate, setStartDate] = useState(new Date());
	const [user] = useAuthState(auth);
	// React form-hook
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();
	const onSubmit = async (e) => {
		// check data exist or not
		if (e.title) {
			const finalData = {
				title: e.title,
				category: e.category,
				dateTime: startDate,
				notice: content,
				posterEmail: user.email,
				postedOn: new Date().toLocaleString('in'),
				updaterEmail: '',
				updatedOn: '',
			};
			// send to your database
			fetch('https://mmh.cyclic.app/api/v1/dynamic', {
				method: 'POST',
				headers: {
					dynamic: 'notice',
					'content-type': 'application/json',
					authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(finalData),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.insertedId) {
						reset();
						setContent('');
						// if (data?.updatedOne) {
						toast.success('The new notice  uploaded in database successfully');
					} else {
						toast.error('failed to upload/update in database');
					}
				});
		} else {
			toast.error(
				'No data found, Please insert data correctly or image upload fail'
			);
		}
	};
	// "_id": {"$oid": "638f381ddd2ff452158701d7"}, Automatic
	// "title": "test 2", input text
	// "category": "event 2", input text
	// "dateTime: "5/12/2022 17.16.36", react datepicker
	// "notice": "<p>my event data 2</p>", judit text editor
	// "postedOn": "5/12/2022 17.16.36", upload function
	// "posterEmail": "mukarrom.hosain.1@gmail.com" upload function
	// "updatedOn": "", not
	// "updaterEmail": "" not
	return (
		<div>
			<div className="flex justify-center">
				<span className="text-center text-4xl font-bold text-primary uppercase my-8 shadow-xl rounded-lg p-4">
					Add new notice
				</span>
			</div>
			<div className="flex justify-center items-center">
				{/* >------> react form-hook starts <------< */}
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-2"
				>
					<div className="form-control w-full ">
						{/* >-------------->1. Title input <--------------< */}
						<label className="label">
							<span className="label-text">Notice Title</span>
						</label>
						<input
							type="text"
							placeholder="Title of notice"
							className="input input-bordered w-full max-w-xs"
							{...register('title', {
								required: {
									value: true,
									message: 'Title is Required',
								},
							})}
							// aria-invalid={errors.name ? 'true' : 'false'}
						/>
						<label className="label">
							{errors.title?.type === 'required' && (
								<p className="label-text-alt text-red-500" role="alert">
									{errors.title.message}
								</p>
							)}
						</label>
					</div>
					{/* >-------------->1. Title ends <--------------< */}
					{/* >-------------->2. Category starts <--------------< */}
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">Notice Category</span>
						</label>
						<input
							type="text"
							placeholder="Category"
							className="input input-bordered w-full max-w-xs"
							{...register('category', {
								minLength: 1,
							})}
							// aria-invalid={errors.name ? 'true' : 'false'}
						/>
						<label className="label">
							{errors.minLength?.type === 'required' && (
								<p className="label-text-alt text-red-500" role="alert">
									{errors.minLength.message}
								</p>
							)}
						</label>
					</div>
					{/* >-------------->2. Category input end <--------------< */}
					{/* >-------------->3. date picker  input <--------------< */}
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">Select a date</span>
						</label>
						<DatePicker
							required
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							className="input input-bordered w-full max-w-xs"
						/>
					</div>
					{/* >-------------->3. Date input end <--------------< */}
					{/* >-------------->5. Article Text Editor <--------------< */}
					<div className="form-control lg:col-span-2">
						<label className="label">
							<span className="label-text">Notice details</span>
						</label>
						<JoditEditor
							required
							// ref={editor}
							value={content}
							onBlur={(newContent) => setContent(newContent)}
						/>
					</div>
					{/* >-------------->5. Article Text Editor ends <--------------< */}
					{/* >--------------> Buttons <--------------< */}
					<div className="flex justify-center gap-6 my-10 lg:col-span-2">
						<input
							className="btn btn-success w-1/3"
							type="submit"
							value="Submit"
						/>
						<input
							className="btn btn-error w-1/3"
							type="reset"
							value="Reset"
							onClick={() => setContent('')}
						/>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AddNotice;
