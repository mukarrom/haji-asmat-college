import React from 'react';
import BlogCard from '../Blog/BlogCard';
import EventCard from '../Event/EventCard';
import NoticeCard from '../Notice/NoticeCard';

function Cards() {
  return (
    <div className="container mx-auto xl:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 w-full justify-evenly">
      <NoticeCard />
      <EventCard />
      <BlogCard />
    </div>
  );
}

export default Cards;
