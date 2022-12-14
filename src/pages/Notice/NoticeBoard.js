/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { FcCalendar } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../components/Loading';
import NoticeUpdateModal from './NoticeUpdateModal';

function NoticeBoard({ data }) {
    const [currentNotice, setCurrentNotice] = useState(null);
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if (user) {
        if (adminLoading) return <Loading />;
    }
    console.log(admin);
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <tbody>
                    {/* <!-- row 1 --> */}
                    {data?.map((notice) => (
                        <tr key={notice?._id} className="hover">
                            <td className=""><FcCalendar className="text-4xl" /></td>
                            <td>{new Date(notice?.dateTime).toDateString()}</td>
                            <td><Link to={`/notice/${notice?._id}`}>{notice?.title}</Link></td>
                            {/* <td> */}
                            {/*    <Link to={`/notice/${_id}`} className="text-primary hover:text-accent text-xl">Read */}
                            {/*        more... */}
                            {/*    </Link> */}
                            {/* </td> */}
                            {
                                admin && <>
                                    <td>
                                        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                                        <label
                                            htmlFor="notice-update"
                                            onClick={() => setCurrentNotice(notice)}
                                            className="btn btn-xs"
                                        >update
                                        </label>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-xs btn-error">delete</button>
                                    </td>
                                         </>
                            }

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            {
                currentNotice ? <NoticeUpdateModal currentNotice={currentNotice} /> : null
            }
        </div>
    );
}

export default NoticeBoard;
