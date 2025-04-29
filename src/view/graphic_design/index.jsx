import BannerBox from '@/businessComponents/BannerBox';
import DescBox from '@/businessComponents/DescBox';
import { getBannerMenuList } from '@/utils/common.js';

import p1 from '@/assets/graphic_design/1.png';
import p2 from '@/assets/graphic_design/2.png';
import p3 from '@/assets/graphic_design/3.png';
import banner from '@/assets/graphic_design/banner.png';

export default function GraphicDesign() {
  const title = 'Graphic Design';
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
      desc: `Graphic design is an important channel to communicate with the public by combining images, text and symbols to deliver a precise message. A unique, attractive and stylish design can drive the emotions of potential customers to gain deeper understanding of the content. Whether it is a graphic advertisement, banner, poster or leaflet, it plays an important role whenever graphic are needed.`,
      children: [
        {
          title: 'Strengthen brand image',
          desc: "The image of your brand can be created through a consistent and unified style that allows the public to recognize your brand at a glance.",
          img: p1,
          className: 'bg-grey',
          align: 'right'
        },
        {
          title: 'Save time and money',
          desc: "Professional graphic design understand the requirements and needs of different advertisement, reducing your worries and burden.",
          img: p2,
          className: '',
          align: 'left'
        },
        {
          title: 'Bring audience’s attention',
          desc: "A good design attracts audience’s attention to the advertisement, generating more attention and increasing brand awareness.",
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
