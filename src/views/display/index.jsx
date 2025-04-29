import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import MultipleBoxDesc from "@/businessComponents/multipleBoxDesc";
import AppBox from "@/businessComponents/appBox";
import "./index.css";

import bg from "@/assets/display/bg.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";

export default function Display() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const handleClick = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "Display Advertising",
    description: "",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const multipleBoxDescInfo = {
    title: "OUR STRATEGIC DISPLAY ADVERTISING SERVICES",
    bgColor: "linear-gradient( 138deg, #F4F8F9 0%, #F1F6F7 100%)",
    description: [
      {
        title: "Worldwide Ad Inventory",
        desc: "As reseller of multiple platforms including DV360, Criteo and GDN…etc., we help your display ads reach 3.5+ billion internet users by leveraging different ad networks worldwide.",
        minHeight: 291,
      },
      {
        title: "One-Stop Service",
        desc: "We provide full service for display ad campaigns including banner creation, campaign optimization and performance tracking to maximize your campaign results via smart tools.",
        minHeight: 291,
      },
      {
        title: "Precise Setting & Split Testing",
        desc: "Our advanced target settings help your display ad appear in front of the right audience at the right time on the right message. We also conduct A/B testing on ad copy, creative, CTA and headlines to optimize your campaign.",
        minHeight: 216,
      },
      {
        title: "Dynamic Retargeting",
        desc: "Knowing that remarketing is essential for display ads, we create dynamic retargeting campaigns to recapture your previous visitors and encourage conversions.",
        minHeight: 216,
      },
      {
        title: "Creative Services",
        desc: "We provide creative services including visual design and copywriting. Our engaging contents and eye-catching images help you entice more clicks and visits to your website.",
        minHeight: 216,
      },
      {
        title: "Data-Driven Reports",
        desc: "Our experts provide regular reports and comprehensive analysis to make sure your campaign performance is on track. Suggestions will also be given to improve campaign results.",
        minHeight: 216,
      },
    ],
    btnText: "SEE OUR DIGITAL MARKETING FULL SERVICES",
    btnClick: handleClick,
  };

  const whyDescBoxDataList = [
    {
      title: "Award-Winner In Display Ads With 15+ Years’ Experience",
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

      <MultipleBoxDesc {...multipleBoxDescInfo} />

      <AppBox
        appList={[
          "video360",
          "baidu",
          "yahoo",
          "googleAds",
          "criteo",
          "yandex",
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
