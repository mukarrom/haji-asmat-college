import React from 'react';
import { Link } from 'react-router-dom';
import useNoticeFetch from '../../hooks/useNoticeFetch';
import Card from '../../components/Card';

function NoticeCard() {
  const [notice] = useNoticeFetch();
  const cardHeading = <h1 className="h5 text-center py-2">Most Read</h1>;
  return (
    <div>
      <Card cardHeading={cardHeading}>
        {notice.map((data) => (
          <>
            <div className="">
              <Link to=" ">
                <p className="py-3">
                  {data.date}
                  :
                  {' '}
                  {data.heading}
                </p>
              </Link>
            </div>
            <hr />
          </>
        ))}
      </Card>
    </div>
  );
}

export default NoticeCard;
