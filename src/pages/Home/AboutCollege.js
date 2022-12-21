import React from 'react';
import college from '../../assets/college.jpg';
import Loading from '../../components/Loading';
import useGetFirstData from '../../hooks/useGetFirstData';

function AboutCollege() {
  const [isLoading, error, data] = useGetFirstData('history');
  if (isLoading) return <Loading/>;
  if (error) return `An error has occurred: ${error.message}`;

  // if (error) return `An error has occurred: ${error.message}`;
  const more =
    '<a href="/history" class="font-bold text-purple-900">(more...)</a>';
  // console.log(short);
  return (
    <div className="bg-base-100 dark:text-white">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={college}
            className="hidden lg:block w-96 max-h-96 rounded-lg shadow-2xl"
            alt=""
          />

          <div>
            {/* <h1 className="h2 text-primary text-bold">{articles[0]?.title}</h1> */}
            <span dangerouslySetInnerHTML={{__html: `${data?.shortDescription} ${more}`}}/>
          </div>
        </div>
      </div>
      <div className="divider gap-1"/>
    </div>
  );
}

export default AboutCollege;
