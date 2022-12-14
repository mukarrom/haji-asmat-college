import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const useArticles = (category) => {
	const [articles, setArticles] = useState('');
	const [loading, setLoading] = useState(true);
	const { data, isLoading, refetch } = useQuery([category], () =>
		fetch(
			`https://express-oco1.onrender.com/api/v1/articles?category=${category}`,
			{
				method: 'GET',
				headers: {
					authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		).then((res) => res.json())
	);
	// get data from category database and show in editor
	// useEffect(() => {
	//     // const url = `https://mmh.cyclic.app/api/v1/articles?category=${category}`;
	//     const url = `https://express-oco1.onrender.com/api/v1/articles?category=${category}`;
	//     (url, {
	//         method: 'GET',
	//         headers: {
	//             dynamic: category,
	//             authorization: `Bearer ${localStorage.getItem('accessToken')}`,
	//         },
	//     })
	//         .then(res => res.json())
	//         .then(data => {
	//             setArticles(data);
	//             setLoading(false);
	//         });
	// }, [category]);
	// console.log(articles);
	return [data, isLoading, refetch];
};
export default useArticles;
