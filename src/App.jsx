import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "@/theme/index.css";
import "animate.css";

import Layout from "@/layout/index.jsx";
import AboutUs from "@/views/about_us/index.jsx";
import AdTechinno from "@/views/adTechinno/index.jsx";
import TechData from "@/views/techData/index.jsx";
import Insight from "@/views/insight/index.jsx";
import News from "@/views/news/index.jsx";
import NewsDetails from "@/views/newsDetail/index.jsx";
import ToChat from "@/views/toChat/index.jsx";
import Sem from "@/views/sem/index.jsx";
import Seo from "@/views/seo/index.jsx";
import Taboola from "@/views/taboola/index.jsx";
import Display from "@/views/display/index.jsx";
import Video from "@/views/video/index.jsx";
import Social from "@/views/social/index.jsx";
import Content from "@/views/content/index.jsx";
import InfluenKol from "@/views/influen_kol/index.jsx";
import Audio from "@/views/audio/index.jsx";
import Omnichannel from "@/views/omnichannel/index.jsx";
import WeChat from "@/views/wechat/index.jsx";
import BaiDu from "@/views/baidu/index.jsx";
import DouYin from "@/views/douyin/index.jsx";
import WeiBo from "@/views/weibo/index.jsx";
import RedBook from "@/views/redbook/index.jsx";
import TouTiao from "@/views/toutiao/index.jsx";
import Grab from "@/views/grab/index.jsx";
import Global from "@/views/global/index.jsx";
import Industry from "@/views/industry/index.jsx";
import China from "@/views/china/index.jsx";
import Southeast from "@/views/southeast/index.jsx";
import Ooh from "@/views/ooh/index.jsx";
import Dooh from "@/views/dooh/index.jsx";

import Google from "@/view/google/index.jsx";
import TikTok from "@/view/tiktok/index.jsx";
import Twitter from "@/view/twitter/index.jsx";
import Xhs from "@/view/xhs/index.jsx";
import YaHoo from "@/view/yahoo/index.jsx";
import YouTuBe from "@/view/youtube/index.jsx";
import LinkedIn from "@/view/linkedin/index.jsx";
import FaceBook from "@/view/facebook/index.jsx";
import Gdn from "@/view/gdn/index.jsx";
import GraphicDesign from "@/view/graphic_design/index.jsx";
import Outdoor from "@/view/outdoor/index.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={AdTechinno} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/adtechinno" component={AdTechinno} />
            <Route exact path="/tech-data" component={TechData} />
            <Route exact path="/insight" component={Insight} />
            <Route exact path="/news" component={News} />
            <Route exact path="/newsDetails" component={NewsDetails} />
            <Route exact path="/digital-marketing" component={Sem} />
            <Route exact path="/services/sem" component={Sem} />
            <Route exact path="/services/seo" component={Seo} />
            <Route exact path="/services/taboola" component={Taboola} />
            <Route exact path="/services/display" component={Display} />
            <Route exact path="/services/video" component={Video} />
            <Route exact path="/services/social" component={Social} />
            <Route exact path="/services/content" component={Content} />
            <Route exact path="/services/influencer" component={InfluenKol} />
            <Route exact path="/services/audio-advertising" component={Audio} />
            <Route
              exact
              path="/services/omnichannel-marketing"
              component={Omnichannel}
            />
            <Route exact path="/services/baidu" component={BaiDu} />
            <Route exact path="/services/wechat" component={WeChat} />
            <Route exact path="/services/douyin" component={DouYin} />
            <Route exact path="/services/weibo" component={WeiBo} />
            <Route exact path="/services/xiaohongshu" component={RedBook} />
            <Route exact path="/services/toutiao" component={TouTiao} />
            <Route exact path="/services/grabads-agency" component={Grab} />
            <Route exact path="/services/global-digital" component={Global} />
            <Route
              exact
              path="/services/industry-design"
              component={Industry}
            />
            <Route exact path="/services/china-ecommerce" component={China} />
            <Route
              exact
              path="/services/southeast-asia-ecommerce"
              component={Southeast}
            />
            <Route exact path="/services/ooh" component={Ooh} />
            <Route exact path="/services/programmatic-dooh" component={Dooh} />

            <Route exact path="/google" component={Google} />
            <Route exact path="/tiktok" component={TikTok} />
            <Route exact path="/twitter" component={Twitter} />
            <Route exact path="/xhs" component={Xhs} />
            <Route exact path="/yahoo" component={YaHoo} />
            <Route exact path="/youtube" component={YouTuBe} />
            <Route exact path="/linkedin" component={LinkedIn} />
            <Route exact path="/facebook" component={FaceBook} />
            <Route exact path="/gdn" component={Gdn} />
            <Route exact path="/graphic-design" component={GraphicDesign} />
            <Route exact path="/outdoor" component={Outdoor} />
            <Route exact path="/contact" component={ToChat} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
