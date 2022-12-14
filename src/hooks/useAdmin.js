import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useAdmin = () => {
	const [admin, setAdmin] = useState(false);
	const [adminLoading, setAdminLoading] = useState(true);
	const [user] = useAuthState(auth);

	useEffect(() => {
		const email = user?.email;
		if (email) {
			fetch(`https://mmh.cyclic.app/api/v1/users/admin/${email}`, {
				method: 'GET',
				headers: {
					'content-type': 'application/json',
					authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					// console.log(data); // true or false
					setAdmin(data);
					setAdminLoading(false);
				});
		}
	}, [user]);
	// console.log(admin);
	return [admin, adminLoading];
};

export default useAdmin;
