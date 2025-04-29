import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import MultipleBoxDesc from "@/businessComponents/multipleBoxDesc";
import AppBox from "@/businessComponents/appBox";
import "./index.css";

import bg from "@/assets/content/bg.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";

export default function Content() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const handleClick = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "Content Marketing",
    description: "",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const multipleBoxDescInfo = {
    title: "OUR STRATEGIC CONTENT MARKETING SERVICES",
    bgColor: "#F7F7F9",
    description: [
      {
        title: "Functional Topic & Keyword Analysis",
        desc: "1st and 3rd party SEO solutions are utilized to incorporate keywords with most search intent and volume with relatively low difficulty into your articles for organic traffic.",
        minHeight: 291,
      },
      {
        title: "Diversified Content Variation",
        desc: "Our talents are able to cater polished multimedia in a great variety for different platforms, including but not limited to social media posts, articles, videos, infographics, Q&As etc., whatever you need to increase views.",
        minHeight: 291,
      },
      {
        title: "Localized Language And Context",
        desc: "Our native content team contextualize local trending topics and create content with localized Asian languages to maximize market relevance.",
        minHeight: 216,
      },
      {
        title: "Comprehensive Link Building",
        desc: "Supported by AI intelligence, we audit your domain profile with competitor analysis and reach out to authoritative publisher sites for quality backlinks.",
        minHeight: 216,
      },
      {
        title: "One-Stop Social Media Management",
        desc: "From Facebook, Instagram, YouTube, Twitter, to WeChat, Weibo and TikTok etc., no matter what platforms you use, our social media specialists manage everything with calendars and reports and identify best posts to boost for maximum engagements.",
        minHeight: 216,
      },
      {
        title: "Extensive Content Distribution & Reporting",
        desc: "We broadcast content across our powerful 1,600+ media & 200,000+ influencer network in Asia to reach the right audience in the 3.5+ billion internet population. Analytical reports will be provided for your 360-degree view to quantify impact.",
        minHeight: 216,
      },
    ],
    btnText: "SEE OUR DIGITAL MARKETING FULL SERVICES",
    btnClick: handleClick,
  };

  const whyDescBoxDataList = [
    {
      title: "AI-Driven Content Marketing Services",
      desc: "In addition to our own AI-propelled influencer management platform, we integrated powerful 3rd party content solutions and media networks to engage global audiences across channels in different content types.",
    },
    {
      title: "Localized Language Support",
      desc: "With offices spanning across Asia in Hong Kong, China, Taiwan, Thailand, Malaysia and Singapore, we offer multilingual content to boost visibility to your international audiences.",
    },
    {
      title: "Right On Trends",
      desc: "All talents watch closely to macro & micro market trends across industries with frequent info exchange in the company to ensure everything is in the know. In-market contents are produced with sparkling creativity for maximum effectiveness.",
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

      <MultipleBoxDesc {...multipleBoxDescInfo} />

      <AppBox
        appList={[
          "youtube",
          "linkedin",
          "googleNews",
          "weibo",
          "souhu",
          "instagram",
          "facebook",
          "baidu",
        ]}
      />

      <WhyDescBox
        title="WHY US AS CONTENT MARKETING AGENCY?"
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
