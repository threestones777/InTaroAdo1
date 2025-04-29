/* eslint-disable react/prop-types */
// import './index.css'
import arrowRight from "@/assets/arrow-right-white.svg";

export default function MultipleBoxDesc(props = {}) {
  const {
    title = "",
    description = [],
    className = "",
    bgColor = "#fff",
    btnText = "",
    btnClick = () => {},
  } = props;

  const cls = `multiple-box-desc py-160  ${className}`;

  return (
    <section className={cls} style={{ background: bgColor }}>
      <div className="w-960 mx-auto text-center">
        <div className="font-black text-56 leading-70 text-[#231F20] text-center title wow animate__animated animate__jackInTheBox">
          {title}
        </div>

        <div className="flex flex-row justify-center flex-wrap mt-80 gap-30">
          {description.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-465 h-auto px-32 pt-32 pb-40 border-2 border-solid rounded-12 min-h-${item.minHeight} wow animate__animated animate__fadeInUp`}
                style={{
                  borderImage:
                    index % 2 === 0
                      ? "linear-gradient(135deg, rgba(115, 189, 221, 1), rgba(131, 140, 187, 1)) 2 2"
                      : "linear-gradient(135deg, rgba(115, 189, 221, 1), rgba(131, 140, 187, 1)) 2 2",
                }}
              >
                <div className="font-black text-22 leading-28 text-[#231F20] text-left item-title">
                  <div dangerouslySetInnerHTML={{ __html: item.title }} />
                </div>
                <div className="font-['Helvetica'] font-medium text-14 leading-25 text-[#3E3E46] text-left mt-16 item-desc">
                  <div dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="w-736 h-36 leading-36 flex flex-row items-center justify-center gap-6 mx-auto rounded-4 bg-[#337DB9] text-14 leading-20 text-[#fff] text-center mt-60 font-semibold font-['PingFangSC'] hover:opacity-60"
          onClick={btnClick}
        >
          {btnText}
          <img src={arrowRight} alt="arrow-right" />
        </button>
      </div>
    </section>
  );
}
