import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import Loading from '../../../components/Loading';

function Users() {
	const {
		data: users,
		isLoading,
		refetch,
	} = useQuery(['users'], () =>
		fetch('https://mmh.cyclic.app/api/v1/users', {
			method: 'GET',
			headers: {
				authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		}).then((res) => res.json())
	);
	// isLoading
	if (isLoading) {
		return <Loading />;
	}
	const makeAdmin = (email) => {
		// console.log("make admin")
		fetch(`https://mmh.cyclic.app/api/v1/users/admin/${email}`, {
			method: 'PUT',
			headers: {
				authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				action: 'make_admin'
			},
		})
			.then((res) => {
				if (res.status === 403) {
					toast.error('Failed to make an admin');
				}
				return res.json()
			})
			.then((data) => {
				// console.log()
				if (data.result.modifiedCount > 0) {
					toast.success('Successfully made admin', email);
					refetch();
				}
			});
	};

	const handleRemoveAdmin = (email) => {
		fetch(`https://mmh.cyclic.app/api/v1/users/admin/${email}`, {
			method: 'PUT',
			headers: {
				authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				action: 'remove_admin'
			},
		})
			.then((res) => {
				if (res.status === 403) {
					toast.error('Failed to remove admin');
				}
				return res.json()
			})
			.then((removeData) => {
				// console.log(removeData)
				if (removeData.result.modifiedCount > 0) {
					toast.success('Successfully remove admin', email);
					refetch();
				}
			});
	}
	return (
		<div className="overflow-x-auto">
			<table className="table w-full border-x-[#1d8a99] border">
				<thead className="bg-purple-800 text-white ">
					<tr style={{ background: 'green' }}>
						<th className="bg-[#1d8a99]">Image</th>
						<th className="bg-[#1d8a99]">Name</th>
						<th className="bg-[#1d8a99]">email</th>
						<th className="bg-[#1d8a99]">Make admin</th>
						<th className="bg-[#1d8a99]">Delete admin</th>
					</tr>
				</thead>
				<tbody>
					{users?.map((user) => (
						// eslint-disable-next-line no-underscore-dangle
						<tr key={user?._id}>
							<th>
								<div className="avatar">
									<div className="w-12 rounded">
										<img
											src={
												user?.photoURL ||
												'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1662389822~exp=1662390422~hmac=9a536effe4040efa033364ea9f3fb619491d07cde39926fd0deae7a5b23e55f7'
											}
											alt="profile"
										/>
									</div>
								</div>
							</th>
							<td>{user?.displayName}</td>
							<td>{user?.email}</td>
							<td>
								{user?.role !== 'admin' ?
									<button
										type="button"
										className="btn btn-sm"
										onClick={() => makeAdmin(user?.email)}
									>
										Make admin
									</button> : null
								}
							</td>
							<td>
								{user?.role === 'admin' ?
								<button
									className="btn btn-sm btn-error"
									type="button"
									onClick={()=>handleRemoveAdmin(user?.email)}
								>Remove Admin</button> : null
								}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Users;
