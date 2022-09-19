import React from 'react';
import { Link } from 'react-router-dom';
import PageHeading from '../PageHeading';

function GovBody() {
  return (
    <div>
      <PageHeading>
        <div className="h1">Governing Body</div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/home" className="hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-600">About</li>
            <li className="hover:text-yellow-600">Governing Body</li>
          </ul>
        </div>
      </PageHeading>
    </div>
  );
}

export default GovBody;
