/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import useNoticeFetch from '../../hooks/useNoticeFetch';

function NoticeBoard() {
  const [notice] = useNoticeFetch();
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
              <th />
              <th className="hidden sm:block" />
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {notice.map(({ _id, heading, date }) => (
              <tr>
                <td>
                  <a href=" ">
                    {heading}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Published on
                      {' '}
                      {date}
                    </span>
                  </a>
                </td>
                <th className="hidden sm:block py-8">
                  <button type="button" className="btn btn-ghost btn-xs">Read more...</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* <!-- foot --> */}
          {/* <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </div>
  );
}

export default NoticeBoard;
