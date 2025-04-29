/* eslint-disable react/prop-types */
export default function AppDataBox(props = {}) {
  const { bg = "", description = "", data = [] } = props;
  const isFour = bg.indexOf("redbook") !== -1;
  const isGrab = bg.indexOf("grab") !== -1;
  const classStr = `w-${
    isFour ? "200" : "300"
  } flex flex-col items-center justify-center font-['Helvetica'] wow animate__animated animate__fadeInUp`;
  return (
    <div
      style={{
        background: isGrab
          ? "linear-gradient( 180deg, rgba(255,255,255,0.3) 0%, rgba(70,150,82,0.05) 100%)"
          : "white",
      }}
    >
      <div className="w-full  flex justify-center">
        <div
          className="w-400 h-136 mt-110 border-dashed border-gray-500 wow animate__animated animate__fadeInUp"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "100% 100%",
          }}
        ></div>
      </div>
      <div className="w-full flex justify-center pt-27">
        <p className="wow animate__animated animate__jackInTheBox w-900 h-140 text-center font-black leading-35 text-22">
          {description}
        </p>
      </div>
      <div className="flex flex-row justify-center gap-30 pt-60 pb-160">
        {data.map((item, index) => {
          return (
            <div key={index} className={classStr}>
              <img src={item.img} className="w-[100px] h-[100px]" />
              <p
                className={`text-46 leading-50 text-center mt-16 font-black text-[#231F20]`}
              >
                {item.title}
              </p>
              <p
                className={`text-16 font-black leading-25 text-center mt-10 text-[#337DB9] flex flex-row items-center gap-6 `}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: isGrab ? "block" : "none",
        }}
        className="font-['Helvetica'] font-medium w-660 h-150 mx-auto relative bottom-40 text-[#439455] text-14 leading-25"
      >
        <p>Source: </p>
        <p>
          1.Grab Investor Relations: Grab Reports Fourth Quarter and Full Year
          2023 Results and Announces Inaugural Share Repurchase Program of Up to
          $500 Million{" "}
        </p>
        <p>2.KANTAR Context Lab research, SEA Report</p>
        <p>3.KANTAR media reaction study, 2022, SEA Report</p>
      </div>
    </div>
  );
}
