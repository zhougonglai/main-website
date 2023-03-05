<template lang="pug">
.w-full.flex.flex-col.items-center(v-cloak v-if="pageData")
  img.w-full(:src="basePath + pageData.images1")
  section.container.desc.py-20.px-4(class="lg:px-0")
    h1.text-4xl 关于我们
    article.mt-10
      p.text-xl.leading-8.text-gray-500(v-text='pageData.content')
      hr.my-10
      p.text-xl.leading-8.text-gray-500(v-text='pageData.content1')
  .banner2
    img.w-full.h-full.object-center.object-cover(:src="basePath + pageData.images2" width="100%" height="100%")
  section.w-full.flex.flex-col.items-center.mt-20
    .container
      h1.text-4xl 公司战略
      .strategy.relative.flex.flex-col.items-center.justify-between.p-10.text-primary.space-y-10(:class="$root.ua.platform.type" class="lg:space-y-0")
        .step-title.text-7xl.text-blue.mt-0.font-bold(v-text="pageData.planTitle")
        .step.step-1.flex.flex-col.items-center.justify-center
          .step-icon
            img(:src="basePath + pageData.plan[0].url")
          label.mt-5(v-text="pageData.plan[0].title")
        .step.step-2.flex.flex-col.items-center.justify-center
          .step-icon
            img(:src="basePath + pageData.plan[1].url")
          label.mt-5(v-text="pageData.plan[1].title")
        .step.step-3.flex.flex-col.items-center.justify-center
          .step-icon
            img(:src="basePath + pageData.plan[2].url")
          label.mt-5(v-text="pageData.plan[2].title")
        img.hidden(class="lg:block" src="@/assets/img/about/state.svg" width="775" height="300")
  section.w-full.flex.flex-col.items-center.bg-white.relative
    .bg-gray-100.absolute.z-0.inset-x-0.bottom-0.h-60
    .container.py-10.z-10
      h1.text-4xl 核心技术
      .grid.justify-center.mt-10.gap-x-5.grid-cols-1.px-4(class="lg:grid-cols-4 lg:px-0")
        .card.cursor-pointer.border-b-2.border-white.bg-white.flex.flex-col(class="hover:border-blue-300" v-for="(tech, i) in pageData.tech" :key="i")
          .card-cover.flex-1
            img.object-center.object-cover(:src="basePath + tech.url")
          .card-content.p-5
            .card-title.text-xl(v-text="tech.title")
            .card-desc.mt-2(v-text="tech.content")

  section.w-full.flex.flex-col.items-center.desc4.relative.bg-gray-100.pb-20
    .bg-white.absolute.z-0.inset-x-0.h-40
    .bg-white.absolute.z-0.inset-x-0.bottom-0.h-20
    .container.py-20.z-10
      h2.text-4xl.mb-28 重点客户
      //- v-for="(logo, i) in pageData.customer"
      carousel-card.mt-10(:size="$root.ua.platform.type === 'desktop' ? 4 : 1" :max-size="pageData.line1.length" content-class="flex-1 mx-10")
        carousel-item(v-for="(l,i) in pageData.line1" :key="i" class="w-full lg:w-1/4")
          a.flex.items-center.bg-white.justify-center.mx-2.h-28.hover-border-primary.border-b-2.border-gray-100.cursor-pointer(:href="l.url" target="_blank")
            //- img(:src="basePath + l.images")
            img(:src="l.images")
      carousel-card.mt-10(:size="$root.ua.platform.type === 'desktop' ? 4 : 1" :max-size="pageData.line2.length" content-class="flex-1 mx-10")
        carousel-item(v-for="(l,i) in pageData.line2" :key="i" class="w-full lg:w-1/4")
          a.flex.items-center.bg-white.justify-center.mx-2.h-28.hover-border-primary.border-b-2.border-gray-100.cursor-pointer(:href="l.url" target="_blank")
            img(:src="l.images")
      carousel-card.mt-10(:size="$root.ua.platform.type === 'desktop' ? 4 : 1" :max-size="pageData.line3.length" content-class="flex-1 mx-10")
        carousel-item(v-for="(l,i) in pageData.line3" :key="i" class="w-full lg:w-1/4")
          a.flex.items-center.bg-white.justify-center.mx-2.h-28.hover-border-primary.border-b-2.border-gray-100.cursor-pointer(:href="l.url" target="_blank")
            img(:src="l.images")
      carousel-card.mt-10(:size="$root.ua.platform.type === 'desktop' ? 4 : 1" :max-size="pageData.line4.length" content-class="flex-1 mx-10")
        carousel-item(v-for="(l,i) in pageData.line4" :key="i" class="w-full lg:w-1/4")
          a.flex.items-center.bg-white.justify-center.mx-2.h-28.hover-border-primary.border-b-2.border-gray-100.cursor-pointer(:href="l.url" target="_blank")
            img(:src="l.images")
      carousel-card.mt-10(:size="$root.ua.platform.type === 'desktop' ? 4 : 1" :max-size="pageData.line5.length" content-class="flex-1 mx-10")
        carousel-item(v-for="(l,i) in pageData.line5" :key="i" class="w-full lg:w-1/4")
          a.flex.items-center.bg-white.justify-center.mx-2.h-28.hover-border-primary.border-b-2.border-gray-100.cursor-pointer(:href="l.url" target="_blank")
            img(:src="l.images")
      carousel-card.mt-10(:size="$root.ua.platform.type === 'desktop' ? 4 : 1" :max-size="pageData.line6.length" content-class="flex-1 mx-10")
        carousel-item(v-for="(l,i) in pageData.line6" :key="i" class="w-full lg:w-1/4")
          a.flex.items-center.bg-white.justify-center.mx-2.h-28.hover-border-primary.border-b-2.border-gray-100.cursor-pointer(:href="l.url" target="_blank")
            img(:src="l.images")
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "about-page",
  async asyncData({ route, app }) {
    const { data } = await app.$axios.$get('/api.php/api/getMate', { params: { router: route.path } });
    return data
  },
  data() {
    return {
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
    },
    images() {
      return this.pageData?.images10.split(',')
    }
  },
  async mounted() {
    this.pageData = await this.getAbout()
  },
  methods: {
    ...mapActions(['getAbout']),
  }
};
</script>

<style lang="scss" scoped>
$blue: #005fab;

.banner {
  background: url("../assets/img/bg_sunset.jpg") no-repeat center / cover;
}

.banner2 {
  width: min(1047px, 100%);
}

.strategy {
  &.desktop {
    min-height: 650px;

    .step {
      position: absolute;

      &-icon {
        width: 120px;
        height: 120px;
        font-size: 120px;
        line-height: 120px;
      }

      label {
        font-size: 24px;
      }

      &-1 {
        left: 180px;
        bottom: 400px;
      }

      &-2 {
        bottom: 150px;
      }

      &-3 {
        right: 180px;
        bottom: 400px;
      }
    }
  }

  &.mobile {
    .step {
      &-icon {
        width: 120px;
        height: 120px;
        font-size: 120px;
        line-height: 120px;
      }
    }
  }
}
</style>
