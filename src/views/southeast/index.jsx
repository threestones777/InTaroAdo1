import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import "./index.css";

import bg from "@/assets/southeast/bg.png";
import service from "@/assets/southeast/service.png";
import icons from "@/assets/southeast/icons.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";

export default function Southeast() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "SEA Ecommerce Marketing Agency",
    description:
      "Southeast Asia’s ecommerce market ballooned to $90 billion in 2022 and is expected to reach $128 billion by 2025, demonstrating its limitless potential of employing Southeast Asia ecommerce marketing strategies now.",
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
                        <div dangerouslySetInnerHTML={{ __html: ad.sub }} />
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
      title: "Industry Leading Southeast Asia Ecommerce Marketing",
      desc: "You may be daunted by all manner of features and operations on Southeast Asia ecommerce platforms. With over 15 years of experience and an <a style='color:#337DB9' href='#/about'>award-recognizing establishment<a/>, we lay the groundwork for brands to capitalize on the Southeast Asia ecommerce market.",
    },
    {
      title: "Localized Context in Storefront & Creatives",
      desc: "Supported by a team of creative talents across Southeast Asia, AsiaPac manages to tailor your ecommerce storefronts and content to local culture and trends. Speak in their languages, your brand can flawlessly reach and engage with your targeted Southeast Asian audiences.",
    },
    {
      title: "Data Intelligence Rockets Performance",
      desc: "Accompanied by our <a style='color:#337DB9' href='#/tech-data'>big data and self-developed AI technology,<a/> our ecommerce professionals in Southeast Asia are competitive in creating bespoke ecommerce strategies for brands. We work with clients across industries, e.g. retail, cosmetics, apparel, FMCG, home appliances, and more.",
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
          REGISTER ON SOUTHEAST ASIA ECOMMERCE PLATFORMS
        </div>
        <div
          className="w-762 h-88 mx-auto flex justify-between mt-60 wow animate__animated animate__fadeInUp"
          style={{
            backgroundImage: `url(${icons})`,
            backgroundSize: "100% 100%",
          }}
        ></div>
        <div className="w-960 mx-auto mt-60 mb-160 text-24 leading-35 font-black text-center wow animate__animated animate__jackInTheBox">
          <p className="mb-40">
            Fueled by rapid urbanization and increased internet penetration,
            Southeast Asia ecommerce continues to grow in prevalence across
            countries. In recent years, the Southeast Asia market has witnessed
            fast expansion, with over 350 million online shoppers and an annual
            growth rate of 15.1%. Its capacity for brands to sell their products
            to a wide Southeast Asia audience is well-defined.
          </p>
          <p>
            In spite of the rising ecommerce consumption, the presence of a
            diverse range of ecommerce sites do the trick for foreign brands to
            offer their products to Southeast Asia consumers flexibly. Consumers
            in Southeast Asia are flocking to mainly four ecommerce platforms:
            Lazada, Shopee, Tiki, and Tokepedia, If you are struggling with
            Southeast Asia ecommerce marketing on these platforms, you need an
            agency with well-established experience in Southeast Asia digital
            marketing.{" "}
            <a className="text-[#337DB9]" href="#/contact">
              Contact us
            </a>{" "}
            now.
          </p>
        </div>
      </div>

      <div className="bg-white w-full pb-260">
        <div className="w-960 text-56 text-[#231F20] leading-70 font-black text-center mx-auto mb-60 wow animate__animated animate__jackInTheBox">
          ASIAPAC’S STRATEGIC SOUTHEAST ASIA ECOMMERCE MARKETING SERVICES
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
              title: "Stress-Free Southeast Asia Ecommerce Management",
              ads: [
                { sub: "Southeast Asia Ecommerce Payment & Currency" },
                {
                  sub: "Southeast Asia Ecommerce Payment & Currency",
                },
                { sub: "Southeast Asia Ecommerce Warehouses & Logistics" },
                { sub: "Southeast Asia Ecommerce Warehouses & Logistics" },
              ],
            },
            {
              title: "Southeast Asia Ecommerce Marketing in One Place",
              ads: [
                { sub: "Southeast Asia Market and Competitor Analysis" },
                {
                  sub: "Personalized Inbound Ecommerce Marketing Strategy",
                },
                {
                  sub: "SEO, SEM, <a style='text-decoration: underline;' href='#/services/social'>Social Media,<a/> <a style='text-decoration: underline;' href='#/services/influencer'> KOL Marketing<a/>",
                },
                {
                  sub: "Southeast Asia Ecommerce Performance Tracking & Reporting",
                },
              ],
            },
            {
              title: "Launch on Southeast Asia Ecommerce Platform",
              ads: [
                { sub: "Comprehensive Brand Audit" },
                {
                  sub: "Southeast Asia Ecommerce Planning",
                },
                { sub: "Native Legal Documents Preparation" },
                { sub: "SEA Ecommerce Store Set up" },
              ],
            },
            {
              title: "Southeast Asia Ecommerce Localization Strategy",
              ads: [
                { sub: "Localized Content in cultural context" },
                {
                  sub: "Regional-specific Language & SEO Keywords",
                },
                { sub: "Culturally Adaptive Customer Shopping Experience" },
                { sub: "Ecommerce Synchronization Across Channels" },
              ],
            },
          ])}
        </div>
      </div>

      <WhyDescBox
        title="WHY ASIAPAC AS SOUTHEAST ASIA ECOMMERCE MARKETING AGENCY?"
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
