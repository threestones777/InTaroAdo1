import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import MultipleBoxDesc from "@/businessComponents/multipleBoxDesc";
import "./index.css";
import AppDataBox from "@/businessComponents/appDataBox";
import AdOfferings from "@/businessComponents/adOfferings";

import bg from "@/assets/baidu/bg.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";
import ad1 from "@/assets/baidu/ad1.png";
import ad2 from "@/assets/baidu/ad2.png";
import ad3 from "@/assets/baidu/ad3.png";
import ad4 from "@/assets/baidu/ad4.png";
import baidu from "@/assets/baidu/baidu.png";
import share from "@/assets/baidu/share.png";
import users from "@/assets/baidu/users.png";
import active from "@/assets/baidu/active.png";

export default function BaiDu() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const handleClick = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "Baidu Advertising Agency",
    description:
      "Baidu is the dominant SEM player in China, the 1.4 billion-populated market. What you need is an Asia-pacific experienced Baidu advertising agency, and AsiaPac is your absolute solution.",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const appData = [
    {
      img: share,
      title: "76%",
      description: "Search Engine Market Share",
    },
    {
      img: users,
      title: "544M",
      description: "Baidu App Monthly Active Users",
    },
    {
      img: active,
      title: "414M",
      description: "Baidu SMP Monthly Active Users",
    },
  ];

  const adList = [
    {
      img: ad1,
      title: "Brand Takeover",
      description:
        "A full-screen video ad, which appears for 3-5 seconds after Baidu app launches",
    },
    {
      img: ad2,
      title: "Search Ad",
      description:
        "A Baidu PPC ad appeared as one of the search results, available in customized formats",
    },
    {
      img: ad3,
      title: "In-Feed Ad",
      description:
        "A popular ad format with visuals and text to be placed in between Baidu’s organic content",
    },
    {
      img: ad4,
      title: "Brand Zone",
      description: "A branded area displayed as the top search result on Baidu",
    },
  ];

  const multipleBoxDescInfo = {
    title: "ASIAPAC’S STRATEGIC BAIDU ADVERTISING SERVICES",
    bgColor: "#F1F6F7",
    description: [
      {
        title: "In-depth Company Audit",
        desc: "Not every product is allowed to have paid Baidu advertising due to its strict regulations. To avoid being rejected after a lengthy business account setup, AsiaPac conducts a thorough company evaluation before offering you the best digital marketing solution in China.",
        minHeight: 137,
      },
      {
        title: "Baidu Business Account Creation",
        desc: "Baidu advertising is deemed to be constructed for Chinese marketers as its platform is only available in Mandarin unfortunately, not to mention the complex documentation and licenses. Let AsiaPac take care of your whole Baidu business account setup properly without headaches.",
        minHeight: 137,
      },
      {
        title: "AI-driven Baidu SEM",
        desc: "With Baidu’s well-known functionality in AI-targeting and accuracy, AsiaPac’s team masters in optimizing SEM campaigns and creates ad copies in the most localized context.",
        minHeight: 216,
      },
      {
        title: "One-stop Baidu Display Advertising",
        desc: "Baidu advertising connects your brand to 600K sites under its broad display network. Supported by our Chinese advertising talents, AsiaPac creates highly engaging display visuals with in-market language to get your brand incorporate in the China market.",
        minHeight: 216,
      },
      {
        title: "Technical Baidu SEO",
        desc: "From domain optimization, mobile friendliness to content creation, you will be in good hands with AsiaPac for your Baidu SEO ranking because we are in the know. Baidu Brand Zone Advertising is also a recommended strategy for your brand reach.",
        minHeight: 216,
      },
      {
        title: "Baidu Performance Reporting",
        desc: "Close account follow-up means quick response to eclipse your competitors. AsiaPac’s dedicated team generates intuitive, visualized reports of your Baidu advertising and performance campaign results regularly.",
        minHeight: 216,
      },
    ],
    btnText: "SEE OUR DIGITAL MARKETING FULL SERVICES",
    btnClick: handleClick,
  };

  const whyDescBoxDataList = [
    {
      title: "15+ Years’ Expertise in Baidu Ecosystem",
      desc: "AsiaPac is familiar with the rules of Baidu advertising, including Chinese legal advertising requirement and its large variety of ad formats. There are no longer barriers to entry as we will ensure your Baidu ads to gain high reach and hence sales growth in China.",
    },
    {
      title: "Localized Chinese Context in Ads",
      desc: "AsiaPac is familiar with the rules of Baidu advertising, including Chinese legal advertising requirement and its large variety of ad formats. There are no longer barriers to entry as we will ensure your Baidu ads to gain high reach and hence sales growth in China.",
    },
    {
      title: "International Office Support",
      desc: "We work with Australian, Thai, Korean and other brands, forging paths for them to enter China market. Wherever your company is from, AsiaPac offers bilingual support from our Hong Kong headquarter, native Mandarin experts as well as other local offices to navigate your Baidu advertising.",
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

      {/* 应用数据信息 */}
      <AppDataBox
        bg={baidu}
        description="Baidu is the largest search engine in China across both desktop and mobile, leading Sogou and Haosou. Together with its Smart Mini-Programs (SMP), Baidu advertising is an Anywhere Door to reach the 950+ million people of domestic internet usage in China."
        data={appData}
      />

      <MultipleBoxDesc {...multipleBoxDescInfo} />

      {/* AD OFFERINGS */}
      <div className="w-full bg-white pt-160">
        <AdOfferings title="OVERVIEW OF BAIDU AD" column="2" data={adList} />
      </div>

      <WhyDescBox
        title="WHY ASIAPAC AS BAIDU ADVERTISING AGENCY?"
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
