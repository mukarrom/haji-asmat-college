import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import PageHeading from '../../components/PageHeading';
import useGetData from '../../hooks/useGetData';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import ConfirmModal from '../../components/Modal/ConfirmModal';

function NoticeDetails() {
    const [modal, setModal] = useState('close');
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const [isLoading, error, data, refetch] = useGetData('notice', id);
    if (isLoading) return <Loading />;
    if (error) return `An error has occurred: ${error.message}`;

    console.log(data);
    if (user) {
        if (adminLoading) return <Loading />;
    }
    return (
        <section>
            <PageHeading>
                <div className="h1">Notice</div>
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
                                    <Link to={`../settings/notice/update/${id}`}
                                          className="btn btn-outline btn-success btn-xs"
                                    >
                                        Update
                                    </Link> :
                                    <Link to="/notice" className="hover:text-yellow-600">
                                        Notice
                                    </Link>
                            }
                        </li>
                        {/* The button to open modal */}
                        {
                            admin ?
                                <li>
                                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                                    <label onClick={() => setModal('open')} htmlFor="confirm-modal"
                                           className="btn btn-outline btn-error btn-xs"
                                    >
                                        Delete
                                    </label>
                                </li> : null
                        }
                    </ul>
                </div>
            </PageHeading>
            {/* ------------- Open confirm modal ----------------*/}
            <ConfirmModal title={data?.title} id={data?._id} setModal={setModal} dynamic="notice" refetch={refetch} />
            {/* ------------- Open confirm modal ----------------*/}
            <div className="w-full lg:max-w-6xl flex justify-center">
                <main className="w-full lg:max-w-3xl">
                    <h1 className="text-3xl text-center font-semibold text-gray-700 my-4">{data.title}</h1>
                    <h5>{new Date(data?.dateTime).toDateString()}</h5>
                    <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: data?.notice }} />
                </main>
            </div>
        </section>
    );
}

export default NoticeDetails;
