import React from 'react';
import useNoticeFetch from '../../hooks/useNoticeFetch';

function MarqueeText() {
  const [notice] = useNoticeFetch();
  return (
    <div className="flex">
      {notice.map((heading) => (
        <p>
          ::
          <a href=" " className="text-secondary mx-5">{heading.heading}</a>
        </p>
      ))}
    </div>
  );
}

export default MarqueeText;
