import React from "react";
import { Link } from "react-router-dom";
import Event from "../components/Event/Event";
import PageHeading from "../components/PageHeading";

const Events = () => {
  return (
    <div>
      <PageHeading>
        <div className="h1">event</div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/home" className="hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-600">blog & event</li>
            <li className="hover:text-yellow-600">event</li>
          </ul>
        </div>
      </PageHeading>
      <Event />
    </div>
  );
};

export default Events;
