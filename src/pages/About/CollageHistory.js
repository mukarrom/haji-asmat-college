import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../Blog/BlogCard';
import EventCard from '../Event/EventCard';
import NoticeCard from '../Notice/NoticeCard';
import PageHeading from '../../components/PageHeading';
import useArticles from '../../hooks/useArticles';

function CollageHistory() {
	const articles = useArticles('history');
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
						<li className="hover:text-yellow-600">About</li>
						<li className="hover:text-yellow-600">College History</li>
					</ul>
				</div>
			</PageHeading>
			<section className="flex w-full">
				<main className="lg:w-3/4 px-6">
					<div dangerouslySetInnerHTML={{ __html: articles[0]?.code }} />
					{/* ------- History -------- */}
					{/* <h1 className="h1 mt-8">সংক্ষিপ্ত বর্ণনা</h1>
          <p className="p text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus necessitatibus molestiae facilis ad repellendus distinctio earum unde illum. Reprehenderit sequi fuga quia cum? Ad iure eveniet optio. Nostrum, corporis? Hic laudantium quo quae ducimus molestiae, consequatur fugit cupiditate nulla quis qui facere deserunt libero aliquid facilis aut nihil eaque sequi porro nobis perspiciatis ad? Consequuntur, sit! Debitis maxime suscipit error soluta architecto enim assumenda facilis eos veritatis, culpa repudiandae, quidem, qui maiores impedit. Porro modi aut dolorum fuga quam vel ducimus, pariatur eveniet optio sequi expedita blanditiis sint labore voluptas repellendus accusamus omnis! Vitae quas sapiente, aliquam laboriosam eligendi labore, consequuntur sed saepe soluta sit, hic provident perferendis reiciendis natus a quis nemo! Perspiciatis fugiat voluptate itaque, dolore facere atque, corporis amet est obcaecati modi, sed eum! Reprehenderit nisi iure, adipisci eius culpa officia similique tempore possimus ex aperiam, nihil soluta atque suscipit commodi voluptatum dolorem aliquid ullam ea. Similique nam voluptate exercitationem voluptatem cupiditate saepe quos eum impedit adipisci enim libero sapiente molestiae repudiandae consequuntur dicta optio sunt facilis quisquam beatae, minima officia dolor odit ut atque. Pariatur quidem eaque labore vitae! Voluptas quos corporis odio tempore? Mollitia accusamus quisquam unde adipisci repellat expedita exercitationem nam beatae praesentium non?
          </p>
          <h1 className="h1">ইতিহাস</h1>
          <p className="p p text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, minus, deleniti dolor quibusdam est doloremque eligendi commodi consequatur ea eaque similique soluta magnam corporis tempore. Facere necessitatibus aut dolorum doloremque quae beatae, inventore maxime? Facere exercitationem quisquam suscipit modi sequi eos dicta eius. Ipsum omnis quibusdam, facilis blanditiis odio atque maxime eius esse pariatur minima ex assumenda, voluptatibus officia repellendus iste! Sunt odit odio sed minima, impedit eveniet vel? Quas ad, ipsa quod, quam fugiat libero voluptate excepturi voluptatem voluptates perspiciatis dolorem minima autem veritatis culpa, eius ex hic rerum reiciendis modi itaque illum. Reiciendis, quam tempora optio voluptates nobis blanditiis eos atque esse earum quos minus non animi modi fugit numquam illo adipisci eveniet repudiandae pariatur quo nemo quisquam sunt. Nulla maiores debitis nostrum unde ipsum necessitatibus mollitia incidunt possimus qui beatae cum, cumque in quidem est a consectetur magnam veritatis vel autem dolorum nihil eveniet! Quis earum libero quia, iure sunt facilis porro eligendi! Corporis placeat ex exercitationem modi, nihil quod in omnis illum fugiat possimus recusandae sit culpa optio molestias eum voluptate facilis quos beatae, nisi perferendis molestiae. Totam, fuga. Dicta, sint reprehenderit magnam veniam velit laudantium maxime ex voluptatibus quas a, minima impedit ut praesentium dolores eligendi ea tempore aut quaerat. Alias sint repellat dolorem aut, esse in sapiente amet doloribus deserunt mollitia expedita, animi harum, ducimus aperiam voluptas. Nam, autem ducimus? Culpa, ipsa asperiores delectus maiores cumque, minus voluptatum rerum magnam accusamus in at voluptatem natus praesentium consequuntur, consequatur nihil vero! Harum quod at aliquam.
          </p>
          <h1 className="h1">সংক্ষিপ্ত বর্ণনা</h1>
          <p className="p text-lg text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo unde voluptatum libero. Ipsa sit quasi fuga id iure tenetur illum, molestias magni. Aperiam magnam error, veniam impedit beatae necessitatibus fugiat fuga modi mollitia. Possimus facilis assumenda, quia sit ipsum, iste odio recusandae commodi, non natus et repudiandae illo ut modi. Delectus vero at natus architecto accusantium animi corrupti blanditiis placeat voluptatibus earum, laboriosam, qui, autem eos molestiae eius. Vel quibusdam illum enim voluptatum pariatur soluta reiciendis doloribus? Quos voluptates odio temporibus incidunt reprehenderit suscipit harum, in sit, inventore molestias non quo molestiae dolorem nostrum placeat dolorum voluptas nam. Excepturi, perspiciatis.
          </p>
          <h1 className="h1">পাসের হার</h1>
          <p className="p text-lg text-justify">
            উচ্চমাধ্যমিক এ ২০২০ সালে ১৫৯ টি জিপিএ ফাইভ সহ শতভাগ পাস। স্নাতক-৯৭%,
            অনার্স-৯৯%
          </p>
          <h1 className="h1">অর্জন</h1>
          <p className="p text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat obcaecati distinctio enim eaque praesentium inventore, ad dolorem vero, ullam ipsam recusandae excepturi ratione soluta quisquam laborum? Iusto, nemo. Eum voluptas temporibus dicta consequatur dolorum porro vel voluptate voluptatum, sapiente maiores tempore nihil quo, quas, distinctio dolorem officiis ex totam voluptates!
          </p>
          <h1 className="h1">ভবিষ্যৎ পরিকল্পনা </h1>
          <p className="p text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum hic ea totam at veniam modi facilis mollitia repudiandae non quisquam labore quasi consequuntur nihil, maiores velit unde cumque, ab deserunt. Impedit fuga minima ipsa debitis tenetur odit eum corporis. Recusandae.
          </p>
          <h1 className="h1">ছাত্রীর সংখ্যা</h1>
          <p className="p text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo repellendus ad dolores exercitationem tempora inventore. Ea necessitatibus repellendus iusto modi quam velit eveniet magnam omnis id sint corporis expedita officiis, sequi labore nobis nihil eos? Velit eos reprehenderit iste obcaecati quia a laudantium voluptatum animi nobis nihil amet debitis culpa, quos autem voluptatibus in atque dolore itaque quaerat commodi necessitatibus laborum rem ex? Qui nobis atque consectetur eius. Ex aspernatur consequatur itaque eius! Dolores sunt explicabo illo, rem sed, sequi quas nisi dolor fugit eius nesciunt magni quibusdam facilis provident voluptatum distinctio dignissimos sit nihil deleniti exercitationem vitae! Dicta natus dignissimos veniam repellat, nesciunt corporis animi ipsam dolorum voluptatem laborum ad. Voluptatem tempora non cupiditate laborum ut quos placeat.
          </p> */}
				</main>
				<aside className="w-1/4 hidden lg:block">
					<div className="">
						<NoticeCard />
						<EventCard />
						<BlogCard />
					</div>
				</aside>
			</section>
		</div>
	);
}

export default CollageHistory;
