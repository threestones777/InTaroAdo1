import bg3 from "@/assets/about_us/bg2.png";
import bg from "@/assets/techData/bg.png";
import bg2 from "@/assets/techData/bg2.png";
import products2 from "@/assets/techData/products1.png";
import products1 from "@/assets/techData/products2.png";
import products3 from "@/assets/techData/products3.png";
import arrowRight from "@/assets/arrow-right-none.svg";

import ad1 from "@/assets/techData/ad1.svg";
import ad2 from "@/assets/techData/ad2.svg";
import ad3 from "@/assets/techData/ad3.svg";
import ai1 from "@/assets/techData/ai1.svg";
import ai2 from "@/assets/techData/ai2.svg";
import ai3 from "@/assets/techData/ai3.svg";
import hub1 from "@/assets/techData/hub1.svg";
import hub2 from "@/assets/techData/hub2.svg";
import hub3 from "@/assets/techData/hub3.svg";

import BannerBox from "@/businessComponents/BannerBox";
import "./index.css";

export default function AboutUs() {
  const bannerBoxProps = {
    title: "Digital Technology: AI, Big Data & Cloud Computing",
    description:
      "Powered by strong AI digital technology and big data, our self-developed cloud computing platforms ensure clients win every micro-moment.",
    className: "tech-data-banner-box",
    bgImg: bg,
  };

  const renderItemList = (
    data = [],
    titleColor = "#231F20",
    descColor = "#337DB9"
  ) => {
    return (
      <div className="flex flex-row justify-center gap-30 mt-100">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[320px] flex flex-col items-center justify-center"
            >
              <img src={item.img} className="w-[100px] h-[100px] " />

              <h2
                className={`font-['Helvetica'] w-285 font-black text-46 leading-50 text-center mt-16 text-[${titleColor}]`}
              >
                {item.title}
              </h2>

              <p
                className={`font-['Helvetica'] font-black text-16 leading-25 text-center mt-10 text-[${descColor}] flex flex-row items-center gap-6 `}
              >
                <img
                  src={arrowRight}
                  className={`w-[16px] h-[16px] relative ${
                    item?.arrowCls || "hidden"
                  }`}
                />
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen  flex flex-col leading-[30px]">
      <BannerBox {...bannerBoxProps} />

      <section className="w-full bg-[#fff] pt-117 pb-160">
        <section className="w-900 mx-auto h-full text-center wow animate__animated animate__fadeInUp">
          <img src={products1} className="w-[480px] h-[120px] mx-auto " />

          <h1 className="font-black text-32 leading-36 text-center mt-36 text-[#231F20]  wow animate__animated animate__jackInTheBox">
            Your Best Fit For Effortless PPC Management
          </h1>

          {renderItemList([
            {
              img: ad1,
              title: "30%",
              arrowCls: "rotate-[270deg]",
              description: "in Avg. Conversions",
            },
            {
              img: ad2,
              title: "USD 1000M+",
              arrowCls: "hidden",
              description: "Total Ad Spend Analyzed",
            },
            {
              img: ad3,
              title: "30%",
              arrowCls: "rotate-[90deg]",
              description: " in Avg. CTR",
            },
          ])}

          <p className="font-black text-24 leading-35 text-center mt-60 text-[#3E3E46]  wow animate__animated animate__jackInTheBox">
            Centaurus Ad is Asia’s first digital advertising tool powered by AI
            technology, big data & cloud computing. With our step-by-step
            recommendations for effortless PPC campaign optimization, and
            detailed reports to weigh your performance among competitors,
            there’ll be no more headaches and time wasted. Easy. Effective.
            Stress-free.
          </p>
        </section>
      </section>

      <section
        className="w-full bg-[#fff] pt-184 pb-125 wow animate__animated animate__fadeInUp"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "100% 100%",
        }}
      >
        <section className="w-900 mx-auto h-full text-center ">
          <img src={products2} className="w-[480px] h-[120px] mx-auto " />

          <h1 className="font-black text-32 leading-36 text-center mt-36 text-[#fff]  wow animate__animated animate__jackInTheBox">
            Your AI-driven Influencer Management Platform
          </h1>

          {renderItemList(
            [
              {
                img: ai1,
                title: "200k+",
                description: "Total Influencers",
              },
              {
                img: ai2,
                title: "80M+",
                description: "Total Audience",
              },
              {
                img: ai3,
                title: "100B+",
                description: "Total Views",
              },
            ],
            "#fff",
            "#fff"
          )}

          <p className="font-black text-24 leading-35 text-center mt-60 text-[#fff]  wow animate__animated animate__jackInTheBox">
            Centaurus AI is your full-stack{" "}
            <a href="#/services/influencer" className="underline">
              influencer management
            </a>{" "}
            platform for brands and influencers. We use deep analytics to filter
            out the perfect influencer across{" "}
            <a href="#/services/industry-design" className="underline">
              15+ industries
            </a>{" "}
            e.g. beauty, technology, retail, finance etc, for businesses from
            our 200,000+ cross-platform influencer data in China and Asia, while
            influencers can easily pitch professionalized collaboration with
            least effort searching.{" "}
            <a href="#/services/content" className="underline">
              Content management
            </a>{" "}
            and analytical reporting? All done in one place. Sweat-free.
          </p>
        </section>
      </section>

      <section className="w-full bg-[#fff] pt-117 pb-160">
        <section className="w-900 mx-auto h-full text-center wow animate__animated animate__fadeInUp">
          <img src={products3} className="w-[480px] h-[120px] mx-auto " />

          <h1 className="font-black text-32 leading-36 text-center mt-36 text-[#231F20]  wow animate__animated animate__jackInTheBox">
            Your One-Stop Programmatic Advertising Platform Of Choice
          </h1>

          {renderItemList([
            {
              img: hub1,
              title: "80+",
              description: "Global Ad Exchanges",
            },
            {
              img: hub2,
              title: "50+",
              description: "Global and Local Partners",
            },
            {
              img: hub3,
              title: "5B+",
              description: "Daily Ad Impression",
            },
          ])}

          <p className="font-black text-24 leading-35 text-center mt-60 text-[#3E3E46]  wow animate__animated animate__jackInTheBox">
            APHub is our{" "}
            <a href="#/services/taboola" className="text-[#337DB9]">
              proprietary programmatic
            </a>{" "}
            advertising platform integrating local and global ad exchanges,
            boasting high-quality China and global ad placements, third-party
            audience data, wide array of creative formats and post-campaign
            reports. We leverage best in-class programmatic technology to enable
            clients’ advanced targeting and precise ad placements, more
            effectively than ever.
          </p>
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
