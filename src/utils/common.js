/**
 * 获取 banner 底部的列表
 * @param {*} activeKey：当前 Banner
 * @returns
 */
export const getBannerMenuList = (activeKey = "") => {
  const menuList = [
    {
      key: "Search Engine Marketing (SEM)",
      label: "Search Engine Marketing (SEM)",
      targetUrl: "/#/services/sem",
    },
    {
      key: "Google Display Networks (GDN)",
      label: "Google Display Networks",
      targetUrl: "/#/gdn",
    },
    {
      key: "Yahoo Native Ads",
      label: "Yahoo Native Ads",
      targetUrl: "/#/yahoo",
    },
    {
      key: "YouTube Advertisement",
      label: "YouTube Advertisement",
      targetUrl: "/#/youtube",
    },
    {
      key: "Facebook / Instagram Advertisement",
      label: "FB / IG Advertisement",
      targetUrl: "/#/facebook",
    },
    {
      key: "LinkedIn Advertisement",
      label: "LinkedIn Advertisement",
      targetUrl: "/#/linkedin",
    },
    {
      key: "Google Discovery Ads",
      label: "Google Discovery Ads",
      targetUrl: "/#/google",
    },
    {
      key: "Twitter Advertisement",
      label: "Twitter Advertisement",
      targetUrl: "/#/twitter",
    },
    {
      key: "Xiao Hong Shu Advertisement",
      label: "Xiao Hong Shu Advertisement",
      targetUrl: "/#/xhs",
    },
    {
      key: "WeChat Advertisement",
      label: "WeChat Advertisement",
      targetUrl: "/#/wechat",
    },
    {
      key: "Tik Tok Advertisement",
      label: "Tik Tok Advertisement",
      targetUrl: "/#/tiktok",
    },
    {
      key: "Graphic Design",
      label: "Graphic Design",
      targetUrl: "/#/graphic-design",
    },
    {
      key: "Outdoor Advertisement",
      label: "Outdoor Advertisement",
      targetUrl: "/#/outdoor",
    },
  ];

  return menuList.map((item) => {
    return {
      ...item,
      className: activeKey === item.key ? "active" : "",
    };
  });
};

export const ChinaDigitalMenuList = [
  {
    label: "Search Engine Marketing (SEM)",
    path: "/#/services/sem",
  },
  {
    label: "Google Display Networks (GDN)",
    path: "/#/gdn",
  },
  {
    label: "Yahoo Native Ads",
    path: "/#/yahoo",
  },
  {
    label: "YouTube Advertisement",
    path: "/#/youtube",
  },
  {
    label: "Facebook / Instagram Advertisement",
    path: "/#/facebook",
  },
  {
    label: "LinkedIn Advertisement",
    path: "/#/linkedin",
  },
  {
    label: "Google Discovery Ads",
    path: "/#/google",
  },
  {
    label: "Twitter Advertisement",
    path: "/#/twitter",
  },
];

export const GlobalDigitalMenuList = [
  {
    label: "Xiao Hong Shu Advertisement",
    path: "/#/xhs",
  },
  {
    label: "WeChat Advertisement",
    path: "/#/wechat",
  },
  {
    label: "Tik Tok Advertisement",
    path: "/#/tiktok",
  },
];

export const GlobalDesignMenuList = [
  {
    label: "Graphic Design",
    path: "/#/graphic-design",
  },
  {
    label: "Outdoor Advertisement",
    path: "/#/outdoor",
  },
];

export const getCurrentLinkStatus = (linkName) => {
  const pathname = window.location.hash.replace("#", "");
  const firstPath = pathname.split("/")[1];

  if (
    firstPath === linkName.toLowerCase() ||
    (firstPath === "tech-data" && linkName === "Tech&Data")
  ) {
    return "active";
  }

  return "";
};

export const knowUsTypes = [
  {
    key: "Google",
    label: "Google",
  },
  {
    key: "Instagram",
    label: "Instagram",
  },
  {
    key: "Facebook",
    label: "Facebook",
  },
  {
    key: "YouTube",
    label: "YouTube",
  },
  {
    key: "Yahoo!",
    label: "Yahoo",
  },
  {
    key: "LinkedIn",
    label: "LinkedIn",
  },
  {
    key: "Other",
    label: "Other",
  },
];
