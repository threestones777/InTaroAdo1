import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import AppBox from "@/businessComponents/appBox";
import ContentCarousel from "@/businessComponents/ContentCarousel";
import "./index.css";

import bg from "@/assets/omnichannel/bg.png";
import what from "@/assets/omnichannel/what.png";
import click from "@/assets/omnichannel/click.png";
import campaign from "@/assets/omnichannel/campaign.png";
import effective from "@/assets/omnichannel/effective.png";
import content1 from "@/assets/omnichannel/content1.jpg";
import content2 from "@/assets/omnichannel/content2.jpg";
import content3 from "@/assets/omnichannel/content3.jpg";
import content4 from "@/assets/omnichannel/content4.jpg";
import content5 from "@/assets/omnichannel/content5.jpg";
import content6 from "@/assets/omnichannel/content6.jpg";
import logo from "@/assets/omnichannel/logo.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";

export default function Omnichannel() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "Omnichannel Marketing",
    description:
      "Discover our comprehensive omnichannel marketing strategy to reach your desired audiences through seamless cross-channel integration, delivering personalized engagement and driving higher conversion rates.",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const contents = [
    {
      img: content1,
      title: "Connect with Audiences Anywhere, Everywhere",
      sub: "Impactful campaigns across any desired media channels and strategies – but not limited to - <a style='color:#337DB9' href='#/services/sem'>SEM<a/>, <a style='color:#337DB9' href='#/services/seo'>SEO<a/>, <a style='color:#337DB9' href='#/services/social'>social media<a/>, and <a style='color:#337DB9' href='#/services/display'>display ads<a/>. With AsiaPac, you gain access to top global DSPs like <a style='color:#337DB9' href='#/tech-data'>The Trade Desk<a/>, Hivestack, JCDecaux, and VIOOH, enabling access to premium ad networks across channels such as Connected TV (Netflix, MyTV Super, iQiYi), audio (Spotify, JOOX), display (rich media), video, native, mobile, and DOOH.",
    },
    {
      img: content2,
      title: "All-Rounded Omnichannel Campaign Planning",
      sub: "Our team considers your advertising objectives at every stage—planning, creation, and execution. By creating tailored online and offline campaigns, we ensure we grasp every touch point of your target audience’s customer journey, facilitating seamless cross-channel integration.",
    },
    {
      img: content3,
      title: "Visual Storytelling & Content Variation",
      sub: "Our creative strategists craft localized brand narratives through eye-catching multimedia content in diverse formats, including SEO-friendly blog articles, social media copies, videos, infographics, and Q&As. We aim to maximize market relevance and audience resonance, while evoking emotions and sparking conversations.",
    },
    {
      img: content4,
      title: "Precise Cross-Channel Targeting",
      sub: "Our big-data capabilities segment your target audience based on demographics, interests, and behaviors. This allows us to identify the platforms and channels that best align with your brand, ensuring your content reaches the right audience and ultimately enhances engagement across channels.",
    },
    {
      img: content5,
      title: "Data-Driven, Total-Programmatic Optimization",
      sub: "Leveraging AsiaPac’s AI-powered proprietary tool, <a style='color:#337DB9' href='#/tech-data'>OptAdEasy<a/>, AsiaPac team analyzes and tracks performance metrics across all channels effortlessly. We make timely optimizations to targeting, creatives, and triggers to ensure performance meets your budget and KPIs.",
    },
    {
      img: content6,
      title: "Omnichannel Ad Performance Measurement",
      sub: "With real-time ad performance data reporting, AsiaPac team empowers advertisers to visualize performance metrics and audience insights, enabling effective evaluation of omnichannel campaign effectiveness and leading to more impactful results.",
    },
  ];

  const tableList = () => {
    return (
      <div
        className="w-30 h-30 ml-54 mt-69"
        style={{
          backgroundImage: `url(${click})`,
          backgroundSize: "100% 100%",
        }}
      ></div>
    );
  };

  const dataList = (data = []) => {
    return (
      <div className="mx-auto w-996 relative bottom-350 flex ">
        {data.map((item, index) => {
          return (
            <div key={index} className="w-249 text-center font-['Helvetica']">
              <div className="text-[#231F20] text-46 leading-50 font-black">
                {item.title}
              </div>
              <div className="font-black text-16 leading-25 text-[#337DB9]">
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const whyDescBoxDataList = [
    {
      title:
        "<a style='text-decoration-line: underline;' href='#/services/display'>Award-Winner In Display Ads With 15+ Years’ Experience<a/>",
      desc: "Our experts are experienced in display ads for more than 15 years in different industries – Ecommerce, Finance, Gaming, FMCG, Education, Beauty, Health products etc. We are also award-winner of display ads in Google Premier Partner Awards and Verizon Media Asia Big Idea Chair Awards.",
    },
    {
      title: "Global Ad Networks And Localized Support",
      desc: "We purchase online advertising space directly through global ad networks to let your display ads reach people worldwide. You can find our localized support in Hong Kong, China, Taiwan, Thailand, Malaysia, Singapore and Macau.",
    },
    {
      title: "Result-Driven Strategy & 24/7 Optimization",
      desc: "Our experienced specialists treat your sales and ROAS seriously. Through utilizing data mix and new AI optimization solutions, we develop result-driven strategies and optimize display ad campaigns in real-time.",
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
        className="w-full text-center bg-[#BFE5EB] bg-no-repeat bg-[-130px_200px]"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      >
        <div className="font-black text-56 leading-70 mt-160 text-[#231F20] wow animate__animated animate__jackInTheBox">
          What is Omnichannel Marketing?
        </div>
        <div className="w-900 mx-auto mt-48 mb-160 text-24 text-[#214149] leading-35 font-black wow animate__animated animate__jackInTheBox">
          Unlike traditional and multichannel marketing, omnichannel marketing
          is a customer-centric approach that integrates multiple channels,
          including online, social media, and physical stores. Through
          delivering consistent messaging and personalized interactions, it
          creates a seamless customer experience in a cohesive and fluid manner,
          ultimately enhancing customer satisfaction and loyaltyOmnichannel
          Effectiveness
        </div>
      </div>

      <div className="bg-white text-center">
        <div className="w-900 mx-auto mt-160 text-[#231F20] text-56 leading-70 font-black wow animate__animated animate__jackInTheBox">
          Our Strategic Omnichannel Marketing Services
        </div>
        <div className="w-860 mx-auto h-1000 mt-71 mb-160">
          <ContentCarousel contents={contents} />
        </div>
      </div>

      <div
        className="w-full h-823 pb-160 text-left text-white"
        style={{
          background:
            "linear-gradient( 138deg, #74ABD3 0%, #0D6781 46%, #40937D 100%)",
        }}
      >
        <div className="w-960 h-508 mx-auto flex">
          <div className="w-702 wow animate__animated animate__fadeInUp mr-40">
            <p className="text-56 leading-70 font-black mt-160 mb-48">
              What is Omnichannel Marketing?
            </p>
            <p className="font-black text-24 leading-35 mt-24">
              Unlike traditional and multichannel marketing, omnichannel
              marketing is a customer-centric approach that integrates multiple
              channels, including online, social media, and physical stores.
              Through delivering consistent messaging and personalized
              interactions, it creates a seamless customer experience in a
              cohesive and fluid manner, ultimately enhancing customer
              satisfaction and loyalty.
            </p>
          </div>
          <div
            className="w-420 h-468 ml-65 mt-243 wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${what})`,
              backgroundSize: "100% 100%",
            }}
          ></div>
        </div>
      </div>

      <div className="w-full bg-[#194466] text-white text-center">
        <p className="text-56 leading-70 font-black mt-160 mb-24 wow animate__animated animate__jackInTheBox">
          Enchanteur Campaign Objectives
        </p>
        <div
          className="w-962 h-479 mx-auto mb-110"
          style={{
            backgroundImage: `url(${campaign})`,
            backgroundSize: "100% 100%",
          }}
        >
          <p className="text-24 leading-35 font-black relative top-220 pl-30 pr-30 wow animate__animated animate__fadeInUp">
            In the face of competitors consistently launching new products and
            executing aggressive advertising campaigns, our objective is to
            maximize product awareness and strengthen market positioning.
            Through the implementation of omnichannel marketing strategy across
            various online and offline media channels, we re-launched the
            “Delightful Series” through different phases allowing for more
            strategic execution and better audience engagement.
          </p>
        </div>
        <p className="text-56 leading-70 font-black mt-110 mb-37 wow animate__animated animate__jackInTheBox">
          Our Omnichannel Promotion Channels
        </p>
        <div className="w-980 mx-auto grid grid-cols-2 justify-item-center mb-160 wow animate__animated animate__fadeInUp">
          <div className="w-500 h-170 border-2 border-b-0 border-solid border-[#5E7C94] flex justify-start">
            {tableList()}
            <div className="text-24 leading-36 font-black mt-69 ml-16">
              OOH & Printed Promotion
            </div>
          </div>
          <div className="w-500 h-170 border-t-2 border-r-2 border-solid border-[#5E7C94] flex justify-start">
            {tableList()}
            <div className="text-24 leading-36 font-black mt-69 ml-16">
              Online Ads (GDN, YouTube)
            </div>
          </div>
          <div className="w-500 h-170 border-r-2 border-l-2 border-b-2 border-t-2 border-solid border-[#5E7C94] flex justify-start">
            {tableList()}
            <div className="text-24 leading-36 font-black mt-69 ml-16 text-left">
              Media buy (Facebook, Advertorial)
            </div>
          </div>
          <div className="w-500 h-170 border-2 border-l-0 border-solid border-[#5E7C94] flex justify-start">
            {tableList()}
            <div className="text-24 leading-36 font-black mt-69 ml-16">
              KOL Management
            </div>
          </div>
        </div>
      </div>

      <div
        className=""
        style={{
          background: "linear-gradient( 180deg, #DEEAF7 0%, #FFFFFF 100%)",
        }}
      >
        <div className="w-960 text-[#231F20] text-56 leading-70 font-black mx-auto text-center mt-160 mb-69">
          Omnichannel Effectiveness
        </div>
        <img className="mx-auto" src={effective} alt="" />

        {dataList([
          {
            title: "5M+",
            description: "Total Impressions",
          },
          {
            title: "32%",
            description: "Advertisers",
          },
          {
            title: "2K+",
            description: "Publishers",
          },
          {
            title: "7K+",
            description: "Publishers",
          },
        ])}
      </div>

      <div className="bg-white">
        <div className="w-960 text-[#231F20] text-56 leading-70 mx-auto text-center mt-160 font-black wow animate__animated animate__jackInTheBox">
          <p>Access our Premium Omnichannel Ad</p>
          <p>Inventories</p>
          <p>Across Asia-Pacific Regions</p>
        </div>
      </div>
      <AppBox
        appList={[
          "netflix",
          "mytv",
          "googleNews",
          "spotify",
          "desk",
          "transport",
          "asiaray",
          "taboola",
          "grab",
          "tiktok2",
          "facebook",
          "instagram2",
          "redBook",
          "weibo",
          "wechat",
          "naver",
        ]}
      />

      <WhyDescBox
        title="WHY US AS DISPLAY ADVERTISING AGENCY?"
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
