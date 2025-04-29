import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import "./index.css";

import bg from "@/assets/china/bg.png";
import service from "@/assets/china/service.png";
import icons from "@/assets/china/icons.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";

export default function China() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "China Ecommerce Marketing Agency",
    description:
      "China’s ecommerce market keeps booming to reach $3 trillion in 2024, indicating a positive sign for your China ecommerce marketing strategies.",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const mapList = (data = []) => {
    return (
      <div className="w-960 mx-auto flex flex-wrap mb-110">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="w-480 mb-50 wow animate__animated animate__fadeInUp"
            >
              <div className="w-360 text-26 leading-28 font-black mb-32">
                {item.title}
              </div>
              <ul className="relative right-10">
                {item.ads.map((ad, key) => {
                  return (
                    <li key={key} className="mb-16">
                      <div className="w-14 h-14 rounded-14 bg-[#04586D] border-2 border-[#F1E1CF] inline-block ml-10 mr-13"></div>
                      <div className="font-['Helvetica'] font-medium inline-block w-350 align-top text-18 leading-27">
                        {ad.sub}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  };

  const whyDescBoxDataList = [
    {
      title: "Official Chinese Advertising Platforms Reseller",
      desc: "As the authorized reseller of <a style='color:#337DB9' href='#/services/douyin'>Douyin<a/> and <a style='color:#337DB9' href='#/services/toutiao'>Toutiao<a/> alongside with many other strong advertising partnerships, AsiaPac customizes effective inbound digital marketing strategies for your brand’s success in China ecommerce.",
    },
    {
      title: "Award-winning China Ecommerce Marketing",
      desc: "AsiaPac is in the knowhow of China ecommerce marketing of multiple industries from fashion apparels, cosmetics to FMCG, and proven with <a style='color:#337DB9' href='#/about'>numerous outstanding awards<a/>. With our leading <a style='color:#337DB9' href='#/tech-data'>big data and automation technology<a/>, capturing the potential customers in China market is easy-peasy.",
    },
    {
      title: "Localization with China Office Support",
      desc: "AsiaPac has more than eight offices around Asia, understanding both China and your market landscapes. Our creative talents are confident in tailoring Chinese creatives which are deliverable to the locals and generate satisfying performance for your China ecommerce.",
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

      <div className="w-full bg-white">
        <div className="w-960 mx-auto text-[#231F20] text-56 leading-70 font-black text-center mt-160 wow animate__animated animate__jackInTheBox">
          REGISTER ON CHINA ECOMMERCE PLATFORMS
        </div>
        <div
          className="w-762 h-88 mx-auto flex justify-between mt-60 wow animate__animated animate__fadeInUp"
          style={{
            backgroundImage: `url(${icons})`,
            backgroundSize: "100% 100%",
          }}
        ></div>
        <div className="w-960 mx-auto mt-60 mb-160 text-24 leading-35 font-black text-center wow animate__animated animate__jackInTheBox">
          <div className="mb-40">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "Generating a total revenue of 1,543 billion last year, China ecommerce market is unquestionably the largest in the world. Propelled by the maturely devloped search, social commerce, logistics and payment features, Tmall, <a style='color:#337DB9' href='#/services/douyin'>Douyin<a/> Flagship Store, <a style='color:#337DB9' href='#/services/wechat'>WeChat<a/> Store and <a style='color:#337DB9' href='#/services/xiaohongshu'>Xiaohongshu<a/> are the go-to China ecommerce platforms. Gain exponential sales growth by exposing your brand on these marketplaces and start your China ecommerce marketing today.",
              }}
            />
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "What works in your country doesn't work in China which has over 800+ million digital shoppers across 31 provinces with diverse regional consumer behaviour and cultural background. Getting overwhelmed by the complexity of China ecommerce market? Don't worry as your brand will be in good hands of <a style='color:#337DB9' href='#/about'>AsiaPac<a/>, the top China ecommerce marketing agency with numerous awards of recognition.",
              }}
            />
          </div>
        </div>
      </div>

      <div className="bg-white w-full pb-260">
        <div className="w-960 text-[#231F20] text-56 leading-70 font-black text-center mx-auto mb-60 wow animate__animated animate__jackInTheBox">
          ASIAPAC’S STRATEGIC CHINA ECOMMERCE MARKETING SERVICES
        </div>
        <div
          className="w-960 h-903 mx-auto text-white pl-60 pr-60 pt-100"
          style={{
            backgroundImage: `url(${service})`,
            backgroundSize: "100% 100%",
          }}
        >
          {mapList([
            {
              title: "Activate China Ecommerce Platforms",
              ads: [
                { sub: "Thorough Brand Audit" },
                {
                  sub: "Market Entry Planning",
                },
                { sub: "China Ecommerce Stores Opening Documentations" },
                { sub: "China Ecommerce Platform Registrations" },
              ],
            },
            {
              title: "One-stop China Ecommerce Marketing",
              ads: [
                { sub: "Market and Competitor Analysis" },
                {
                  sub: "Integrated Inbound China Ecommerce Marketing Strategy",
                },
                { sub: "SEO, SEM, Social Media, KOL Marketing and more" },
                { sub: "Digital Performance Optimization & Reporting" },
              ],
            },
            {
              title: "Localized China Ecommerce Marketing Strategy",
              ads: [
                { sub: "Localized Keywords in Mandarin" },
                {
                  sub: "Regionally Localized Content with Latest Trends",
                },
                { sub: "Synchronize China Ecommerce Stores with Your Website" },
                { sub: "Localized Shopping Experience for Chinese" },
              ],
            },
            {
              title: "Hassle-free China Ecommerce Management",
              ads: [
                { sub: "China Ecommerce Payment" },
                {
                  sub: "China Ecommerce Taxation & Policy",
                },
                { sub: "China Ecommerce Warehouses & Logistics" },
                { sub: "China Ecommerce Store Operation & Customer Service" },
              ],
            },
          ])}
        </div>
      </div>

      <WhyDescBox
        title="WHY ASIAPAC AS CHINA ECOMMERCE MARKETING AGENCY?"
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
