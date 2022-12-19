import React, {useState} from 'react';
import {Link} from "react-router-dom";
import PageHeading from "../../components/PageHeading";
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../components/Loading";
import {MdAddCircle} from "react-icons/md";
import ConfirmModal from "../../components/Modal/ConfirmModal";
import {useQuery} from "@tanstack/react-query";

const GoverningBodies = () => {
  const [modal, setModal] = useState('close');
  const [modalData, setModalData] = useState({});
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const {isLoading, error, data, refetch} = useQuery({
    queryKey: ['gov_body'],
    queryFn: () =>
      fetch('https://mmh.cyclic.app/api/v2/dynamic', {
        method: 'GET',
        headers: {
          dynamic: 'gov_body',
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }).then(res =>
        res.json()
      )
  })
  if (isLoading) return <Loading/>;
  if (error) return `An error has occurred: ${error.message}`;
  if (user) {
    if (adminLoading) return <Loading/>;
  }
  return (
    <div>
      <PageHeading>
        <div className="h1">Governing Body</div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/home" className="hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-600">About</li>
            <li className="hover:text-yellow-600">Governing Body</li>
          </ul>
        </div>
      </PageHeading>
      {/*= ============= Add button ============== */}
      {admin ? (
        <div className="flex justify-center items-center my-6">
          <Link to="../settings/gov_body/add" className="btn btn-primary">
            <MdAddCircle className="text-2xl"/> &nbsp; নতুন যোগ করুন
          </Link>
        </div>
      ) : null}
      {/*= ============= Add button ends ============== */}
      <main
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
        {
          data?.map(body => (
            <div key={body?._id} className="card bg-base-100 shadow-xl">
              <figure><img src={body?.image} alt="Shoes"/></figure>
              <div className="card-body flex-grow-0">
                <h2 className="text-2xl font-bold text-center">
                  {body?.name}
                  {/*<div className="badge badge-secondary">NEW</div>*/}
                </h2>
                <p className="text-gray-400 mt-2 hover:text-blue-500 text-center">{body?.email}</p>
                <p dangerouslySetInnerHTML={{__html: body?.about}}/>
                {/*------- update and delete ---------*/}
                {
                  admin ? <div className="card-actions justify-end">
                    <Link
                      to={`../settings/gov_body/update/${body?._id}`}
                      className="badge badge-outline badge-success hover:btn-success hover:text-white"
                    >
                      Update
                    </Link>
                    <label
                      className="cursor-pointer badge badge-outline badge-error hover:btn-error hover:text-white"
                      htmlFor="confirm-modal"
                      onClick={() => {
                        setModal('open')
                        setModalData(body)
                      }}
                    >
                      Delete
                    </label>
                  </div> : null
                }
              </div>
            </div>
          ))
        }
        {
          modal === 'open' ?
            <ConfirmModal
              title={modalData?.name}
              id={modalData?._id}
              setModal={setModal}
              refetch={refetch}
              dynamic="gov_body"
            /> : null
        }
      </main>
    </div>
  );
};

export default GoverningBodies;