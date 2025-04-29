import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import MultipleBoxDesc from "@/businessComponents/multipleBoxDesc";
import AppBox from "@/businessComponents/appBox";
import "./index.css";

import bg from "@/assets/video/bg.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";

export default function Video() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const handleClick = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "Video Marketing",
    description: "",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const multipleBoxDescInfo = {
    title: "OUR STRATEGIC DISPLAY ADVERTISING SERVICES",
    bgColor: "#F2F8F5",
    description: [
      {
        title: "Select Suitable Video Platforms",
        desc: "There are many video marketing platforms: YouTube, Facebook, Instagram, TikiTok, Xiaohongshu, etc. The right platforms can help you expose your videos to your audience effectively.",
        minHeight: 291,
      },
      {
        title: "Video Advertising Management",
        desc: "Our intelligent tool helps to customize the best ad format, targeting, descriptions and keyword tags for your videos, driving huge exposure to the right segment of viewers.",
        minHeight: 291,
      },
      {
        title: "Video/Amination Creation & Production",
        desc: "Our advanced target settings help your display ad appear in front of the right audience at the right time on the right message. We also conduct A/B testing on ad copy, creative, CTA and headlines to optimize your campaign.",
        minHeight: 216,
      },
      {
        title: "Precise Targeting & Remarketing",
        desc: "Our quality China, Asia & worldwide digital inventory supports rich media of all shapes and formats of 3.5+ billion internet users. Meanwhile, we tailor video remarketing advertising campaigns to bring left visitors back and turn them into conversion.",
        minHeight: 216,
      },
      {
        title: "Regular Data Analysis & Report",
        desc: "Our video marketing experts continuously create, track and optimize your video marketing campaigns with deep insights and data. Regular reports will be given for you to improve performance.",
        minHeight: 216,
      },
      {
        title: "Ad Campaign Testing & Optimization",
        desc: "Video ad format or audience A/B testing to optimize your video advertising campaigns and improve the performance.",
        minHeight: 216,
      },
    ],
    btnText: "SEE OUR DIGITAL MARKETING FULL SERVICES",
    btnClick: handleClick,
  };

  const whyDescBoxDataList = [
    {
      title: "WHY US AS VIDEO MARKETING AGENCY?",
      desc: "Our video marketing solution reaches 3.5+ billion internet users in Hong Kong, China, Taiwan, Thailand, Malaysia, Singapore, and Worldwide. We are award-winning video marketing agency and our experts create personalized strategy for different industries – Ecommerce, Gaming, Education, IT, Finance, Travel, FMCG, Beauty, Health products, etc.",
    },
    {
      title: "Total Video Marketing Solutions",
      desc: "Our integrated video marketing solutions maximize your brand awareness and potential conversion with creative video content ideas and performance-driven video advertising strategies.",
    },
    {
      title: "Video Performance & Data-Driven Tool",
      desc: "Powered by big data and smart AI algorithms, our self-developed systems help you get the most from your budget, optimizing your video ad campaigns, enhancing efficiencies and performance to next level.",
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
          "video360",
          "facebook",
          "tiktok",
          "smallredbook",
          "instagram",
          "criteo",
          "yahoo",
        ]}
      />

      <WhyDescBox
        title="WHY US AS VIDEO MARKETING AGENCY?"
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
