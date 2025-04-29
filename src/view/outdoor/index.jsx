import BannerBox from '@/businessComponents/BannerBox';
import DescBox from '@/businessComponents/DescBox';
import DescInImageBox from '@/businessComponents/DescInImageBox';
import { getBannerMenuList } from '@/utils/common.js';

import p1 from '@/assets/outdoor/1.jpeg';
import p2 from '@/assets/outdoor/2.jpeg';
import p3 from '@/assets/outdoor/3.jpeg';
import banner from '@/assets/outdoor/banner.png';


export default function Outdoor() {
  const title = 'Outdoor Advertisement';
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
      desc: `Outdoor Advertisements are everywhere in the city. Even in the modern world of internet, outdoor advertisements have always played an important role. Hong Kong’s well-developed traffic network and transportation system is conductive to outdoor advertising on neon signs, bus body, taxi body, MTR light boxes, billboards, tunnel entrance signs, etc. When people go out, they are bound to see these advertisements in various forms, which can be considered as indispensable tool in marketing.`
    },
    graphicDescriptionInfoList: [
      {
        title: 'Automatic amplification of advertising benefits',
        smallTitle: title,
        desc: "Outdoor advertisement covers almost whole city. As long as we know the area where are the target group’s activities, we can effectively target the area and amplifying the effectiveness.",
        img: p1,
        align: 'right'
      },
      {
        title: 'Advertising on the move',
        smallTitle: title,
        desc: "Advertisements follow the pace of transportation. It is displayed in front of passers-by in different areas.",
        img: p2,
        align: 'left'
      },
      {
        title: 'Easy to accept advertising content',
        smallTitle: title,
        desc: "Outdoor advertisement is not compulsive, blending naturally into the lives of the public and making the message more accessible.",
        img: p3,
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
        <DescInImageBox
          key={item.title}
          {...item}
        />
      ))}

      {/* 这里是表单 */}

    </section>
  );
}
