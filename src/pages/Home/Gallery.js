import React from 'react';
import Loading from '../../components/Loading';
import useGetData from '../../hooks/useGetData';

const Gallery = () => {
	// const [modal, setModal] = useState('close');
	// const [modalData, setModalData] = useState({});
	const [isLoading, error, data, refetch] = useGetData('gallery');
	// const [admin] = useAdmin();
	if (isLoading) return <Loading />;
	// if (adminLoading) return <Loading />;
	if (error) return `An error has occurred: ${error.message}`;
	console.log(data);
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
			{data?.map((img) => (
				<img src={img?.image} alt="" className="w-96 h-96" />
			))}
		</div>
	);
};

export default Gallery;
