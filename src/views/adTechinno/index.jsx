import bg3 from "@/assets/about_us/bg2.png";
import adTechinno from "@/assets/about_us/adTechinno.jpg";
import desc1 from "@/assets/adtechinno/desc-bg1.svg";
import desc2 from "@/assets/adtechinno/desc-bg2.svg";
import desc3 from "@/assets/adtechinno/desc-bg3.svg";

import products2 from "@/assets/about_us/products1.png";
import products1 from "@/assets/about_us/products2.png";
import products3 from "@/assets/about_us/products3.png";
import arrowRight from "@/assets/arrow-right.svg";

import BannerBox from "@/businessComponents/BannerBox";
import DescAndImgBox from "@/businessComponents/DescAndImgBox";
import bg from "@/assets/adtechinno/bg.png";
import "./index.css";

export default function AboutUs() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "AdTechinno",
    bgImg: bg,
    description: "Leading Digital Marketing Technology Innovator",
    className: "adTechinno-banner-box",
  };
  const graphicDescriptionInfoList = [
    {
      title: "Your Best Fit For Effortless PPC Management",
      desc: (
        <span>
          Asia’s first Google and Meta ad management and optimization tool
          powered by AI technology, big data & cloud computing. With
          step-by-step recommendations for optimizing cross-platform ads,
          graphical performance reports, diagnostic analysis, and competitor
          monitoring, you can effectively manage your digital marketing
          campaigns without the headaches and time wastage.
        </span>
      ),
      bgImg: desc1,
      img: products1,
      className: "bg-[#FEFAF8]",
      align: "right",
    },
    {
      title: "Your AI-driven Influencer Management Platform",
      desc: (
        <span>
          Gain access to our 200,000+ influencer data across 9 Asian regions on
          popular platforms like Facebook, Instagram, YouTube, TikTok,
          <a className="text-[#337DB9]" href="#/services/xiaohongshu">
            &nbsp;XiaoHongShu,
          </a>
          <a className="text-[#337DB9]" href="#/services/wechat">
            &nbsp;Wechat&nbsp;
          </a>
          and more, you can discover the perfect influencer for your KOL
          marketing campaigns across 15+ industries. Our exclusive brand
          comparison tool enables you to monitor and analyse competitors,
          ensuring you stay ahead in the market.
        </span>
      ),
      bgImg: desc2,
      img: products2,
      className: "bg-[#fff]",
      align: "left",
    },
    {
      title: `Your One-Stop Programmatic Advertising Platform Of Choice`,
      desc: (
        <span>
          Proprietary{" "}
          <a className="text-[#337DB9]" href="#/services/taboola">
            programmatic advertising
          </a>{" "}
          platform for advertisers to reach the right audiences at the right
          time. Operating across 80+ ad exchanges in 50+ markets in Asia Pacific
          regions, APHub offers advanced technology to enable super-targeting,
          real-time personalised bidding, omnichannel marketing campaigns and
          bilingual AI banner content. Reach the right audiences at the right
          time with cross SSP platform support with effective remarketing.
          Maximise your programmatic advertising impact with APHub now.
        </span>
      ),
      bgImg: desc3,
      img: products3,
      className: "bg-[#EEF4F6]",
      align: "right",
    },
  ];

  return (
    <div className="min-h-screen  flex flex-col leading-[30px]">
      <BannerBox
        {...bannerBoxProps}
        renderAfterContent={
          <button
            onClick={handleGotoContactUs}
            className="mx-auto mt-42 bg-[#fff] text-[#337DB9] h-36 w-148 rounded-18 font-semibold leading-36 flex flex-row items-center justify-center gap-10 hover:opacity-60"
          >
            Contact Us
            <img src={arrowRight} alt="arrow-right" className="w-10 h-16 " />
          </button>
        }
      />

      <section className="w-full about-us-bg pt-110 pb-160 bg-[#fff]">
        <section className=" w-900 mx-auto h-full text-center ">
          <div className="wow animate__animated animate__fadeInBottomLeft text-center">
            <img
              src={adTechinno}
              alt="Professional"
              className="w-[400px] h-[135px] z-20 mx-auto"
            />
          </div>

          <h1 className="wow animate__animated animate__jackInTheBox mt-28 font-black text-32 text-[#231F20] leading-36 ">
            Subsidiary of AsiaPac Group
          </h1>
          <div className="wow animate__animated animate__fadeInUp text-24 leading-35 text-[#337DB9] mt-20 w-full font-black">
            <p className="">
              Established in 2019, AdTechinno is a subsidiary of AsiaPac that
              has been at the forefront of AI digital technology and big data.
              With a focus on innovation, AdTechinno specialises in the
              development of cutting-edge digital marketing technologies that
              help businesses to stay ahead in the world of digital marketing.
            </p>
            <p className="mt-30">
              AdTechinno is proud to present our latest{" "}
              <a className="text-[#ED896F]" href="#/tech-data">
                self-developed AI tools
              </a>
              , including ad management platform (OptAdEasy), influencer
              management platform (KOOLER AI), programmatic advertising platform
              (APHub) and AI avatar app creator (Avatar+).
            </p>
          </div>
        </section>
      </section>

      <div className="w-full bg-[#fff]">
        <section className="w-900 mx-auto my-60 h-full text-center ">
          <h1 className="font-black text-56 leading-70 text-[#231F20]">
            AdTechinno Technology
          </h1>
        </section>
      </div>

      {graphicDescriptionInfoList.map((item, index) => (
        <DescAndImgBox key={index} {...item} />
      ))}

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
