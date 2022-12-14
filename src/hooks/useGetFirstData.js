import { useQuery } from '@tanstack/react-query';

const useGetFirstData = (dbCollectionName = '') => {
    // const url = 'https://express-oco1.onrender.com/api/v1/dynamic/';
    const url = 'http://localhost:3001/api/v1/dynamic/';
    const {
        isLoading, error, data, refetch,
    } = useQuery({
        queryKey: [dbCollectionName],
        queryFn: () => fetch(`${url}/first`, {
            method: 'GET',
            headers: {
                dynamic: dbCollectionName,
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        }).then(res => res.json()),
    });
    return [isLoading, error, data, refetch];
};

export default useGetFirstData;
