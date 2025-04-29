/* eslint-disable react/prop-types */
import "./index.css";

export default function BannerBox(props = {}) {
  const {
    title = "",
    description = "",
    className = "",
    renderAfterContent = null,
    bgImg = "",
  } = props;

  const cls = `banner-box min-w-1180 max-w-1920 relative ${className}`;

  return (
    <section className={cls}>
      <div className="contentSkeleton"></div>
      <div
        className="content bg-[#f9f9f9]"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute px-120 w-full z-10 pt-54  inset-0 text-center flex flex-col">
          <div className="banner-content box-container flex-1 flex flex-col justify-center">
            <div className="text-white text-57 leading-64 text-left title font-black">
              {title}
            </div>
            <div className='font-["ArialMT"] text-white text-16 leading-24 mt-24 w-600 description text-left'>
              {description}
            </div>

            {renderAfterContent}
          </div>
        </div>
      </div>
    </section>
  );
}
