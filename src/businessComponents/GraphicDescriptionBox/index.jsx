export default function GraphicDescriptionBox(props = {}) {
  const {
    className = "",
    smallTitle = "",
    title = "",
    desc = "",
    img = "",
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
      <div className="box-1180 flex flex-row gap-70 justify-center items-center">
        <div className={`desc-wrap ${descBoxOrder} ${descAlign} w-414`}>
          <div className="text-22 leading-28 font-black text-[#231F20] text-left">
            {title}
          </div>
          <div className="font-['Helvetica'] font-medium mt-16 text-16 leading-25 text-[#3E3E46] text-left">
            {desc}
          </div>

          {btnChildren}
        </div>

        <div
          className={` animate__animated animate__fadeInBottom${animateCls} wow img-wrap w-476 h387 rounded-12`}
        >
          <img src={img} alt={title} className="w-476 h-387 rounded-12" />
        </div>
      </div>
    </section>
  );
}
