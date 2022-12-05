import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../Blog/BlogCard';
import EventCard from '../Event/EventCard';
import NoticeCard from '../Notice/NoticeCard';
import PageHeading from '../../components/PageHeading';
import useArticles from '../../hooks/useArticles';

function MissionVision() {
	const articles = useArticles('mission');
	return (
		<div>
			<PageHeading>
				<div className="h1">{articles[0]?.title}</div>
				<div className="text-sm breadcrumbs">
					<ul>
						<li>
							<Link to="/home" className="hover:text-yellow-600">
								Home
							</Link>
						</li>
						<li className="hover:text-yellow-600">Mission And Vision</li>
					</ul>
				</div>
			</PageHeading>
			<section className="w-full flex mt-8">
				<main className="lg:w-3/4 px-8 lg:px-28">
					<div dangerouslySetInnerHTML={{ __html: articles[0]?.code }} />
				</main>
				<aside className="w-1/4 hidden lg:block">
					<NoticeCard />
					<EventCard />
					<BlogCard />
				</aside>
			</section>
		</div>
	);
}

export default MissionVision;
