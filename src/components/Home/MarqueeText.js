import React from "react";
import useNoticeFetch from "../../hooks/useNoticeFetch";

const MarqueeText = () => {
  const [notice] = useNoticeFetch();
  return (
    <div className="flex">
      {notice.map(heading=>(
        <p>:: <a href=" " className="text-secondary mx-5">{heading.heading}</a></p>
      ))}
      {/* <p className=""> সাধারণ ছুটি: ২১ ফেব্রুয়ারি সোমবার (০৮ ফাল্গুন) শহীদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবস :: ১৭ মার্চ বৃহস্পতিবার (০৩ চৈত্র) বঙ্গবন্ধু শেখ মুজিবর রহমান-এর জন্ম দিবস :: ২৬ মার্চ শনিবার (১২ চৈত্র) স্বাধীনতা ও জাতীয় দিবস। *২৯ এপ্রিল, শুক্রবার (১৬ বৈশাখ) জুমাতুল বিদা </p> */}
    </div>
  );
};

export default MarqueeText;
