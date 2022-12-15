import React from 'react';
import useNoticeFetch from '../../hooks/useNoticeFetch';

function MarqueeText() {
  const [notice] = useNoticeFetch();
  return (
    <div className="flex">
      {notice.map((heading, index) => (
        <p key={index}>
          ::
          <a href=" " className="text-secondary mx-5">{heading.heading}</a>
        </p>
      ))}
    </div>
  );
}

export default MarqueeText;
