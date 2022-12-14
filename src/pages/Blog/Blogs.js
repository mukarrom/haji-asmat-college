import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdAddCircle, MdDeleteForever } from 'react-icons/md';
import { useAuthState } from 'react-firebase-hooks/auth';
import PageHeading from '../../components/PageHeading';
import useGetData from '../../hooks/useGetData';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../components/Loading';
import ConfirmModal from "../../components/Modal/ConfirmModal";
import Blog from "./Blog";

function Blogs() {
	const [modal, setModal] = useState('close');
	const [blog, setBlog] = useState()
	const [isLoading, error, data, refetch] = useGetData('blogs');
	const [user] = useAuthState(auth);
	const [admin, adminLoading] = useAdmin(user);
	if (isLoading) return <Loading />;
	if (user && adminLoading) return <Loading />;
	if (error) return `An error has occurred: ${error.message}`;
	// console.log(typeof admin, admin);
	return (
		<div>
			<PageHeading>
				<div className="h1">Blog</div>
				<div className="text-sm breadcrumbs">
					<ul>
						<li>
							<Link to="/home" className="hover:text-yellow-600">
								Home
							</Link>
						</li>
						<li className="hover:text-yellow-600">Blog & event</li>
						<li className="hover:text-yellow-600">Blog</li>
					</ul>
				</div>
 		 	</PageHeading>
			{/* ------------- Open confirm modal ----------------*/}
			{modal==="open" ? <ConfirmModal title={blog?.title} id={blog?._id} setModal={setModal} dynamic="blogs" refetch={refetch} /> : null}
			{/* ------------- Open confirm modal ----------------*/}
			{/*= ============= Add Blog button ============== */}
			{admin ? (
				<div className="flex justify-center items-center my-6">
					<Link to="../settings/blog/add" className="btn btn-primary">
						<MdAddCircle className="text-2xl" /> &nbsp; Add new notice
					</Link>
				</div>
			) : null}
			{/*= ============= Add Blog button ends ============== */}
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap -m-4">
						{
							data?.map((b) => <Blog
								key={b?._id}
								b={b}
								setModal={setModal}
								setBlog={setBlog} />)
						}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Blogs;
