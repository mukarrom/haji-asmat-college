import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function ConfirmModal({
	dynamic = '',
	title = '',
	id = '',
	setModal = '',
	refetch = null,
}) {
	const navigate = useNavigate();
	const handleDelete = () => {
		fetch(`https://mmh.cyclic.app/api/v1/dynamic/${id}`, {
			method: 'DELETE',
			headers: {
				dynamic,
				authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				// {"acknowledged": true, "deletedCount": 1}
				if (data?.deletedCount) {
					toast.success(`${title} deleted successfully`);
					refetch();
					setModal('close');
					navigate(`/${dynamic}`);
				} else {
					toast.error('sorry, can not delete, try again');
				}
			});
	};
	return (
		<div>
			<input type="checkbox" id="confirm-modal" className="modal-toggle" />
			<div className="modal w-full modal-bottom sm:modal-middle z-50 hover:z-50">
				<div className="modal-box">
					<h2 className="text-lg text-center text-primary">{title}</h2>
					<h3 className="font-bold text-lg text-red-700">
						Are you sure you want to delete this item?
					</h3>
					<div className="flex justify-center items-center mt-6 gap-4">
						<button
							htmlFor="confirm-modal"
							className="btn btn-error btn-outline btn-sm font-bold"
							onClick={handleDelete}
						>
							Delete
						</button>
						<label
							htmlFor="confirm-modal"
							className="btn btn-outline btn-accent btn-sm font-bold"
						>
							Cancel
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ConfirmModal;
