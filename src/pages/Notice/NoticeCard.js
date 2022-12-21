import React from 'react';
import {Link} from 'react-router-dom';
import Card from '../../components/Card';
import useGetData from "../../hooks/useGetData";
import Loading from "../../components/Loading";

function NoticeCard() {
  // const [modal, setModal] = useState('close');
  // const [modalData, setModalData] = useState(null);
  const [isLoading, error, data] = useGetData('notice');
  // const [admin, adminLoading] = useAdmin();
  if (isLoading) return <Loading/>;
  // if (adminLoading) return <Loading />;
  if (error) return `An error has occurred: ${error.message}`;
  const cardHeading = <h1 className="h5 text-center py-2">Notice</h1>;
  return (
    <div className="dark:text-white">
      <Card cardHeading={cardHeading}>
        {data.map((notice) => (
          <span key={notice?._id}>
						<div className="">
							<Link to={`notice/${notice?._id}`}>
								<p className="py-3">
									{notice?.actionDate} - {notice?.title}
								</p>
							</Link>
						</div>
						<hr/>
          </span>
        ))}
      </Card>
    </div>
  );
}

export default NoticeCard;
