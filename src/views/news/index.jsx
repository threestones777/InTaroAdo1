import bg3 from "@/assets/about_us/bg2.png";
import bg from "@/assets/news/bg.png";
import BannerBox from "@/businessComponents/BannerBox";
import "./index.css";

import key1 from "@/assets/news/key1.png";
import key2 from "@/assets/news/key2.jpg";
import key3 from "@/assets/news/key3.jpg";
import key4 from "@/assets/news/key4.jpg";
import key5 from "@/assets/news/key5.png";
import key6 from "@/assets/news/key6.jpg";
import key7 from "@/assets/news/key7.jpg";
import key8 from "@/assets/news/key8.jpg";
import key9 from "@/assets/news/key9.jpg";
import key10 from "@/assets/news/key10.jpg";
import key11 from "@/assets/news/key11.jpg";
import key12 from "@/assets/news/key12.jpg";
import key13 from "@/assets/news/key13.jpg";
import key14 from "@/assets/news/key14.jpg";
import key15 from "@/assets/news/key15.jpg";

export default function AboutUs() {
  const toNewDetail = (key) => {
    localStorage.setItem("newsKey", key);
    window.location.href = `${window.location.origin}/#/${"newsDetails"}`;
  };

  const bannerBoxProps = {
    title: "NEWS",
    description:
      "Our delicious news are served hot here, always be ready at the table.",
    className: "news-banner-box",
    bgImg: bg,
  };

  const dataSource = [
    {
      img: key1,
      description:
        "2025 Global Marketing Summit: AsiaPac Shenzhen × The Trade Desk – Dual Engines Powering Brand Success in the Asia-Pacific Market",
      id: "key1",
    },
    {
      img: key2,
      description:
        "Captivating Chinese Tourists: Strategies for Vietnamese Brands on Xiaohongshu & OOH",
      id: "key2",
    },
    {
      img: key3,
      description:
        "Unlock Strategic Cross-Border Insights: Win Over Chinese Consumers via Xiaohongshu & OOH",
      id: "key3",
    },
    {
      img: key4,
      description:
        "New Cross-Border Marketing Opportunities in 2025: Capturing the Asia-Pacific Market – Xiaohongshu & The Trade Desk Will Give You a Head Start! ",
      id: "key4",
    },
    {
      img: key5,
      description:
        "Engage Chinese Consumers: The Power of Xiaohongshu & OOH Advertising in Thailand ",
      id: "key5",
    },
    {
      img: key6,
      description:
        "Key Strategies for Thriving Among Chinese Digital Consumers on Xiaohongshu and Beyond",
      id: "key6",
    },
    {
      img: key7,
      description:
        "Harnessing China Digital Marketing: Your Key to Success through Xiaohongshu and Beyond",
      id: "key7",
    },
    {
      img: key8,
      description:
        "Creating Holiday Buzz: The Synergy of OOH and Xiaohongshu for Maximum Marketing Impact",
      id: "key8",
    },
    {
      img: key9,
      description:
        "Captivating Chinese and Asian Audiences for Singapore: Unleashing the Secrets to Cross-Border Success",
      id: "key9",
    },
    {
      img: key10,
      description:
        "Leveraging Trackable Omnichannel Strategy with Connected TV and pDOOH",
      id: "key10",
    },
    {
      img: key11,
      description: "InnoPreneur MeetUp — Digital Landscape in Mainland",
      id: "key11",
    },
    {
      img: key12,
      description:
        "Unleash the Power of Xiaohongshu: Successful Pathway in the Chinese Market for Global Brands",
      id: "key12",
    },
    {
      img: key13,
      description:
        "New era in Asia marketing: Expand your brand with pDOOH and omnichannel strategy",
      id: "key13",
    },
    {
      img: key14,
      description: "Webinar: Winning opportunity in Greater China",
      id: "key14",
    },
    {
      img: key15,
      description:
        "Webinar: The Secret to Explode Your Business Growth in Asia amid COVID-19",
      id: "key15",
    },
  ];

  return (
    <div className="min-h-screen  flex flex-col leading-[30px]">
      <BannerBox {...bannerBoxProps} />

      <section className="w-full pt-50 pb-42 bg-[#fff] relative">
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
                <div
                  className="w-full h-56 bg-[#F8F8FA] text-[#337DB9] text-14 leading-20 font-semibold text-center insight-detail-btn flex flex-row items-center justify-center gap-10  hover:cursor-pointer"
                  onClick={() => toNewDetail(item.id)}
                >
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
