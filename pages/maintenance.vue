<template lang="pug">
section.w-full.flex.flex-col.pb-20(v-if="pageData")
  .carousels
    img.object-center.object-cover.w-full.h-480(:src="basePath + pageData.images1" width="100%" height="100%")
  .sc-1.flex.items-center.justify-center
    .sc-1__block.py-10.flex.items-center.flex-col.justify-center
      h1.text-4xl.w-full 简介
      .grid.grid-cols-3.justify-center.my-20.justify-items-center
        .flex.flex-col
          ion-icon.text-blue-500(name="construct-sharp")
          .text-2xl.text-center.mt-5 维修
        .flex.flex-col
          ion-icon.text-blue-500(name="locate-sharp")
          .text-2xl.text-center.mt-5 校准
        .flex.flex-col
          ion-icon.text-blue-500(name="reload-sharp")
          .text-2xl.text-center.mt-5 升级
      article.text-gray-600
        p.text-lg(v-text="pageData.content")
        p.text-lg.leading-8.mt-10(v-text="pageData.content1")
      .products.bg-gray-100.flex.items-end.justify-center.gap-x-10.p-10.mt-80.w-full
        .card.flex.flex-col.cursor-pointer.border-b-2.border-gray-100(class="hover:shadow hover:border-blue-300")
          .card-cover
            img.object-center.object-cover(:src="basePath + images[0]")
          .card-content.flex-1.p-5.bg-white.flex.flex-col
            h4.card-title.text-2xl.font-bold.flex.items-center
              ion-icon.mr-2(name="reload-sharp")
              | 升级服务
            p.card-desc.flex-1.leading-8.mt-5(v-text="pageData.content2")
            .card-action
              button.card-btn.text-2xl.text-blue-500 了解详情
        .card.flex.flex-col.cursor-pointer.border-b-2.border-gray-100(class="hover:shadow hover:border-blue-300")
          .card-cover
            img.object-center.object-cover(:src="basePath + images[1]")
          .card-content.flex-1.p-5.bg-white.flex.flex-col
            h4.card-title.text-2xl.font-bold.flex.items-center
              ion-icon.mr-2(name="locate-sharp")
              | 校准服务
            p.card-desc.flex-1.leading-8.mt-5(v-text="pageData.content3")
            .card-action
              button.card-btn.text-2xl.text-blue-500 了解详情
  .sc-2.flex.items-center.justify-center
    .sc-2__block.py-10
      h1.text-4xl 送修仪器说明
      .products.bg-gray-100.flex.flex-col.justify-end.gap-x-10.p-10.mt-40.w-full
        .card.flex.cursor-pointer.shadow(class="hover:shadow-xl")
          .card-cover
            img.object-center.object-cover(:src="basePath + images[2]")
          .card-content.flex-1.p-5.bg-white.flex.flex-col
            h4.text-2xl 维修简介
            p.leading-8.text-gray-500.mt-5(v-text="pageData.content4")
        p.mt-10.leading-8.text-gray-500(v-text="pageData.content5")
  .sc-3.flex.items-center.justify-center
    .sc-3__block.py-10.flex.items-center.justify-center.flex-col
      h1.text-4xl.w-full 文档下载区
      .grid.grid-cols-2.justify-center.my-20.justify-items-center
        .flex.flex-col.text-center.items-center
          ion-icon.text-blue-500(name="layers")
          .text-2xl.mt-5 服务流程
        .flex.flex-col.text-center.items-center
          ion-icon.text-blue-500(name="book")
          .text-2xl.mt-5 维修、校准协议书
      h1.text-4xl.w-full FAQ
      article.bg-gray-100.w-full.py-10.px-5.mt-10.text-lg.text-slate-800
        pre(v-text="pageData.content6")


</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'fixer-page',
  data() {
    return {
      pageData: ''
    }
  },
  computed: {
    basePath() {
      return process.env.BASE_API
    },
    images() {
      return this.pageData.images2?.split(',')
    }
  },
  async mounted() {
    this.pageData = await this.getRepair()
  },
  methods: {
    ...mapActions(['getRepair'])
  }
}
</script>
<style lang="scss" scoped>
.sc-1 {
  &__block {
    width: 1200px;

    .grid {
      width: 900px;

      ion-icon {
        font-size: 100px;
      }
    }

    .products {
      height: 400px;
    }

    .card {
      height: 600px;
      width: 450px;

      &-cover {
        width: 100%;
        max-height: 250px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      &-desc {
        color: var(--color);
      }
    }
  }
}

.sc-2 {
  &__block {
    width: 1200px;

    .products {
      height: 350px;
    }

    .card {
      height: 250px;

      &-cover {
        width: 560px;

        img {
          width: inherit;
          height: 250px;
        }
      }

      &:hover {
        .card-content {
          border-bottom: 2px solid rgb(147, 197, 253);
        }
      }
    }
  }
}

.sc-3 {
  &__block {
    width: 1200px;

    .grid {
      .flex {
        width: 300px;

        ion-icon {
          font-size: 100px;
        }
      }
    }
  }
}
</style>
