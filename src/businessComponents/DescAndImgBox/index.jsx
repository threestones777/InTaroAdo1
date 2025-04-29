export default function GraphicDescriptionBox(props = {}) {
  const {
    className = "",
    title = "",
    desc = "",
    img = "",
    bgImg = "",
    align = "left",
    btnChildren = null,
  } = props;

  let descAlign = "text-right";
  let descBoxOrder = "";
  let animateCls = "Right";
  if (align === "right") {
    descAlign = "text-left";
    descBoxOrder = "order-2";
    animateCls = "Left";
  }

  return (
    <section className={`graphic-description-box py-160 ${className}`}>
      <div
        className="w-960 mx-auto pl-10 py-10 flex flex-row justify-center bg-[#fff] rounded-12 pr-10"
        style={{
          "box-shadow": "0px 0px 4px 0px rgba(0,0,0,0.1)",
        }}
      >
        <div
          className={`desc-wrap ${descBoxOrder} ${descAlign} w-426  px-28 pt-22 `}
        >
          <div className="font-black text-22 leading-28 text-[#231F20] text-left">
            {title}
          </div>
          <div className="font-['Helvetica'] font-medium mt-16 text-14 leading-25 text-[#3E3E46] text-left">
            {desc}
          </div>

          {btnChildren}
        </div>

        <div
          className={` animate__animated animate__fadeInBottom${animateCls} wow img-wrap w-567 h-384 rounded-12 flex flex-row justify-center items-center img-animate`}
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        >
          <img src={img} alt={title} className="w-480 h-120 " />
        </div>
      </div>
    </section>
  );
}
