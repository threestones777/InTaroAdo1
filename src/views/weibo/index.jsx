import BannerBox from "@/businessComponents/BannerBox";
import WhyDescBox from "@/businessComponents/whyDescBox";
import MultipleBoxDesc from "@/businessComponents/multipleBoxDesc";
import "./index.css";
import AppDataBox from "@/businessComponents/appDataBox";
import AdOfferings from "@/businessComponents/adOfferings";

import bg from "@/assets/weibo/bg.png";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";
import weibo from "@/assets/weibo/weibo.png";
import ad1 from "@/assets/weibo/ad1.png";
import ad2 from "@/assets/weibo/ad2.png";
import ad3 from "@/assets/weibo/ad3.png";
import ad4 from "@/assets/weibo/ad4.png";
import media from "@/assets/weibo/media.png";
import users from "@/assets/weibo/users.png";
import number from "@/assets/weibo/number.png";

export default function WeiBo() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const handleClick = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "Weibo Advertising Agency",
    description:
      "As the official global Weibo Reseller, AsiaPac knows Sina Weibo and China social media marketing tactics well enough to boost your sales and brand reputation over the 593 million target audience.",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const appData = [
    {
      img: media,
      title: "2nd",
      description: "Largest Social Media Platform in China",
    },
    {
      img: users,
      title: "593M",
      description: "Monthly Active Users",
    },
    {
      img: number,
      title: "64K+",
      description: "Average number of Weibo posts per minute",
    },
  ];

  const adList = [
    {
      img: ad1,
      title: "WeChat Banner Ads",
      description:
        "A full-screen image or video banner displayed when the Weibo app is opened.",
    },
    {
      img: ad2,
      title: "WeChat Mini-Programs Ad",
      description:
        "Popular Weibo in-feed ads like Fan Headline and Fan Tunnel display posts at the top of followers’ feeds.",
    },
    {
      img: ad3,
      title: "WeChat Moment Ad",
      description:
        "A real-time search engine promotes keywords and directs user to the Weibo account.",
    },
    {
      img: ad4,
      title: "WeChat Subscription Ad",
      description:
        "A variety of banners placed across the “Discover” and other sections on Weibo.",
    },
  ];

  const multipleBoxDescInfo = {
    title: "ASIAPAC’S STRATEGIC WEIBO ADVERTISING SERVICES",
    bgColor: "#F9F9F9",
    description: [
      {
        title: "Thorough Brand Evaluation",
        desc: "Similar to other China advertising platforms, Weibo abides by China’s internet laws with restrictions to certain industries. Don’t worry as AsiaPac will go through your company profile to make sure your investment in Weibo advertising will not be wasted at midpoint.",
        minHeight: 137,
      },
      {
        title: "Weibo Business Account Creation",
        desc: "Companies, government and organizations require a Weibo business account with a verified badge to show brand credibility and run Weibo marketing campaigns. AsiaPac will guide you step by step from preparing documents to customizing your Weibo business account.",
        minHeight: 137,
      },
      {
        title: "Viral Weibo Content",
        desc: "Weibo powerfully forges high ad exposure by features like Fan Tunnel. Together with AsiaPac’s on-point creatives based on local breaking news and culture, you are in good hands of maximizing word-of-mouth in a short Weibo marketing campaign period for your brand.",
        minHeight: 216,
      },
      {
        title: "Weibo KOL and Content Marketing",
        desc: "Nearly every industry in China uses Weibo to engage with their customers. Our social media experts specialize in <a style='color:#337DB9' href='#/services/influencer'>KOL collaboration<a/> across industries in forming impactful Weibo campaigns. To stand out from the mass, content strategy is also tailored to attract your target audience.",
        minHeight: 216,
      },
      {
        title: "Pinpoint Weibo Ad Delivery",
        desc: "Weibo users cluster mainly by their unique interests to form active communities. With AsiaPac’s <a style='color:#337DB9' href='#/tech-data'>AI digital technology and big data<a/>, Weibo ads’ targeting capability is powerful than ever to accurately serve your ads to the right group of audience.",
        minHeight: 216,
      },
      {
        title: "Weibo Performance Reporting",
        desc: "AsiaPac’s digital experts closely monitor your Weibo's platform and opts for the best Weibo optimization strategy for your brand. Weibo’s platform statistics will also be analyzed and visualized in an insightful performance report for you.",
        minHeight: 216,
      },
    ],
    btnText: "SEE OUR DIGITAL MARKETING FULL SERVICES",
    btnClick: handleClick,
  };

  const whyDescBoxDataList = [
    {
      title: "Official Global Weibo Reseller",
      desc: "Don’t be overwhelmed by Weibo’s 15+ ad products! As the official global Weibo Reseller, AsiaPac’s digital experts are well-versed in effective Weibo advertising tactics and management. Along with years of <a style='color:#337DB9' href='#/services/china-ecommerce'>China advertising<a/> experience and <a style='color:#337DB9' href='#/about'>award-recognizing background<a/>, AsiaPac will manage your Weibo account with promising results. Maximize your sales today!",
    },
    {
      title: "Community-based Weibo Content",
      desc: "Weibo users form communities by topics of interest. AsiaPac’s China content team is well experienced across industries, e.g. fashion, beauty, gaming and travelling, in creating effective ad and marketing content that attracts the full attention of your Weibo fans.",
    },
    {
      title: "Weibo KOLs Management and Media Network",
      desc: "AsiaPac’s self-developed KOL management platform, <a style='color:#337DB9' href='#/tech-data'>Centaurus AI<a/>, matches you with the right Weibo KOLs from amongst our 200,000+ KOL database. Our <a style='color:#337DB9' href='#/services/taboola'>extensive media network<a/> will further ramp up buzz for your brand by our access to 80+ major ad exchanges worldwide.",
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
        bg={weibo}
        description="Weibo advertising holds great potential with Weibo’s signature micro-blogging feature and social interest-oriented communities formed within the app. Since its launch by Sina Corporation in 2009, Weibo has been taking the lead amongst social media in China."
        data={appData}
      />

      <MultipleBoxDesc {...multipleBoxDescInfo} />

      {/* AD OFFERINGS */}
      <div className="w-full bg-white pt-160">
        <AdOfferings title="OVERVIEW OF WEIBO AD" column="2" data={adList} />
      </div>

      <WhyDescBox
        title="WHY ASIAPAC AS WEIBO ADVERTISING AGENCY?"
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
