import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from './Event/EventCard';
import NoticeBoard from './Notice/NoticeBoard';
import MostRead from './Notice/MostRead';
import PageHeading from '../components/PageHeading';
import BlogCard from './Blog/BlogCard';

function Notice() {
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
      <section className="w-full flex mt-8">
        <main className="lg:w-3/4 px-6">
          <NoticeBoard />
        </main>
        <aside className="w-1/4 hidden lg:block">
          <MostRead />
          <EventCard />
          <BlogCard />
        </aside>
      </section>
    </div>
  );
}

export default Notice;
