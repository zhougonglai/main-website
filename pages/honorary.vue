<template lang="pug">
.w-full.flex.flex-col.items-center.pb-20
  .banner.w-full.h-480.flex.items-center.justify-center.h-96.bg-gradient-to-r.from-blue-300.to-red-300
    .box.text-white
      h1.text-4xl 荣誉资质
      br
      .desc 创远仪器获得多方认可
  section.container.desc
    .content.text-gray-500.text-lg 公司自2005年成立以来，一直围绕技术创新和市场开拓优化知识产权布局，力争做到知识产权具有数量规模、质量优势的资源储备，有效支撑企业不断创新发展。
    hr
  section.w-full.flex.flex-col.items-center.desc2
    .container
      h2.text-4xl.m-10 国际权威机构测试认证
  section.w-full.flex.flex-col.items-center.desc2.bg-gray-100
    carousel-card.mt-10.mb-10.container( size="4"  content-class="flex-1 mx-10")
      carousel-item(v-for="l in imgs" :key="l.name" class="w-1/4")
        .flex.items-center.justify-center.mx-2.hover-border-primary.cursor-pointer
          .Certificate
            .img(:alt="l.name")
            .title {{ l.name }}
  section.w-full.flex.flex-col.items-center.desc2
    .container
      h2.text-4xl.m-10 我们拥有140项已授权行业专利
  section.w-full.flex.flex-col.items-center.desc2.bg-gray-100
    carousel-card.mt-10.mb-10.container( size="4"  content-class="flex-1 mx-10")
      carousel-item(v-for="l in imgs" :key="l.name" class="w-1/4")
        .flex.items-center.justify-center.mx-2.hover-border-primary.cursor-pointer
          .Certificate
            .img(:alt="l.name")
            .title {{ l.name }}
  section.w-full.flex.flex-col.items-center.desc2
    .container
      h2.text-4xl.m-10 获得奖项
  section.w-full.flex.flex-col.items-center.desc2.bg-gray-100.mb-20
    carousel-card.mt-10.mb-10.container( size="4"  content-class="flex-1 mx-10")
      carousel-item(v-for="l in imgs" :key="l.name" class="w-1/4")
        .flex.items-center.justify-center.mx-2.hover-border-primary.cursor-pointer
          .Certificate
            .img(:alt="l.name")
            .title {{ l.name }}
</template>
<script>
export default {
  name: "about-honorary",
  data() {
    return {
      imgs: [
        {
          name: "专利证书",
        },
        {
          name: "专利证书",
        },
        {
          name: "专利证书",
        },
        {
          name: "专利证书",
        },
      ],
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
    font-size: 40px;
  }
}

.container {
  width: 1200px;
}

.Certificate {
  .img {
    background: url("../assets/img/bg_sunset.jpg") no-repeat center / cover;
    width: 222px;
    height: 281px;
  }

  .title {
    border-left: 1px solid #ccc;
    padding-left: 15px;
    margin: 10px 0;
  }
}

.desc {
  width: 1047px;

  hr {
    border-bottom: 1px solid #999;
    margin: 20px 0;
  }

  .content {
    margin-top: 43px;
    // font-size: 24px;
    color: #585858;
  }
}

.desc2 {
  .container {
    width: 1047px;
  }

  h2 {
    color: #222222;
  }
}
</style>
