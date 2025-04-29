import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import MultipleBoxDesc from "@/businessComponents/multipleBoxDesc";
import "./index.css";
import AppDataBox from "@/businessComponents/appDataBox";
import AdOfferings from "@/businessComponents/adOfferings";

import bg from "@/assets/toutiao/bg.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";
import toutiao from "@/assets/toutiao/toutiao.png";
import ad1 from "@/assets/toutiao/ad1.png";
import ad2 from "@/assets/toutiao/ad2.png";
import ad3 from "@/assets/toutiao/ad3.png";
import ad4 from "@/assets/toutiao/ad4.png";
import ad5 from "@/assets/toutiao/ad5.png";
import ad6 from "@/assets/toutiao/ad6.png";
import content from "@/assets/toutiao/content.png";
import users from "@/assets/toutiao/users.png";
import spend from "@/assets/toutiao/spend.png";

export default function TouTiao() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const handleClick = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "Toutiao Advertising Reseller",
    description:
      "Facilitated by a team of Toutiao digital advertising experts, AsiaPac is your most accountable Toutiao advertising reseller leading your ads to the right audience amongst the 850 million+ Chinese social media users.",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const appData = [
    {
      img: content,
      title: "4B+",
      description: "Daily Content Views",
    },
    {
      img: users,
      title: "410M",
      description: "Monthly Active Users",
    },
    {
      img: spend,
      title: "76 mins",
      description: "Average Time Spent Daily",
    },
  ];

  const adList = [
    {
      img: ad1,
      title: "WeChat Banner Ads",
      description:
        "A visually impactful video ad format showcasing your brand immediately when users open Douyin",
    },
    {
      img: ad2,
      title: "WeChat Mini-Programs Ad",
      description: "A full-screen ad format that supports image and GIF",
    },
    {
      img: ad3,
      title: "WeChat Moment Ad",
      description:
        "A video ad embedded within the “For You” feed, with multiple clickable elements to increase conversion",
    },
    {
      img: ad4,
      title: "WeChat Subscription Ad",
      description:
        "A visually impactful video ad format showcasing your brand immediately when users open Douyin",
    },
    {
      img: ad5,
      title: "WeChat Subscription Ad",
      description: "A full-screen ad format that supports image and GIF",
    },
    {
      img: ad6,
      title: "WeChat Subscription Ad",
      description:
        "A video ad embedded within the “For You” feed, with multiple clickable elements to increase conversion",
    },
  ];

  const multipleBoxDescInfo = {
    title: "ASIAPAC’S STRATEGIC TOUTIAO ADVERTISING SERVICES",
    bgColor: "#F9F9F9",
    description: [
      {
        title: "Easy Toutiao Business Account Setup",
        desc: "AsiaPac manages the whole time-consuming process of setting up a Toutiao business account and all you have to do is to enjoy the verified account in the blink of an eye.",
        minHeight: 137,
      },
      {
        title: "Strategic Brand Evaluation",
        desc: "Renowned for its personalised and addictive content, Toutiao brings you large impressions with highly customized targeting, creative format and ad placement. That’s why AsiaPac insists in vetting your brand for your most strategic Toutiao planning.",
        minHeight: 137,
      },
      {
        title: "Engaging Toutiao Branded Content",
        desc: "No one likes to read ads but Toutiao displays it as a piece of news, and therefore diverse content play a major role here. Whichever category is your brand in, AsiaPac can always offer quality content in the format of article, photos or videos that resonate with Chinese audience across the 130M+ daily users.",
        minHeight: 216,
      },
      {
        title: "AI-driven Chinese Content KOL Matching",
        desc: "More than half of Toutiao users are young adults from the 1st and 2nd tier cities. AsiaPac matches your product with the apt influencer by our self-developed  <a style='color:#337DB9' href='#/tech-data'>Centaurus AI<a/>, which filters out KOL across a wide variety of industries. Vertical marketing to achieve high conversion is no longer complicated.",
        minHeight: 216,
      },
      {
        ttitle: "Optimized Toutiao Targeting & Ad Placement",
        desc: "AsiaPac has integrated performance data linking Ocean Engine’s Douyin, Toutiao, Xigua and other products, benefiting our account advertising experts to utilize these insights to value up your Toutiao ad campaigns.",
        minHeight: 216,
      },
      {
        title: "Advanced Toutiao Ad Performance Reports",
        desc: "With powerful technology in visuals, tracking, analysis and forecasting, AsiaPac provides you with in-depth and intelligent reports on a regular basis to cost-effectively manage your Toutiao ads.",
        minHeight: 216,
      },
    ],
    btnText: "SEE OUR DIGITAL MARKETING FULL SERVICES",
    btnClick: handleClick,
  };

  const whyDescBoxDataList = [
    {
      title: "Toutiao Advertising Reseller for Inbound & Outbound",
      desc: "AsiaPac is in the know to lead your Toutiao ad from the initial stage of finding your best targeting and bidding strategy, to the effective stage of gaining steady conversion rate and ROI. Your China inbound and outbound digital marketing are surely in good hands.",
    },
    {
      title: "Localized Chinese Copywriting and Creative Talents",
      desc: "To ensure your Toutiao ad content to perfectly resonate with Chinese audience, AsiaPac has a whole team of creative talents in China who facilitate content with the hottest Chinese trends. With our cutting-edge data intelligence, high-value and precise ad delivery will allow you to excel in Toutiao advertising.",
    },
    {
      title: "Acclaimed China Digital Expertise",
      desc: "AsiaPac leverages the 15+ years of <a style='color:#337DB9' href='#/services/china-ecommerce'>China advertising experience<a/> and our Asia-Pacific perspectives to serve our clients across different industries such as ecommerce, technology, education, etc. Our <a style='color:#337DB9' href='#/about'>award-winning<a/> campaigns range from SMEs to Fortune 500s.",
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
        bg={toutiao}
        description="Toutiao, as the No.1 news aggregator powered by Ocean Engine’s humane algorithm, has attracted tremendous PUGC content from renowned domestic media such as CCTV and People’s Daily. Toutiao users are displayed to tailored and diverse content through a variety of distribution methods."
        data={appData}
      />

      <MultipleBoxDesc {...multipleBoxDescInfo} />

      {/* AD OFFERINGS */}
      <div className="w-full bg-white pt-160">
        <AdOfferings
          title="OVERVIEW OF XIAOHONGSHU AD"
          column="3"
          data={adList}
        />
      </div>

      <div className="bg-white w-full h-85"></div>

      <WhyDescBox
        title="WHY ASIAPAC AS TOUTIAO ADVERTISING AGENCY?"
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
