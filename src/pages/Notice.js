import React from "react";
import { Link } from "react-router-dom";
import NoticeBoard from "../components/Notice/NoticeBoard";
// import NoticeCard from "../components/Notice/NoticeCard";
import PageHeading from "../components/PageHeading";

const Notice = () => {
  return (
    <div>
      <PageHeading>
        <div className="h1">notice</div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/home" className="hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-600">notice</li>
          </ul>
        </div>
      </PageHeading>
      <div className="">
        <div className="main">
          <NoticeBoard />
        </div>
        <div className="aside"></div>
      </div>
    </div>
  );
};

export default Notice;
