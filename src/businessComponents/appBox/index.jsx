/* eslint-disable react/prop-types */
import baidu from "@/assets/appIcon/baidu.png";
import bing from "@/assets/appIcon/bing.png";
import criteo from "@/assets/appIcon/criteo.png";
import douyin from "@/assets/appIcon/douyin.png";
import facebook from "@/assets/appIcon/facebook.png";
import google from "@/assets/appIcon/google.png";
import google2 from "@/assets/appIcon/google2.png";
import googleAds from "@/assets/appIcon/googleAds.png";
import googleNews from "@/assets/appIcon/googleNews.png";
import instagram from "@/assets/appIcon/instagram.png";
import line from "@/assets/appIcon/line.png";
import linkedin from "@/assets/appIcon/linkedin.png";
import naver from "@/assets/appIcon/naver.png";
import smallredbook from "@/assets/appIcon/smallredbook.png";
import souhu from "@/assets/appIcon/souhu.png";
import tiktok from "@/assets/appIcon/tiktok.png";
import tiktok2 from "@/assets/appIcon/tiktok2.png";
import toutiao from "@/assets/appIcon/toutiao.png";
import twitter from "@/assets/appIcon/twitter.png";
import video360 from "@/assets/appIcon/video360.png";
import wechat from "@/assets/appIcon/wechat.png";
import weibo from "@/assets/appIcon/weibo.png";
import yahoo from "@/assets/appIcon/yahoo.png";
import yandex from "@/assets/appIcon/yandex.png";
import youku from "@/assets/appIcon/youku.png";
import youtube from "@/assets/appIcon/youtube.png"; // music
import joox from "@/assets/appIcon/joox.png";
import desk from "@/assets/appIcon/desk.png";
import apple from "@/assets/appIcon/apple.png";
import spotify from "@/assets/appIcon/spotify.png";
import podcasts from "@/assets/appIcon/podcasts.png";
import youtubeMusic from "@/assets/appIcon/youtubeMusic.png";
import tero from "@/assets/appIcon/tero.png";
import acast from "@/assets/appIcon/acast.png";
import zing from "@/assets/appIcon/zing.png";
import noice from "@/assets/appIcon/noice.png";
import netflix from "@/assets/appIcon/netflix.png";
import mytv from "@/assets/appIcon/mytv.png";
import transport from "@/assets/appIcon/transport.png";
import asiaray from "@/assets/appIcon/asiaray.png";
import taboola from "@/assets/appIcon/taboola.png";
import grab from "@/assets/appIcon/grab.png";
import instagram2 from "@/assets/appIcon/instagram2.png";
import redBook from "@/assets/appIcon/redBook.png";

const appImgList = {
  baidu,
  bing,
  criteo,
  douyin,
  facebook,
  google,
  google2,
  googleAds,
  googleNews,
  instagram,
  line,
  linkedin,
  naver,
  smallredbook,
  souhu,
  tiktok,
  tiktok2,
  toutiao,
  twitter,
  video360,
  wechat,
  weibo,
  yahoo,
  yandex,
  youku,
  youtube,
  joox,
  desk,
  apple,
  spotify,
  podcasts,
  youtubeMusic,
  tero,
  acast,
  zing,
  noice,
  netflix,
  mytv,
  transport,
  asiaray,
  taboola,
  grab,
  instagram2,
  redBook,
};

export default function AppBox(props = {}) {
  const { appList = [] } = props;
  console.log("🚀 ~ AppBox ~ props:", props);
  return (
    <section className="w-full bg-[#fff]">
      <div className="w-960 mx-auto my-160 flex flex-row justify-center gap-30 flex-wrap ">
        {appList.map((item, index) => {
          console.log("🚀 ~ appList.map ~ item:", item, appImgList[item]);
          return (
            <div key={index} className="w-168 h-88">
              <img src={appImgList[item]} alt={item} className="w-168 h-88" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
