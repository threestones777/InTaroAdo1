import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import MultipleBoxDesc from "@/businessComponents/multipleBoxDesc";
import AppBox from "@/businessComponents/appBox";
import "./index.css";

import bg from "@/assets/influen/bg.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";

export default function InfluenKol() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const handleClick = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "Influencer Marketing",
    description: "",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const multipleBoxDescInfo = {
    title: "OUR STRATEGIC INFLUENCER MARKETING SERVICES",
    bgColor: "#F2F8F5",
    description: [
      {
        title: "Strong Influencer Network",
        desc: "We own a large database that helps you line up with 200,000+ cross-platform influencers in China and Asia, including both micro-influencers & macro-influencers, reaching 80+ million audiences in total.",
        minHeight: 291,
      },
      {
        title: "Cross-Platform Solutions",
        desc: "We match you with the right influencer that fits with your campaign objectives on popular social media channels among Asia including Facebook, Instagram, Wechat, Xiaohongshu…etc.",
        minHeight: 291,
      },
      {
        title: "AI-Driven Influencer Platform",
        desc: "Influencer matching, content management and analytical reporting are all available on our self-developed <a style='color:#337DB9' href='#/tech-data'>AI influencer management platform<a/>, supported by advanced technology and big data.",
        minHeight: 216,
      },
      {
        title: "Data-Driven Dashboard & Analysis",
        desc: "Real-time performance tracking are available on our data-driven dashboard. Our specialists provide timely analytical reports and recommendations for your campaign.",
        minHeight: 216,
      },
      {
        title: "Content Management",
        desc: "Our specialists build content strategies and customize engaging content for different influencers to attract your target audience in different regions.",
        minHeight: 216,
      },
      {
        title: "Influencer Relationship Management",
        desc: "Our experienced experts specialize in communicating with influencers, helping you to create smooth and effective relationships with influencers and save your time for managing them.",
        minHeight: 216,
      },
    ],
    btnText: "SEE OUR DIGITAL MARKETING FULL SERVICES",
    btnClick: handleClick,
  };

  const whyDescBoxDataList = [
    {
      title: "Full-Stack AI Influencer Management Platform",
      desc: "Considering criterias like engagement level and company value, our exclusive AI-driven system quickly sorts out the best fit from 200,000+ cross-platform influencer data. You can also manage campaign content and get analytical reports on our AI platform.",
    },
    {
      title: "Equipped With Influencer Knowhow In 15+ Industries",
      desc: "Our experts are well equipped with influencer knowhow and specialized in 15+ industries including beauty, fashion, travel, game, health, finance, technology…etc. We formulate industrial strategies to get the best synergistic result for your brand.",
    },
    {
      title: "Professional Liaison & Localized Support",
      desc: "Experienced in managing influencers for 15+ years, we are a professional bridge between your brand and influencers. We offer localized support in 7+ regions, including Hong Kong, China, Taiwan, Thailand, Singapore, Malaysia, Macau etc., to help you adopt cultural norms in different regions.",
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
          "wechat",
          "smallredbook",
          "weibo",
          "youku",
          "instagram",
          "facebook",
          "tiktok",
        ]}
      />

      <WhyDescBox
        title="WHY US AS INFLUENCER MARKETING AGENCY?"
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
