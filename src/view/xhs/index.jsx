import BannerBox from '@/businessComponents/BannerBox';
import DescBox from '@/businessComponents/DescBox';
import GraphicDescriptionBox from '@/businessComponents/GraphicDescriptionBox';
import { getBannerMenuList } from '@/utils/common.js';

import p1 from '@/assets/xhs/1.png';
import p2 from '@/assets/xhs/2.png';
import p3 from '@/assets/xhs/3.png';
import banner from '@/assets/xhs/banner.png';


export default function Xhs() {

  const handleBannerClick = () => {
    console.log("🚀 ~ handleBannerClick ~ handleBannerClick:", handleBannerClick)
  }

  const title = 'Xiao Hong Shu Advertisement';
  const state = {
    /**banner 入参示例 */
    bannerInfo: {
      img: banner,
      title: title,
      smallTitle: 'Online Marketing Solutions',
      desc: getBannerMenuList(title),
      btnName: 'Contact Us',
      btnClick: handleBannerClick
    },
    descBoxInfo: {
      title: title,
      desc: `As one of the mainstream social media in China, Xiaohongshu has a huge Chinese market.
We will provide one-stop services, including account opening and management of Xiaohongshu, practice target customer positioning, advertising time management and periodic reporting.`
    },
    graphicDescriptionInfoList: [
      {
        title: 'A variety of advertising modes, arrange the most suitable for you',
        smallTitle: title,
        desc: "Search ads, news feed ads, topic ads, etc. all have their uniqueness. Our professional marketing team will follow up for you and apply for you as an advertiser in one stop, saving you time.",
        img: p1,
        className: 'bg-grey',
        align: 'right'
      },
      {
        title: 'Appropriate advertising design can reach local Xiaohongshu users more effectively',
        smallTitle: title,
        desc: "Our experienced official account operation and creative team will help you locate your official account, one-stop, including typesetting, picture matching, creative original content and other services, so as to attract users more comprehensively.",
        img: p2,
        className: '',
        align: 'left'
      },
      {
        title: 'Post specific product information to track target customers',
        smallTitle: title,
        desc: "Use multiple channels to drive traffic and guide Xiaohongshu users to enter or click on product or brand pages, which is effective for brand promotion. ",
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
