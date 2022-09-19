import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../../components/Blog/BlogCard';
import EventCard from '../../components/Event/EventCard';
import NoticeCard from '../../components/Notice/NoticeCard';
import PageHeading from '../../components/PageHeading';

function MissionVision() {
  return (
    <div>
      <PageHeading>
        <div className="h1">Mission And Vision</div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/home" className="hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-600">Mission And Vision</li>
          </ul>
        </div>
      </PageHeading>
      <section className="w-full flex mt-8">
        <main className="w-3/4 px-8 lg:px-28">
          <h1 className="h1 text-left">MISSION</h1>
          <p className="p text-justify text-lg">
            Our mission is to produce highly skilled manpower, visionary leaders
            and enlightened citizens by imparting high quality education through
            useful research. We are committed to develop human capital by
            sharpening creative thinking. Besides creation and diffusion of
            knowledge, our mission includes promotion of humanism and peace
            through ethical education. As a part of social component, we
            endeavour to induce changes for betterment of the society as a whole
            through educational and public services.
          </p>
          <h1 className="h1 text-left">VISION</h1>

          <p className="p text-justify text-lg">
            Our vision is to become one of the leading educational institutions
            in the country and a centre of excellence in primary and secondary
            education level in the world. We believe to introduce new programs
            to improve quality of education and review performances to identify
            opportunities for continual improvement. We aim to dedicate the
            highest standards of ethical behaviour, innovation, customer focus
            and a management-systems perspective which drives continuous
            improvement in all that we do.
          </p>
        </main>
        <aside className="w-1/4">
          <NoticeCard />
          <EventCard />
          <BlogCard />
        </aside>
      </section>
    </div>
  );
}

export default MissionVision;
