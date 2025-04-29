import BannerBox from '@/businessComponents/BannerBox';
import DescBox from '@/businessComponents/DescBox';
import GraphicDescriptionBox from '@/businessComponents/GraphicDescriptionBox';
import { getBannerMenuList } from '@/utils/common.js';


import p1 from '@/assets/twitter/1.png';
import p2 from '@/assets/twitter/2.png';
import p3 from '@/assets/twitter/3.png';
import banner from '@/assets/twitter/banner.png';

const title = 'Twitter Advertisement';

export default function Twitter() {

  const handleBannerClick = () => {
    console.log("🚀 ~ handleBannerClick ~ handleBannerClick:", handleBannerClick)
  }

  const state = {
    /**banner 入参示例 */
    bannerInfo: {
      img: banner,
      title,
      smallTitle: 'Online Marketing Solutions',
      desc: getBannerMenuList(title),
      btnName: 'Contact Us',
      btnClick: handleBannerClick
    },
    descBoxInfo: {
      title: title,
      desc: `Twitter ads allow advertisers to target audiences based on keywords, interests, geographic location, and other dimensions, making ad targeting more precise. And provide multiple ad formats, allowing advertisers to choose the most suitable ad format based on marketing goals and audience characteristics.`
    },
    graphicDescriptionInfoList: [
      {
        title: 'Cost-effective',
        smallTitle: title,
        desc: "Twitter ads can be a cost-effective advertising option as advertisers can set a budget and only pay when users engage with their ads.",
        img: p1,
        className: 'bg-grey',
        align: 'right'
      },
      {
        title: 'Trending topics',
        smallTitle: title,
        desc: "Twitter's trending topics can be a powerful way to reach a wider audience and increase brand visibility.",
        img: p2,
        className: '',
        align: 'left'
      },
      {
        title: 'Influencer marketing',
        smallTitle: title,
        desc: "Twitter is a popular platform for influencer marketing where advertisers partner with influential users to promote their products or services.",
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
