<template lang="pug">
.w-full.flex.flex-col.items-center.pb-20(v-cloak v-if="pageData")
  .banner.w-full.flex.items-center.justify-center.relative
    img.object-center.object-cover.z-0.h-full.w-full(:src="basePath + pageData.url" width="100%" height="100%")
    .box.text-white.z-1.absolute.hidden(class="lg:block")
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
    carousel-card.mt-10.mb-10.container(:size="$root.ua.platform.type !== 'desktop' ? 1 : 4" :max-size="pageData.industry.length"  content-class="flex-1 mx-10")
      carousel-item(v-for="industry, i in pageData.industry" :key="industry.id" class="lg:w-1/4 w-full")
        .flex.flex-col.items-center.justify-center.mx-2.hover-border-primary.cursor-pointer
          .flex-1
            img.object-center.object-cover(:src="basePath + industry.url" :alt="industry.title" width="100%" height="100%")
          .title.py-5(v-text="industry.title")
  section.w-full.flex.flex-col.items-center.desc2
    .container
      h2.text-4xl.m-10(v-text="pageData.tags2")
  section.w-full.flex.flex-col.items-center.desc2.bg-gray-100
    carousel-card.mt-10.mb-10.container(:size="$root.ua.platform.type !== 'desktop' ? 1 : 4" :max-size="pageData.international.length"  content-class="flex-1 mx-10")
      carousel-item(v-for="international in pageData.international" :key="international.id" class="lg:w-1/4 w-full")
        .flex.flex-col.items-center.justify-center.mx-2.hover-border-primary.cursor-pointer
          .flex-1
            img.object-center.object-cover(:src="basePath + international.url" :alt="international.title" width="100%" height="100%")
          .title.py-5(v-text="international.title")
  section.w-full.flex.flex-col.items-center.desc2
    .container
      h2.text-4xl.m-10(v-text="pageData.tags3")
  section.w-full.flex.flex-col.items-center.desc2.bg-gray-100.mb-20
    carousel-card.mt-10.mb-10.container(:size="$root.ua.platform.type !== 'desktop' ? 1 : 4" :max-size="pageData.reward.length"  content-class="flex-1 mx-10")
      carousel-item(v-for="reward in pageData.reward" :key="reward.id" class="lg:w-1/4 w-full")
        .flex.flex-col.items-center.justify-center.mx-2.hover-border-primary.cursor-pointer
          .flex-1
            img.object-center.object-cover(:src="basePath + reward.url" :alt="reward.title" width="100%" height="100%")
          .title.py-5(v-text="reward.title")
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: "about-honorary",
  async asyncData({ route, app }) {
    const { data } = await app.$axios.$get('/api.php/api/getMate', { params: { router: route.path } });
    return data
  },
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
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords,
        },
      ]
    }
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
  .desc {
    font-size: 40px;
  }
}


.desc {

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

  h2 {
    color: #222222;
  }
}
</style>
