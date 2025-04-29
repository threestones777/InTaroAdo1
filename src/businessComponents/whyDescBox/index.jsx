import bg1 from "@/assets/whyDescBox/bg1.png";
import bg2 from "@/assets/whyDescBox/bg2.png";
import bg3 from "@/assets/whyDescBox/bg3.png";

const bgList = [bg1, bg2, bg3];

export default function WhyDescBox(props = {}) {
  const {
    title = "",
    bgStyle = "linear-gradient( 137deg, #3A7B9F 0%, #1B4566 100%)",
    dataList = [],
  } = props;

  return (
    <section
      className="w-full bg-[#fff] py-160"
      style={{ backgroundImage: bgStyle }}
    >
      <div className="w-960 mx-auto ">
        <h1 className="text-left text-56 font-bold leading-70 text-[#fff]">
          {title}
        </h1>
        <div className="mt-40 flex flex-row justify-center gap-30">
          {dataList.map((item, index) => (
            <div
              key={index}
              className="w-300 h-570 px-10 py-10 bg-[#fff] rounded-15  wow animate__animated animate__fadeInUp"
            >
              <div
                style={{
                  backgroundImage: `url(${bgList[index]})`,
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                }}
                className="w-280 h-182 bg-no-repeat  px-16 flex flex-col justify-center items-start"
              >
                <span className="text-[#fff] text-22 leading-28 text-left font-black">
                  <div dangerouslySetInnerHTML={{ __html: item.title }} />
                </span>
              </div>
              <div className="ml-10 mt-17 text-14 text-[#3E3E46] text-left leading-25 font-medium font-['Helvetica']">
                <div dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
