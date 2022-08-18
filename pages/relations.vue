<template lang="pug">
section.w-full.pb-20(v-cloak)
  .sc-1.flex.items-center.justify-center.relative
    img.object-center.object-cover.z-0.w-full.h-full(:src="basePath + pageData.images1" width="100%" height="100%")
    .sc-1__block.z-1.absolute.hidden(class="lg:block")
      h1.text-4xl.text-white(v-text="pageData.title")
  .sc-2.flex.items-center.justify-center
    .sc-2__block.py-10
      article
        pre.text-gray-500.leading-8.text-lg.text-center(v-text="pageData.content")
  .sc-3.flex.items-center.justify-center.relative
    .sc-3__bg.absolute.inset-x-0.bottom-0.top-40.bg-gray-100
    .sc-3__block.pb-10.z-1
      h1.text-4xl 投资者服务
      .grid.grid-cols-1.gap-x-10.mt-10.px-4.gap-y-4(v-if="pageData.service" class="lg:grid-cols-3 lg:px-0 lg:gap-y-0")
        a.card.flex.flex-col.cursor-pointer.bg-white.border-b-2.border-white(
          class="hover:shadow hover:border-blue-300" :href="`mailto:${pageData.service[0].content}`" target="_blank")
          .card-cover
            img.object-center.object-cover(:src="basePath + pageData.service[0].url")
          .card-content.p-5
            .card-title(v-text="pageData.service[0].content")
            .card-desc(v-text="pageData.service[0].title")
        a.card.flex.flex-col.cursor-pointer.bg-white.border-b-2.border-white(
          class="hover:shadow hover:border-blue-300" :href='`tel:${pageData.service[1].content}`')
          .card-cover
            img.object-center.object-cover(:src="basePath + pageData.service[1].url")
          .card-content.p-5
            .card-title(v-text="pageData.service[1].content")
            .card-desc(v-text="pageData.service[1].title")
        a.card.flex.flex-col.cursor-pointer.bg-white.border-b-2.border-white(
          class="hover:shadow hover:border-blue-300" href="http://www.bse.cn/disclosure/announcement.html" target="_blank")
          .card-cover
            img.object-center.object-cover(:src="basePath + pageData.service[2].url")
          .card-content.p-5
            .card-title(v-text="pageData.service[2].content")
            .card-desc(v-text="pageData.service[2].title")

  .sc-4.flex.items-center.justify-center
    .sc-4__block.py-10
      h1.text-4xl 信息披露
      .flex.mt-10.gap-x-10.flex-col(class="lg:flex-row")
        .flex-1
          img.object-center.object-cover(:src="basePath + pageData.images2")
        .flex-1
          ul.flex-col.flex
            li.py-4.text-gray-500.px-5.flex.cursor-pointer.border-b.border-gray-100(
              v-for="(info, i) in pageData.infos" :key="info.id" class="hover:text-blue-500 hover:bg-gray-100" @click="showFile(info)")
              .flex-1 {{ info.title }}
              time(v-text="info.time")
          .flex-1.flex.justify-end.px-5.py-5
            a.text-blue-500(href="http://www.bse.cn/products/neeq_listed_companies/related_announcement.html?companyCode=831961&typename=C&xxfcbj=2" target="_blank") 了解更多
      h1.text-4xl.my-10 公司治理
      ul(v-if="govern")
        li.py-2.text-gray-500.px-5.flex.items-center.cursor-pointer.border-b.border-gray-100(
          v-for="(govern, i) in govern" :key="govern.id" class="hover:text-blue-500 hover:bg-gray-100" @click="showFile(govern)")
          .flex-1 {{ govern.title }}
          time.w-40.text-center(v-text="govern.time")
          a.text-blue-500.rounded.py-2.px-5(class="hover:bg-gray-200" target="_blank" :href="basePath + govern.url" download)
            ion-icon.mr-2(name="download-outline")
            | 下载
      .flex.mt-20.items-center.justify-center(v-if="totalPage")
        SubmitPagination(:length="totalPage" :value="pages" @change="changePage")
  Dialog.w-full.h-full(v-cloak ref="dialog")
    embed(v-if="preview" :src="$root.basePath + preview" width="100%" height="100%")

</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'relations-page',
  async asyncData({ route, app }) {
    const { data } = await app.$axios.$get('/api.php/api/getMate', { params: { router: route.path } });
    return data
  },
  data() {
    return {
      pageData: '',
      preview: '',
      govern: '',
      totalPage: 0,
      pages: 1,
    }
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
    this.pageData = await this.getInvestor()
    const { data, totalPage } = await this.getInvestorFile();
    this.govern = data;
    this.totalPage = totalPage;
  },
  methods: {
    ...mapActions(['getInvestor', 'getInvestorFile']),
    showFile(file) {
      this.preview = file.url;
      this.$refs.dialog.showModal();
    },
    async changePage(page) {
      this.pages = page;
      const { data } = await this.getInvestorFile({ pages: this.pages });
      this.govern = data;
    }
  }
}
</script>
<style lang="scss" scoped>
.z-1 {
  z-index: 1;
}

.sc-1 {
  &__block {
    width: min(1200px, 100%);
  }
}

.sc-2 {
  &__block {
    width: min(900px, 100%);
  }
}

.sc-3 {
  &__block {
    width: min(1200px, 100%);
  }
}

.sc-4 {
  &__block {
    width: min(1200px, 100%);
  }
}
</style>
