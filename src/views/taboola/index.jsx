import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import MultipleBoxDesc from "@/businessComponents/multipleBoxDesc";
import AppDataBox from "@/businessComponents/appDataBox";
import AdOfferings from "@/businessComponents/adOfferings";

import bg from "@/assets/taboola/bg.png";
import taboola from "@/assets/taboola/taboola.png";
import users from "@/assets/taboola/users.png";
import taboola1 from "@/assets/taboola/taboola1.png";
import taboola2 from "@/assets/taboola/taboola2.png";
import taboola3 from "@/assets/taboola/taboola3.png";
import taboola4 from "@/assets/taboola/taboola4.png";
import taboola5 from "@/assets/taboola/taboola5.png";
import taboola6 from "@/assets/taboola/taboola6.png";
import ads from "@/assets/taboola/ads.png";
import publisher from "@/assets/taboola/publisher.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";

export default function Taboola() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const handleClick = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "Taboola Advertising Agency",
    description:
      "Amplify your reach by engaging in our Taboola agency services through premium editorial placements and vast network with sponsored content in diverse formats.",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const multipleBoxDescInfo = {
    title: "OUR STRATEGIC TABOOLA ADVERTISING SERVICES",
    bgColor: "#FAF4F3",
    description: [
      {
        title: "Taboola Comprehensive Strategy",
        desc: "AsiaPac develops customized Taboola advertising strategies tailored to various campaign objectives. No matter your goal is lead generation, online purchases, brand awareness, web engagement or mobile app installs, we have you covered. Our team build the perfect content and craft captivating ad copies to maximize your campaign’s impact across the entire customer journey, from top-of-mind awareness, to consideration and conversion.",
        minHeight: 137,
      },
      {
        title: "Taboola Campaign Management",
        desc: "With in-depth knowledge of Taboola's targeting options, we identify and reach your ideal audience segments by utilizing Taboola data marketplace such as demographic, interest, habits, lookalike, zip code location. We also implement SmartBid, Taboola’s automated bidding technology to make more efficient use of the spend and optimize ROI.",
        minHeight: 137,
      },
      {
        title: "Creative Content Creation",
        desc: "Our <a style='color:#337DB9' href='#/services/content'>creative team<a/> crafts compelling and engaging content that captures your target audience's attention. By leveraging Taboola's best practices for image ads, motion ads, and video ads, we ensure that your campaigns stand out from the crowd. Our team of experts create localised content ad copy to maximize click-through rates and conversions.",
        minHeight: 216,
      },
      {
        title: "Powerful Taboola Tracking",
        desc: "We set up the Taboola Pixel to gain robust website user data, analyse how people interact and understand the actions they take on the website such as page visits, purchases, views, etc. By tracking users’ activities, our team take accurate and thorough actions to optimize your campaigns and achieve retargeting to boost conversions.",
        minHeight: 216,
      },
      {
        title: "Campaign Optimization and Retargeting",
        desc: "Take a quick look on your website and suggest a guideline report for you to take action and rank on the first page of search resultsOur team of experts closely monitor your Taboola campaign metrics, analyze data, and optimize effectively with retargeting strategies to boost conversion rate and maximize your campaign ROI.",
        minHeight: 216,
      },
      {
        title: "Taboola Campagin Analysis & Reporting",
        desc: "Find everything you need to understand about your Taboola campaign performance with our intelligent reports, staying on top of the metrics and make actionable marketing forecasts.",
        minHeight: 216,
      },
    ],
    btnText: "SEE OUR DIGITAL MARKETING FULL SERVICES",
    btnClick: handleClick,
  };

  const appData = [
    {
      img: users,
      title: "500M+",
      description: "Daily Active Users",
    },
    {
      img: ads,
      title: "15K+",
      description: "Advertisers",
    },
    {
      img: publisher,
      title: "9K+",
      description: "Publishers",
    },
  ];

  const adList = [
    {
      img: taboola1,
      title: "Homepage",
      description:
        "Native display hero ads on the homepage when consumers start reading content.",
    },
    {
      img: taboola2,
      title: "Section Front",
      description:
        "Native display ads above-the-fold on section front pages when consumers are actively browsing.",
    },
    {
      img: taboola3,
      title: "Mid Article",
      description:
        "Highly impactful mid-article ads in native display or video formats surrounded by editorial content as consumers read.",
    },
    {
      img: taboola4,
      title: "Taboola Feed",
      description:
        "Non-disruptive ads in native display or video formats immediately following publisher article content.",
    },
    {
      img: taboola5,
      title: "Mobile-integrated News",
      description:
        "Native display or video ads in device’s default news experience, where consumers can engage with premium editorial content throughout their day..",
    },
    {
      img: taboola6,
      title: "Taboola Stories",
      description:
        "Image or video ads experience similar to stories on popular social media platforms.",
    },
  ];

  const whyDescBoxDataList = [
    {
      title: "Authorized Taboola Advertising Agency",
      desc: "As Taboola’s authorized agency partner, AsiaPac has direct access to advanced features, tools, and resources. With our expertise in Taboola’s advertising tactics and a close working relationship with the team, we provide clients with top-notch service and expertise.",
    },
    {
      title: "20+ years’ experience and Expertise",
      desc: "Our experts are experienced in growing clients’ businesses through native and display advertising for 20+ years across different industries – Ecommerce, Finance, Gaming, FMCG, Education, Beauty, Health products etc.",
    },
    {
      title: "Results-Driven Approach",
      desc: "We deliver measurable results and maximize ROI through data-driven strategies and continuous optimization. Our use of data mix and <a style='color:#337DB9' href='#/tech-data'>AI optimization solutions<a/> enables real-time optimization of ad campaigns for effective outcomes.",
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
        bg={taboola}
        description="Taboola is the world’s leading content discovery and native
          advertising platform that connects advertisers with a vast network of
          publishers. Through exclusive partnerships with 9,000+ top publishers,
          Taboola reaches over 1 billion people across the web each month
          globally."
        data={appData}
      />

      <MultipleBoxDesc {...multipleBoxDescInfo} />

      {/* AD OFFERINGS */}
      <div className="w-full bg-white pt-160">
        <AdOfferings title="OVERVIEW OF TABOOLA AD" column="3" data={adList} />
        <div className="h-60 w-full bg-white"></div>
      </div>

      <WhyDescBox title="WHY US AS SEO AGENCY?" dataList={whyDescBoxDataList} />

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
