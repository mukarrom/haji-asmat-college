import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {MdAddCircle, MdDeleteForever} from 'react-icons/md';
import {FaEdit} from 'react-icons/fa';
import PageHeading from '../../components/PageHeading';
import useGetData from '../../hooks/useGetData';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../components/Loading';
import ConfirmModal from '../../components/Modal/ConfirmModal';
import Footer from '../../components/Footer';

function Gallery() {
    const [modal, setModal] = useState('close');
    const [modalData, setModalData] = useState({});
    const [isLoading, error, data, refetch] = useGetData('gallery');
    const [admin, adminLoading] = useAdmin();
    if (isLoading) return <Loading/>;
    // if (adminLoading) return <Loading />;
    if (error) return `An error has occurred: ${error.message}`;
    return (
      <div className="">
          <PageHeading>
              <div className="h1">Gallery</div>
              <div className="text-sm breadcrumbs">
                  <ul>
                      <li>
                          <Link to="/home" className="hover:text-yellow-600">
                              Home
                          </Link>
                      </li>
                      <li className="hover:text-yellow-600">Gallery</li>
                  </ul>
              </div>
          </PageHeading>
          {/* page heading end */}
          {/*= ============ Add notice button ============== */}
          {
              admin ?
                <div className="flex justify-center items-center mt-6">
                    <Link to="../settings/gallery/add" className="btn btn-primary"><MdAddCircle
                      className="text-2xl"
                    /> &nbsp; Add new
                        Image
                    </Link>
                </div> : null
          }
          {/*---------------*/}
          <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-col text-center w-full mb-20">
                      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                          Gallery of Hazi Asmat Govt. College, Bhairab, Kishorganj
                      </h1>
                      {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> */}
                      {/*    Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical */}
                      {/*    gentrify, subway tile poke farm-to-table. Franzen you probably */}
                      {/*    haven't heard of them man bun deep jianbing selfies heirloom. */}
                      {/* </p>  */}
                  </div>
                  <div className="flex flex-wrap -m-4">
                      {
                          data?.map(image => (
                            <div key={image?._id} className="lg:w-1/3 sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img
                                      alt="gallery"
                                      className="absolute inset-0 w-full h-full object-cover object-center"
                                      // src="https://dummyimage.com/606x366"
                                      src={image?.image}
                                    />
                                    <div
                                      className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                                    >
                                        {/* admin delete update */}
                                        <div className="flex">
                                            {admin ? <Link
                                              to={`../settings/gallery/update/${image?._id}`}
                                              className=""
                                            >
                                                <FaEdit className="text-primary text-3xl"/>
                                            </Link> : null}
                                            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                                            {admin ? <label
                                              htmlFor="confirm-modal"
                                              className="cursor-pointer"
                                              onClick={() => {
                                                  setModal('open')
                                                  setModalData(image)
                                              }
                                              }
                                            >
                                                <MdDeleteForever className="text-red-700 text-3xl"/>
                                            </label> : null}

                                        </div>
                                        <h2
                                          className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                            {
                                                image?.title
                                            }
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            {image?.category}
                                        </h1>
                                        <p className="leading-relaxed">
                                            {
                                                image?.description
                                            }
                                        </p>
                                    </div>
                                </div>
                                {
                                    modal === 'open' ?
                                      <ConfirmModal
                                        title={modalData?.title}
                                        id={modalData?._id}
                                        setModal={setModal}
                                        refetch={refetch}
                                        dynamic="gallery"
                                      /> : null
                                }
                            </div>
                          ))
                      }
                  </div>
              </div>
          </section>
          <Footer/>
      </div>
    );
}

export default Gallery;
