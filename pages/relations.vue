<template lang="pug">
section.w-full.pb-20(v-cloak)
  .sc-1.flex.items-center.justify-center.h-480.relative
    img.object-center.object-cover.absolute.z-0.w-full.h-full(:src="basePath + pageData.images1" width="100%" height="100%")
    .sc-1__block.z-1
      h1.text-4xl.text-white(v-text="pageData.title")
  .sc-2.flex.items-center.justify-center
    .sc-2__block.py-10
      article
        p.text-gray-500.leading-8.text-lg(v-text="pageData.content")
  .sc-3.flex.items-center.justify-center.relative
    .sc-3__bg.absolute.inset-x-0.bottom-0.top-40.bg-gray-100
    .sc-3__block.pb-10.z-1
      h1.text-4xl 投资者服务
      .grid.grid-cols-3.gap-x-10.mt-10(v-if="pageData.service")
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
      .flex.mt-10.gap-x-10
        .flex-1
          img.object-center.object-cover(:src="basePath + pageData.images2")
        .flex-1
          ul.flex-col.flex
            li.py-4.text-gray-500.px-5.flex.cursor-pointer.border-b.border-gray-100(
              v-for="(info, i) in pageData.infos" :key="info.id" class="hover:text-blue-500 hover:bg-gray-100")
              .flex-1 {{ info.title }}
              time(v-text="info.time")
          .flex-1.flex.justify-end.px-5.py-5
            button.text-blue-500 了解更多
      h1.text-4xl.my-10 公司治理
      ul
        li.py-2.text-gray-500.px-5.flex.items-center.cursor-pointer.border-b.border-gray-100(
          v-for="(govern, i) in pageData.govern" :key="govern.id" class="hover:text-blue-500 hover:bg-gray-100")
          .flex-1 {{ govern.title }}
          time.w-40.text-center(v-text="govern.time")
          a.text-blue-500.rounded.py-2.px-5(class="hover:bg-gray-200" target="_blank" :href="basePath + govern.url" download)
            ion-icon.mr-2(name="download-outline")
            | 下载


</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'relations-page',
  data() {
    return {
      msgs: [
        {
          title: "创远仪器2022第一次股东大会",
          time: "2022/03/06"
        },
        {
          title: "创远仪器2022第一次股东大会",
          time: "2022/03/06"
        },
        {
          title: "创远仪器2022第一次股东大会",
          time: "2022/03/06"
        },
        {
          title: "创远仪器2022第一次股东大会",
          time: "2022/03/06"
        },
        {
          title: "创远仪器2022第一次股东大会",
          time: "2022/03/06"
        },
        {
          title: "创远仪器2022第一次股东大会",
          time: "2022/03/06"
        },
      ],
      files: [
        {
          title: '上海创远仪器技术股份有限公司2022年第一季度报告',
          time: "2022/03/06",
        },
        {
          title: '上海创远仪器技术股份有限公司2022年第一季度报告',
          time: "2022/03/06",
        },
        {
          title: '上海创远仪器技术股份有限公司2022年第一季度报告',
          time: "2022/03/06",
        },
        {
          title: '上海创远仪器技术股份有限公司2022年第一季度报告',
          time: "2022/03/06",
        },
        {
          title: '上海创远仪器技术股份有限公司2022年第一季度报告',
          time: "2022/03/06",
        },
        {
          title: '上海创远仪器技术股份有限公司2022年第一季度报告',
          time: "2022/03/06",
        },
      ],
      pageData: '',
    }
  },
  computed: {
    basePath() {
      return process.env.BASE_API
    }
  },
  async mounted() {
    this.pageData = await this.getInvestor()
  },
  methods: {
    ...mapActions(['getInvestor'])
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
