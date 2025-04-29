import bg3 from "@/assets/about_us/bg2.png";
import icon from "@/assets/insight/icon.svg";
import bg from "@/assets/insight/bg.png";
import BannerBox from "@/businessComponents/BannerBox";
import "./index.css";
import insight1 from "@/assets/insight/insight1.jpg";
import insight2 from "@/assets/insight/insight2.jpg";
import insight3 from "@/assets/insight/insight3.jpg";
import insight4 from "@/assets/insight/insight4.jpg";
import insight5 from "@/assets/insight/insight5.jpg";
import insight6 from "@/assets/insight/insight6.jpg";
import insight7 from "@/assets/insight/insight7.jpg";
import insight8 from "@/assets/insight/insight8.jpg";
import insight9 from "@/assets/insight/insight9.jpg";
import insight10 from "@/assets/insight/insight10.jpg";
import insight11 from "@/assets/insight/insight11.jpg";
import insight12 from "@/assets/insight/insight12.jpg";
import insight13 from "@/assets/insight/insight13.jpg";
import insight14 from "@/assets/insight/insight14.jpg";
import insight15 from "@/assets/insight/insight15.jpg";
import insight16 from "@/assets/insight/insight16.jpg";
import insight17 from "@/assets/insight/insight17.jpg";
import insight18 from "@/assets/insight/insight18.jpg";

export default function Insight() {
  const bannerBoxProps = {
    title: "Digital Marketing Insight",
    bgImg: bg,
    description:
      "Level up your digital marketing skill with our all-rounded digital marketing insights across China and Asia.",
    className: "insight-banner-box",
  };

  const dataSource = [
    {
      img: insight1,
      description:
        "Why Programmatic Digital Out-of-Home (pDOOH) is Revolutionizing Advertising in Indonesia",
      id: "ad-campaign",
    },
    {
      img: insight2,
      description:
        "Essential Insights for Brands: The Rise of Social Media as the New Search Engine",
      id: "ad-campaign",
    },
    {
      img: insight3,
      description: "Indonesia Digital Marketing in 2024-2025",
      id: "ad-campaign",
    },
    {
      img: insight4,
      description:
        "Report: Amplify Your Brand with Chinese Travelers During Golden Week and Beyond",
      id: "ad-campaign",
    },
    {
      img: insight5,
      description:
        "Unlocking Digital Success: Key Influencer Marketing Trends in 2024",
      id: "ad-campaign",
    },
    {
      img: insight6,
      description:
        "Drive Success with PDOOH Advertising: The Future of Digital Marketing",
      id: "ad-campaign",
    },
    {
      img: insight7,
      description: "Xiaohongshu Marketing Strategies You Need to Know in 2023",
    },
    {
      img: insight8,
      description: "How TikTok Marketing Grows Your Business in 2023",
      id: "ad-campaign",
    },
    {
      img: insight9,
      description: "Vietnam Digital Marketing 2022",
      id: "ad-campaign",
    },
    {
      img: insight10,
      description: "Thailand Digital Marketing 2022",
      id: "ad-campaign",
    },
    {
      img: insight11,
      description: "Malaysia Digital Marketing 2022",
      id: "ad-campaign",
    },
    {
      img: insight12,
      description: "Singapore Digital Marketing 2022",
      id: "ad-campaign",
    },
    {
      img: insight13,
      description: "5 Creative Brands to Inspire Your TikTok Marketing",
      id: "ad-campaign",
    },
    {
      img: insight14,
      description: "NFT Marketing: Why You Need a Digital Marketing Agency",
      id: "ad-campaign",
    },
    {
      img: insight15,
      description: "Hong Kong Digital Marketing 2022",
      id: "ad-campaign",
    },
    {
      img: insight16,
      description: "How TikTok Shapes Social Commerce Across Industries 2022",
      id: "ad-campaign",
    },
    {
      img: insight17,
      description:
        "Digital Travel Marketing Strategies in 2022: Recovering in the Post-Pandemic World",
      id: "ad-campaign",
    },
    {
      img: insight18,
      description: "China Ecommerce 2022",
      id: "ad-campaign",
    },
  ];

  return (
    <div className="min-h-screen  flex flex-col leading-[30px]">
      <BannerBox {...bannerBoxProps} />

      <section className="w-full pt-285 pb-110 bg-[#fff] relative">
        <div className="w-268 h-268 rounded-[50%] absolute top-[-99px] left-[50%] translate-x-[-50%]">
          <img src={icon} className="w-254 h-254 object-cover px-14 py-14" />
        </div>
        <div className="min-box-900 h-full">
          <h1 className="text-center text-56 leading-70 text-[#231F20] font-semibold">
            {"ASIAPAC'S DIGITAL MARKETING ACHIEVEMENTS"}
          </h1>
          <p className="text-center text-24 leading-35 text-[#337DB9] font-black mt-60">
            {
              "One formula doesn't fit all industries and objectives. Let us show you some of our proud digital marketing campaigns."
            }
          </p>
        </div>
      </section>

      <section className="w-full pt-50 pb-42 bg-[#EEF4F6] relative">
        <div className="w-960 mx-auto h-full mx-auto flex flex-row justify-center items-start gap-30 flex-wrap">
          {dataSource.map((item, index) => {
            return (
              <div
                key={index}
                className="mb-10 w-[300px] h-[366px] bg-[#fff] overflow-hidden shadow-[0_0_4px_0_rgba(0,0,0,0.1)] rounded-15 flex flex-col items-center justify-start wow animate__animated animate__fadeInUp"
              >
                <div className="flex-1 flex flex-col items-center justify-start pt-10">
                  <div className="w-280 h-182 rounded-15 overflow-hidden img-animate transition-transform duration-300 hover:scale-110">
                    <img
                      src={item.img}
                      className="w-280 h-182 rounded-15 object-cover"
                    />
                  </div>

                  <p className="text-left text-16 leading-28 text-[#3E3E46] font-black px-22 mt-9 line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <div className="w-full h-56 bg-[#F8F8FA] text-[#337DB9] text-14 leading-20 font-semibold text-center insight-detail-btn flex flex-row items-center justify-center gap-10 hover:cursor-pointer">
                  DETAIL
                </div>
              </div>
            );
          })}
        </div>
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
