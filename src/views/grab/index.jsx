import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import MultipleBoxDesc from "@/businessComponents/multipleBoxDesc";
import "./index.css";
import AppDataBox from "@/businessComponents/appDataBox";
import AdOfferings from "@/businessComponents/adOfferings";

import bg from "@/assets/grab/bg.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";
import grab from "@/assets/grab/grab.png";
import grab1 from "@/assets/grab/grab1.png";
import grab2 from "@/assets/grab/grab2.png";
import grab3 from "@/assets/grab/grab3.png";
import grab4 from "@/assets/grab/grab4.png";
import grab5 from "@/assets/grab/grab5.png";
import grab6 from "@/assets/grab/grab6.png";
import sea from "@/assets/grab/sea.png";
import users from "@/assets/grab/users.png";
import online from "@/assets/grab/online.png";

export default function Grab() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const handleClick = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "GrabAds Agency",
    description:
      "AsiaPac is your official GrabAds agency partner in strategically penetrating Southeast Asia and reaching millions of consumers through the Grab superapp.",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const appData = [
    {
      img: users,
      title: "38M+",
      description: "Monthly Transacting Users",
    },
    {
      img: sea,
      title: "3rd",
      description: "Ad Equity Ranking in SEA",
    },
    {
      img: online,
      title: "61%",
      description: "Online Reachability",
    },
  ];

  const adList = [
    {
      img: grab1,
      title: "Grab In-Feed Ad",
      description:
        "Carousel of up to 3 native images or video ads on the homepage, GrabFood, and GrabMart feed.",
    },
    {
      img: grab2,
      title: "Grab In-Transit Ad",
      description:
        "Ad appears after users transacted on the app for GrabTransport, GrabFood, GrabMart, and GrabExpress.",
    },
    {
      img: grab3,
      title: "Grab Rewarded Ad",
      description:
        "Ad in an image, video, lead gen, and O2O formats on the homepage to drive engagement with points, in-app vouchers, and O2O vouchers (drive audience to offline retail).",
    },
    {
      img: grab4,
      title: "Grab Search Ad",
      description:
        "Ad in search results that link directly to your store on the Grab app. Only Grab Merchants are eligible for this ad format.",
    },
    {
      img: grab5,
      title: "Grab Food Native Image/Video",
      description:
        "Ad appears at a top placement upon opening the GrabFood app and only appears to users within the delivery radius.",
    },

    {
      img: grab6,
      title: "Grab Rank Booster",
      description:
        "A video ad embedded within the “For You” feed, with multiple clickable elements to increase conversion",
    },
  ];

  const multipleBoxDescInfo = {
    title: "Our Strategic GrabAds Services",
    bgColor: "#F9F9F9",
    description: [
      {
        title: "Full-Funnel GrabAds Planning",
        desc: "AsiaPac performs in-depth brand evaluations and develops effective GrabAds campaigns tailored to your goals – be it building brand awareness, generating in-app or in-store sales – by targeting the most relevant audience.",
        minHeight: 137,
      },
      {
        title: "1st & 3rd Party Audience Data Analysis",
        desc: "We identify your most relevant audience segments by leveraging our rich database and Grab’s aggregated audience data based on real-world transactions, including Grab ride users, GrabFood audiences, app top spenders, campaign engagers, POI audience, and more.",
        minHeight: 216,
      },
      {
        title: "Impactful GrabAds Creatives Development",
        desc: "Our creative team. at AsiaPac utilizes self-developed AI banner creation tools to craft impactful native ads that capture the attention of Grab users. Whether ordering food, groceries, or scheduling rides, our visually striking ads complement your brand and engage users within the Grab app.",
        minHeight: 216,
      },
      {
        title: "Data-Driven GrabAds Execution",
        desc: "Leveraging Grab’s granular audience signals, diverse formats and rewarded ads product, your Grab ads are facilitated to precisely serve and your high-value audiences are incentivized to purchase and convert.",
        minHeight: 216,
      },
      {
        title: "Omnichannel GrabAds Solution",
        desc: "Our omnichannel approach integrates your Grab campaigns with online and offline promotions e.g. in-app ads, out-of-home (OOH) car wraps, O2O vouchers, etc., grasping every touch point of Grab users’ customer journey.",
        minHeight: 216,
      },
      {
        title: "GrabAds Performance Reporting",
        desc: "AsiaPac’s detailed GrabAds reports offer consumer insights into key metrics like conversions, unique reach, page visits, CTR, redemption rate, etc., allowing us to make data-driven optimizations on your Grab ads strategy to maximize ROI.",
        minHeight: 137,
      },
    ],
    btnText: "SEE OUR DIGITAL MARKETING FULL SERVICES",
    btnClick: handleClick,
  };

  const whyDescBoxDataList = [
    {
      title: "Official GrabAds Partner",
      desc: "As GrabAds’s official agency partner, AsiaPac possesses expertise, partner-exclusive resources and platform support to help you reach your desired Southeast Asia audience.",
    },
    {
      title: "Localized GrabAds Content",
      desc: "Considering the cultural nuances, language preferences, and regional interests, Our <a style='color:#337DB9' href='#/services/southeast-asia-ecommerce'>Southeast Asia (SEA) content team<a/> personalizes your GrabAds to better connect and resonate with your targeted <a style='color:#337DB9' href='#/services/southeast-asia-ecommerce'>SEA audiences<a/>.",
    },
    {
      title: "Acclaimed Southeast Asia Digital Expertise",
      desc: "AsiaPac has a strong track record of <a style='color:#337DB9' href='#/about'>winning awards<a/> and serving 3,000+ clients across industries, e.g. FMCG, beauty, F&B, finance, travel, etc. From planning to execution and measurement, we handle your GrabAds campaign well, going beyond your KPI.",
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
      <div className="bg-white">
        <AppDataBox
          bg={grab}
          description="GrabAds is one of the strongest advertising arms for brands to connect and engage with high-value Southeast Asia consumers who use the superapp for daily transactions."
          data={appData}
        />
      </div>

      <MultipleBoxDesc {...multipleBoxDescInfo} />

      {/* AD OFFERINGS */}
      <div className="w-full bg-white pt-160">
        <AdOfferings title="OVERVIEW OF GRABADS" column="3" data={adList} />
        <div className="h-80 w-full bg-white"></div>
      </div>

      <WhyDescBox
        title="WHY ASIAPAC AS GRABADS AGENCY?"
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
