import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from './Event/EventCard';
import NoticeCard from './Notice/NoticeCard';
import PageHeading from '../components/PageHeading';
import mujib from '../assets/mujib.png';
import BlogCard from './Blog/BlogCard';

function Mujib() {
  return (
    <div>
      {/* Page Heading */}
      <PageHeading>
        <div className="h1">বঙ্গবন্ধু কর্ণার</div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/home" className="hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-600">Mujib Corner</li>
          </ul>
        </div>
      </PageHeading>
      {/* Main */}
      <section className="flex w-full">
        <main className="lg:w-3/4 px-6 mt-8">
          <img src={mujib} alt="Mujib Corner" className="w-full" />
          <div className="">
            <p className="p text-lg text-justify">
              শেখ মুজিবুর রহমান (১৭ই মার্চ ১৯২০ – ১৫ই আগস্ট ১৯৭৫),
              সংক্ষিপ্তাকারে শেখ মুজিব বা বঙ্গবন্ধু, ছিলেন বাংলাদেশের প্রথম
              রাষ্ট্রপতি ও দক্ষিণ এশিয়ার অন্যতম প্রভাবশালী রাজনৈতিক ব্যক্তিত্ব।
              তিনি ভারত বিভাজন আন্দোলনে সক্রিয় অংশগ্রহণ করেন এবং পরবর্তীকালে
              পূর্ব পাকিস্তানকে স্বাধীন দেশ হিসেবে প্রতিষ্ঠার সংগ্রামে
              কেন্দ্রীয়ভাবে নেতৃত্ব প্রদান করেন। শুরুতে তিনি আওয়ামী লীগের
              সভাপতি, এরপর বাংলাদেশের প্রধানমন্ত্রী এবং পরবর্তীকালে বাংলাদেশের
              রাষ্ট্রপতির দায়িত্ব পালন করেন। পূর্ব পাকিস্তানের রাজনৈতিক
              স্বায়ত্তশাসন অর্জনের প্রয়াস এবং পরবর্তীকালে ১৯৭১ খ্রিষ্টাব্দে
              বাংলাদেশের স্বাধীনতা আন্দোলন ও বাংলাদেশের মুক্তিযুদ্ধের পেছনের
              কেন্দ্রীয় ব্যক্তিত্ব হিসেবে শেখ মুজিবুর রহমানকে সর্বাধিক
              গুরুত্বপূর্ণ চরিত্র হিসেবে কৃতিত্বের স্বীকৃতিস্বরূপ তাকে
              বাংলাদেশের “জাতির জনক” বা “জাতির পিতা” হিসেবে অভিহিত করা হয়।
              এছাড়াও তাকে প্রাচীন বাঙালি সভ্যতার আধুনিক স্থপতি ও সর্বকালের
              সর্বশ্রেষ্ঠ বাঙালি হিসেবে বিবেচনা করা হয়। জনসাধারণের কাছে তিনি
              “শেখ মুজিব” বা “শেখ সাহেব” নামে এবং তার উপাধি “বঙ্গবন্ধু” হিসেবেই
              অধিক পরিচিত। তার কন্যা শেখ হাসিনা বাংলাদেশের বর্তমান
              প্রধানমন্ত্রী। ১৯৪৭ খ্রিষ্টাব্দে ভারত বিভাগ পরবর্তী পূর্ব
              পাকিস্তানের রাজনীতির প্রাথমিক পর্যায়ে শেখ মুজিব ছিলেন তরুণ
              ছাত্রনেতা। পরবর্তীকালে তিনি আওয়ামী লীগের সভাপতি হন। সমাজতন্ত্রের
              পক্ষসমর্থনকারী একজন অধিবক্তা হিসেবে তিনি তৎকালীন পূর্ব পাকিস্তানের
              জনগোষ্ঠীর প্রতি সকল ধরনের বৈষম্যের বিরুদ্ধে আন্দোলন গড়ে তোলেন।
              জনগণের স্বাধিকার প্রতিষ্ঠার লক্ষ্যে ছয় দফা স্বায়ত্তশাসন
              পরিকল্পনা প্রস্তাব করেন, যাকে তৎকালীন পাকিস্তান সরকার একটি
              বিচ্ছিন্নতাবাদী পরিকল্পনা হিসেবে ঘোষণা করেছিল। ছয় দফা দাবির মধ্যে
              প্রধান দাবি ছিল প্রাদেশিক স্বায়ত্তশাসন, যার কারণে তিনি আইয়ুব
              খানের সামরিক শাসনের অন্যতম বিরোধী পক্ষে পরিণত হন। ১৯৬৮
              খ্রিষ্টাব্দে ভারত সরকারের সাথে যোগসাজশ ও ষড়যন্ত্রের অভিযোগে তাকে
              প্রধান আসামি করে আগরতলা মামলা দায়ের করা হয়; তবে ঊনসত্তরের
              গণঅভ্যুত্থানের কারণে তা প্রত্যাহার করে নেয়া হয়। ১৯৭০
              খ্রিষ্টাব্দের নির্বাচনে তার নেতৃত্বাধীন আওয়ামী লীগ নিরঙ্কুশ বিজয়
              অর্জন করা সত্ত্বেও তাকে সরকার গঠনের সুযোগ দেয়া হয়নি। পাকিস্তানের
              নতুন সরকার গঠন বিষয়ে তৎকালীন রাষ্ট্রপতি ইয়াহিয়া খান এবং পশ্চিম
              পাকিস্তানের রাজনীতিবিদ জুলফিকার আলী ভুট্টোর সাথে শেখ মুজিবের
              আলোচনা বিফলে যাওয়ার পর ১৯৭১ খ্রিষ্টাব্দের ২৫শে মার্চ মধ্যরাতে
              পাকিস্তান সেনাবাহিনী ঢাকা শহরে গণহত্যা চালায়। ফলশ্রুতিতে, তিনি
              বাংলাদেশের স্বাধীনতার ঘোষণা দেন। একই রাতে তাকে গ্রেফতার করে পশ্চিম
              পাকিস্তানে নিয়ে যাওয়া হয়। ব্রিগেডিয়ার রহিমুদ্দিন খানের সামরিক
              আদালত তাকে মৃত্যুদণ্ড প্রদান করলেও তা কার্যকর করা হয়নি। নয়
              মাসব্যাপী রক্তক্ষয়ী মুক্তিযুদ্ধ শেষে ১৯৭১ খ্রিষ্টাব্দের ১৬ই
              ডিসেম্বর বাংলাদেশ-ভারত যৌথ বাহিনীর কাছে পাকিস্তান সেনাবাহিনী
              আত্মসমর্পণ করার মধ্য দিয়ে বিশ্ব মানচিত্রে “বাংলাদেশ” নামক
              স্বাধীন, সার্বভৌম রাষ্ট্রের অভ্যুদয় ঘটে। ১৯৭২ খ্রিষ্টাব্দের ১০ই
              জানুয়ারি শেখ মুজিব পাকিস্তানের কারাগার থেকে মুক্ত হয়ে স্বদেশে
              প্রত্যাবর্তন করেন এবং বাংলাদেশের প্রথম রাষ্ট্রপতির দায়িত্ব গ্রহণ
              করেন। ১৯৭২ খ্রিষ্টাব্দের ১২ই জানুয়ারি তিনি সংসদীয় শাসনব্যবস্থা
              প্রবর্তন করে প্রধানমন্ত্রীর দায়িত্ব গ্রহণ করেন। মতাদর্শগতভাবে
              তিনি বাঙালি জাতীয়তাবাদ, সমাজতন্ত্র, গণতন্ত্র ও ধর্মনিরপেক্ষতায়
              বিশ্বাসী ছিলেন; যা সম্মিলিতভাবে মুজিববাদ নামে পরিচিত। এগুলোর উপর
              ভিত্তি করে সংবিধান প্রণয়ন এবং তদানুযায়ী রাষ্ট্র পরিচালনার চেষ্টা
              সত্ত্বেও তীব্র দারিদ্র্য, বেকারত্ব, সর্বত্র অরাজকতাসহ ব্যাপক
              দুর্নীতি মোকাবেলায় তিনি কঠিন সময় অতিবাহিত করেন। ক্রমবর্ধমান
              রাজনৈতিক অস্থিরতা দমনের লক্ষ্যে ১৯৭৫ খ্রিষ্টাব্দে তিনি একদলীয়
              রাজনৈতিক ব্যবস্থা প্রবর্তন করতে বাধ্য হন। এর সাত মাস পরে ১৯৭৫
              খ্রিষ্টাব্দের ১৫ই আগস্ট একদল সামরিক কর্মকর্তার হাতে তিনি সপরিবারে
              নিহত হন। ২০০৪ খ্রিষ্টাব্দে বিবিসি কর্তৃক পরিচালিত জনমত জরিপে শেখ
              মুজিবুর রহমান সর্বকালের সর্বশ্রেষ্ঠ বাঙালি হিসেবে
            </p>
          </div>
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

export default Mujib;
