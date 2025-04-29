/* eslint-disable react/prop-types */
import { useState } from "react";
export default function Carousel(props = {}) {
  const { images = [] } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgImage, setBgImage] = useState(images[0].ads[0].img);
  let topIndex = 0;
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    currentIndex === images.length - 1
      ? (topIndex = 0)
      : (topIndex = currentIndex + 1);
    changeUrl();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    currentIndex === 0
      ? (topIndex = images.length - 1)
      : (topIndex = currentIndex - 1);
    changeUrl();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    topIndex = index;
    changeUrl();
  };
  const changeUrl = () => {
    setBgImage(images[topIndex].ads[0].img);
  };
  return (
    <div className="relative right-8 w-960 mx-auto overflow-hidden">
      {/* 图片区域 */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-960 flex flex-shrink-0">
            <div className="w-30">
              {/* 左箭头 */}
              <button
                onClick={prevSlide}
                className="relative top-1/2 text-24 left-[-20px] transform -translate-y-1/2 bg-tratransparent hover:text-[#337DB9] p-20 transition-colors duration-200"
              >
                &#10094; {/* 左箭头符号 */}
              </button>
            </div>
            <div
              className="relative w-864 h-508 rounded-16 bg-gray-500"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "100% 100%",
              }}
            >
              <div className="w-full h-508 mx-auto flex">
                {image.ads.map((ad, index) => {
                  return (
                    <div
                      key={index}
                      className="rounded-16 flex overflow-hidden hover:cursor-pointer"
                    >
                      <div
                        className="text-white w-288 h-560 hover:bg-[rgb(0_0_0_/_0.3)] relative hover:bottom-50"
                        onMouseEnter={() => setBgImage(ad.img)}
                      >
                        <div className="w-full h-420"></div>
                        <div className="group relative w-full">
                          <p className="text-42 leading-70 font-black">
                            {ad.title}
                          </p>
                          <p className="text-24 leading-70 font-black">
                            {ad.sub}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
      {/* 指示点 */}
      <div className="mt-40 relative left-430 flex space-x-12">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-14 h-14 rounded-14 transition-colors duration-200 ${
              index === currentIndex ? "bg-[#337DB9]" : "bg-[#D8D8D8]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
