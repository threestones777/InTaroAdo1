import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import MultipleBoxDesc from "@/businessComponents/multipleBoxDesc";
import AppBox from "@/businessComponents/appBox";
import "./index.css";

import why1 from "@/assets/audio/1.png";
import why2 from "@/assets/audio/2.png";
import why3 from "@/assets/audio/3.png";
import why4 from "@/assets/audio/4.png";
import why5 from "@/assets/audio/5.png";
import bg from "@/assets/audio/bg.png";
import whatIs from "@/assets/audio/whatIs.png";
import ads from "@/assets/audio/ads.png";
import click from "@/assets/audio/click.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";

export default function Audio() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const handleClick = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const clickList = (data = []) => {
    return (
      <div className="py-80">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="w-618 flex wow animate__animated animate__fadeInUp pl-42 mb-50"
            >
              <div
                className="w-30 h-30"
                style={{
                  backgroundImage: `url(${click})`,
                  backgroundSize: "100% 100%",
                }}
              ></div>
              <div className="w-580 relative left-20">
                <p className=" text-32 leading-36 mb-18 font-black text-[#231F20]">
                  {item.title}
                </p>
                <p className="text-14 leading-25 font-['Helvetica'] font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // why need key={index}
  const needList = (data = []) => {
    return (
      <div className="w-990 mx-auto flex flex-wrap justify-center">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="w-300 h-422 text-left pl-28 pr-28 mr-30 wow animate__animated animate__fadeInUp"
            >
              <div
                className="w-50 h-50 mb-32"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-22 leading-28 mb-16 font-black text-[#231F20]">
                {item.title}
              </p>
              <p className="text-14 leading-25 font-['Helvetica'] font-medium ">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  const bannerBoxProps = {
    title: "Audio Advertising",
    description: "",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const multipleBoxDescInfo = {
    title: "Our Strategic Audio Advertising Services",
    description: [
      {
        title: "Consultation & Strategic Audio Ad Planning",
        desc: "We conduct in-depth consultations to get a thorough understanding of your brand, target audience, and campaign objectives. We develop tailored strategies that align with your audio campaign goals and leverage the unique strengths of audio platforms.",
        minHeight: 291,
      },
      {
        title: "Exclusive Premium Ad Inventory",
        desc: "Partnered with top DSPs such as The Trade Desk, AsiaPac access to premium ad inventory on different audio platforms including Spotify, JOOX, Triton etc, provide the greatest reach and engagement with your target audience.",
        minHeight: 291,
      },
      {
        title: "One-Stop Audio Ad Campaign Set Up & Production",
        desc: "Our localized creative team excels at crafting engaging and memorable audio content that resonates with your targeted audience. From scriptwriting to voice-over selection, we ensure every element of your audio ad captures attention and delivers your brand message effectively.",
        minHeight: 216,
      },
      {
        title: "Integration with Multichannel Marketing",
        desc: "The power of audio advertising lands at remarketing. By extending your audio ads with various digital marketing channels such as connected TV (CTV), <a style='color:#337DB9' href='#/services/programmatic-dooh'>pDOOH<a/>, <a style='color:#337DB9' href='#/services/display'>display<a/> and <a style='color:#337DB9' href='#/services/video'>video<a/> etc, we seamlessly integrate your brand message into a cohesive omnichannel experience to achieve remarketing, enhancing brand recall and maximizing conversions.",
        minHeight: 216,
      },
      {
        title: "Precise Audio Ad Targeting & Remarketing",
        desc: "We utilize advanced targeting capabilities to ensure your audio ads reach the right audience. By leveraging our self-developed programmatic solution, we analyse over 2 billion active audience data including demographics, interests, and behavior so that we can precisely target your audio ads to maximize their relevance and impact.",
      },
      {
        title: "Audio Ad Performance Evaluation & Data-Driven Optimization",
        desc: "We leverage data analytics and continuous monitoring to optimize your audio ad campaigns. We track key metrics such as reach, frequency, and conversions to measure campaign performance. These insights allow us to fine-tune strategies, make optimizations, and maximize the effectiveness of your audio ad efforts.",
        minHeight: 216,
      },
    ],
    btnText: "SEE OUR DIGITAL MARKETING FULL SERVICES",
    btnClick: handleClick,
  };

  const whyDescBoxDataList = [
    {
      title: "Expertise with 18+ years of Experience",
      desc: "With over 18 years of experience in comprehensive digital marketing, AsiaPac possesses the expertise and localised knowledge in APAC regions to stay on top of the trends in audio advertising and deliver successful campaigns that drive results.",
    },
    {
      title: "Diversified Omnichannel Marketing Strategy",
      desc: "AsiaPac offers a full-funnel omnichannel marketing strategy, including <a style='color:#337DB9' href='#/services/sem'>SEM<a/>, <a style='color:#337DB9' href='#/services/seo'>SEO<a/>, <a style='color:#337DB9' href='#/services/content'>content<a/>,<a style='color:#337DB9' href='#/services/video'>video<a/>, <a style='color:#337DB9' href='#/services/social'>social<a/>, <a style='color:#337DB9' href='#/services/influencer'>KOL<a/>, <a style='color:#337DB9' href='#/services/taboola'>programmatic<a/>, <a style='color:#337DB9' href='#/services/programmatic-dooh'>pDOOH<a/> etc. By integrating your audio adcampaign with these channels, we ensurea cohesive and impactful marketingstrategy that maximizes your brand's reachand impact.",
    },
    {
      title: "Data-Driven and Campaign Optimization",
      desc: "Through utilizing substantial big data and AI algorithms to gather insights and optimize advertising campaigns, our specialists help you target the right audience, and continuously optimize your audio ad campaigns for better performance.",
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

      <div className="bg-white w-full">
        <div className="mx-auto w-900 text-center text-[#337DB9] text-24 leading-35 mt-160 mb-160 font-black wow animate__animated animate__jackInTheBox">
          {
            "In today's digital landscape, audio advertising offers a unique opportunity to connect with target audiences during their daily activities, whether they are commuting, working out, or relaxing at home. By leveraging audio platforms such as radio, music streaming services, podcasts, and voice-enabled devices, advertisers can captivate listeners with outstanding messages that resonate and leave a lasting impact."
          }
        </div>
      </div>

      <div
        className="w-full h-648 text-white text-center "
        style={{ backgroundImage: `url(${whatIs})` }}
      >
        <div className="text-56 leading-70 mt-160 font-black wow animate__animated animate__jackInTheBox">
          What is Audio Advertising?
        </div>
        <div className="w-900 mx-auto mt-48 text-24 leading-35 font-black wow animate__animated animate__jackInTheBox">
          Audio advertising involves delivering promotional messages through
          online streaming platforms such as radio, music streaming applications
          and podcasts. It allows you to reach listeners with targeted audio ads
          that capture their attention and deliver your brand message
          effectively. A finding shows that 60% of podcast listeners have made a
          purchase after listening to an audio ad on a podcast. This statistic
          demonstrates the effectiveness of audio ads in generating conversions.
        </div>
      </div>

      <div className="bg-white pt-160 pb-160">
        <div className="w-960 h-722 mx-auto flex">
          <div
            className="w-300 h-722 wow animate__animated animate__fadeInUp bg-[-18px_-17px]"
            style={{
              backgroundImage: `url(${ads})`,
              backgroundSize: "113% 105%",
            }}
          ></div>
          {clickList([
            {
              title: "Dynamic Audio Ads",
              description:
                "Dynamic Audio Ads are personalized audio messages dynamically generated by harnessing the audiences’ data in real-time. Leveraging data and technology, these ads adapt to factors such as location, weather and listening history, delivering relevant and resonant messages to the right listeners with engaging advertising experiences.",
            },
            {
              title: "Sequential Audio Ads",
              description:
                "Sequential Audio Ads involve delivering a series of audio ads in a specific order over time to tell a cohesive brand story. By strategically sequencing the ads, advertisers can create a narrative arc, build brand awareness, and guide listeners through a journey that ends with a compelling call-to-action.",
            },
            {
              title: "Pre-roll, Mid-roll, Post-roll Audio Ads",
              description:
                "Pre-roll, mid-roll, and post-roll audio ads are placement options for audio advertisements that are played before, during and after the audio content accordingly. Usually, these ads last for 15, 30, or 60 seconds. These placements help advertisers reach listeners at different stages of their audio experience.",
            },
          ])}
        </div>
      </div>

      {/* why need */}
      <div className="w-full bg-[#F9F4F3] text-center pt-160">
        <p className="text-50 text-[#231F20] leading-70 mb-60 font-black wow animate__animated animate__jackInTheBox">
          Why You Need Audio Advertising?
        </p>
        {needList([
          {
            img: why1,
            title: "Reach Engaged Audiences with Audio Ads",
            description:
              "Audio ads have the power to capture listeners' attention and create an immersive experience. By creating alluring and storytelling messages, audio ads can evoke emotions, build connections, and leave a lasting impact on the highly engaged audience.",
          },
          {
            img: why2,
            title: "Multi-Tasking Opportunities of Audio Ads",
            description:
              "Audio ads reach consumers while they are engaged in other activities such as exercising, commuting or working, allowing you to tap into their attention during moments when visual advertising may not be as effective.",
          },
          {
            img: why3,
            title: "Precise Audio Ad Targeting with Personalization",
            description:
              "Through dynamic audio ads, brands can create customized advertising content based on listener data such as demographics, interests, and behavior. It can enhance relevance and resonate with the audience, leading to higher engagement rates.",
          },
          {
            img: why4,
            title: "Brand Awareness and Recall of Audio Ads",
            description:
              "Audio ads allow brands to build brand awareness and have a higher recall rate through repetition and memorable jingles or taglines. By consistently delivering audio ads to a targeted audience, brands can reinforce their messaging, increase brand recognition, and enhance recall among the audience.",
          },
          {
            img: why5,
            title: "Cost-Effectiveness and Audio Ads Data Tracking",
            description:
              "Compared to other forms of advertising, audio advertising has lower costs. Programmatic audio ads allow brands to collect data on key metrics, track audiences’ behavior, and analyse the campaign results for optimization.",
          },
        ])}
      </div>

      <MultipleBoxDesc {...multipleBoxDescInfo} />

      <div className="bg-white">
        <div className="w-960 text-56 text-[#231F20] leading-70 mx-auto text-center font-black wow animate__animated animate__jackInTheBox">
          Access our premium Audio ad inventories across Asia Pacific regions
        </div>
      </div>
      <AppBox
        appList={[
          "joox",
          "desk",
          "apple",
          "spotify",
          "podcasts",
          "youtubeMusic",
          "tero",
          "acast",
          "zing",
          "noice",
        ]}
      />
      <div className="bg-white">
        <div className="bg-white w-960 mx-auto pb-72">
          <p className="bg-[#EAF2FA] p-30  text-22 leading-28 text-[#231F20] font-black text-center relative bottom-90">
            and many more…
          </p>
        </div>
      </div>

      <WhyDescBox
        title="Why Us as Audio Marketing Agency?"
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
