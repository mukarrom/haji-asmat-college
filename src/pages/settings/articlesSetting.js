import JoditEditor from 'jodit-react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import useArticles from '../../hooks/useArticles';

function ArticlesSetting() {
	const editor = useRef();
	const [category, setCategory] = useState(null);
	const [content, setContent] = useState('');
	const [newTitle, setNewTitle] = useState('');

	// get data from category database and show in editor
	const articles = useArticles(category);

	useEffect(() => {
		setContent(articles[0]?.code);
		setNewTitle(articles[0]?.title);
	}, [articles]);

	// select option value set in useState()
	const handleChange = (e) => {
		// setNewTitle(articles.title);
		setCategory(e.target.value);
	};

	// handle form submit to update category
	const handleSubmit = (e) => {
		e.preventDefault();
		const title = e.target.title.value;
		// const category = e.target.category.value;
		// console.log(category);
		fetch('https://mmh.cyclic.app/api/v1/articles', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				// authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify({
				title,
				category,
				code: content,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				toast('Successfully data updated', JSON.stringify(data));
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
							{/* >-> select category <-< */}
							<label className="label">
								<span className="label-text">Select category</span>
							</label>
							<select
								onChange={handleChange}
								name="category"
								className="select select-secondary w-full mb-6"
							>
								<option value="empty" selected>
									Please select a category
								</option>
								{/* <option value="blog">BlogDetails</option> */}
								{/* <option value="event">EventDetails</option> */}
								<option value="history">College History</option>
								<option value="chairman">Voice of Chairman</option>
								<option value="principal">Voice of Principal</option>
								<option value="mission">Mission and Vision</option>
							</select>
							{/* >-> select category <-< */}
							{/* {category === 'blog' ? ( */}
							{/*	<> */}
							{/*		<label className="label"> */}
							{/*			<span className="label-text">Select BlogDetails sub category</span> */}
							{/*		</label> */}
							{/*		<select */}
							{/*			name="category" */}
							{/*			className="select select-secondary w-full mb-6" */}
							{/*		> */}
							{/*			<option disabled selected> */}
							{/*				Please select blog sub category */}
							{/*			</option> */}
							{/*			<option value="">BlogDetails a</option> */}
							{/*			<option value="">blog b</option> */}
							{/*		</select> */}
							{/*	</> */}
							{/* ) : null} */}
							{/* >-> event sub category <-< */}
							{/* {category === 'event' ? ( */}
							{/*	<> */}
							{/*		<label className="label"> */}
							{/*			<span className="label-text"> */}
							{/*				Select EventDetails sub category */}
							{/*			</span> */}
							{/*		</label> */}
							{/*		<select */}
							{/*			name="category" */}
							{/*			className="select select-secondary w-full mb-6" */}
							{/*		> */}
							{/*			<option disabled selected> */}
							{/*				Please select event sub category */}
							{/*			</option> */}
							{/*			<option value="">EventDetails a</option> */}
							{/*			<option value="">EventDetails b</option> */}
							{/*		</select> */}
							{/*	</> */}
							{/* ) : null} */}
							{/* >-> Title <-< */}
							<label className="label">
								<span className="label-text">Title</span>
							</label>
							<input
								type="text"
								name="title"
								value={newTitle}
								onChange={(e) => setNewTitle(e.value)}
								className="input input-bordered w-full"
							/>
							{/* Text area */}
							<div className="form-control">
								<label className="label">
									<span className="label-text">Your post</span>
								</label>
								<JoditEditor
									ref={editor}
									value={content}
									onBlur={(newContent) => setContent(newContent)}
									// className="textarea textarea-bordered h-full"
								/>
							</div>
						</div>
						{/* button */}
						<div className="flex justify-center gap-x-6">
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

export default ArticlesSetting;
