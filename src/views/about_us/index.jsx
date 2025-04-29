import bg from "@/assets/about_us/bg.png";
import bg3 from "@/assets/about_us/bg2.png";
import bg_our from "@/assets/about_us/bg3.png";
import adTechinno from "@/assets/about_us/adTechinno.jpg";
import desc1 from "@/assets/about_us/desc1.png";
import desc2 from "@/assets/about_us/desc2.png";
import desc3 from "@/assets/about_us/desc3.png";
import desc4 from "@/assets/about_us/desc4.png";
import desc5 from "@/assets/about_us/desc5.png";
import logo from "@/assets/about_us/logo.png";

import products1 from "@/assets/about_us/products1.png";
import products2 from "@/assets/about_us/products2.png";
import products3 from "@/assets/about_us/products3.png";
import arrowRight from "@/assets/arrow-right-white.svg";

import BannerBox from "@/businessComponents/BannerBox";
import GraphicDescriptionBox from "@/businessComponents/GraphicDescriptionBox";
import "./index.css";

export default function AboutUs() {
  const bannerBoxProps = {
    title: "ABOUT",
    description:
      "AsiaPac owns Asia’s leading digital advertising technology to step up clients’ performance-driven business, with AdTech being our subsidiary, and the innovative products OptAdEasy & KOOLER AI all developed by our own.",
    bgImg: bg,
    className: "about-banner-box",
  };
  const productsList = [
    {
      title: "Centaurus Ad",
      image: products2,
    },
    {
      title: "Centaurus AI",
      image: products1,
    },
    {
      title: "Centaurus Hub",
      image: products3,
    },
  ];
  const graphicDescriptionInfoList = [
    {
      title: "Big Data & Optimization Intelligence",
      desc: "Big data plays an important role in our digital marketing solutions, empowered by our 15+ years of experience. We plan, execute and optimize digital campaigns by data and audience-driven strategy and elevate results with cutting-edge analytic & our self-developed AI search optimization tool (Centaurus Ad). Our influencer management platform (Centaurus AI) uses deep analytics to select the perfect influencer for you. We help you push performance to next level.",
      img: desc1,
      className: "pt-110 bg-[#fff]",
      align: "left",
    },
    {
      title: "Powerful China Online Advertising Partnerships",
      desc: "Being Douyin advertising agency, the official Toutiao reseller, and with experience in managing different digital marketing platforms, our local China experts are familiar with China online advertising and social media platforms such as Douyin（抖音）, WeChat, Tencent QQ（騰訊QQ）, Baidu, Weibo, Xiaohongshu（小紅書）and Alibaba’s Youku（優酷）, etc. Trust us on inbound digital marketing in China and highly push your ROI.",
      img: desc2,
      className: "bg-[#D7E8F4]",
      align: "right",
    },
    {
      title: "Strong Global Online Advertising Partnerships",
      desc: "With Google Premier Partner, Yahoo Search Marketing Gold Authorized Reseller, Facebook Partner, Criteo Official Partner, Line Partner and Yandex Authorized Agency under our title, we have received premier support, official trainings, strategy consultations and recognitions on superb online advertising service. Together with expertise on local digital channels including Taiwan, Thailand, Malaysia, Singapore, Vietnam, Korea & Japan markets, we keep you ahead of the global competition and help you succeed with outbound digital marketing.",
      img: desc3,
      className: "bg-[#fff]",
      align: "left",
    },
    {
      title: "Digital Expertise in Vertical Industry",
      desc: "Wondering which digital marketing solution mix is effective for your brand and industry? We got this. Served 3000+ clients across the regions, our solution covers almost every industry, from Ecommerce, Gaming, Education, IT, Finance, Travel, FMCG, Beauty to Health products and more – we always have the best practices for you as we understand the consumer behaviors and conversion paths of your industry, thoroughly.",
      img: desc4,
      className: "bg-[#E1F3F3]",
      align: "right",
      btnChildren: (
        <a href="#/services/industry-design">
          <button className="mt-16 bg-[#337DB9] text-[#fff] text-14 h-36 w-414 rounded-4 leading-36 flex flex-row items-center justify-center gap-10 hover:opacity-60 font-['PingFangSC'] font-semibold">
            VIEW OUR INDUSTRY DIGITAL SOLUTION
            <img src={arrowRight} alt="arrow-right" className="w-16 h-16" />
          </button>
        </a>
      ),
    },
    {
      title: "Team of Certified Experts",
      desc: "At AsiaPac, we embrace new challenges and master digital marketing technologies with can-do spirit. Our performance-oriented account service team & digital marketing consultants are certified digital professionals. They are skilled and seasoned in managing integrated digital campaigns for multiple brands from Fortune 500 corporates to SMEs. Nothing is more rewarding and motivating than growing your business & ROI!",
      img: desc5,
      className: "bg-[#fff]",
      align: "left",
    },
  ];

  return (
    <div className="min-h-screen  flex flex-col leading-[30px]">
      <BannerBox {...bannerBoxProps} />

      <div
        className="w-516 h-506 fixed bottom-[177px] right-[-40px] wow animate__animated animate__jackInTheBox"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      ></div>

      <section className="w-full py-160 bg-[#fff]">
        <section className="min-box-1180 h-full text-center ">
          <h1 className="wow animate__animated animate__jackInTheBox  font-semibold text-56 text-[#231F20] leading-70 ">
            {"ASIAPAC'S SUBSIDIARY"}
          </h1>
          <div className="font-black wow animate__animated animate__fadeInUp text-32 leading-36 text-[#231F20] mt-20 w-full">
            AdTech Innovation Limited
          </div>

          <div className="wow animate__animated animate__fadeInBottomLeft mt-35 text-center">
            <img
              src={adTechinno}
              alt="Professional"
              className="w-[400px] h-[135px] z-20 mx-auto"
            />
          </div>
        </section>
      </section>

      <section
        className="w-full about-us-bg py-160 "
        style={{
          background:
            "linear-gradient(134deg, #D9DDE1 0%, #E8ECEC 45%, #A2BCC7 100%)",
        }}
      >
        <section className="min-box-1180 h-full text-center ">
          <h1 className="wow animate__animated animate__jackInTheBox  font-semibold text-56 text-[#231F20] leading-70 ">
            {"ASIAPAC'S SELF-DEVELOPED PRODUCTS"}
          </h1>
          <div className="wow animate__animated animate__fadeInUp text-32 leading-36 text-[color: #231F20;] mt-60 w-full flex flex-row justify-center gap-30 ">
            {productsList.map((item, index) => (
              <div
                key={index}
                className="w-[300px] z-20  px-15 pt-69 pb-80 bg-[#fff] rounded-20 img-animate"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-269 h-67 mx-auto "
                />
                <div className="font-black text-32 leading-36 text-[#337DB9] mt-71 text-center w-full">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="w-full pt-160 bg-[#fff]">
        <section className="min-box-1180 h-full mx-auto text-center ">
          <div className="w-900 h-full mx-auto">
            <h1 className="wow animate__animated animate__jackInTheBox  font-semibold text-56 text-[#231F20] leading-70 ">
              WE LEAD DIGITAL MARKETING TECHNOLOGY IN ASIA
            </h1>
            <div className="wow animate__animated animate__fadeInUp text-24 leading-35 font-black mt-60 w-full">
              Fuel up your customized digital marketing strategy, accelerate
              performance and drive business success by:
            </div>
          </div>
        </section>
      </section>

      {graphicDescriptionInfoList.map((item) => (
        <GraphicDescriptionBox key={item.title} {...item} />
      ))}

      <section
        className="w-full py-122 bg-[#fff]"
        style={{
          backgroundImage: `url(${bg_our})`,
          backgroundSize: "100% 100%",
        }}
      >
        <section className="min-box-1180 h-full mx-auto text-center ">
          <div className="w-900 h-full mx-auto">
            <h1 className="wow animate__animated animate__jackInTheBox  font-semibold text-56 text-[#fff] leading-70 ">
              Our Vision
            </h1>
            <div className="wow animate__animated animate__fadeInUp text-24 leading-35 text-[#fff] mt-60 w-full px-60 font-black">
              TO INNOVATE THE DIGITAL TECHNOLOGY WORLD AND BRING LONG-TERM VALUE
              TO BRANDS THROUGH PERFORMANCE-DRIVEN DIGITAL MARKETING SOLUTIONS
            </div>
          </div>
        </section>
      </section>

      <section className="w-full py-160 bg-[#F9F3F3]">
        <section className="min-box-1180 h-full mx-auto text-center ">
          <div className="w-900 h-full mx-auto">
            <h1 className="wow animate__animated animate__jackInTheBox  font-semibold text-56 text-[#231F20] leading-70 ">
              Our Mission
            </h1>
            <div className="wow animate__animated animate__fadeInUp text-24 leading-35 text-[#337DB9] mt-32 w-full font-black">
              We are committed to empowering brand owners on their digital
              journey to achieve ambitious business goals and to acquiring,
              retaining and growing customers via online channels including
              search engines, social media, websites and mobile applications,
              with the most advanced digital marketing technology solutions and
              outstanding services. It is our obligation to adopt strategic
              outbound digital marketing strategy to build global footprint for
              companies based in Asia-Pacific and to help international
              companies enter China and Asia-Pacific markets with our data and
              audience-driven inbound digital marketing strategy.
            </div>
          </div>
        </section>
      </section>

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
    </div>
  );
}
