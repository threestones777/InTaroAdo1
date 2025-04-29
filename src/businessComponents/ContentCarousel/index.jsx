/* eslint-disable react/prop-types */
import { useState } from "react";
export default function ContentCarousel(props = {}) {
  const { contents = [] } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === contents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? contents.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative right-8 w-960 mx-auto overflow-hidden">
      {/* 图片区域 */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {contents.map((content, index) => (
          <div key={index} className="w-960 h-508 flex flex-shrink-0">
            <div className="w-30">
              {/* 左箭头 */}
              <button
                onClick={prevSlide}
                className="relative top-1/2 text-24 left-[-20px] transform -translate-y-1/2 bg-tratransparent hover:text-[#337DB9] p-20 transition-colors duration-200"
              >
                &#10094; {/* 左箭头符号 */}
              </button>
            </div>
            <div className="w-864 flex justify-between">
              <div
                className="w-400 h-508 mx-auto rounded-12 wow animate__animated animate__fadeInUp bg-no-repeat"
                style={{
                  backgroundImage: `url(${content.img})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="w-400 h-508 mx-auto text-left">
                <p className="text-32 leading-36 text-[#231F20] font-black mt-120 wow animate__animated animate__jackInTheBox">
                  {content.title}
                </p>
                <p className="font-['Helvetica'] font-medium text-14 leading-25 mt-24 wow animate__animated animate__fadeInUp">
                  <div dangerouslySetInnerHTML={{ __html: content.sub }} />
                </p>
              </div>
            </div>
            <div className="w-30">
              {/* 右箭头 */}
              <button
                onClick={nextSlide}
                className="relative top-1/2 text-24 transform -translate-y-1/2 bg-tratransparent hover:text-[#337DB9] p-20 transition-colors duration-200"
              >
                &#10095; {/* 右箭头符号 */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
