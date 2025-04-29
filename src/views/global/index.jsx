import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import MultipleBoxDesc from "@/businessComponents/multipleBoxDesc";
import "./index.css";

import bg from "@/assets/global/bg.png";
import ads from "@/assets/global/ads.png";
import bg3 from "@/assets/about_us/bg2.png";
import google from "@/assets/appIcon/google1.png";
import facebook from "@/assets/appIcon/facebook.png";
import criteo from "@/assets/appIcon/criteo.png";
import yahoo from "@/assets/appIcon/yahoo1.png";
import bing from "@/assets/appIcon/bing.png";
import arrowRight from "@/assets/arrow-right.svg";

export default function Global() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const handleClick = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const mapList = (data = []) => {
    return (
      <div className="w-960 mx-auto flex flex-wrap mb-110">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="w-480 mb-70 wow animate__animated animate__fadeInUp"
            >
              <div
                className="w-280 h-150"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "100% 100%",
                }}
              ></div>
              <div className="text-56 leading-70 font-black mt-24 mb-40 text-[#231F20]">
                {item.title}
              </div>
              <ul>
                {item.ads.map((ad, key) => {
                  return (
                    <li
                      key={key}
                      className="mb-40 font-['Helvetica'] font-medium"
                    >
                      <div className="w-14 h-14 rounded-14 bg-[#04586D] border-2 border-[#F1E1CF] inline-block ml-10 mr-13"></div>
                      <div className="inline-block w-430 align-top text-18 leading-27">
                        {ad.sub}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  };

  const bannerBoxProps = {
    title: "Global Digital Marketing Services",
    description:
      "Looking for new business opportunities for your brand to expand and tap into new markets? AsiaPac strategizes your outbound digital marketing campaigns on a worldwide scale and engages your brand with 4.5B+ international audiences.",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const multipleBoxDescInfo = {
    title: "OUR ONE-STOP GLOBAL DIGITAL MARKETING SOLUTION",
    description: [
      {
        title: "Integrated Digital Marketing Services",
        desc: "We offer integrated digital solutions, e.g. programmatic, social media, search, influencer marketing services globally.",
        minHeight: 137,
      },
      {
        title: "Precise Targeting",
        desc: "We utilize AI digital technology and live data to target the right audience at the right time.",
        minHeight: 216,
      },
      {
        title: "Ad Account Creation & Management",
        desc: "We take care of all paperwork, opening procedures, and backstage management for your ad accounts.",
        minHeight: 216,
      },
      {
        title: "Ad Optimization",
        desc: "Our experts monitor your ad campaigns in real-time and strategically optimize for performance growth.",
        minHeight: 216,
      },
      {
        title: "Localized Content Management",
        desc: "Our native content team will contextualize local culture and create multilingual content to maximize your global reach.",
        minHeight: 216,
      },
      {
        title: "Performance-Driven Analysis With Big Data",
        desc: "Powered by substantial <a style='color:#337DB9' href='#/tech-data'>big data and smart AI algorithms<a/>, we provide timely analysis and reports to ensure your campaigns are tractable, quantifiable, and cost-effective.",
        minHeight: 137,
      },
    ],
    btnText: "SEE OUR DIGITAL MARKETING FULL SERVICES",
    btnClick: handleClick,
  };

  const whyDescBoxDataList = [
    {
      title:
        "15+ Years Of Global Digital Marketing Experience, Expertise in 15+ Industries",
      desc: "We collaborated with <a style='color:#337DB9' href='#/tech-data'>international brands<a/> in the past 15+ years for more than 15 industries such as beauty, fashion, travel, game, health, finance, technology, etc.",
    },
    {
      title: "Global Ad Network in Renowned Platforms",
      desc: "As the official partner of Google, Facebook, Criteo, Line and Yahoo, we help brands access worldwide ad inventory and connect with global audiences effortlessly.",
    },
    {
      title: "Awarded Expert Teams Across The World",
      desc: "We offer localized support in 8+ locations, including Hong Kong, China, Taiwan, Thailand, Singapore, Malaysia, Vietnam, Macau, etc. Our expert teams are <a style='color:#337DB9' href='#/about'>greatly awarded<a/> across regions.",
    },
  ];

  return (
    <section className="min-h-screen  flex flex-col leading-[30px]">
      <BannerBox
        {...bannerBoxProps}
        renderAfterContent={
          <button
            onClick={handleGotoContactUs}
            className="mx-auto mt-90 bg-[#fff] text-[#337DB9] h-36 w-148 rounded-18 font-semibold leading-36 flex flex-row items-center justify-center gap-10 hover:opacity-60"
          >
            Contact Us
            <img src={arrowRight} alt="arrow-right" className="w-10 h-16 " />
          </button>
        }
      />

      <div
        className="w-full bg-white"
        style={{
          backgroundImage: `url(${ads})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="w-860 mx-auto text-center mt-160 mb-173 text-50 leading-64 font-bold text-[#103A70] wow animate__animated animate__jackInTheBox">
          ASIAPAC IS GLOBAL PARTNER OF WORLD’S TOP ADVERTISING PLATFORMS
        </div>
        {mapList([
          {
            img: google,
            title: "Google",
            ads: [
              { sub: "Google Ads Account Creation" },
              {
                sub: "Google Ads Management (Search ads, Display & Video ads (GDN), Shopping ads, Remarketing)",
              },
              { sub: "DV360 Programmatic Management" },
              { sub: "Real-time Ad Optimization" },
              { sub: "Data Analysis" },
            ],
          },
          {
            img: facebook,
            title: "Facebook",
            ads: [
              { sub: "Facebook Business Account Creation" },
              {
                sub: "Backstage Management",
              },
              {
                sub: "Facebook Ads Management (Image ads, Video ads, Lead ads, Shopping ads, Carousel ads, Canvas ads, Collection ads, Remarketing)",
              },
              { sub: "Real-time Ad Optimization" },
              { sub: "Data Analysis" },
              { sub: "Content Management" },
              { sub: "Influencer Management" },
            ],
          },
          {
            img: criteo,
            title: "Criteo",
            ads: [
              {
                sub: "Criteo Ads Management (Dynamic ads, Image ads, Remarketing)",
              },
              {
                sub: "Display Ads Placement With Unique Ad Inventory",
              },
              {
                sub: "Ad Targeting, Optimization And Data Analysis With 5+ Billion Daily Captured Customer Actions And 2.4 Billion Online Shopper Data",
              },
            ],
          },
          {
            img: yahoo,
            title: "Yahoo",
            ads: [
              { sub: "Yahoo Business Account Creation" },
              {
                sub: "Yahoo Ads Management (Search ads, Native ads, Shopping ads, Remarketing)",
              },
              { sub: "Real-time Ad Optimization" },
              { sub: "Data Analysis" },
            ],
          },
          {
            img: bing,
            title: "Bing",
            ads: [
              { sub: "Bing Business Account Creation" },
              {
                sub: "Bing Ads Management (Search ads, Display ads, Shopping ads, Remarketing)",
              },
              { sub: "Real-time Ad Optimization" },
              { sub: "Data Analysis" },
            ],
          },
        ])}
      </div>

      <MultipleBoxDesc {...multipleBoxDescInfo} />

      <WhyDescBox
        title="WHY ASIAPAC AS GLOBAL DIGITAL ADVERTISING AGENCY?"
        dataList={whyDescBoxDataList}
      />

      <section
        className="w-full py-65 bg-[#fff]"
        style={{ backgroundImage: `url(${bg3})`, backgroundSize: "100% 100%" }}
      >
        <section className="min-box-1180 h-full mx-auto text-center ">
          <div className="w-900 h-full mx-auto">
            <h1 className="wow animate__animated animate__jackInTheBox  font-semibold text-56 text-[#fff] leading-70 ">
              <a href="#/contact">GET FREE CONSULTATION NOW</a>
            </h1>
          </div>
        </section>
      </section>
    </section>
  );
}
