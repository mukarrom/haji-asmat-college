import React from "react";
import Event from "./Event";
import News from "./News";
import Notice from "./Notice";

const NoticeEventNews = () => {
  return (
    <div className="grid grid-cols-3 mt-10 mx-auto w-full justify-evenly">
      <div className="grid justify-center mx-10">
        <button class="btn w-full  bg-crimson grid h-14 flex-grow card rounded-none place-items-center hover:bg-crimson_lighter cursor-pointer text-white">
          NOTICES
        </button>
        <div>
          <Notice></Notice>
        </div>
      </div>
      <div className="grid justify-center mx-10">
        <button class="btn w-full  bg-crimson grid h-14 flex-grow card rounded-none place-items-center hover:bg-crimson_lighter cursor-pointer text-white">
          EVENT
        </button>
        <div>
          <Event></Event>
        </div>
      </div>
      <div className="grid justify-center mx-10">
        <button class="btn w-full  bg-crimson grid h-14 flex-grow card rounded-none place-items-center hover:bg-crimson_lighter cursor-pointer text-white">
          NEWS
        </button>
        <div>
          <News></News>
        </div>
      </div>
    </div>
  );
};

export default NoticeEventNews;
