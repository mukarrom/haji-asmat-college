import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../../components/Blog/BlogCard';
import EventCard from '../../components/Event/EventCard';
import NoticeCard from '../../components/Notice/NoticeCard';
import PageHeading from '../../components/PageHeading';

function VoiceOfPrincipal() {
  return (
    <div>
      <PageHeading>
        <div className="h1">Voice of Principal</div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/home" className="hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-600">Voice Of Principal</li>
          </ul>
        </div>
      </PageHeading>
      <section className="w-full flex mt-8">
        <main className="w-3/4 px-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbmNpcGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="float-left mr-4 mb-2 w-80 h-96"
            />
            <h2 className="h2 text-left">Voice Of Principal</h2>
            <p className="p text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              tempore suscipit, fugit non laboriosam dolorum facere nulla ullam
              sit explicabo eaque nemo asperiores est illum fuga doloremque
              assumenda a esse accusantium numquam temporibus quisquam
              perspiciatis. At illum ipsum mollitia. Est voluptatibus
              laboriosam, fuga recusandae doloribus a debitis soluta, sapiente
              numquam tenetur quo architecto inventore obcaecati quae nisi,
              distinctio aliquid! Assumenda nisi, facilis aliquid neque
              blanditiis cupiditate itaque excepturi soluta? Consequatur,
              corporis, odio voluptatibus modi excepturi repellendus aut nam ea
              quas minus totam obcaecati exercitationem! In exercitationem,
              accusantium, quis ratione beatae voluptates, temporibus mollitia
              quo rerum excepturi sed! Nemo numquam vero, adipisci sapiente
              magnam ducimus omnis, officiis voluptas aliquam veniam tempora
              porro recusandae fugit soluta rerum? Corrupti tempora magnam ex
              dolores vitae laudantium ratione praesentium labore ducimus, rerum
              quos maiores totam dolorem, cumque repudiandae? Expedita atque non
              explicabo, necessitatibus quibusdam officia. Porro, magni
              consequuntur fugit eaque ex facere dolores tempora numquam?
            </p>
            <p className="p text-justify text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              fugit? Iusto sit saepe ipsam ex! Suscipit asperiores harum
              voluptate ex a, maiores quasi facilis dolorum. Aperiam dolorem id
              veritatis. Molestias culpa est voluptas dolorem voluptatum
              quisquam? Vel voluptatum laudantium numquam excepturi eaque illum
              nihil exercitationem sed temporibus? Molestias animi quod iusto
              debitis magnam, ut molestiae blanditiis tempore eaque enim
              suscipit nisi quae aliquid dolorem vitae vero facere atque
              accusamus provident earum aliquam quaerat amet dignissimos
              consectetur? Adipisci ducimus dolore quia dolores fugiat amet
              culpa velit nihil, minima quasi nobis placeat optio repellat
              mollitia, voluptate corrupti quos ut sed hic tenetur.
            </p>
            <p className="p text-justify text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex cum,
              nostrum saepe dolore itaque aliquam omnis minima molestiae iste
              natus odit vero eveniet modi deleniti laboriosam nesciunt, dicta
              consequatur ducimus harum, suscipit a animi illo! In fugit esse
              labore pariatur at asperiores dolore animi nam, nostrum ea
              deserunt incidunt omnis similique, ad voluptatem. Minima numquam
              ipsum dolorum facere qui harum maxime cupiditate doloremque, fugit
              dolores nostrum tempore eveniet accusamus animi esse. Maxime
              obcaecati accusantium fuga ratione ipsam dolorum soluta voluptatum
              consequatur quos numquam tenetur, modi, dolores sed perferendis
              facilis veritatis id rerum atque, veniam eaque sequi vel
              repellendus. Vitae praesentium maiores iure assumenda
              exercitationem obcaecati neque voluptates labore quas quod.
            </p>
          </div>
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

export default VoiceOfPrincipal;
