import { useQuery } from '@tanstack/react-query';

const useGetData = (
	dbCollectionName = '',
	id = '',
	queryKey = '',
	queryValue = ''
) => {
	// const url = 'https://express-oco1.onrender.com/api/v1/dynamic/';
	const url = 'https://mmh.cyclic.app/api/v1/dynamic/';
	const { isLoading, error, data, refetch } = useQuery({
		queryKey: [dbCollectionName, id],
		queryFn: () =>
			fetch(`${url}${id}?${queryKey}=$${queryValue}`, {
				method: 'GET',
				headers: {
					dynamic: dbCollectionName,
					authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}).then((res) => res.json()),
	});
	return [isLoading, error, data, refetch];
};

export default useGetData;
