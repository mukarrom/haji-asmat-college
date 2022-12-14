import { useEffect, useState } from 'react';

const useToken = (user) => {
	const [token, setToken] = useState('');
	useEffect(() => {
		const email = user?.user?.email;
		const displayName = user?.user?.displayName;
		const emailVerified = user?.user?.emailVerified;
		const phoneNumber = user?.user?.phoneNumber;
		const photoURL = user?.user?.photoURL;

		const currentUser = {
			displayName,
			email,
			phoneNumber,
			photoURL,
			emailVerified,
		};
		if (email) {
			// console.log(currentUser);
			fetch(`https://mmh.cyclic.app/api/v1/users/${email}`, {
				method: 'PUT',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(currentUser),
			})
				.then((res) => res.json())
				.then((data) => {
					// console.log('data inside useToken', data);
					// get jwt token from backend and define a variable
					const accessToken = data.token;
					// set token in local storage
					localStorage.setItem('accessToken', accessToken);
					// set in useState
					setToken(accessToken);
				});
		}
	}, [user]);

	return token;
};

export default useToken;
