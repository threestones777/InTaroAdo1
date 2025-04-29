import BannerBox from '@/businessComponents/BannerBox';
import DescBox from '@/businessComponents/DescBox';
import GraphicDescriptionBox from '@/businessComponents/GraphicDescriptionBox';
import { getBannerMenuList } from '@/utils/common.js';

import p1 from '@/assets/yahoo/1.jpeg';
import p2 from '@/assets/yahoo/2.jpeg';
import p3 from '@/assets/yahoo/3.jpeg';
import banner from '@/assets/yahoo/banner.png';


export default function YaHoo() {
  const title = 'Yahoo Native Ads';
  const state = {
    /**banner 入参示例 */
    bannerInfo: {
      img: banner,
      title: title,
      smallTitle: 'Online Marketing Solutions',
      desc: getBannerMenuList(title),
      btnName: 'Contact Us',
      // btnClick: handleBannerClick
    },
    descBoxInfo: {
      title: title,
      desc: `Yahoo Native Ads perfectly integrates companies’ ads with the content of Yahoo pages, including all pages of Yahoo’s desktop and mobile web versions, applications and major Hong Kong popular syndication sites. Ads can also be placed for different specific countries and regions, allowing it to be displayed in front of users in all aspects and maximizing brand exposure.`
    },
    graphicDescriptionInfoList: [
      {
        title: 'Cross-platform opportunities',
        smallTitle: title,
        desc: "One ad with multiple platforms, allowing you to capture the business opportunities of different user groups.",
        img: p1,
        className: 'bg-grey',
        align: 'right'
      },
      {
        title: 'High cost efficiency',
        smallTitle: title,
        desc: "The registration process is completely free of charge, and it will only be charged when the ad is clicked and actually works.",
        img: p2,
        className: '',
        align: 'left'
      },
      {
        title: 'Free exposure opportunities',
        desc: "Your ads have free exposure to reach every target group.",
        smallTitle: title,
        img: p3,
        className: 'bg-grey',
        align: 'right'
      },
    ]
  };

  return (
    <section className="platform-introduction-page">
      <BannerBox
        {...state.bannerInfo}
      />

      <DescBox
        {...state.descBoxInfo}
      />

      {state.graphicDescriptionInfoList.map((item) => (
        <GraphicDescriptionBox
          key={item.title}
          {...item}
        />
      ))}

      {/* 这里是表单 */}

    </section>
  );
}
