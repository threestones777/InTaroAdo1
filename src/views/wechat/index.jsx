import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import MultipleBoxDesc from "@/businessComponents/multipleBoxDesc";
import "./index.css";
import AppDataBox from "@/businessComponents/appDataBox";
import AdOfferings from "@/businessComponents/adOfferings";

import bg from "@/assets/wechat/bg.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";
import wechat from "@/assets/wechat/wechat.png";
import ad1 from "@/assets/wechat/ad1.png";
import ad2 from "@/assets/wechat/ad2.png";
import ad3 from "@/assets/wechat/ad3.png";
import ad4 from "@/assets/wechat/ad4.png";
import used from "@/assets/wechat/used.png";
import users from "@/assets/wechat/users.png";
import programs from "@/assets/wechat/programs.png";

export default function WeChat() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const handleClick = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "WeChat Advertising Agency",
    description:
      "WeChat advertising is capable of reaching 90% Chinese netizens with AsiaPac being your WeChat advertising agency and the platform being the most valuable tech brand.",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const appData = [
    {
      img: used,
      title: "5th",
      description: "Most Used Social Networking App",
    },
    {
      img: users,
      title: "1B",
      description: "Monthly Active Users",
    },
    {
      img: programs,
      title: "3M",
      description: "Mini Programs",
    },
  ];

  const adList = [
    {
      img: ad1,
      title: "WeChat Banner Ads",
      description:
        "A popular banner with or without call-to-action appeared in a WeChat content",
    },
    {
      img: ad2,
      title: "WeChat Mini-Programs Ad",
      description:
        "Special formats like Mini-game (Video) and Pop-up Ads are offered within WeChat Mini App",
    },
    {
      img: ad3,
      title: "WeChat Moment Ad",
      description:
        "An in-feed ad, which can be image or video based, shown in users’ WeChat Moments",
    },
    {
      img: ad4,
      title: "WeChat Subscription Ad",
      description:
        "A variety of branded banner ads only displayed to the subscribed WeChat users",
    },
  ];

  const multipleBoxDescInfo = {
    title: "ASIAPAC’S STRATEGIC WECHAT ADVERTISING SERVICES",
    bgColor: "#F2F8F5",
    description: [
      {
        title: "Detailed Brand Evaluation",
        desc: "Abiding by China’s internet laws, WeChat advertising may not be the right option for certain industries. Although AsiaPac is familiar with the game of China digital marketing, a comprehensive audit of your company is insisted to smoothen the WeChat official account setup process.",
        minHeight: 137,
      },
      {
        title: "WeChat Official Account Registration",
        desc: "WeChat offers Subscription account, Service account and Enterprise account and Mini-programs which make WeChat advertising look hard to handle from the beginning. AsiaPac’s team will walk you through their specialties and set up the most suitable WeChat account for your brand.",
        minHeight: 137,
      },
      {
        title: "WeChat Content in Localized Context",
        desc: "With Baidu’s well-known functionality in AI-targeting and accuracy, AsiaPac’s team masters in optimizing SEM campaigns and creates ad copies in the most localized context.",
        minHeight: 216,
      },
      {
        title: "Leveraging KOL marketing in WeChat",
        desc: "WeChat KOLs are trusted in their specific niche, that lead to high ad reach and boost sales. Utilizing our self-developed KOL management platform, <a style='color:#337DB9' href='#/tech-data'>Centaurus AI<a/>, AsiaPac gets your brand suitable KOLs including we-media and individual official accounts.",
        minHeight: 216,
      },
      {
        title: "Precise WeChat Ad Delivery",
        desc: "WeChat paid advertising uniquely provides WeChat Moment, Official Account and Mini-program ads all around the app to help your brand reach the right audience. Don’t be overwhelmed as AsiaPac opts for the best WeChat ad strategy for your marketing objective!",
        minHeight: 216,
      },
      {
        title: "WeChat Performance Reporting",
        desc: "To optimize results, our experienced team monitors your brand’s WeChat account closely and adjusts ad strategies at the right time. We also generate analytical reports, e.g. on followers, content, and ads, so that you are well informed of our WeChat advertising performance.",
        minHeight: 216,
      },
    ],
    btnText: "SEE OUR DIGITAL MARKETING FULL SERVICES",
    btnClick: handleClick,
  };

  const whyDescBoxDataList = [
    {
      title: "15+ Years Know-how for WeChat Advertising",
      desc: "Experienced in the <a style='color:#337DB9' href='#/services/china-ecommerce'>China market<a/> for 15+ years, AsiaPac knows the WeChat advertising hack well. Regardless of the extensive process, our team will handle of all the cumbersome parts and assure your brand with satisfying WeChat ad performance to drive sales growth.",
    },
    {
      title: "Performance-Driven WeChat Ad Content",
      desc: "Simplified Chinese is the main language used on WeChat. Regardless of the strict keyword restriction by WeChat advertising, our Chinese creative team promises you with the up-to-date branded content in coordination with the target audience’s local city languages.",
    },
    {
      title: "Local Chinese Office Support on WeChat",
      desc: "With our leading data intelligence, our local talents in China are capable of serving our WeChat advertising strategies to client across industries such as ecommerce, gaming, beauty and retail. Entering the potential China market is achievable with our digital experience.",
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
        bg={wechat}
        description="WeChat advertising never loses it strength in the face of the uprising platforms since WeChat’s launch in 2011. Powered by Tencent Holding, the super app is currently one of the world’s top 10 most valuable tech brands together with Google and Facebook in 2021."
        data={appData}
      />

      <MultipleBoxDesc {...multipleBoxDescInfo} />

      {/* AD OFFERINGS */}
      <div className="w-full bg-white pt-160">
        <AdOfferings title="OVERVIEW OF WECHAT AD" column="2" data={adList} />
        <div className="h-80 w-full bg-white"></div>
      </div>

      <WhyDescBox
        title="WHY ASIAPAC AS WECHAT ADVERTISING AGENCY?"
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
