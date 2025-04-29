import BannerBox from '@/businessComponents/BannerBox';
import DescBox from '@/businessComponents/DescBox';
import GraphicDescriptionBox from '@/businessComponents/GraphicDescriptionBox';
import { getBannerMenuList } from '@/utils/common.js';

import p1 from '@/assets/youtube/1.jpeg';
import p2 from '@/assets/youtube/2.jpeg';
import p3 from '@/assets/youtube/3.jpeg';
import banner from '@/assets/youtube/banner.png';


export default function YouTube() {
  const title = 'YouTube Advertisement';
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
      desc: `YouTube Advertisement uses video as a guide, inserting ads into the video can increase audience’s awareness of the brand. YouTube has become the second largest search engine in the world, with a large number of active users viewing videos on the platform every day. According to Digital Hong Kong’s report on social media usage in the first quarter of 2021, YouTube has become the most used social media in Hong Kong, surpassing Facebook, providing that YouTube is an indispensable platform for brand development and brand awareness.`
    },
    graphicDescriptionInfoList: [
      {
        title: 'Free data analysis',
        smallTitle: title,
        desc: "YouTube offers free ad data analysis to help you easily tracing your results.",
        img: p1,
        className: 'bg-grey',
        align: 'right'
      },
      {
        title: 'Multi-device display',
        smallTitle: title,
        desc: "Whether it’s a cell phone, desktop or tablet, all device that can watch YouTube can display your ads.",
        img: p2,
        className: '',
        align: 'left'
      },
      {
        title: 'No view, No charge',
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
