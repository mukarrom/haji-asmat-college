import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import PageHeading from '../../components/PageHeading';
import useGetData from "../../hooks/useGetData";
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../components/Loading";
import ConfirmModal from "../../components/Modal/ConfirmModal";

/*
EventDetails data structure
1. Category
2. heading
3. date
4. article
5. image
 */
function EventDetails() {
    const [modal, setModal] = useState('close');
    const { id } = useParams();
    const [isLoading, error, data, refetch] = useGetData('events', id);
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if (isLoading) return <Loading />;
    if (user && adminLoading) return <Loading />;
    if (error) return `An error has occurred: ${error.message}`;
    // console.log(admin);

    return (
        <section>
            <PageHeading>
                <div className="h1">{id}</div>
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <Link to="/home" className="hover:text-yellow-600">
                                Home
                            </Link>
                        </li>
                        <li className="hover:text-yellow-600"><Link to="/events">Events</Link></li>
                        {admin ? <>
                            <li>
                                <Link to={`../settings/event/update/${data?._id}`}
                                      className="btn btn-outline btn-success btn-xs"
                                >
                                    Update
                                </Link>
                            </li>
                            <li>
                                {/* The button to open modal */}
                                <label onClick={() => setModal('open')} htmlFor="confirm-modal" className="btn btn-outline btn-error btn-xs">
                                    Delete
                                </label>
                            </li>
                        </> : null}
                    </ul>
                </div>
            </PageHeading>
            {/* ------------- Open confirm modal ----------------*/}
            {modal ? <ConfirmModal title={data?.title} id={data?._id} setModal={setModal} dynamic="events" refetch={refetch} /> : null}
            {/* ------------- Open confirm modal ----------------*/}
            <div className="w-full lg:max-w-6xl flex justify-center">
                <main className="w-full lg:max-w-3xl">
                    <div className="md:flex-grow">
                        {
                            data?.image ?
                                <img
                                    src={data?.image}
                                    alt=""
                                    className="w-full my-4 rounded-md"
                                /> : null
                        }

                        <h2 className="text-3xl font-medium text-gray-700 text-center title-font mb-2">
                            {data?.title}
                        </h2>
                        <div className="flex justify-between">
                            <h5 className="text-center font-semibold my-2">This is category</h5>
                            <h5 className="text-center font-semibold my-2">12/11/2022 01:18 PM</h5>
                        </div>
                        <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: data?.article }} />
                    </div>
                </main>
            </div>
        </section>
    );
}

export default EventDetails;
