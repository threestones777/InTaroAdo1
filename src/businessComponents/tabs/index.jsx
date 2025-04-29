/* eslint-disable react/prop-types */
import { useState } from "react";
export default function Tabs(props = {}) {
  const [activeTab, setActiveTab] = useState(0);
  const { tabs = [] } = props;
  return (
    <div className="w-full mx-auto">
      {/* Tab 导航 */}
      <div className="flex relative left-24">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`font-['PingFangSC'] font-semibold w-208 h-40 text-14 leading-20 font-600 mr-20 rounded-tl-12 rounded-tr-12 ${
              activeTab === index
                ? "bg-[#337DB9] text-white"
                : "bg-[#fff] text-[#337DB9]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 内容 */}
      <div className="pt-27">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${
              activeTab === index ? "block" : "hidden"
            } transition-all duration-300`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
