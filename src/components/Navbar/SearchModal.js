import React from "react";

const SearchModal = () => {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <label
        htmlFor="my-modal"
        className="modal cursor-pointer text-d-base-100"
      >
        <label className="modal-box absolute top-5" for="">
            {/* Search box */}
          <div className="form-control mb-4">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered w-full"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* end search box */}
          <h3 className="h3 font-bold">
            Input what you want to search
          </h3>
          <a href=" " className="py-4 text-secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, repellendus!
          </a>
          <hr />
          <a href=" " className="py-4 text-secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, repellendus!
          </a>
          <hr />
          <a href=" " className="py-4 text-secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, repellendus!
          </a>
          <hr />
        </label>
      </label>
      {/* <!-- Put this part before </body> tag --> */}
      {/* <input type="checkbox" id="my-modal-3" className="modal-toggle" /> */}
      {/* <div className="modal">
        <div className="modal-box  w-full bg-none sm:w-1/2 md:w-1/2 max-w-5xl absolute top-10 lg:top-6 mx-auto">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="form-control w-full">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered w-full"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SearchModal;
