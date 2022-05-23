<template lang="pug">
.w-full.flex.flex-col.items-center
  .banner.w-full.h-480.flex.items-center.justify-center.h-96.bg-gradient-to-r.from-blue-300.to-red-300
    .box
      h1.text-4xl.text-white 荣誉资质
      .desc 创远仪器获得多方认可
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
.banner {
  .box {
    width: 1000px;
  }
  .desc {
    font-size: 36px;
  }
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
