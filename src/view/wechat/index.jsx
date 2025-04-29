import BannerBox from '@/businessComponents/BannerBox';
import DescBox from '@/businessComponents/DescBox';
import GraphicDescriptionBox from '@/businessComponents/GraphicDescriptionBox';
import { getBannerMenuList } from '@/utils/common.js';


import p1 from '@/assets/wechat/1.png';
import p2 from '@/assets/wechat/2.png';
import p3 from '@/assets/wechat/3.png';
import banner from '@/assets/wechat/banner.png';

const title = 'WeChat Advertisement';

export default function WeChat() {

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
      desc: `As one of the mainstream social media in Mainland China and Hong Kong, WeChat has a large number of users. It can be operated as a social media. Also, it can coordinate with WeChat Pay to drive sales, sending messages at fixed points, so that merchants can track target customers. We will conduct WeChat official account operation, customer relationship management, target analysis, monitoring and reporting for you, and we believe it will definitely increase your sales and brand awareness to a certain extent.`
    },
    graphicDescriptionInfoList: [
      {
        title: 'Apply for an account and purchase different types of advertisements for you in one stop',
        smallTitle: title,
        desc: "Public account advertisements, circle of friends’ advertisements, and mini-program advertisements all have their own uniqueness. Our professional team will follow up for you and apply for you as an advertiser in one stop, saving you time.",
        img: p1,
        className: 'bg-grey',
        align: 'right'
      },
      {
        title: 'Interesting advertising design, upgrade brand image',
        smallTitle: title,
        desc: "Our experienced official account operation and creative team will help you locate your official account, one-stop, including typesetting, picture matching, creative original content and other services, to attract your readers in multiple directions.",
        img: p2,
        className: '',
        align: 'left'
      },
      {
        title: 'Autoresponders draw customers’ attention and increase loyalty',
        smallTitle: title,
        desc: "Keyword autoresponders, make sure to send greeting messages to new joiners and be proactive. Deepen their impression of the brand.",
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
