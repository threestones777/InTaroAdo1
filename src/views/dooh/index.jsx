import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import MultipleBoxDesc from "@/businessComponents/multipleBoxDesc";
import "./index.css";

import bg from "@/assets/dooh/bg.png";
import what from "@/assets/dooh/what.png";
import line from "@/assets/dooh/line.png";
import car from "@/assets/dooh/car.png";
import night from "@/assets/dooh/night.png";
import women from "@/assets/dooh/women.png";
import service from "@/assets/dooh/service.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";
import logo_TheTradeDesk from "@/assets/dooh/logo_TheTradeDesk.png";
import logo_asiaray from "@/assets/dooh/logo_asiaray.png";
import logo_hivestack from "@/assets/dooh/logo_hivestack.png";
import logo_jcdecaux from "@/assets/dooh/logo_jcdecaux.png";
import logo_viooh from "@/assets/dooh/logo_viooh.png";
import logo_yahoo from "@/assets/dooh/logo_yahoo.png";
import logo_lantern_media from "@/assets/dooh/logo_lantern-media.png";
import logo_anjels_media from "@/assets/dooh/logo_anjels-media.png";
import logo_iqiyi from "@/assets/dooh/logo_iqiyi.png";
import logo_netflix from "@/assets/dooh/logo_netflix.png";
import logo_jtbc from "@/assets/dooh/logo_jtbc.png";
import logo_rakutentv from "@/assets/dooh/logo_rakutentv.png";
import logo_line_today from "@/assets/dooh/logo_line-today.png";
import logo_mytvsuper from "@/assets/dooh/logo_mytvsuper.png";
import logo_taboola from "@/assets/dooh/logo_taboola.png";
import logo_joox from "@/assets/dooh/logo_joox.png";
import logo_spotify from "@/assets/dooh/logo_spotify.png";
import logo_adtrue from "@/assets/dooh/logo_adtrue.png";
import logo_viu from "@/assets/dooh/logo_viu.png";

