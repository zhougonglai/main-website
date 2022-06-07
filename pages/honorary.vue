<template lang="pug">
.w-full.flex.flex-col.items-center.pb-20(v-cloak v-if="pageData")
  .banner.w-full.h-480.flex.items-center.justify-center.relative
    img.object-center.object-cover.absolute.z-0.h-full.w-full(:src="basePath + pageData.url" width="100%" height="100%")
    .box.text-white.z-1
      h1.text-4xl(v-text="pageData.title")
      br
      .desc(v-text="pageData.title1")
  section.container.desc
    .content.text-gray-500.text-lg(v-text="pageData.content")
    hr
  section.w-full.flex.flex-col.items-center.desc2
    .container
      h2.text-4xl.m-10(v-text="pageData.tags1")
  section.w-full.flex.flex-col.items-center.desc2.bg-gray-100
    carousel-card.mt-10.mb-10.container(size="4" :max-size="pageData.industry.length"  content-class="flex-1 mx-10")
      carousel-item(v-for="industry, i in pageData.industry" :key="industry.id" class="w-1/4")
        .flex.flex-col.items-center.justify-center.mx-2.hover-border-primary.cursor-pointer
          .flex-1
            img.object-center.object-cover(:src="basePath + industry.url" :alt="industry.title" width="100%" height="100%")
          .title.py-5(v-text="industry.title")
  section.w-full.flex.flex-col.items-center.desc2
    .container
      h2.text-4xl.m-10(v-text="pageData.tags2")
  section.w-full.flex.flex-col.items-center.desc2.bg-gray-100
    carousel-card.mt-10.mb-10.container(size="4" :max-size="pageData.international.length"  content-class="flex-1 mx-10")
      carousel-item(v-for="international in pageData.international" :key="international.id" class="w-1/4")
        .flex.flex-col.items-center.justify-center.mx-2.hover-border-primary.cursor-pointer
          .flex-1
            img.object-center.object-cover(:src="basePath + international.url" :alt="international.title" width="100%" height="100%")
          .title.py-5(v-text="international.title")
  section.w-full.flex.flex-col.items-center.desc2
    .container
      h2.text-4xl.m-10(v-text="pageData.tags3")
  section.w-full.flex.flex-col.items-center.desc2.bg-gray-100.mb-20
    carousel-card.mt-10.mb-10.container(size="4" :max-size="pageData.reward.length"  content-class="flex-1 mx-10")
      carousel-item(v-for="reward in pageData.reward" :key="reward.id" class="w-1/4")
        .flex.flex-col.items-center.justify-center.mx-2.hover-border-primary.cursor-pointer
          .flex-1
            img.object-center.object-cover(:src="basePath + reward.url" :alt="reward.title" width="100%" height="100%")
          .title.py-5(v-text="reward.title")
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
