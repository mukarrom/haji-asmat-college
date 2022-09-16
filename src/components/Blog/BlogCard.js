import React from 'react';
import Card from '../Card';

function BlogCard() {
  const cardHeading = <h1 className="h5 text-center py-2">Blog</h1>;
  return (
    <div>
      <Card cardHeading={cardHeading}>
        <div className="">
          <p>11.3.2022 Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <hr />
        <div className="">
          <p>11.3.2022 Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </Card>
    </div>
  );
}

export default BlogCard;
