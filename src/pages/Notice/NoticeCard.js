import React from 'react';
import { Link } from 'react-router-dom';
import useNoticeFetch from '../../hooks/useNoticeFetch';
import Card from '../../components/Card';

function NoticeCard() {
    const [notice] = useNoticeFetch();
    const cardHeading = <h1 className="h5 text-center py-2">Notice</h1>;
    return (
        <div>
            <Card cardHeading={cardHeading}>
                {notice.map((data, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <span>
						<div className="">
							<Link to=" ">
								<p className="py-3">
									{data.date}: {data.heading}
								</p>
							</Link>
						</div>
						<hr />
                    </span>
                ))}
            </Card>
        </div>
    );
}

export default NoticeCard;
