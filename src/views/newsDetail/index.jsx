import bg from "@/assets/news/bg.png";
import back from "@/assets/news/back.svg";
import details1 from "@/assets/news/details1.png";
import details2 from "@/assets/news/details2.png";
import details3 from "@/assets/news/details3.png";
import details4 from "@/assets/news/details4.png";
import details5 from "@/assets/news/details5.png";
import details6 from "@/assets/news/details6.png";
import BannerBox from "@/businessComponents/BannerBox";
import arrowRight from "@/assets/arrow-right-white.svg";

import "./index.css";
import { news } from "@/views/news/news.js";

export default function NewsDetails() {
  console.log(8787878787, news[localStorage.newsKey]);
  const newsMsg = news[localStorage.newsKey];
  const bannerBoxProps = {
    title: "NEWS",
    description:
      "Our delicious news are served hot here, always be ready at the table.",
    className: "news-banner-box",
    bgImg: bg,
  };

  const toNews = () => {
    window.history.back();
  };

  const toContact = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  return (
    <div className="min-h-screen  flex flex-col leading-[30px]">
      <BannerBox {...bannerBoxProps} />

      <div className="w-full bg-[#EEF4F6] pb-120 text-[#3E3E46]">
        <div className="mx-auto">
          <div className="w-full flex justify-center">
            <div className="w-770 mr-30 wow animate__animated animate__fadeInUp">
              <div className="flex mt-16 hover:cursor-pointer hover:font-black hover:text-[#337DB9]">
                <div
                  className="w-10 h-8 mr-6 relative top-6 rotate-180"
                  style={{
                    backgroundImage: `url(${back})`,
                    backgroundSize: "100% 100%",
                  }}
                ></div>
                <div
                  onClick={() => toNews()}
                  className="font-semibold text-14 leading-20 font-['PingFangSC']"
                >
                  BACK
                </div>
              </div>
              <div className="w-full mt-16 bg-white rounded-15 p-32 pt-42 pb-160">
                <div className="text-42 leading-46 font-black text-[#231F20]">
                  {newsMsg.title}
                </div>
                <div
                  className="w-706 h-379 mt-24"
                  style={{
                    backgroundImage: `url(${newsMsg.img})`,
                    backgroundSize: "100% 100%",
                  }}
                ></div>
                <div className="text-32 leading-36 font-black mt-43 text-[#231F20]">
                  {newsMsg.to}
                </div>
                <div className="font-['Helvetica'] font-medium text-16 leading-22 mt-24">
                  <p className="mb-24">{newsMsg.desc1}</p>
                  <p>{newsMsg.desc2}</p>
                </div>
                <div className="text-32 leading-36 font-black mt-42 text-[#231F20]">
                  Details:
                </div>
                <div className="font-['Helvetica'] font-medium text-16 leading-22 mt-24">
                  <p className="mb-24">Date: {newsMsg.date}</p>
                  <p className="mb-24">Time: {newsMsg.time}</p>
                  <p className="mb-24">Location: {newsMsg.location}</p>
                  <p className="mb-24">Language: {newsMsg.language}</p>
                  <p className="mb-24">Fee: {newsMsg.fee}</p>
                </div>
                <div className="text-left">
                  <button
                    className="font-['PingFangSC'] bg-[#337DB9] w-200 h-36 rounded-4 hover:opacity-60"
                    onClick={() => toContact()}
                  >
                    <span className="text-14 text-[#fff] font-semibold">
                      Contact Us
                      <img
                        src={arrowRight}
                        className={`w-[10px] h-[8px] relative left-8 inline-block`}
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-320 h-700 mt-94 wow animate__animated animate__fadeInUp">
              <div className="text-42 leading-46 font-black text-[#231F20]">
                Details:
              </div>
              <div className="mt-24 flex font-['Helvetica'] font-black">
                <div
                  className="w-24 h-24"
                  style={{
                    backgroundImage: `url(${details1})`,
                    backgroundSize: "100% 100%",
                  }}
                ></div>
                <div className="w-284 text-16 leading-22 ml-12">
                  {newsMsg.topic}
                </div>
              </div>
              <div className="mt-24 flex font-['Helvetica'] font-black">
                <div
                  className="w-24 h-24"
                  style={{
                    backgroundImage: `url(${details2})`,
                    backgroundSize: "100% 100%",
                  }}
                ></div>
                <div className="w-284 text-16 leading-22 ml-12">
                  {newsMsg.date}
                </div>
              </div>
              <div className="mt-24 flex font-['Helvetica'] font-black">
                <div
                  className="w-24 h-24"
                  style={{
                    backgroundImage: `url(${details3})`,
                    backgroundSize: "100% 100%",
                  }}
                ></div>
                <div className="w-284 text-16 leading-22 ml-12">
                  {newsMsg.time}
                </div>
              </div>
              <div className="mt-24 flex font-['Helvetica'] font-black">
                <div
                  className="w-24 h-24"
                  style={{
                    backgroundImage: `url(${details4})`,
                    backgroundSize: "100% 100%",
                  }}
                ></div>
                <div className="w-284 text-16 leading-22 ml-12">
                  {newsMsg.human}
                </div>
              </div>
              <div className="mt-24 flex font-['Helvetica'] font-black">
                <div
                  className="w-24 h-24"
                  style={{
                    backgroundImage: `url(${details5})`,
                    backgroundSize: "100% 100%",
                  }}
                ></div>
                <div className="w-284 text-16 leading-22 ml-12">
                  {newsMsg.location}
                </div>
              </div>
              <div className="mt-24 flex font-['Helvetica'] font-black">
                <div
                  className="w-24 h-24"
                  style={{
                    backgroundImage: `url(${details6})`,
                    backgroundSize: "100% 100%",
                  }}
                ></div>
                <div className="w-284 text-16 leading-22 ml-12">
                  {newsMsg.phone}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
