import JoditEditor from 'jodit-react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';

function NoticeSetting() {
	const [category, setCategory] = useState(null);
	const [content, setContent] = useState('');
	const [newTitle, setNewTitle] = useState('');
	const [startDate, setStartDate] = useState(new Date());

	const [user, loading] = useAuthState(auth);
	if (loading) return <Loading />;
	// handle form submit to update category
	const handleSubmit = async (e) => {
		e.preventDefault();
		const title = e.target.title.value;
		// console.log(category);
		// const url = 'https://express-oco1.onrender.com/api/v1/dynamic/';
		const url = 'https://mmh.cyclic.app/api/v1/dynamic/';
		fetch(url, {
			method: 'POST',
			headers: {
				dynamic: 'notice',
				'content-type': 'application/json',
				authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify({
				title,
				dateTime: startDate,
				notice: content,
				uploadedBy: user?.email,
				uploadedTime: new Date().toLocaleString('in'),
			}),
		})
			.then((res) => res.json())
			.then((noticeData) => {
				if (noticeData.insertedId) {
					toast.success('Successfully notice data uploaded');
					// console.log(noticeData);
					e.target.reset();
					setContent('');
				} else {
					toast.error('sorry, your data not uploaded successfully');
				}
			});
	};
	return (
		<div className="flex justify-center items-start">
			<div className="card w-full max-w-5xl bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="card-title justify-center text-3xl font-bold">
						Update Articles
					</h2>
					<form onSubmit={handleSubmit}>
						<div className="form-control w-full ">
							{/* >---> Title <---< */}
							<label className="label">
								<span className="label-text">Title</span>
							</label>
							<input
								required
								type="text"
								name="title"
								value={newTitle}
								onChange={(e) => setNewTitle(e.value)}
								className="input input-bordered w-full"
							/>
						</div>
						{/* >---> Date <---< */}
						<div className="form-control">
							<label className="label">
								<span className="label-text">Date</span>
							</label>
							<DatePicker
								required
								selected={startDate}
								onChange={(date) => setStartDate(date)}
							/>
						</div>
						{/* Text area */}
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your post</span>
							</label>
							<JoditEditor
								value={content}
								onBlur={(newContent) => setContent(newContent)}
								// className="textarea textarea-bordered h-full"
							/>
						</div>
						{/* button */}
						<div className="flex justify-center gap-x-6 my-5">
							<input className="btn w-1/3" type="submit" value="Post" />
							<input
								className="btn w-1/3"
								type="reset"
								value="Reset"
								onClick={() => setContent('')}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default NoticeSetting;
