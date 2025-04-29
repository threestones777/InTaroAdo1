import BannerBox from "@/businessComponents/BannerBox";
import "./index.css";

import bg from "@/assets/industry/bg.png";
import industry1 from "@/assets/industry/industry1.svg";
import industry2 from "@/assets/industry/industry2.svg";
import industry3 from "@/assets/industry/industry3.svg";
import industry4 from "@/assets/industry/industry4.svg";
import industry5 from "@/assets/industry/industry5.svg";
import industry6 from "@/assets/industry/industry6.svg";
import industry7 from "@/assets/industry/industry7.svg";
import industry8 from "@/assets/industry/industry8.svg";
import industry9 from "@/assets/industry/industry9.svg";
import bg3 from "@/assets/about_us/bg2.png";
import arrowRight from "@/assets/arrow-right.svg";

export default function Industry() {
  const handleGotoContactUs = () => {
    window.location.href = `${window.location.origin}/#/contact`;
  };

  const bannerBoxProps = {
    title: "Industry Digital Marketing Services",
    description:
      "We care about one fact others may ignore: Different industries need different digital marketing services.",
    bgImg: bg,
    className: "sem-banner-box",
  };

  const mapList = (data = []) => {
    return (
      <div className="w-960 mx-auto grid grid-cols-3 justisy-items-center">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="relative wow animate__animated animate__fadeInUp"
            >
              <div
                className="w-300 mx-auto bg-[#337DB9] h-56 text-center pt-16 text-white rounded-bl-15 rounded-br-15 absolute bottom-30 hover:cursor-pointer"
                style={{
                  display: item.isSee ? "block" : "none",
                }}
              >
                {item.see}
              </div>
              <div className="w-300 h-614 mb-30 rounded-15 border-2 border-solid bg-white">
                <div
                  className="w-280 h-182 mx-auto mt-10"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "100% 100%",
                  }}
                ></div>
                <div className="text-22 leading-28 font-black text-[#231F20] mt-14 ml-22 mr-22 mb-18">
                  {item.title}
                </div>
                <div className=" font-['Helvetica'] font-medium ml-22 mr-22 text-14 leading-25">
                  {item.desc}
                </div>
              </div>
            </div>
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

      <div className="w-full bg-[#F9F9F9]">
        <div className="w-960 mx-auto text-center mt-160 text-50 leading-64 font-['Arial'] font-black text-[#103A70] mb-80 wow animate__animated animate__jackInTheBox">
          WE COVER ALL INDUSTRY DIGITAL MARKETING SERVICES
        </div>
        <div className="w-960 mx-auto grid grid-cols-3 justisy-items-center pb-160">
          {mapList([
            {
              img: industry1,
              title: "Education Digital Marketing",
              desc: "Our team experience in planning and executing hundreds of education digital marketing campaigns for info days, enrollments and a wide range of programs for Higher education, online education websites, etc. We can help you attract local and international students in China and worldwide. Our credibility is proven by long-standing support of well-known universities.",
              see: "SEE INSIGHT",
              isSee: false,
            },
            {
              img: industry2,
              title: "Banking & Finance Digital Marketing",
              desc: "Many institutions in the Banking and Finance industry remain stuck in traditional marketing. As a smarter one, you should realize Finance digital marketing strategy incredibly boost acquisitions and reduce cost per lead, as seen in our strategic plans for clients’ promotions of insurance, loan, IPO, etc.",
              see: "SEE SHOWCASE",
              isSee: false,
            },
            {
              img: industry3,
              title: "Beauty & Cosmetics Digital Marketing",
              desc: "Consumers rely on online reviews and beauty KOLs before making purchase decisions. Our influencer management platform uses deep analytics to select the perfect influencer for you. We have worked with well-known beauty centers, skincare and cosmetics brands to apply beauty digital marketing strategies and get them stunning ROIs.",
              see: "",
              isSee: false,
            },
            {
              img: industry4,
              title: "Property Digital Marketing",
              desc: "Our experience in China and overseas Property digital marketing has brought O2O traffic to shopping malls, and awareness to new property debuts and overseas properties. We help property developers and estate agency websites to capture leads online and convert them into valuations.",
              see: "",
              isSee: false,
            },
            {
              img: industry5,
              title: "FMCG Digital Marketing",
              desc: "Consumers’ decisions are easily changed in front of shelves. Our FMCG digital marketing strategies get your brand deep-rooted in consumers’ minds and engage with them to drive brand and product preferences and loyalty.",
              see: "",
              isSee: false,
            },
            {
              img: industry6,
              title: "Retail Digital Marketing",
              desc: "Customers compare a lot online before purchase. Our Retail digital marketing services help to strengthen your digital presence at multiple digital touch-points, constantly engage with your audience to build brand loyalty and boost sales.",
              see: "SEE SHOWCASE",
              isSee: false,
            },
            {
              img: industry7,
              title: "Ecommerce Digital Marketing",
              desc: "With our data-driven insights and audience-driven strategies on consumer behaviors in Ecommerce digital marketing, we precisely target your potential customers to stand out from competition and expand business to China and global. You will be amazed at the conversions we drive.",
              see: "",
              isSee: false,
            },
            {
              img: industry8,
              title: "Travel & Hospitality Digital Marketing",
              desc: "Our travel and hospitality digital marketing services drive international and Chinese traffic and bookings for hotels, airlines, OTAs and attractions, delivering the most out of our performance-driven solution mix.",
              see: "",
              isSee: false,
            },
            {
              img: industry9,
              title: "Automotive Digital Marketing",
              desc: "Test drive registrations, new model launches and auto show campaigns are what you would always like to promote for your automotive brand. Our Automotive digital marketing services can do all and also customize solutions for your unique needs to drive sales and leads.",
              see: "",
              isSee: false,
            },
          ])}
        </div>
      </div>

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
