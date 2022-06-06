<template lang="pug">
.w-full.flex.flex-col.items-center.pb-20(v-cloak v-if="pageData")
  .banner.w-full.h-480.flex.items-center.justify-center.relative
    img.object-center.object-cover.absolute.z-0(:src="basePath + pageData.cover_path" width="100%" height="100%")
    .box.text-white.z-1
      h1.text-4xl 荣誉资质
      br
      .desc(v-text="title")
  section.container.desc
    .content.text-gray-500.text-lg(v-text="pageData.content")
    hr
  section.w-full.flex.flex-col.items-center.desc2
    .container
      h2.text-4xl.m-10(v-text="pageData.title1")
  section.w-full.flex.flex-col.items-center.desc2.bg-gray-100
    carousel-card.mt-10.mb-10.container( size="4"  content-class="flex-1 mx-10")
      carousel-item(v-for="img, i in pageData.images1" :key="i" class="w-1/4")
        .flex.flex-col.items-center.justify-center.mx-2.hover-border-primary.cursor-pointer
          .flex-1
            img.object-center.object-cover(:src="basePath + img" alt="专利证书" width="100%")
          .title 专利证书
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
import { mapActions } from 'vuex';

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
      pageData: ''
    };
  },
  computed: {
    basePath() {
      return process.env.BASE_API
    }
  },
  async mounted() {
    this.pageData = await this.getCert()
  },
  methods: {
    ...mapActions(['getCert'])
  }
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
