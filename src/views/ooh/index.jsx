import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import Tabs from "@/businessComponents/Tabs";
import Carousel from "@/businessComponents/Carousel";
import ContentCarousel from "@/businessComponents/ContentCarousel";
import "./index.css";

import bg from "@/assets/ooh/bg.png";
import what from "@/assets/ooh/what.png";
import hk1_domination from "@/assets/ooh/hk1_domination.jpg";
import hk1_sheet from "@/assets/ooh/hk1_sheet.jpg";
import hk1_concourse from "@/assets/ooh/hk1_concourse.jpg";
import hk2_shelter from "@/assets/ooh/hk2_shelter.jpg";
import hk2_Body from "@/assets/ooh/hk2_Body.jpg";
import hk2_seatback from "@/assets/ooh/hk2_seatback.jpg";
import hk3_domination from "@/assets/ooh/hk3_domination.jpg";
import hk3_Tram from "@/assets/ooh/hk3_Tram.jpg";
import hk3_Taxi from "@/assets/ooh/hk3_Taxi.jpg";
import hk4_Arrival from "@/assets/ooh/hk4_Arrival.jpg";
import hk4_departure from "@/assets/ooh/hk4_departure.jpg";
import hk4_stock from "@/assets/ooh/hk4_stock.jpg";
import hk5_13 from "@/assets/ooh/hk5_13.png";
import hk5_14 from "@/assets/ooh/hk5_14.png";
import hk5_15 from "@/assets/ooh/hk5_15.png";
import hk6_16 from "@/assets/ooh/hk6_16.png";
import hk6_17 from "@/assets/ooh/hk6_17.png";
import hk6_18 from "@/assets/ooh/hk6_18.png";
import hk7_19 from "@/assets/ooh/hk7_19.jpg";
import hk7_20 from "@/assets/ooh/hk7_20.jpg";
import hk7_21 from "@/assets/ooh/hk7_21.jpg";
import cn1_1 from "@/assets/ooh/cn1_1.png";
import cn1_2 from "@/assets/ooh/cn1_2.jpg";
import cn1_3 from "@/assets/ooh/cn1_3.jpg";
import cn2_4 from "@/assets/ooh/cn2_4.png";
import cn2_5 from "@/assets/ooh/cn2_5.jpg";
import cn2_6 from "@/assets/ooh/cn2_6.jpeg";
import cn3_7 from "@/assets/ooh/cn3_7.jpg";
import cn3_8 from "@/assets/ooh/cn3_8.jpg";
import cn3_9 from "@/assets/ooh/cn3_9.jpeg";
import cn4_10 from "@/assets/ooh/cn4_10.png";
import cn4_11 from "@/assets/ooh/cn4_11.jpg";
import cn4_12 from "@/assets/ooh/cn4_12.jpg";
import sea1_1 from "@/assets/ooh/sea1_1.png";
import sea1_2 from "@/assets/ooh/sea1_2.jpg";
import sea1_3 from "@/assets/ooh/sea1_3.png";
import sea2_4 from "@/assets/ooh/sea2_4.jpg";
import sea2_5 from "@/assets/ooh/sea2_5.jpg";
import sea2_6 from "@/assets/ooh/sea2_6.jpg";
import sea3_7 from "@/assets/ooh/sea3_7.jpg";
import sea3_8 from "@/assets/ooh/sea3_8.jpg";
import sea3_9 from "@/assets/ooh/sea3_9.jpg";
import sea4_10 from "@/assets/ooh/sea4_10.jpg";
import sea4_11 from "@/assets/ooh/sea4_11.jpg";
import sea4_12 from "@/assets/ooh/sea4_12.jpg";
import content1 from "@/assets/ooh/content1.jpg";
import content2 from "@/assets/ooh/content2.jpg";
import content3 from "@/assets/ooh/content3.jpg";
import content4 from "@/assets/ooh/content4.jpg";
import content5 from "@/assets/ooh/content5.jpg";
import content6 from "@/assets/ooh/content6.jpg";
import logo_jcdecaux from "@/assets/ooh/logo_jcdecaux.png";
import logo_asiaray from "@/assets/ooh/logo_asiaray.png";
import logo_focus from "@/assets/ooh/logo_focus.png";
import logo_media from "@/assets/ooh/logo_media.png";
import logo_big from "@/assets/ooh/logo_big.png";
import logo_chi from "@/assets/ooh/logo_chi.png";
import logo_plab from "@/assets/ooh/logo_plab.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";

