import BannerBox from '@/businessComponents/BannerBox';
import DescBox from '@/businessComponents/DescBox';
import GraphicDescriptionBox from '@/businessComponents/GraphicDescriptionBox';
import { getBannerMenuList } from '@/utils/common.js';


import p1 from '@/assets/tikTok/1.png';
import p2 from '@/assets/tikTok/2.png';
import p3 from '@/assets/tikTok/3.png';
import banner from '@/assets/tikTok/banner.png';

const title = 'Tik Tok Advertisement';

export default function TikTok() {

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
      desc: `As the largest short video platform in China, Tik Tok has 1 billion monthly active users and has a huge Chinese market.
We will provide one-stop services, including Tik Tok account opening and management, target customer positioning, advertising time management and periodic reporting.`
    },
    graphicDescriptionInfoList: [
      {
        title: 'Effectively reach young audiences and target customers',
        smallTitle: title,
        desc: "Plan a suitable promotion campaign target, supported bidding method, ad position and ad style for you, increase brand exposure, and help you lock target customers more perfectly.",
        img: p1,
        className: 'bg-grey',
        align: 'right'
      },
      {
        title: 'Creative marketing content to attract local Tik Tok users',
        smallTitle: title,
        desc: "Our experienced official account operation and creative team can make your pictures and video advertisements interesting and improve your brand uniqueness.",
        img: p2,
        className: '',
        align: 'left'
      },
      {
        title: 'Target the right audience in multiple directions',
        smallTitle: title,
        desc: "By analyzing the audience's age, interest, interaction, etc., the advertising goals can be achieved and the brand awareness can be improved more effectively. ",
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
