import React, {useEffect, useState} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../components/Loading";
import ConfirmModal from "../../components/Modal/ConfirmModal";
import {useQuery} from "@tanstack/react-query";

const GovBodyData = () => {
  const [bodies, setBodies] = useState([]);
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
  useEffect(() => {
    setBodies(data?.slice(0, 3))
  }, [data])
  if (isLoading) return <Loading/>;
  if (error) return `An error has occurred: ${error.message}`;
  if (user) {
    if (adminLoading) return <Loading/>;
  }
  return (
    <main
      className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      {
        bodies?.map(body => (
          <div className="card bg-base-100 shadow-xl">
            <figure><img src={body?.image} alt="Shoes"/></figure>
            <div className="card-body flex-grow-0">
              <h2 className="text-2xl font-bold text-center">
                {body?.name}
                {/*<div className="badge badge-secondary">NEW</div>*/}
              </h2>
              <p className="text-gray-400 mt-2 hover:text-blue-500 text-center">{body?.email}</p>
              <p dangerouslySetInnerHTML={{__html: body?.about}}/>
              {
                admin ? <div className="card-actions justify-end">
                  <button className="badge badge-outline badge-success hover:btn-success hover:text-white">Update
                  </button>
                  <label
                    className="cursor-pointer badge badge-outline badge-error hover:btn-error hover:text-white"
                    htmlFor="confirm-modal"
                    // className="cursor-pointer"
                    onClick={() => {
                      setModal('open')
                      setModalData(body)
                    }
                    }
                  >Delete</label>
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
  );
};

export default GovBodyData;