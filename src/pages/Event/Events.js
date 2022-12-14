import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../Blog/BlogCard';
import EventCard from './EventCard';
import NoticeCard from '../Notice/NoticeCard';
import PageHeading from '../../components/PageHeading';
import Loading from '../../components/Loading';
import useGetData from '../../hooks/useGetData';
import {MdAddCircle} from "react-icons/md";
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import {FcCalendar} from "react-icons/fc";

function Events() {
    const [modal, setModal] = useState('close');
    const [modalData, setModalData] = useState({})
    const [isLoading, error, data, refetch] = useGetData('events');
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if (isLoading) return <Loading />;
    if (user && adminLoading) return <Loading />;
    if (error) return `An error has occurred: ${error.message}`;
    /*
      "_id": {"$oid": "638f381ddd2ff452158701d7"},
      "image": "https://akjdjflad",
      "article": "<p>my event data 2</p>",
      "category": "event 2",
      "heading": "test 2",
      "time: "5/12/2022 17.16.36",
      "postedOn": "5/12/2022 17.16.36",
      "posterEmail": "mukarrom.hosain.1@gmail.com"
      "updatedOn": "",
      "updaterEmail": ""
     */
    console.log(data);
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
            {/*= ============= Add Blog button ============== */}
            {admin ? (
                <div className="flex justify-center items-center my-6">
                    <Link to="../settings/event/add" className="btn btn-primary">
                        <MdAddCircle className="text-2xl" /> &nbsp; Add new notice
                    </Link>
                </div>
            ) : null}
            {/*= ============= Add Blog button ends ============== */}
            {/* main */}
            <section className="w-full flex mt-8">
                <main className="lg:w-3/4 px-6">
                    {/* event starts */}
                    <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="-my-8 divide-y-2 divide-gray-100">
                                {
                                    data?.map(event => (
                                        <div key={event._id}>
                                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                                  <span className="font-semibold title-font text-gray-700">
                                                    {/*{event?.category}*/}
                                                      <FcCalendar className="text-8xl" />
                                                  </span>
                                                    <span
                                                        className="mt-1 text-gray-500 text-sm"
                                                    >{new Date(event?.actionTime).toDateString()}
                                                    </span>
                                                </div>
                                                <div className="md:flex-grow">
                                                    <h2 className="text-xl font-medium title-font mb-2">{event?.category}</h2>
                                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                                                        {event?.title}
                                                    </h2>
                                                    {/*<p*/}
                                                    {/*    dangerouslySetInnerHTML={{ __html: event?.article }}*/}
                                                    {/*    className="leading-relaxed"*/}
                                                    {/*/>*/}
                                                    {/* eslint-disable-next-line no-underscore-dangle */}
                                                    <Link to={`/event/${event?._id}`}
                                                          className="text-indigo-500 inline-flex items-center mt-4"
                                                    >
                                                        Learn More
                                                        <svg
                                                            className="w-4 h-4 ml-2"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="M12 5l7 7-7 7" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                            <hr className="h-[3px] bg-gray-300" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                    {/*    event ends   */}
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
