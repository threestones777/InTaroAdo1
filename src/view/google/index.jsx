import BannerBox from '@/businessComponents/BannerBox';
import DescBox from '@/businessComponents/DescBox';
import GraphicDescriptionBox from '@/businessComponents/GraphicDescriptionBox';
import { getBannerMenuList } from '@/utils/common.js';


import p1 from '@/assets/google/1.png';
import p2 from '@/assets/google/2.png';
import p3 from '@/assets/google/3.png';
import banner from '@/assets/google/banner.png';

const title = 'Google Discovery Ads';

export default function Google() {

  const handleBannerClick = () => {
    console.log("🚀 ~ handleBannerClick ~ handleBannerClick:", handleBannerClick)
  }

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
      desc: `Discovery ads are an image ad format for mobile devices that use a single Google Ads campaign to help brands reach discovering users based on Google's audience and customer intent signals, delivering rich personal visuals. Performance advertising. The Discovery Ad is just a dynamic message that will appear on the YouTube homepage and "Watch Next", Gmail's "Promotions" and "Social Networks" tabs, and Google Discover. Google will use customer intent signals to find potential users who are most interested in your brand. When they browse various information on popular Google services, Google will Show them ads.`
    },
    graphicDescriptionInfoList: [
      {
        title: 'Effectively reach more Google users for you',
        smallTitle: title,
        desc: "Discovery Ads can reach up to 3 billion customers through Google News Feed. Discovery ads appear to potential customers when they are checking email, watching videos, and browsing the news, helping brands reach new customers.",
        img: p1,
        className: 'bg-grey',
        align: 'right'
      },
      {
        title: 'Arrange visually rich advertisements for you to enhance your brand image',
        smallTitle: title,
        desc: "We arrange the most suitable advertising visuals and layout for your brand, and use Google AI technology to smoothly create and display advertising elements for different devices, helping you attract customers' attention and take action.",
        img: p2,
        className: '',
        align: 'left'
      },
      {
        title: 'Help you re-engage with your most valuable customers',
        smallTitle: title,
        desc: "Google will infer user preferences based on various factors such as the user's language, device,past behavior, browsing history, videos watched, etc., so as to find users who are willing to exploreand interact with your brand. When these users are active on Google services and viewing information, attractive ads will seize the opportunity to attract users to click and take action.",
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
