import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loading';
import PageHeading from '../../../components/PageHeading';
import useGetData from '../../../hooks/useGetData';

function TestPreview() {
    const [isLoading, error, data] = useGetData('test');
    if (isLoading) return <Loading />;
    if (error) return `An error has occurred: ${error.message}`;

    // {
    //     "_id": {
    //     "$oid": "6393e36f3fe5a33d22c6503f"
    // },
    //     "heading": "Test Heading",
    //     "category": "Test category",
    //     "actionTime": "2022-12-20T01:12:26.000Z",
    //     "image": "https://i.ibb.co/D7mhqHC/31-of-the-best-class-presentation-tips-for-students-blog-cover.jpg",
    //     "article": "<p style=\"text-align: center;\"><span style=\"font-size: 30px; font-family: Impact, Charcoal, sans-serif;\">My test articles</span></p><hr><p style=\"text-align: justify;\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\nnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\ntenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\nquia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \nsapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\nrecusandae alias error harum maxime adipisci amet laborum. Perspiciatis \nminima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit \nquibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur \nfugiat, temporibus enim commodi iusto libero magni deleniti quod quam \nconsequuntur! Commodi minima excepturi repudiandae velit hic maxime\ndoloremque. Quaerat provident commodi consectetur veniam similique ad \nearum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo \nfugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore \nsuscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium\nmodi minima sunt esse temporibus sint culpa, recusandae aliquam numquam \ntotam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam \nquasi aliquam eligendi, placeat qui corporis!</p><p style=\"text-align: justify;\"><em style=\"font-family: Impact, Charcoal, sans-serif;\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\noptio,</em></p><p style=\"text-align: justify;\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\nnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\ntenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\nquia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \nsapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\nrecusandae alias error harum maxime adipisci amet laborum. Perspiciatis \nminima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit \nquibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur \nfugiat, temporibus enim commodi iusto libero magni deleniti quod quam \nconsequuntur! Commodi minima excepturi repudiandae velit hic maxime\ndoloremque. Quaerat provident commodi consectetur veniam similique ad \nearum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo \nfugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore \nsuscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium\nmodi minima sunt esse temporibus sint culpa, recusandae aliquam numquam \ntotam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam \nquasi aliquam eligendi, placeat qui corporis!</p>",
    //     "posterEmail": "mukarrom.hosain.1@gmail.com",
    //     "postedOn": "10/12/2022 07.39.58",
    //     "updaterEmail": "",
    //     "updatedOn": ""
    // }
    return (
        <div>
            <PageHeading>
                <div className="h1">Test</div>
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <Link to="/home" className="hover:text-yellow-600">
                                Home
                            </Link>
                        </li>
                        <li className="hover:text-yellow-600">Test Settings</li>
                        <li className="hover:text-yellow-600">Preview</li>
                    </ul>
                </div>
            </PageHeading>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            data?.map(test => (
                                // eslint-disable-next-line no-underscore-dangle
                                <div key={test?._id} className="p-4 md:w-1/3">
                                    <div
                                        className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
                                    >
                                        {
                                            test?.image ?
                                                <img
                                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                                    src={test?.image}
                                                    alt="blog"
                                                /> : null
                                        }
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                {test?.category}
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {test?.heading}
                                            </h1>
                                            {/* some text of articles */}
                                            <p className="leading-relaxed mb-3">
                                                <span dangerouslySetInnerHTML={{ __html: test?.article.slice(0, 200) }} />
                                            </p>
                                            <div className="flex items-center flex-wrap ">
                                                {/* eslint-disable-next-line no-underscore-dangle */}
                                                <Link to={`/blog/${test?._id}`}
                                                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                                                >Learn More <svg
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14" />
                                                    <path d="M12 5l7 7-7 7" />
                                                            </svg>
                                                </Link>
                                                {/** ******** Watched count  *********** */}
                                                <Link to={`../update/${test?._id}`}
                                                      className="btn btn-xs btn-success"
                                                >Update
                                                </Link>
                                                <button className="btn btn-xs btn-error">Delete</button>
                                                {/*                            <span */}
                                                {/*                                className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200" */}
                                                {/*                            > */}
                                                {/* <svg */}
                                                {/*    className="w-4 h-4 mr-1" */}
                                                {/*    stroke="currentColor" */}
                                                {/*    strokeWidth="2" */}
                                                {/*    fill="none" */}
                                                {/*    strokeLinecap="round" */}
                                                {/*    strokeLinejoin="round" */}
                                                {/*    viewBox="0 0 24 24" */}
                                                {/* > */}
                                                {/* <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /> */}
                                                {/* <circle cx="12" cy="12" r="3" /> */}
                                                {/* </svg> */}
                                                {/* 1.2K */}
                                                {/*                            </span> */}

                                                {/** **** comments ***** */}
                                                {/*                            <span */}
                                                {/*                                className="text-gray-400 inline-flex items-center leading-none text-sm" */}
                                                {/*                            > */}
                                                {/* <svg */}
                                                {/*    className="w-4 h-4 mr-1" */}
                                                {/*    stroke="currentColor" */}
                                                {/*    strokeWidth="2" */}
                                                {/*    fill="none" */}
                                                {/*    strokeLinecap="round" */}
                                                {/*    strokeLinejoin="round" */}
                                                {/*    viewBox="0 0 24 24" */}
                                                {/* > */}
                                                {/*    <path */}
                                                {/*        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" */}
                                                {/*    /> */}
                                                {/* </svg> */}
                                                {/* 6 */}
                                                {/*                            </span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </section>

        </div>
    );
}

export default TestPreview;
