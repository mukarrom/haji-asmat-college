import React from 'react';
import {Link} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import BlogCard from '../Blog/BlogCard';
import EventCard from '../Event/EventCard';
import NoticeCard from '../Notice/NoticeCard';
import PageHeading from '../../components/PageHeading';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useGetFirstData from '../../hooks/useGetFirstData';
import Footer from "../../components/Footer";

function CollageHistory() {
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const [isLoading, error, data] = useGetFirstData('history');
  if (isLoading) return <Loading/>;
  if (error) return `An error has occurred: ${error.message}`;
  if (user) {
    if (adminLoading) return <Loading/>;
  }
  // console.log(data);
  return (
    <div className="bg-base-100 dark:text-white">
      <PageHeading>
        <div className="h1">{data?.title}</div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/home" className="hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-600">
              {
                admin ?
                  <Link to={`../settings/about/history/${data?._id}`}
                        className="btn btn-outline btn-success btn-xs"
                  >
                    Update
                  </Link> :
                  <Link to="/notice" className="hover:text-yellow-600">
                    Notice
                  </Link>
              }
            </li>
            <li className="hover:text-yellow-600">College History</li>
          </ul>
        </div>
      </PageHeading>
      <section className="flex w-full">
        <main className="lg:w-3/4 px-6">
          <div dangerouslySetInnerHTML={{__html: data?.article}}/>

        </main>
        <aside className="w-1/4 hidden lg:block">
          <div className="">
            <NoticeCard/>
            <EventCard/>
            <BlogCard/>
          </div>
        </aside>
      </section>
      <Footer/>
    </div>
  );
}

export default CollageHistory;
