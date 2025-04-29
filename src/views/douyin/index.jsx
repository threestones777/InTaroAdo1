import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import MultipleBoxDesc from "@/businessComponents/multipleBoxDesc";
import "./index.css";
import AppDataBox from "@/businessComponents/appDataBox";
import AdOfferings from "@/businessComponents/adOfferings";

import bg from "@/assets/douyin/bg.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";
import douyin from "@/assets/douyin/douyin.png";
import ad1 from "@/assets/douyin/ad1.png";
import ad2 from "@/assets/douyin/ad2.png";
import ad3 from "@/assets/douyin/ad3.png";
import ad4 from "@/assets/douyin/ad4.png";
import ad5 from "@/assets/douyin/ad5.png";
import videos from "@/assets/douyin/videos.png";
import users from "@/assets/douyin/users.png";
import sold from "@/assets/douyin/sold.png";

export default function DouYin() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const handleClick = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "Douyin Advertising Reseller",
    description:
      "As the authorized Douyin reseller, AsiaPac specializes in your China inbound and outbound video marketing to supercharge business with 800M+ Chinese target audience reach.",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const appData = [
    {
      img: videos,
      title: "20M+",
      description: "Avg Videos Created Daily",
    },
    {
      img: users,
      title: "400M",
      description: "Daily Active Users",
    },
    {
      img: sold,
      title: "100K",
      description: "Products sold in 24 hrs by a Douyin Account",
    },
  ];

  const adList1 = [
    {
      img: ad1,
      title: "TopView",
      description:
        "A visually impactful video ad format showcasing your brand immediately when users open Douyin",
    },
    {
      img: ad2,
      title: "Brand Takeover",
      description: "A full-screen ad format that supports image and GIF",
    },
    {
      img: ad3,
      title: "In-Feed Ad",
      description:
        "A video ad embedded within the “For You” feed, with multiple clickable elements to increase conversion",
    },
  ];
  const adList2 = [
    {
      img: ad4,
      title: "Hashtag Challenge",
      description:
        "An engaging content solution to generate mass brand exposure, by inviting users to generate content with a branded theme",
    },
    {
      img: ad5,
      title: "Branded Effect",
      description:
        "Interactive and fun elements for users to add to video content",
    },
  ];

  const multipleBoxDescInfo = {
    title: "ASIAPAC’S STRATEGIC DOUYIN ADVERTISING SERVICES",
    bgColor: "#F9F9F9",
    description: [
      {
        title: "Efficient Douyin Business Account Creation",
        desc: "AsiaPac takes care of all paperwork for opening your business account on Douyin. Enjoy your verified icon, profile customization, and advanced campaign result measurement very soon.",
        minHeight: 137,
      },
      {
        title: "Thorough Brand Audit",
        desc: "AsiaPac’s exhaustive audit sets the stage to position your brand, identify target audience and plan Douyin inbound and outbound digital marketing strategies according to your strengths and weaknesses for potential opportunities.",
        minHeight: 216,
      },
      {
        title: "Creative Branded Douyin Video Content",
        desc: "Be it Hashtag Challenge, Branded Effect or In-Feed Ads, leave the innovative Douyin video content ideation and production to us. Our local creative team are seasoned in grabbing audience attention and boost online engagements, thus sales.",
        minHeight: 216,
      },
      {
        title: "Smart Influencer Management",
        desc: "<a style='color:#337DB9' href='#/tech-data'>Centaurus AI<a/>, our self-developed smart influencer platform is going to match you up with your perfect influencer. All these are supported by intelligent technology and our 200K+ cross-platform influencer profiles vetted in China & Asia.",
        minHeight: 216,
      },
      {
        title: "High-Value & Precise Ad Delivery",
        desc: "By utilizing Ocean Engine’s targeting capabilities across Douyin, Toutiao, Xigua, Pangle etc., AsiaPac’s account experts precisely serve your ads to the right Chinese and global viewer segment according to business goals, at the right time with continuous optimization.",
        minHeight: 216,
      },
      {
        title: "Douyin Campaign Analysis & Reporting",
        desc: "After all the tracking and optimizations, AsiaPac’s professionals will provide regular intelligent reports for your performance forecast and strategic campaign adjustments, to maximize your business profit.",
        minHeight: 137,
      },
    ],
    btnText: "SEE OUR DIGITAL MARKETING FULL SERVICES",
    btnClick: handleClick,
  };

  const whyDescBoxDataList = [
    {
      title:
        "Official Douyin Advertising Reseller Agency For Inbound & Outbound",
      desc: "Being the selected authorized advertising reseller agency for Douyin, AsiaPac adds the most on-trend short video platform to our comprehensive array of <a style='color:#337DB9' href='#/services/china-ecommerce'>China digital marketing<a/> products, for brands’ personalized China inbound and outbound digital marketing strategies to effectively reach the 800M+ Chinese netizens.",
    },
    {
      title: "Localized Chinese & Global Video Creative Talents",
      desc: "AsiaPac’s professional Chinese creative video team are in the know about the hottest Chinese and global digital advertising and online trends. Coupled with our AI technology, a high volume of impactful localized short video content and effective digital marketing campaigns are delivered to surpass your target KPI.",
    },
    {
      title: "Award-Winning China & Overseas Digital Expertise",
      desc: "Over the past 15 years, AsiaPac has helped clients across industries, e.g. ecommerce, gaming, travel, beauty, health products, retail, fashion, finance etc., to build effective China-specific digital marketing campaigns and handle account and set-up challenges. Our services are <a style='color:#337DB9' href='#/about'>greatly awarded<a/> across regions.",
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

      {/* 应用数据信息 */}
      <AppDataBox
        bg={douyin}
        description="Douyin, with advertising fully powered by the intelligent Ocean Engine, is the most popular Chinese short video app that features user-generated 15-60s fun videos, livestreams, and viral challenges. It’s among the go-to destinations for marketers looking to connect and engage with Chinese audiences."
        data={appData}
      />

      <MultipleBoxDesc {...multipleBoxDescInfo} />

      {/* AD OFFERINGS */}
      <div className="w-full bg-white pt-160">
        <AdOfferings title="OVERVIEW OF DOUYIN AD" column="3" data={adList1} />
        <AdOfferings title="" column="2" data={adList2} />
      </div>

      <WhyDescBox
        title="WHY ASIAPAC AS DOUYIN ADVERTISING AGENCY?"
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