export default function Ooh() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "Out-Of-Home (OOH) Advertising",
    description:
      "AsiaPac’s Out of Home Advertising service offers expertise, access to premium OOH inventory, cost efficiency, data analytics, and creative support, ensuring a comprehensive, impactful OOH advertising campaign while saving your time and effort.",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const whyDescBoxDataList = [
    {
      title: "Expertise with 20+ years of Experience",
      desc: "With more than 20 years of experience, AsiaPac leverages its deep expertise and localized knowledge across the APAC regions to stay ahead of OOH advertising trends and execute successful, results-driven campaigns.",
    },
    {
      title: "Full-Funnel Omnichannel Marketing Strategy",
      desc: "AsiaPac excels in delivering comprehensive digital marketing services, including <a style='color:#337DB9' href='#/services/sem'>SEM<a/>, <a style='color:#337DB9' href='#/services/seo'>SEO<a/>, <a style='color:#337DB9' href='#/services/content'>content creation<a/>, <a style='color:#337DB9' href='#/services/video'>video production<a/>, <a style='color:#337DB9' href='#/services/social'>social media<a/>, <a style='color:#337DB9' href='#/services/influencer'>influencer marketing<a/>, and <a style='color:#337DB9' href='#/services/taboola'>programmatic advertising<a/>. We seamlessly integrate your OOH ad campaign with other marketing channels to ensure a successful omnichannel strategy.",
    },
    {
      title: "Local Offices Support",
      desc: "Our team spans 11 Asian regions, possessing localized and in-depth market knowledge as well as industry know-how. This allows us to craft effective OOH media plans and ad strategies that deeply resonate with your target audience.",
    },
  ];

  const hk_images = [
    {
      ads: [
        {
          img: hk1_domination,
          title: "Domination Zone",
          sub: "MTR",
        },
        { img: hk1_sheet, title: "12-sheet with Panel Extension", sub: "MTR" },
        { img: hk1_concourse, title: "Concourse ", sub: "MTR" },
      ],
    },
    {
      ads: [
        {
          img: hk2_shelter,
          title: "Bus Shelter",
          sub: "Bus",
        },
        { img: hk2_Body, title: "Bus Body", sub: "Bus" },
        { img: hk2_seatback, title: "Bus Seat Back Sticker", sub: "Bus" },
      ],
    },
    {
      ads: [
        {
          img: hk3_domination,
          title: "Tram Shelter Flagship Domination",
          sub: "Transit",
        },
        { img: hk3_Tram, title: "Tram Body", sub: "Transit" },
        { img: hk3_Taxi, title: "Taxi Body", sub: "Transit" },
      ],
    },
    {
      ads: [
        {
          img: hk4_Arrival,
          title: "Arrival Hall",
          sub: "Airport",
        },
        { img: hk4_departure, title: "Departure Hall", sub: "Airport" },
        { img: hk4_stock, title: "Luggage Trolley", sub: "Airport" },
      ],
    },
    {
      ads: [
        {
          img: hk5_13,
          title: "Domination",
          sub: "High-speed Railway",
        },
        { img: hk5_14, title: "Wall Sticker", sub: "High-speed Railway" },
        { img: hk5_15, title: "Lightbox", sub: "High-speed Railway" },
      ],
    },
    {
      ads: [
        {
          img: hk6_16,
          title: "Cross-Harbour Tunnel",
          sub: "Billboard",
        },
        { img: hk6_17, title: "TST Star Ferry Pier", sub: "Billboard" },
        { img: hk6_18, title: "Central", sub: "Billboard" },
      ],
    },
    {
      ads: [
        {
          img: hk7_19,
          title: "Sogo",
          sub: "LED wall",
        },
        { img: hk7_20, title: "Times Square", sub: "LED wall" },
        { img: hk7_21, title: "Russell Street", sub: "LED wall" },
      ],
    },
  ];

  const cn_images = [
    {
      ads: [
        {
          img: cn1_1,
          title: "Lightbox",
          sub: "Airport",
        },
        { img: cn1_2, title: "Pillar Wrap", sub: "Airport" },
        { img: cn1_3, title: "Wall Wrap ", sub: "Airport" },
      ],
    },
    {
      ads: [
        {
          img: cn2_4,
          title: "12-Sheet Panels",
          sub: "Metro",
        },
        { img: cn2_5, title: "Train Wraps", sub: "Metro" },
        { img: cn2_6, title: "Brand station", sub: "Metro" },
      ],
    },
    {
      ads: [
        {
          img: cn3_7,
          title: "Bus Shelter",
          sub: "Bus",
        },
        { img: cn3_8, title: "Bus Body", sub: "Bus" },
        { img: cn3_9, title: "Bus Poster", sub: "Bus" },
      ],
    },
    {
      ads: [
        {
          img: cn4_10,
          title: "Shopping Mall LED Ｗall",
          sub: "Others",
        },
        { img: cn4_11, title: "Highway Billboard", sub: "Others" },
        { img: cn4_12, title: "Elevator advertising", sub: "Others" },
      ],
    },
  ];

  const sea_images = [
    {
      ads: [
        {
          img: sea1_1,
          title: "Lightbox",
          sub: "Airport",
        },
        { img: sea1_2, title: "Spectacular", sub: "Airport" },
        { img: sea1_3, title: "Tension Fabric Display ", sub: "Airport" },
      ],
    },
    {
      ads: [
        {
          img: sea2_4,
          title: "Train Wraps",
          sub: "Metro",
        },
        { img: sea2_5, title: "In-Train Hand Grips", sub: "Metro" },
        { img: sea2_6, title: "Lightbox", sub: "Metro" },
      ],
    },
    {
      ads: [
        {
          img: sea3_7,
          title: "Bus Body",
          sub: "Transit",
        },
        { img: sea3_8, title: "Grab in-car", sub: "Transit" },
        { img: sea3_9, title: "Taxi Body", sub: "Transit" },
      ],
    },
    {
      ads: [
        {
          img: sea4_10,
          title: "Shopping Mall Billboard",
          sub: "Others",
        },
        { img: sea4_11, title: "Highway Unipoles", sub: "Others" },
        { img: sea4_12, title: "Lift Media Advertising", sub: "Others" },
      ],
    },
  ];

  const tabs = [
    {
      label: "HongKong",
      content: (
        <div className="w-960 flex justify-center items-center">
          <Carousel images={hk_images} />
        </div>
      ),
    },
    {
      label: "China",
      content: (
        <div className="w-960 flex justify-center items-center">
          <Carousel images={cn_images} />
        </div>
      ),
    },
    {
      label: "SEA",
      content: (
        <div className="w-960 flex justify-center items-center">
          <Carousel images={sea_images} />
        </div>
      ),
    },
  ];

  const contents = [
    {
      img: content1,
      title: "Comprehensive OOH Advertising Planning",
      sub: "With 20 years of experience in the industry, AsiaPac will assist you in planning a comprehensive out-of-home (OOH) campaign that combines traditional OOH, digital OOH (DOOH), and <a style='color:#337DB9' href='#/services/programmatic-dooh'>programmatic DOOH (pDOOH) <a/>. This approach ensures a balance of cost efficiency while maximizing performance and insights. Our services encompass both OOH buying and planning, as well as creative strategy development. We ensure that every aspect of the campaign is cohesive and aligned with the overall marketing objectives.",
    },
    {
      img: content2,
      title: "Local and Global Reach",
      sub: "We provide a flexible and scalable solution that aligns with your business objectives, whether you’re looking to make a big impact in a specific area or expand your brand’s presence on a global stage. This dual capability allows us to support your growth and adapt to your evolving needs. With 14 local offices in APAC, our local experts are ready to assist you in planning, buying, and verifying OOH sites that deliver the greatest value to your team.",
    },
    {
      img: content3,
      title: "Media Planning & Buying",
      sub: "We have access to a vast network of prime advertising locations and established relationships with OOH media owners/agencies across the world, such as JCDecaux, Asiaray, Focus Media, Big Tree, Plan B, allowing us to select the best placements, formats, and times for your campaign and maximize its visibility and effectiveness.",
    },
    {
      img: content4,
      title: "Eye-Catching OOH Creative Development",
      sub: "Our creative team specializes in crafting visually stunning and engaging OOH advertisements that capture your target audience. From compelling billboards to captivating digital displays, we ensure your brand stands out in the crowded marketplace, leaving a lasting impression and delivering messages that resonate and drive results.",
    },
    {
      img: content5,
      title: "One-Stop Campaign Management",
      sub: "Managing an OOH campaign can be time-consuming. We take care of everything from coordinating ad installations to monitoring their performance. Our team handles the daily management of your OOH campaign, ensuring everything runs smoothly and stays on schedule.",
    },
    {
      img: content6,
      title: "OOH Campaign Performance Tracking",
      sub: "AsiaPac tracks the performance of your OOH campaign, offering holistic insights into its effectiveness. We employ a variety of metrics to measure key indicators such as reach, engagement, and ROI (Return On Investment). By analyzing these metrics, we provide you with a detailed understanding of how your campaign is performing as well as further optimization",
    },
  ];

  const imgList = (data = []) => {
    return (
      <div className="w-960 mx-auto flex flex-wrap justify-between">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="w-168 h-88"
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

      <div className="bg-white text-center">
        <div className="mt-160 mb-110 text-[#231F20] text-56 leading-70 font-black wow animate__animated animate__jackInTheBox">
          What is OOH?
        </div>
        <div
          className="w-960 h-400 mx-auto bg-[-30px_-30px] text-center mb-165 rounded-24"
          style={{
            backgroundImage: `url(${what})`,
            backgroundSize: "107% 116%",
          }}
        >
          <p className="w-830 h-210 text-white mx-auto pt-77 text-24 leading-35 font-black wow animate__animated animate__jackInTheBox">
            OOH advertising reaches consumers outside their homes, utilizing
            billboards, digital displays, public furniture, and other visually
            striking media showcased in high-traffic public locations. OOH ads
            present a compelling alternative to online advertising. Unlike
            digital ads, OOH ads are non-skippable, ensuring your message is
            seen. Their large size and presence in the real-world environment
            make them highly impactful, capturing consumer attention in a unique
            and memorable way.
          </p>
        </div>
      </div>

      <div className="bg-[#F3F3F4] text-center">
        <div className="w-960 mx-auto mt-160 text-[#231F20] text-56 leading-70 font-black wow animate__animated animate__jackInTheBox">
          Explore The Popular OOH Ad Format Across Different Regions
        </div>
        <div className="w-860 mx-auto h-1000 mt-71 mb-160">
          <Tabs tabs={tabs} />
        </div>
      </div>

      <div className="bg-white text-center">
        <div className="w-900 mx-auto mt-160 text-[#231F20] text-56 leading-70 font-black wow animate__animated animate__jackInTheBox">
          Our Strategic OOH Advertising Services
        </div>
        <div className="w-860 mx-auto h-1000 mt-71 mb-160">
          <ContentCarousel contents={contents} />
        </div>
      </div>

      <div
        className="w-full bg-white"
        style={{
          background:
            "linear-gradient( 180deg, rgb(229, 238, 231) 0%, #FFF 100%)",
        }}
      >
        <div className="text-[#231F20] text-56 leading-70 font-black w-960 mx-auto text-center mt-160 wow animate__animated animate__jackInTheBox">
          We’re Your Trusted OOH Advertising Partner,
        </div>
        <div className="text-[#231F20] text-56 leading-70 font-black w-960 mx-auto text-center mb-80 wow animate__animated animate__jackInTheBox">
          Backed by a Network of Leading Industry Collaborators.
        </div>
        <div className="w-960 mx-auto flex flex-wrap justify-between wow animate__animated animate__fadeInUp">
          {imgList([
            { img: logo_jcdecaux },
            { img: logo_asiaray },
            { img: logo_focus },
            { img: logo_media },
            { img: logo_big },
          ])}
        </div>
        <div className="w-366 mx-auto mt-30 mb-160 flex flex-wrap justify-between wow animate__animated animate__fadeInUp">
          {imgList([{ img: logo_chi }, { img: logo_plab }])}
        </div>
      </div>

      <WhyDescBox
        title="Why Us As OOH Advertising Agency?"
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
