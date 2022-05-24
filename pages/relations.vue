<template lang="pug">
section.w-full.pb-20
  .sc-1.flex.items-center.justify-center.h-96.bg-gradient-to-r.from-blue-300.to-red-300
    .sc-1__block
      h1.text-4xl.text-white 投资者关系
  .sc-2.flex.items-center.justify-center
    .sc-2__block.py-10
      article
        p.text-gray-500.leading-8.text-lg 上海创远仪器技术股份有限公司经全国中小企业股份转让系统有限责任公司股转系统函[2015]187号文核准，于2015年3月17日，在全国中小企业股份转让系统以做市方式挂牌上市。公司主办券商为中信建投证券股份有限公司。 证券简称：创远仪器 证券代码：831961
  .sc-3.flex.items-center.justify-center.relative
    .sc-3__bg.absolute.inset-x-0.bottom-0.top-40.bg-gray-100
    .sc-3__block.pb-10.z-1
      h1.text-4xl 投资者服务
      .grid.grid-cols-3.gap-x-10.mt-10
        .card.flex.flex-col.cursor-pointer.bg-white.border-b-2.border-white(class="hover:shadow hover:border-blue-300")
          .card-cover
            img.object-center.object-cover(src="https://img01.yzcdn.cn/vant/cat.jpeg")
          .card-content.p-5
            .card-title 邮箱
            .card-desc info@transcom.net.cn
        .card.flex.flex-col.cursor-pointer.bg-white.border-b-2.border-white(class="hover:shadow hover:border-blue-300")
          .card-cover
            img.object-center.object-cover(src="https://img01.yzcdn.cn/vant/cat.jpeg")
          .card-content.p-5
            .card-title 投资者热线
            .card-desc 400-677-8077
        .card.flex.flex-col.cursor-pointer.bg-white.border-b-2.border-white(class="hover:shadow hover:border-blue-300")
          .card-cover
            img.object-center.object-cover(src="https://img01.yzcdn.cn/vant/cat.jpeg")
          .card-content.p-5
            .card-title 投资者互动平台
            .card-desc 立即跳转
  .sc-4.flex.items-center.justify-center
    .sc-4__block.py-10
      h1.text-4xl 信息披露
      .flex.mt-10.gap-x-10
        .flex-1
          img.object-center.object-cover(src="https://img01.yzcdn.cn/vant/cat.jpeg")
        .flex-1
          ul.flex-col.flex
            li.py-4.text-gray-500.px-5.flex.cursor-pointer.border-b.border-gray-100(
              v-for="(msg, i) in msgs" :key="i" class="hover:text-blue-500 hover:bg-gray-100")
              .flex-1 {{ msg.title }}
              time(v-text="msg.time")
          .flex-1.flex.justify-end.px-5.py-5
            button.text-blue-500 了解更多
      h1.text-4xl.my-10 公司治理
      ul
        li.py-2.text-gray-500.px-5.flex.items-center.cursor-pointer.border-b.border-gray-100(v-for="(file, i) in files" :key="i" class="hover:text-blue-500 hover:bg-gray-100")
          .flex-1 {{ file.title }}
          time.flex-1(v-text="file.time")
          button.text-blue-500.rounded.py-2.px-5(class="hover:bg-gray-200")
            ion-icon.mr-2(name="download-outline")
            | 下载


</template>
<script>
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
      ]
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
