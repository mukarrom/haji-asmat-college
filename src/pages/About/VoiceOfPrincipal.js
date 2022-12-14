import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import BlogCard from '../Blog/BlogCard';
import EventCard from '../Event/EventCard';
import NoticeCard from '../Notice/NoticeCard';
import PageHeading from '../../components/PageHeading';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useGetFirstData from '../../hooks/useGetFirstData';

function VoiceOfPrincipal() {
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const [isLoading, error, data] = useGetFirstData('principal');
    if (isLoading) return <Loading />;
    if (error) return `An error has occurred: ${error.message}`;
    if (user) {
        if (adminLoading) return <Loading />;
    }
    return (
        <div>
            <PageHeading>
                <div className="h1">{data?.title}</div>
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <Link to="/home" className="hover:text-yellow-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            {
                                admin ?
                                    <Link to={`../settings/about/principal/${data?._id}`}
                                          className="btn btn-outline btn-success btn-xs"
                                    >
                                        Update
                                    </Link> :
                                    <Link to="/notice" className="hover:text-yellow-600">
                                        Notice
                                    </Link>
                            }
                        </li>
                        <li className="hover:text-yellow-600">Voice Of Principal</li>
                    </ul>
                </div>
            </PageHeading>
            <section className="w-full flex mt-8">
                <main className="lg:w-3/4 px-6">
                    <div dangerouslySetInnerHTML={{ __html: data?.article }} />
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

export default VoiceOfPrincipal;
