import DropdownMenu from "@/components/DropdownMenu";
import { Link } from "react-router-dom";

import "./header.css";

import logo from "@/assets/logo.svg";

export default function Header() {
  const menuList = [
    {
      label: "Adtechinno",
      path: "/adtechinno",
    },
    {
      label: "Tech&Data",
      path: "/tech-data",
    },
    {
      label: "Services",
      path: "/services/sem",
      children: [
        {
          label: "Digital Marketing",
          path: "/services/sem",
          children: [
            {
              label: "SEM",
              path: "/#/services/sem",
            },
            {
              label: "SEO",
              path: "/#/services/seo",
            },
            {
              label: "Programmatic",
              path: "/services/taboola",
              children: [
                {
                  label: "Taboola",
                  path: "/#/services/taboola",
                },
              ],
            },
            {
              label: "Display",
              path: "/#/services/display",
            },
            {
              label: "Video",
              path: "/#/services/video",
            },
            {
              label: "Social",
              path: "/#/services/social",
            },
            {
              label: "Content",
              path: "/#/services/content",
            },
            {
              label: "Influencer(KOL)",
              path: "/#/services/influencer",
            },
            {
              label: "Audio Advertising",
              path: "/#/services/audio-advertising",
            },
            {
              label: "Omnichannel Marketing",
              path: "/#/services/omnichannel-marketing",
            },
          ],
        },
        {
          label: "China Digital",
          path: "/services/baidu",
          children: [
            {
              label: "Baidu",
              path: "/#/services/baidu",
            },
            {
              label: "Wechat",
              path: "/#/services/wechat",
            },
            {
              label: "Douyin",
              path: "/#/services/douyin",
            },
            {
              label: "WeiBo",
              path: "/#/services/weibo",
            },
            {
              label: "XiaoHongShu",
              path: "/#/services/xiaohongshu",
            },
            {
              label: "TouTiao",
              path: "/#/services/toutiao",
            },
          ],
        },
        {
          label: "Search Marketing",
          path: "/services/grabads-agency",
          children: [
            {
              label: "GrabAds Agency",
              path: "#/services/grabads-agency",
            },
          ],
        },
        {
          label: "Global Digital",
          path: "#/services/global-digital",
        },
        {
          label: "Industry Design",
          path: "#/services/industry-design",
        },
        {
          label: "Outdoor Ads",
          path: "/services/ooh",
          children: [
            {
              label: "OOH",
              path: "#/services/ooh",
            },
            {
              label: "PROGRAMMATIC DOOH (pDOOH)",
              path: "#/services/programmatic-dooh",
            },
          ],
        },
        {
          label: "Ecommerce",
          path: "/services/china-ecommerce",
          children: [
            {
              label: "China Ecommerce",
              path: "#/services/china-ecommerce",
            },
            {
              label: "Southeast Asia Ecommerce",
              path: "#/services/southeast-asia-ecommerce",
            },
          ],
        },
      ],
    },
    {
      label: "Insight",
      path: "/insight",
    },
    {
      label: "News",
      path: "/news",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div
      id="header"
      className="header h-54 px-120 bg-[rgb(0_0_0_/_0.4)] text-white box-border"
    >
      <div className="h-full flex justify-between items-center ">
        <Link to="/">
          <img src={logo} alt="Centaurus Logo" className="w-150 h-40" />
        </Link>
        <nav className="header-nav h-full  text-16 leading-18">
          <ul className="h-full header-nav-list flex justify-between gap-10">
            {menuList.map((menu) => (
              <li key={menu.label}>
                <DropdownMenu
                  title={menu.label}
                  menuList={menu.children}
                  path={menu.path}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
