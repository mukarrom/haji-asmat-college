import React from 'react';
import {Link} from "react-router-dom";
import {FaEdit} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../components/Loading";

function Blog({b, setBlog, setModal}) {
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  if (user && adminLoading) return <Loading/>;
  return (
    <div key={b?._id} className="p-4 md:w-1/3 bg-base-100 dark:text-white">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        {b?.image ? (
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={b?.image}
            alt="b"
          />
        ) : null}
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {b?.category}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 dark:text-white mb-3">
            {b?.title}
          </h1>
          {/* some text of articles */}
          <p className="leading-relaxed mb-3">
                        <span
                          dangerouslySetInnerHTML={{__html: b?.article.slice(0, 200),}}
                        />
          </p>
          <div className="flex items-center flex-wrap ">
            {/* Go to details of this blog link */}
            <Link
              to={`/blog/${b?._id}`}
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
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
                <path d="M5 12h14"/>
                <path d="M12 5l7 7-7 7"/>
              </svg>
            </Link>
            {/*  Update or delete this blog */}
            {admin ? (
              <>
                                <span
                                  className="text-success mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-md pr-3 py-1 border-r-2 border-gray-200">
                                    <Link
                                      to={`../settings/blog/update/${b?._id}`}
                                      className="inline-flex gap-1"
                                    >
                                        <FaEdit/>
                                        <span>Update</span>
                                    </Link>
                                </span>
                <button
                  onClick={() => setBlog(b)}
                  className="text-error inline-flex items-center leading-none text-md">
                  <label
                    onClick={() => setModal('open')}
                    htmlFor="confirm-modal"
                    className="inline-flex gap-1 cursor-pointer"
                  >
                    <MdDeleteForever/>
                    <span>Delete</span>
                  </label>
                </button>
              </>
            ) : null}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;