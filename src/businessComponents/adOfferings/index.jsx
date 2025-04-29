/* eslint-disable react/prop-types */
export default function AdOfferings(props = {}) {
  const { title = "", column = "", data = [] } = props;
  const isShow = title !== "";
  const clasStr = isShow
    ? `w-960 mx-auto grid grid-cols-${column} justify-items-center pt-60 bg-white`
    : `w-960 mx-auto grid grid-cols-${column} justify-items-center pb-160 bg-white`;
  const classStr = isShow ? "bg-white" : "bg-white relat1ve bo1ttom-264";
  console.log(isShow);
  return (
    <div className={classStr}>
      <div className="w-960 text-[#231F20] font-black text-56 leading-70 cont-normal text-center mx-auto wow animate__animated animate__jackInTheBox">
        {title}
        <p style={{ display: isShow ? "block" : "none" }}>OFFERINGS</p>
      </div>
      <div className={clasStr}>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center wow animate__animated animate__fadeInUp mb-88"
            >
              <div
                className="w-300 h-627 bg-[#f9f9f9] bg-no-repeat shadow-[0_0px_30px_0px_rgba(0,0,0,0.2)] rounded-16"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "100% 100%",
                }}
              >
                <div className="w-300 mx-auto h-66 bg-[#985F8C] rounded-bl-16 rounded-br-16 relative top-562 text-white text-center">
                  <p className="text-20 leading-28 font-black pt-17">
                    {item.title}
                  </p>
                </div>
              </div>
              <p className="w-300 h-75 mx-auto pt-14 pl-16 pr-16 text-14 leading-25 font-black text-center shadow-lg shadow-none font-['Helvetica']">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
