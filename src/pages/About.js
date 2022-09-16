import React from 'react';
import { Link } from 'react-router-dom';
import PageHeading from '../components/PageHeading';

function About() {
  return (
    <div>
      <PageHeading>
        <div className="h1">about</div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/home" className="hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-600">about</li>
          </ul>
        </div>
      </PageHeading>
    </div>
  );
}

export default About;
