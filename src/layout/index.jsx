import { useEffect } from "react";
import WOW from "wow.js";

import Header from "./header.jsx";
import Footer from "./footer.jsx";
// import './Layout.css'; // 引入布局样式

const Layout = ({ children }) => {
  useEffect(() => {
    new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 20,
      mobile: true,
      live: true,
      callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">");
      },
    }).init();
  });
  return (
    <div
      className="min-h-screen  flex flex-col leading-[30px] text-[#3E3E46] font-['TimesNewRomanPS']"
      style={{ minWidth: "1180px" }}
    >
      <Header />

      <main className="flex-grow mx-auto w-full z-3 page-main">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
