import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import MultipleBoxDesc from "@/businessComponents/multipleBoxDesc";
import AppBox from "@/businessComponents/appBox";
import "./index.css";

import bg from "@/assets/seo/bg.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";

export default function SEO() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const handleClick = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "Search Engine Optimization(SEO)",
    description: "",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const multipleBoxDescInfo = {
    title: "OUR STRATEGIC SEO SERVICES",
    bgColor: "#FDFDFE",
    description: [
      {
        title: "Powerful Link Building",
        desc: "Use our quality external link database and build quality links to your website and increase your SEO score.",
        minHeight: 137,
      },
      {
        title: "Website Content Suggestion",
        desc: "Review and give direction of the website content with selected keywords to decrease bounce rate and encourage conversions.",
        minHeight: 137,
      },
      {
        title: "Keyword Research & Selection",
        desc: "Conduct keyword research and identify the top sales-driving keywords in your market. Our SEO expert balances the search intent, volume, and difficulty to maximize the effectiveness of the SEO campaign.",
        minHeight: 216,
      },
      {
        title: "Strategic Competitive Analysis",
        desc: "We use our competitor analysis tool to compare the keywords, website content, site ranking, site structure, etc. An actionable plan will be given to stack up against your main competitors in the search results.",
        minHeight: 216,
      },
      {
        title: "SEO Audit",
        desc: "Take a quick look on your website and suggest a guideline report for you to take action and rank on the first page of search results.",
        minHeight: 216,
      },
      {
        title: "Reporting & Data Analysis",
        desc: "Review keywords ranking on search engine result pages (Google, Baidu, Yahoo, and Bing) and site traffic performance after applying all our SEO suggestions.",
        minHeight: 216,
      },
    ],
    btnText: "SEE OUR DIGITAL MARKETING FULL SERVICES",
    btnClick: handleClick,
  };

  const whyDescBoxDataList = [
    {
      title: "15+ Years Of SEO Experience",
      desc: "Our experts are experienced in Search Engine Optimization for more than 15 years of different industries – Ecommerce, Gaming, Education, IT, Finance, Travel, FMCG, Beauty, Health products, etc. We create personalized SEO strategy for your brand and attract more traffic.",
    },
    {
      title: "Localized Language Support",
      desc: "With offices spanning across Asia - Hong Kong, China, Taiwan, Thailand, Malaysia and Singapore, we strive to help you develop multilingual sales funnel and truly tap potential business opportunities. We offer global SEO services for English, Chinese and Thailand websites and are confident to get your site up on the first page of Google, Baidu, Yahoo and Bing.",
    },
    {
      title: "Drive Value And Business Growth",
      desc: "Our powerful search technology and competitor analysis tool know keywords to reach your potential customers and make sure you rank higher than your competitors. Eventually, drive more website traffic, leads and sales.",
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

      <AppBox appList={["google2", "baidu", "yahoo", "bing"]} />

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
