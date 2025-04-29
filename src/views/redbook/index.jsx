import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import MultipleBoxDesc from "@/businessComponents/multipleBoxDesc";
import "./index.css";
import AppDataBox from "@/businessComponents/appDataBox";
import AdOfferings from "@/businessComponents/adOfferings";

import bg from "@/assets/redbook/bg.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";
import redbook from "@/assets/redbook/redbook.png";
import ye1 from "@/assets/redbook/ye1.png";
import ye2 from "@/assets/redbook/ye2.png";
import ye3 from "@/assets/redbook/ye3.png";
import ye4 from "@/assets/redbook/ye4.png";
import ad1 from "@/assets/redbook/ad1.png";
import ad2 from "@/assets/redbook/ad2.png";
import ad3 from "@/assets/redbook/ad3.png";
import ad4 from "@/assets/redbook/ad4.png";
import ad5 from "@/assets/redbook/ad5.png";
import ad6 from "@/assets/redbook/ad6.png";
import see from "@/assets/redbook/see.png";
import users from "@/assets/redbook/users.png";
import creator from "@/assets/redbook/creator.png";
import second from "@/assets/redbook/second.png";

export default function RedBook() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const handleClick = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "Xiaohongshu Marketing Agency",
    description:
      "Empowered by a team of Xiaohongshu marketing specialists, AsiaPac is your most reliable Xiaohongshu official global partner in reaching the right audience on the fastest-growing social ecommerce platform in China.",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const appData = [
    {
      img: see,
      title: "245M+",
      description: "Daily Notes Exposure",
    },
    {
      img: users,
      title: "260M+",
      description: "Monthly Active Users",
    },
    {
      img: creator,
      title: "50M+",
      description: "Content Creators",
    },
    {
      img: second,
      title: "70%",
      description: "Post 90s Users",
    },
  ];

  const mapList = (data = []) => {
    return (
      <div className="wow animate__animated animate__fadeInUp">
        {data.map((item, index) => {
          return (
            <div key={index} className="w-960 mx-auto flex mb-48">
              <div
                className="w-54 h-54"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "100% 100%",
                }}
              ></div>
              <div className="w-800 ml-56 text-24 leading-28 font-black">
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const adList = [
    {
      img: ad1,
      title: "WeChat Banner Ads",
      description:
        "A full screen ad design upon app-openings in static or dynamic image, and video format.",
    },
    {
      img: ad2,
      title: "WeChat Mini-Programs Ad",
      description:
        "PAn ad format appears as a native content that penetrates into the double-column feed on explore news page.",
    },
    {
      img: ad3,
      title: "WeChat Moment Ad",
      description:
        "A branded display of products shown on the first search result page according to Xiaohongshu users’ browsing behaviour or interested topic.",
    },
    {
      img: ad4,
      title: "WeChat Subscription Ad",
      description:
        "A brand owner-established custom topic ad, featuring topic header, topic name, description, and videos, driving traffic from multi-channels and directing Xiaohongshu users to landing pages.",
    },
    {
      img: ad5,
      title: "WeChat Subscription Ad",
      description:
        "A customizable sticker ad depicting products or brand text allowing Xiaohongshu users to attach on their stories.",
    },
    {
      img: ad6,
      title: "WeChat Subscription Ad",
      description:
        "A brand topic page with custom topic banner, topic display, description and topic-related user-generated contents, highlighting brand theme and promotional activities.",
    },
  ];

  const multipleBoxDescInfo = {
    title: "ASIAPAC’S STRATEGIC XIAOHONGSHU MARKETING SERVICES",
    bgColor: "#F9F9F9",
    description: [
      {
        title: "Comprehensive Brand Evaluation",
        desc: "Every platform has its own set of rules and restrictions, Xiaohongshu is no exception. Even AsiaPac has grasped the winning key of Xiaohongshu marketing, a comprehensive company evaluation is inevitable before offering you the most ideal digital marketing solution in China.",
        minHeight: 137,
      },
      {
        title: "Xiaohongshu Business Account Creation",
        desc: "As Xiaohongshu Official Global Partner, AsiaPac manages the entire tedious process of setting up your official brand account on Xiaohongshu. All you have to do is simply enjoy your certified icon, profile personalization, enhanced social features, and data insight report in just a glimpse.",
        minHeight: 137,
      },
      {
        title: "AI-driven Xiaohongshu KOL Marketing Solution",
        desc: "AsiaPac harnesses the extensive KOL database in Asia to match your brand with the most suitable influencers utilizing our self-developed KOL management tool <a style='color:#337DB9' href='#/tech-data'>Centaurus AI<a/>. Our dedicated experts are experienced in managing influencers and maintaining effective relationships. Be reassured and wait for the wow engagement effect!",
        minHeight: 216,
      },
      {
        title: "Localized Content Feed in Xiaohongshu",
        desc: "AsiaPac acknowledges all contents format audience interacts with and perceives your brand. Our dedicated team creates tailored <a style='color:#337DB9' href='#/services/content'>content<a/> around daily events in local culture and language that appeals to audience instantly. Your brand are connecting with 300M+ Xiaohongshu registered users in a voice that feels familiar.",
        minHeight: 216,
      },
      {
        title: "Precise Xiaohongshu Ad Delivery",
        desc: "Xiaohongshu paid advertising seamlessly integrates your brand or products into the audiences’ feed across the whole platform, including Following, Moments, Nearby, Search, Stories etc., Based on your marketing objective, AsiaPac recommends the best ad options to reach your target prospects.",
        minHeight: 216,
      },
      {
        title: "Xiaohongshu Performance Reporting",
        desc: "In addition to closely monitoring and tracking your brand’s Xiaohongshu account, AsiaPac’s professionals regularly generate detailed, visually-enhanced analytical reports of your Xiaohongshu marketing performance, allowing for further strategic campaign adjustments and optimization.",
      },
    ],
    btnText: "SEE OUR DIGITAL MARKETING FULL SERVICES",
    btnClick: handleClick,
  };

  const whyDescBoxDataList = [
    {
      title: "WHY ASIAPAC AS XIAOHONGSHU MARKETING AGENCY?",
      desc: "As selected by Xiaohongshu to be one of the official global reseller, AsiaPac is your trustworthy digital marketing agency to help brands establish their presence in Xiaohongshu. With our access to wider and greater resources and platform supports, you can connect with Chinese audiences easily.",
    },
    {
      title: "Localized Chinese Context in Feeds & Creatives",
      desc: "To ensure your Xiaohongshu ad content engages well with the Chinese audience, AsiaPac has a team of Chinese creative talents capable of creating enticing content with in-market language and popular Chinese trends, guaranteeing you to reach the wide prospect and flourish on the platform.",
    },
    {
      title: "All-rounded Solution for Xiaohongshu Marketing",
      desc: "AsiaPac provides comprehensive and all-rounded solution for Xiaohongshu marketing from official business account setup, content creation, KOL cooperation, Xiaohongshu advertising, campaign optimization to performance reporting. It is convenient for you to gain efficiencies, standardization, and one repository for data for your marketing strategy in China market.",
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
        bg={redbook}
        description="Xiaohongshu, also known as Little Red Book, is one of the most prominent lifestyle platforms which combines social media and e-commerce features in China. Evolving as China’s greatest content hub for word-of-mouth, along with its engaged and affluent user base, Xiaohongshu becomes the best choice for global and domestic brands to reach the wide Chinese audience and expand to the China market."
        data={appData}
      />

      <MultipleBoxDesc {...multipleBoxDescInfo} />

      <div className="w-full h-881 bg-[#D9AF90] text-white">
        <p className="w-960 t mt-160 text-56 leading-70 font-black mx-auto  mb-53 wow animate__animated animate__jackInTheBox">
          XIAOHONGSHU MARKETING METHODOLOGY
        </p>
        {mapList([
          {
            img: ye1,
            description:
              "Discover the market opportunity for the product/service and provide insights about customers’ needs.",
          },
          {
            img: ye2,
            description:
              "Define the selling points and marketing scenarios of the product/service to set up new marketing strategy.",
          },
          {
            img: ye3,
            description:
              "Leverage different tools and create precise contents to target niche audience and increase penetration.",
          },
          {
            img: ye4,
            description:
              "Develop unique market share with the focus of hit product/service and establish quality brand image.",
          },
        ])}
      </div>
      <div className="bg-white w-full h-160"></div>

      {/* AD OFFERINGS */}
      <AdOfferings
        title="OVERVIEW OF XIAOHONGSHU AD"
        column="3"
        data={adList}
      />

      <div className="bg-white w-full h-85"></div>

      <WhyDescBox
        title="WHY ASIAPAC AS XIAOHONGSHU MARKETING AGENCY?"
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
