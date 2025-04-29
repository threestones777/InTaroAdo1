import BannerBox from '@/businessComponents/BannerBox';
import DescBox from '@/businessComponents/DescBox';
import GraphicDescriptionBox from '@/businessComponents/GraphicDescriptionBox';
import { getBannerMenuList } from '@/utils/common.js';

import p1 from '@/assets/linkedin/1.jpeg';
import p2 from '@/assets/linkedin/2.jpeg';
import p3 from '@/assets/linkedin/3.jpeg';
import banner from '@/assets/linkedin/banner.png';


export default function Linkedin() {
  const title = 'LinkedIn Advertisement';
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
      desc: `LinkedIn Advertisement is more targeted than other social media, recommending to potential audiences through three types of advertising: corporate marketing content, insider messaging and text. When we create an ad, we are asked to provide a business objective, and LinkedIn will match the objective with the characteristics of the audiences, such as using location, job titles, years of working experience, etc., to enhance the effectiveness of the ad.`
    },
    graphicDescriptionInfoList: [
      {
        title: 'Identify potential business customers',
        smallTitle: title,
        desc: "As a B2B (Business to business) platform, all advertisements are targeted at business and caneffectively find business-related customer groups.",
        img: p1,
        className: 'bg-grey',
        align: 'right'
      },
      {
        title: 'Enhance reputation in your industry',
        smallTitle: title,
        desc: "With global coverage in over 200 countries, LinkedIn can help you build awareness in international and local business sectors.",
        img: p2,
        className: '',
        align: 'left'
      },
      {
        title: 'Precise targeting',
        desc: "By targeting the ads to the audiences through precise matching, LinkedIn increases the relevance of the ads to the users and avoids wasting the click-through rate.",
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
