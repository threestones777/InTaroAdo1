import { useState, useEffect } from "react";
import { getCurrentLinkStatus } from "@/utils/common";
import arrowDownImg from "@/assets/arrow.svg";
import arrowRightImg from "@/assets/arrow-right.svg";
import { Link } from "react-router-dom";
export default function DropdownMenu(props) {
  // eslint-disable-next-line react/prop-types
  const { title = "", path = "", menuList = [], type = "sub" } = props;
  const [isOpen, setIsOpen] = useState(false);

  const cls = type === "sub" ? "sub-menu" : "right-menu";
  const subMenucls =
    type === "sub" ? "sub-menu-list" : "sub-menu-list right-menu-list";
  const curMenuCls =
    type === "sub"
      ? "custom-link-text flex flex-row gap-8"
      : "hover:bg-[#F9F9F9] hover:text-[#55D1BD] hover:rounded-8";
  const arrowCls = type === "sub" ? "down-arrow" : "right-arrow";
  const arrowImg = type === "sub" ? arrowDownImg : arrowRightImg;
  const [lastUrl, setLastUrl] = useState(location.href);
  const [activeCls, setActiveCls] = useState("");

  const handleHashChange = () => {
    if (lastUrl !== location.href) {
      document.documentElement.scrollTop = 0;
      console.log("URL changed (hash):", location.href);
      setLastUrl(location.href);
    }
    setActiveCls(getCurrentLinkStatus(title));
  };

  window.addEventListener("hashchange", handleHashChange);
  useEffect(() => {
    setActiveCls(getCurrentLinkStatus(title));

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [title]);

  window.addEventListener("scroll", () => {
    let header = document.getElementById("header");
    const scrollTop = window.pageYOffset;
    const triggerHeight = 500; // 触发高度阈值

    if (scrollTop > triggerHeight) {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      // 执行你的逻辑（如显示返回顶部按钮）
    } else {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    }
  });

  if (menuList.length === 0) {
    return (
      <div
        className={`relative custom-link ${cls} ${activeCls}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Link to={path} className={curMenuCls}>
          {title}
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`relative custom-link ${cls} ${activeCls} `}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link to={path} onClick={() => setIsOpen(false)} className={curMenuCls}>
        <span className="custom-link-text flex flex-row gap-8">
          {title}
          {menuList.length > 0 && (
            <img
              src={arrowImg}
              alt="arrow"
              className={arrowCls + " relative left-10"}
            />
          )}
        </span>
      </Link>

      {isOpen && (
        <div
          style={{ zIndex: "9999" }}
          className={`pt-12 min-w-300 text-14 text-[#27255F] leading-16 absolute border-1 border-[#F3F3F4] ${subMenucls} `}
        >
          <div className=" flex flex-col bg-white rounded-8">
            {menuList.map((menu) => {
              if (menu.children?.length > 0) {
                return (
                  <DropdownMenu
                    key={menu.label}
                    title={menu.label}
                    menuList={menu.children}
                    path={`${menu.path}`}
                    type="right"
                  />
                );
              }

              return (
                <a
                  key={menu.path}
                  href={`${menu.path} `}
                  className="h-48 py-16 px-24 hover:bg-[#F9F9F9] hover:text-[#55D1BD] hover:rounded-8"
                >
                  {menu.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
