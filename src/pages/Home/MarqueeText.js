import React from 'react';
// import useNoticeFetch from '../../hooks/useNoticeFetch';
import useGetData from "../../hooks/useGetData";
import Loading from "../../components/Loading";
import {Link} from "react-router-dom";

function MarqueeText() {
  const [isLoading, error, data] = useGetData('notice');
  if (isLoading) return <Loading/>;
  if (error) return `An error has occurred: ${error.message}`;
  return (
    <div className="flex">
      {data.map((notice) => (
        <p key={notice?._id}>
          ::
          <Link to={`/notice/${notice?._id}`} className="text-secondary mx-5 font-bn-hand">{notice?.title}</Link>
        </p>
      ))}
    </div>
  );
}

export default MarqueeText;
