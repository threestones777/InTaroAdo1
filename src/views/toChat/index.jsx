import bg from "@/assets/contact/bg.png";
import back from "@/assets/news/back.svg";
import BannerBox from "@/businessComponents/BannerBox";
import ContactUs from "@/view/contact_us/index.jsx";
import "./index.css";

export default function ToChat() {
  const bannerBoxProps = {
    title: "Contact",
    description: "We are always here to help in whatever way you need.",
    className: "news-banner-box",
    bgImg: bg,
  };

  const toBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen  flex flex-col leading-[30px]">
      <BannerBox {...bannerBoxProps} />

      <div className="w-full bg-white pb-120">
        <div className="mx-auto">
          <div className="w-full flex justify-center">
            <div className="w-770 mr-32 relative right-160">
              <div className="flex mt-16 hover:cursor-pointer hover:font-black hover:text-[#337DB9]">
                <div
                  className="w-10 h-8 mr-6 relative top-6 rotate-180"
                  style={{
                    backgroundImage: `url(${back})`,
                    backgroundSize: "100% 100%",
                  }}
                ></div>
                <div
                  onClick={() => toBack()}
                  className="font-semibold text-14 leading-20 font-['PingFangSC']"
                >
                  BACK
                </div>
              </div>
            </div>
          </div>
          <div className="w-960 mx-auto">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
}
