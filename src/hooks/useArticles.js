import { useEffect, useState } from 'react';

const useArticles = category => {
	const [articles, setArticles] = useState('');

	// get data from category database and show in editor
	useEffect(() => {
		fetch(`http://localhost:3001/api/v1/articles?category=${category}`)
			.then(res => res.json())
			.then(data => setArticles(data));
	}, [category]);
	// console.log(articles);
	return articles;
};

export default useArticles;
