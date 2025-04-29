import BannerBox from '@/businessComponents/BannerBox';
import DescBox from '@/businessComponents/DescBox';
import { getBannerMenuList } from '@/utils/common.js';

import p1 from '@/assets/gdn/1.png';
import p2 from '@/assets/gdn/2.png';
import p3 from '@/assets/gdn/3.png';
import banner from '@/assets/gdn/banner.png';

export default function Gdn() {
  const title = 'Google Display Networks (GDN)';
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
      desc: `Google Display Network will place ads on websites that partner with Google. Currently, Google has over 2 million partners sites and 700,00 apps to choose from, reaching 90% of the world’s web users. We can choose which platforms to target our ads to.`,
      children: [
        {
          title: 'Extensive coverage area',
          desc: "With 90% world coverage, you can easily reach all network users worldwide.",
          img: p1,
          className: 'bg-grey',
          align: 'right'
        },
        {
          title: 'Large exposure in a short period of time',
          desc: "2 million partner sites will display your ads, increasing your visibility and exposure.",
          img: p2,
          className: '',
          align: 'left'
        },
        {
          title: 'Increase click through rate(CTR)',
          desc: "Image types ads are more attractive to users to click to view, more effective than the general text ads.",
          img: p3,
          className: 'bg-grey',
          align: 'right'
        },
      ]
    },
  };

  return (
    <section className="platform-introduction-page">
      <BannerBox
        {...state.bannerInfo}
      />

      <DescBox
        {...state.descBoxInfo}
      />

      {/* 这里是表单 */}

    </section>
  );
}
