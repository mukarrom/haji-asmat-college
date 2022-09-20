import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/Blog/BlogCard';
import EventCard from '../components/Event/EventCard';
import NoticeBoard from '../components/Notice/NoticeBoard';
import MostRead from '../components/Notice/MostRead';
import PageHeading from '../components/PageHeading';

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
