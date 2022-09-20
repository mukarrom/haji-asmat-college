import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/Blog/BlogCard';
import Event from '../components/Event/Event';
import EventCard from '../components/Event/EventCard';
import NoticeCard from '../components/Notice/NoticeCard';
import PageHeading from '../components/PageHeading';

function Events() {
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
      <section className="w-full flex mt-8">
        <main className="lg:w-3/4 px-6">
          <Event />
        </main>
        <aside className="w-1/4 hidden lg:block">
          <NoticeCard />
          <EventCard />
          <BlogCard />
        </aside>
      </section>
    </div>
  );
}

export default Events;