export default function Dooh() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "Programmatic Digital Out-Of-Home (pDOOH) Advertising",
    description: "",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const handleClick = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const multipleBoxDescInfo = {
    title: "ASIAPAC'S STRATEGIC PDOOH ADVERTISING SERVICES",
    bgColor: "#F9F9F9",
    description: [
      {
        title: "Exclusive, Worldwide Ad Inventory",
        desc: "AsiaPac has access to top DSPs across the world, namely The Trade Desk (TTD), Hivestack, JCDecaux, VIOOH etc., connecting your pDOOH ads on premium global ad networks in the omnichannel marketplace, including Connected TV (Netflix ad, MyTV Super Ad, iQiYi Ad), audio (Spotify ad, Joox ad), display (rich media ad), video, native, mobile, and of course, DOOH.",
        minHeight: 137,
      },
      {
        title: "One-Stop pDOOH Campaign Planning & Set Up",
        desc: "Running a pDOOH ad campaign may somehow be tough. AsiaPac team takes into account your ad objectives, from planning to creation to execution, we develop tailored pDOOH ad campaigns that align with your target audience and market, as well as be consistent with your other online media channels through remarketing, forming an effective omnichannel marketing strategy.",
        minHeight: 216,
      },
      {
        title: "Rich Audience Data Analysis",
        desc: "Our AI-powered platforms analyze 2+ billion active audience data, including audience interests, demographics, behavior, life events, trending topics, and lookalike and remarketing profiles. Based on your audience data, we pick the inventory that best suits your needs.",
        minHeight: 216,
      },
      {
        title: "Data-Driven pDOOH Ad Targeting",
        desc: "By leveraging multiple real-time cross-device audience data sources and custom audience segmentation, we ensure precise pDOOH ad targeting and retargeting to deliver the most relevant, personalized ads to your target audience at the right time and right place, across their entire user journey.",
        minHeight: 216,
      },
      {
        title: "High-Quality pDOOH Ad Creatives",
        desc: "Designing an impactful and dynamic ad creative is key. Supported by our programmatic platform and teams of creative experts, we are capable of producing straightforward yet eye-catching and compelling creative content along with A/B testing that can capture the audience's attention on their daily journeys, driving awareness and considerations.",
        minHeight: 216,
      },
      {
        title: "pDOOH Ad Performance Measurement",
        desc: "While real-time ad performance data visualization and reporting are possible with pDOOH, measuring a campaign's effectiveness can be challenging. AsiaPac's professionals analyze and keep track of all performance metrics, and make prompt optimization to triggers, creatives, and targeting to guarantee that performance aligns with your budget and KPIs.",
        minHeight: 137,
      },
    ],
    btnText: "SEE OUR DIGITAL MARKETING FULL SERVICES",
    btnClick: handleClick,
  };

  const adList = (data = []) => {
    return (
      <div className="text-left">
        {data.map((item, index) => {
          return (
            <div key={index} className="w-414">
              <p className="text-[#231F20] text-26 leading-28 font-black">
                {item.title}
              </p>
              <p className="font-['Helvetica'] font-medium mt-16 mb-24 text-14 leading-25">
                {item.desc}
              </p>
              <ul className="relative right-10">
                {item.ads.map((ad, key) => {
                  return (
                    <li key={key} className="mb-16">
                      <div className="w-14 h-14 rounded-14 bg-[#04586D] border-2 border-[#F1E1CF] inline-block ml-10 mr-13"></div>
                      <div className="inline-block w-360 align-top text-16 leading-25 font-bold">
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

  const imgList = (data = []) => {
    return (
      <div className="w-960 h-442 mx-auto flex flex-wrap justify-between">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="w-168 h-88 mb-30"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "100% 100%",
              }}
            ></div>
          );
        })}
      </div>
    );
  };

  const mapList = (data = []) => {
    return (
      <div className="w-960 mx-auto flex flex-wrap mb-110">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="w-480 wow animate__animated animate__fadeInUp"
            >
              <ul className="relative right-10">
                {item.ads.map((ad, key) => {
                  return (
                    <li key={key} className="mb-16">
                      <div className="w-14 h-14 rounded-14 bg-[#04586D] border-2 border-[#F1E1CF] inline-block ml-10 mr-13"></div>
                      <div className="inline-block w-360 align-top font-['Helvetica'] text-18 leading-27">
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
      title: "Localized Office Support on pDOOH",
      desc: "Whether you're targeting regional, national, or global audiences, our AsiaPac digital specialists in 9 countries are adept at navigating the intricacies of pDOOH advertising and comprehending all locations' market trends. With your specific objectives in mind, we customize marketing plans and select the right inventories to reach your global audiences.",
    },
    {
      title: "Full-Funnel Omnichannel Marketing Strategy",
      desc: "AsiaPac has 18+ years of profound experience in developing effective all-rounded digital marketing services, including <a style='color:#337DB9' href='#/services/sem'>SEM, <a/> <a style='color:#337DB9' href='#/services/seo'>SEO, <a/> <a style='color:#337DB9' href='#/services/content'>content, <a/> <a style='color:#337DB9' href='#/services/video'>video, <a/> <a style='color:#337DB9' href='#/services/social'>social, <a/> <a style='color:#337DB9' href='#/services/influencer'>KOL, <a/><a style='color:#337DB9' href='#/services/taboola'>programmatic<a/>, etc. We perfectly connect your pDOOH ad campaign with other marketing channels, ensuring a successful omnichannel marketing strategy.",
    },
    {
      title: "Self-Developed Technology Accelerates Performance",
      desc: "Aside from our extensive ad inventory that fosters pDOOH ad delivery, AsiaPac has self-developed big data and AI technology, enabling sophisticated audience data gathering and targeting and precise performance evaluation and optimization, pushing performance to the next level.",
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

      <div className="bg-white text-center wow animate__animated animate__fadeInUp">
        <div className="mt-160 mb-110 text-[#231F20] text-56 leading-70 font-black wow animate__animated animate__jackInTheBox">
          What is pDOOH?
        </div>
        <div
          className="w-960 h-400 mx-auto bg-[-30px_-30px] text-center rounded-24"
          style={{
            backgroundImage: `url(${what})`,
            backgroundSize: "107% 116%",
          }}
        >
          <p className="w-805 h-210 text-white mx-auto pt-95 text-24 leading-35 font-black wow animate__animated animate__jackInTheBox">
            Out-of-home advertising (OOH), as its name implies, is any
            advertising media that is found outside the home. As the world
            became more digitalized, traditional signage gradually gave way to
            digital signage, creating the digital out-of-home (DOOH). Along with
            the advent of programmatic technology, has opened the door to
            programmatic digital out-of-home (programmatic DOOH or pDOOH).
          </p>
        </div>
        <div
          className="mx-auto w-413 h-320"
          style={{
            backgroundImage: `url(${line})`,
            backgroundSize: "100% 100%",
          }}
        ></div>

        <div className="mx-auto w-960 flex justify-between mb-160">
          <div className="pt-93">
            {adList([
              {
                title: "Out-Of-Home (OOH) Advertising",
                desc: "A static image ad displayed on billboards, transit, bus    shelters, street furniture, etc.",
                ads: [
                  { sub: "Increase brand awareness and maximize visibility" },
                  {
                    sub: "Advertise in your desired location with a fixed creative size and format",
                  },
                ],
              },
            ])}
          </div>
          <div
            className="w-476 h-387 bg-[-4px_-4px]"
            style={{
              backgroundImage: `url(${car})`,
              backgroundSize: "102% 102%",
            }}
          ></div>
        </div>
      </div>

      <div className="bg-[#D7E8F4] w-full pt-160 pb-160">
        <div className="mx-auto w-960 flex justify-between">
          <div
            className="w-476 h-387 bg-[-4px_-4px] mr-70 wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${night})`,
              backgroundSize: "102% 102%",
            }}
          ></div>
          <div className="pt-5">
            {adList([
              {
                title: "Digital Out-Of-Home (DOOH) Advertising",
                desc: "Dynamic and data-driven digital media that appear on outdoor digital billboards and signage, LED screens, or on a network of screens.",
                ads: [
                  {
                    sub: "Hyper-targeting capabilities by geolocation, tracking party data, retargeting, etc.",
                  },
                  {
                    sub: "Omnichannel customer experience through seamless mobile and online platform integration",
                  },
                  {
                    sub: "Allow for changeable visuals, videos, and even interactive elements",
                  },
                ],
              },
            ])}
          </div>
        </div>
      </div>

      <div className="bg-[#fff] w-full pt-114 pb-115">
        <div className="mx-auto w-960 flex justify-between">
          <div className="pt-25">
            {adList([
              {
                title: "Programmatic Digital Out-Of-Home (pDOOH) Advertising",
                desc: "By harnessing programmatic technology, ad inventory buying and selling, targeting, ad delivery, and measurement across outdoor digital screens are all automated and real-time. Premium ad inventory e.g. MTR, bus stops, airports, etc., are now more affordable via pDOOH, while capable of reaching highly relevant clients.",
                ads: [
                  {
                    sub: "Automatic bid on ad inventory with ad exchange and demand-side platforms (DSPs)",
                  },
                  {
                    sub: "Personalized consumer ad experience automatically based on consumer behavior, audience mobility patterns, contextual targeting, etc.",
                  },
                  {
                    sub: "Better pDOOH ad campaign tracking, measurement, and analytics for further optimization",
                  },
                ],
              },
            ])}
          </div>
          <div
            className="w-476 h-387 bg-[-4px_-4px] ml-70 mt-86 wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${women})`,
              backgroundSize: "102% 102%",
            }}
          ></div>
        </div>
      </div>

      <div
        className="w-full h-786"
        style={{
          background: "linear-gradient( 136deg, #13334D 0%, #54358E 100%)",
        }}
      >
        <div className="w-900 text-36 leading-70 font-black text-white mx-auto mt-160 text-center wow animate__animated animate__jackInTheBox">
          {
            "pDOOH is establishing a new era ad format that works for every brand and marketer. No matter you have employed OOH before or not, it's your perfect timing to try out your very first offline + online integration campaign with an acceptable budget!"
          }
        </div>
        <div
          className="w-372 h-36 bg-white mx-auto text-center mt-80 text-[#337DB9] text-14 leading-20 font-semibold pt-8 rounded-4 hover:cursor-pointer font-['PingFangSC'] hover:opacity-60"
          onClick={() => handleGotoContactUs()}
        >
          {"TRY OUT NOW"}
          <img
            src={arrowRight}
            alt="arrow-right"
            className="w-10 h-16 inline-block ml-13"
          />
        </div>
      </div>

      <div className="bg-white w-full pb-160 pt-160">
        <div className="w-850 text-[#231F20] text-56 leading-70 font-black text-center mx-auto mb-60 wow animate__animated animate__jackInTheBox">
          WHY YOU NEED TO USE PDOOH
        </div>
        <div
          className="w-960 h-728 mx-auto text-white pl-60 pr-60 pt-70"
          style={{
            backgroundImage: `url(${service})`,
            backgroundSize: "100% 100%",
          }}
        >
          {mapList([
            {
              ads: [
                {
                  sub: "Interest-based pDOOH inventory bidding: You don't have to select and fix specific OOH placements.",
                },
                {
                  sub: "You can bid and select specific pDOOH placements according to your needs (e.g. Central/ CWB MTR station, Airport Express, Airport departure gate, high-speed railway), and deliver ads with timeslot or settings to minimize wastage and maximize results.",
                },
                {
                  sub: "Allows retargeting and online remarketing of those pDOOH viewers with various ad formats, such as video, rich media, banner, audio, etc. to maximize brand recall and build an effective branding campaign.",
                },
                {
                  sub: "Higher flexibility than IO buy: You can adjust your creative at a quicker turnaround time or pause your ads in case there are bad conditions like bad weather.",
                },
              ],
            },
            {
              ads: [
                { sub: "Lower entry budget compared to DOOH or outdoor ads." },
                {
                  sub: "Provides better measurement and attribution capabilities compared to traditional DOOH: You can track and analyze campaign performance in real time, gaining insights into impressions, engagement, conversions, and other key metrics. This data helps optimize campaigns and demonstrate the ROI of advertising efforts.",
                },
                {
                  sub: "Allows for A/B testing of different creatives, messages, or targeting parameters: You can compare performance metrics between different versions of ads and iterate on their campaigns based on data-driven insights.",
                },
                {
                  sub: "Provides advertisers with more interaction opportunities: Through touchscreens, QR codes, and mobile integrations, PDOOH campaigns engage viewers in interactive and immersive experiences.",
                },
              ],
            },
          ])}
        </div>
      </div>

      <MultipleBoxDesc {...multipleBoxDescInfo} />

      <div
        className="w-full bg-white"
        style={{
          background:
            "linear-gradient( 180deg, rgb(229, 238, 231) 0%, #FFF 100%)",
        }}
      >
        <div className="text-[#231F20] text-56 leading-70 font-black w-960 mx-auto text-center mt-160 mb-80 wow animate__animated animate__jackInTheBox">
          Access our premium pDOOH ad inventories with 290B+ monthly impressions
          across Asia Pacific regions.
        </div>
        <div className="w-960 h-442 mx-auto flex flex-wrap justify-between wow animate__animated animate__fadeInUp">
          {imgList([
            { img: logo_TheTradeDesk },
            { img: logo_asiaray },
            { img: logo_hivestack },
            { img: logo_jcdecaux },
            { img: logo_viooh },
            { img: logo_yahoo },
            { img: logo_lantern_media },
            { img: logo_anjels_media },
            { img: logo_iqiyi },
            { img: logo_netflix },
            { img: logo_jtbc },
            { img: logo_rakutentv },
            { img: logo_line_today },
            { img: logo_mytvsuper },
            { img: logo_taboola },
            { img: logo_joox },
            { img: logo_spotify },
            { img: logo_adtrue },
            { img: logo_viu },
            { img: "" },
          ])}
        </div>
        <div className="w-960 h-88 pt-30 mx-auto text-center bg-[#EAF1EB] mt-40 mb-160 text-22 leading-28 font-black">
          and many more…
        </div>
      </div>

      <WhyDescBox
        title="WHY US AS PDOOH ADVERTISING AGENCY?"
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
