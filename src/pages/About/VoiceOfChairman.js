import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../Blog/BlogCard';
import EventCard from '../Event/EventCard';
import NoticeCard from '../Notice/NoticeCard';
import PageHeading from '../../components/PageHeading';
import useArticles from '../../hooks/useArticles';

function VoiceOfChairman() {
	const articles = useArticles('chairman');
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
						<li className="hover:text-yellow-600">Voice Of Chairman</li>
					</ul>
				</div>
			</PageHeading>
			<section className="w-full flex mt-8">
				<main className="lg:w-3/4 px-6">
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

export default VoiceOfChairman;
