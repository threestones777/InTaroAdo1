import BannerBox from '@/businessComponents/BannerBox';
import DescBox from '@/businessComponents/DescBox';
import GraphicDescriptionBox from '@/businessComponents/GraphicDescriptionBox';
import { getBannerMenuList } from '@/utils/common.js';

import p1 from '@/assets/facebook/1.jpeg';
import p2 from '@/assets/facebook/2.jpeg';
import p3 from '@/assets/facebook/3.jpeg';
import banner from '@/assets/facebook/banner.png';


export default function YouTube() {
  const title = 'Facebook / Instagram Advertisement';
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
      desc: `Facebook / Instagram Advertisement allows us to reach our followers and share information directly. By designing a series of valuable and engaging content, we can increase our customers’ awareness of the brand background, products and services. We can also analyze the effectiveness of the posted content using various metrics such as click-through rate, likes and comments to help manage and improve accounts.`
    },
    graphicDescriptionInfoList: [
      {
        title: 'Close the gap with customers',
        smallTitle: title,
        desc: "Social media facilitates communication between brands and customers, allowing brands to update their customers regularly.",
        img: p1,
        className: 'bg-grey',
        align: 'right'
      },
      {
        title: 'Cultivate customer loyalty',
        smallTitle: title,
        desc: "Social media has a variety of quantifiable metrics behind it to help brands understand what content, products or services are attracting the attention and interest of their customers, so that they can develop strategies and directions.",
        img: p2,
        className: '',
        align: 'left'
      },
      {
        title: 'Quantifiable effectiveness',
        smallTitle: title,
        desc: "YouTube charges for the number of times an ad is viewed, allowing you to fully invest your budget in potential customers.",
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
