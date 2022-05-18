<template lang="pug">
.w-full.flex.flex-col.items-center
  .container
    nav.Bread-crumbs.flex.items-center
      NuxtLink(to="/")
        ion-icon(name='home-outline') 
      ion-icon(name='chevron-forward-outline') 
      NuxtLink(to="/about") 关于我们       
      ion-icon(name='chevron-forward-outline') 
      | 荣誉资质
  .banner.w-full
  section.container.desc
    .content 公司自2005年成立以来，一直围绕技术创新和市场开拓优化知识产权布局，力争做到知识产权具有数量规模、质量优势的资源储备，有效支撑企业不断创新发展。
    hr
  section.w-full.flex.flex-col.items-center.desc2
    .container
      h2 国际权威机构测试认证
      Carousel(:items="banner")
  section.w-full.flex.flex-col.items-center.desc2
    .container
      h2 我们拥有140项已授权行业专利
      Carousel(:items="banner")
  section.w-full.flex.flex-col.items-center.desc2
    .container
      h2 获得奖项
      Carousel(:items="banner")
</template>
<script>
import banner from "@/assets/constant/banner.json";
export default {
  name: "about-honorary",
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
  height: 484px;
  background: url("../assets/img/bg_sunset.jpg") no-repeat center / cover;
}
.container {
  width: 1200px;
}
.desc {
  width: 1047px;
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
.desc2 {
  .container {
    width: 1047px;
  }
  h2 {
    font-size: 48px;
    color: #222222;
  }
}
</style>
