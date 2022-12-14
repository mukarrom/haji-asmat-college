import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircle, MdDeleteForever } from 'react-icons/md';
import { FcCalendar } from 'react-icons/fc';
import { FaEdit } from 'react-icons/fa';
import EventCard from '../Event/EventCard';
import MostRead from './MostRead';
import PageHeading from '../../components/PageHeading';
import BlogCard from '../Blog/BlogCard';
import useGetData from '../../hooks/useGetData';
import Loading from '../../components/Loading';
import useAdmin from '../../hooks/useAdmin';
import ConfirmModal from '../../components/Modal/ConfirmModal';

function Notices() {
    const [modal, setModal] = useState('close');
    const [modalData, setModalData] = useState(null);
    const [isLoading, error, data, refetch] = useGetData('notice');
    const [admin, adminLoading] = useAdmin();
    if (isLoading) return <Loading />;
    // if (adminLoading) return <Loading />;
    if (error) return `An error has occurred: ${error.message}`;
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
            {/*= ============ Add notice button ============== */}
            {
                admin ?
                    <div className="flex justify-center items-center my-6">
                        <Link to="../settings/notice/add" className="btn btn-primary"><MdAddCircle
                            className="text-2xl"
                        /> &nbsp; Add new
                            notice
                        </Link>
                    </div> : null
            }
            {/*---------------*/}
            <section className="w-full flex mt-8">
                <main className="lg:w-3/4 px-6">
                    {/*
                        "_id": "6392012bbf3bdae5f50f772f",
                        "title": "DatePicker",
                        "dateTime": "2022-12-08T15:22:02.082Z",
                        "notice": "<p>REact Date picker</p>",
                        "uploadedBy": "mukarrom.hosain.1@gmail.com",
                        "uploadedTime": "8/12/2022 21.22.19"
                    */}
                    {
                        data?.map(notice => (
                            <div
                                className="flex items-center gap-2 border border-1 rounded-md p-4 bg-white hover:bg-gray-200"
                            >
                                <Link
                                    to={`/notice/${notice?._id}`}
                                    className="flex justify-between items-center gap-3 w-full"
                                >
                                    <div className="inline-flex items-center gap-2"><FcCalendar className="text-4xl" />
                                        <span>{new Date(notice?.dateTime).toDateString()}</span>
                                    </div>
                                    <div className="text-lg font-semibold text-primary">{notice?.title}</div>
                                    {admin ? <Link
                                        to={`../settings/notice/update/${notice?._id}`}
                                        className=""
                                    >
                                        <FaEdit className="text-primary text-4xl" />
                                             </Link> : null}
                                </Link>
                                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                                {admin ? <label
                                    htmlFor="confirm-modal" className="cursor-pointer"
                                    onClick={() => {
                                        setModal('open');
                                        setModalData(notice)
                                    }
                                    }
                                >
                                    <MdDeleteForever className="text-red-700 text-4xl" />
                                         </label> : null}
                                {
                                    modal === 'open' ?
                                        <ConfirmModal
                                            title={modalData?.title}
                                            id={modalData?._id}
                                            setModal={setModal}
                                            dynamic="notice"
                                            refetch={refetch}
                                        /> : null
                                }

                            </div>
                        ))
                    }
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

export default Notices;
