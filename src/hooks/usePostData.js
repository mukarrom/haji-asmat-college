import { useQuery } from '@tanstack/react-query';

const usePostData = (dbCollectionName = '', body = '', id = '') => {
	// const url = 'https://express-oco1.onrender.com/api/v1/dynamic/';
	const url = 'https://mmh.cyclic.app/api/v1/dynamic/';
	const { isLoading, error, data, refetch } = useQuery({
		queryKey: [dbCollectionName],
		queryFn: () =>
			fetch(`${url}${id}`, {
				method: 'POST',
				headers: {
					dynamic: dbCollectionName,
					authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body,
			}).then((res) => res.json()),
	});
	return [isLoading, error, data, refetch];
};

export default usePostData;
