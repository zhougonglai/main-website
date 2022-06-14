<template lang="pug">
.w-full.flex.flex-col.items-center
  .banner.w-full.h-480.flex.justify-center.relative
    img.absolute.object-center.object-cover.w-full.h-full.z-0(:src="basePath + news.url" width="100%" height="100%")
    .box.flex.flex-col.justify-center.z-1.cn-font
      h1.text-4xl.text-white(v-text="news.title")
      pre.cn-font.text-xl.mt-5.leading-8.desc.text-white(v-text="news.content")
  .new-list.grid.grid-cols-3.mt-20.gap-10
    nuxt-link.flex.flex-col.border-b-2.border-white(v-for="n in news.news" :key="n.id" :to="`news/${n.id}`" class="hover:border-blue-300")
      img.object-center.object-cover(:src="basePath + n.url" width="373" height="249")
      .bg-gray-100.flex.flex-col.p-5
        h2.text-xl 创远仪器参加2021年mwc
        .flex.text-lg.mt-5.justify-between.items-end
          button.border-b.border-gray-500 了解详情
          time.text-sm.text-gray-500(v-text="n.date")
  section.py-20
    SubmitPagination(:length="news.totalPage" :value="pages" @change="handleChange")
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "news-page",
  data() {
    return {
      pages: 1
    }
  },
  computed: {
    basePath() {
      return process.env.BASE_API
    },
    ...mapState(['news'])
  },
  mounted() {
    this.getNewsList({ pages: this.pages });
  },
  methods: {
    ...mapActions(['getNewsList']),
    async handleChange(value) {
      await this.getNewsList({ pages: value });
      this.pages = value;
      window.scrollTo({ top: 400, behavior: "smooth" })
    }
  }
};
</script>
<style lang="scss" scoped>
.banner {
  .box {
    width: 1200px;
  }
}

.new-list {
  width: 1200px;

  img {
    height: 249px;
  }
}
</style>
