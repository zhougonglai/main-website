<template lang="pug">
.w-full.flex.flex-col.items-center
  .container
    nav.Bread-crumbs.flex.items-center
      NuxtLink(to="/")
        ion-icon(name='home-outline') 
      ion-icon(name='chevron-forward-outline') 
      | 发展历程
  .banner.w-full
  section.container.desc
    h5 发展历程
    .content 上海创远仪器技术股份有限公司成立于　2005 年，2015 年在新三板挂牌（831961），是一家自主研发射频通信测试仪器和提供整体测试解决方案的专业仪器仪表公司。
    hr
    .content 重点专注于无线通信网络运营测试、无线电监测和北斗导航测试、无线通信智能制造测试等三个方向，是我国高端无线通信测试仪器行业的代表性企业。自 TD-SCDMA 时代伊始，创远仪器便积极参与中国自主知识产权移动通信标准和产业发展，在 TD-LTE 时代更是取得丰硕成果，多款产品获得广泛商用。2017 年 1 月与中国移动、华为、中兴、展讯等 14 家企业共同荣获国家科学技术进步特等奖。
  .banner2
  section.w-full.flex.flex-col.items-center.desc2
    .container
      h2 公司战略
      img(src="../assets/img/about/about-1.png")
  section.w-full.flex.flex-col.items-center.desc2.bg-white.desc3
    .container
      h2 核心技术
      .list.flex.justify-center
        .item
          .img
          .title 射频微波电路
            br
            | 设计及制造
        .item
          .img
          .title 射频微波电路
            br
            | 设计及制造
        .item
          .img
          .title 射频微波电路
            br
            | 设计及制造
        .item
          .img
          .title 射频微波电路
            br
            | 设计及制造
            
  section.w-full.flex.flex-col.items-center.desc2.bg-white.desc4
    .container
      h2 重点客户
      Carousel(:items="banner")
</template>

<script>
import banner from '@/assets/constant/banner.json'
export default {
  name: "about-page",
  data() {
    return {
      banner,
    };
  },
};
</script>

<style lang="scss" scoped>
$blue: #005fab;
nav.Bread-crumbs {
  height: 66px;
  font-size: 20px;
  color: #606060;
}
.banner {
  height: 584px;
  background: url("../assets/img/bg_sunset.jpg") no-repeat center / cover;
}
.container {
  width: 1200px;
}
.desc {
  width: 1047px;
  h5 {
    margin-top: 100px;
    font-size: 36px;
    font-weight: 400;
    color: #262626;
  }
  hr {
    border-bottom: 2px solid #666666;
    margin: 30px 0;
  }
  .content {
    margin-top: 43px;
    font-size: 24px;
    color: #585858;
    line-height: 42px;
  }
}
.banner2 {
  width: 1047px;
  height: 562px;
  margin: 84px 0;
  background: url("../assets/img/bg_sunset.jpg") no-repeat center / cover;
}
.desc2 {
  .container {
    width: 1047px;
  }
  background: #f9f9f9;
  margin-top: -160px;
  position: relative;
  z-index: -1;
  padding-top: 220px;
  h2 {
    font-size: 48px;
    color: #222222;
  }
  img {
    margin: 100px auto 60px;
  }
}
.desc3 {
  margin-top: 0;
  padding-top: 0;
  .list {
    margin: 0 -13px;
    .item {
      width: 250px;
      margin: 13px;
      .img {
        height: 252px;
        background: url("../assets/img/bg_sunset.jpg") no-repeat center / cover;
      }
      .title {
        padding: 20px;
        height: 110px;
        background: #ffffff;
      }
    }
  }
}
.desc4 {
  margin-top: 0;
  padding-top: 0;
}
</style>
