<template lang="pug">
section.w-full.flex.flex-col.pb-20(v-if="pageData")
  .carousels
    img.object-center.object-cover.w-full(:src="$root.basePath + pageData.images1" width="100%" height="100%")
  .sc-1.flex.items-center.justify-center
    .sc-1__block.py-10.flex.items-center.flex-col.justify-center
      h1.text-4xl.w-full 简介
      .grid.grid-cols-1.justify-center.my-20.justify-items-center(class="lg:grid-cols-3" :class="$root.ua.platform.type")
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
        p.text-lg.leading-8.mt-10( v-text="pageData.content1")
      .products.bg-gray-100.flex.items-end.justify-center.gap-x-10.p-10.mt-80.w-full.flex-col.space-y-10(
        class="lg:flex-row lg:space-y-0" :class="$root.ua.platform.type")
        .card.flex.flex-col.cursor-pointer.border-b-2.border-gray-100(
          class="hover:shadow hover:border-blue-300"
          @click="openPreview(pageData.url1)")
          .card-cover
            img.object-center.object-cover(:src="$root.basePath + images[0]")
          .card-content.flex-1.p-5.bg-white.flex.flex-col
            h4.card-title.text-2xl.font-bold.flex.items-center
              ion-icon.mr-2(name="reload-sharp")
              | 升级服务
            p.card-desc.flex-1.leading-8.mt-5(v-text="pageData.content2")
            .card-action
              button.card-btn.text-2xl.text-blue-500 了解详情
        .card.flex.flex-col.cursor-pointer.border-b-2.border-gray-100(
          class="hover:shadow hover:border-blue-300"
          @click="openPreview(pageData.url2)")
          .card-cover
            img.object-center.object-cover(:src="$root.basePath + images[1]")
          .card-content.flex-1.p-5.bg-white.flex.flex-col
            h4.card-title.text-2xl.font-bold.flex.items-center
              ion-icon.mr-2(name="locate-sharp")
              | 校准服务
            p.card-desc.flex-1.leading-8.mt-5(v-text="pageData.content3")
            .card-action
              button.card-btn.text-2xl.text-blue-500 了解详情
  .sc-2.flex.items-center.justify-center
    .sc-2__block.py-10.container
      h1.text-4xl 送修仪器说明
      .products.bg-gray-100.flex.flex-col.justify-end.gap-x-10.p-10.mt-40.w-full(:class="$root.ua.platform.type")
        .card.flex.cursor-pointer.shadow.flex-col(class="hover:shadow-xl lg:flex-row")
          .card-cover
            img.object-center.object-cover(:src="$root.basePath + images[2]")
          .card-content.flex-1.p-5.bg-white.flex.flex-col
            h4.text-2xl 维修简介
            p.leading-8.text-gray-500.mt-5(v-text="pageData.content4")
        p.mt-10.leading-8.text-gray-500(v-text="pageData.content5")
  .sc-3.flex.items-center.justify-center
    .sc-3__block.container.py-10.flex.items-center.justify-center.flex-col
      h1.text-4xl.w-full 文档下载区
      .grid.grid-cols-1.justify-center.my-20.justify-items-center(class="lg:grid-cols-2")
        .flex.flex-col.text-center.items-center.cursor-pointer(@click="openPreview(pageData.url3)")
          ion-icon.text-blue-500(name="layers")
          .text-2xl.mt-5 服务流程
        .flex.flex-col.text-center.items-center.cursor-pointer(@click="openPreview(pageData.url4)")
          ion-icon.text-blue-500(name="book")
          .text-2xl.mt-5 维修、校准协议书
      h1.text-4xl.w-full FAQ
      article.bg-gray-100.w-full.py-10.px-5.mt-10.text-lg.text-slate-800
        pre.overflow-ellipsis.overflow-hidden(v-text="pageData.content6")
  Dialog(ref="dialog" v-cloak preview)
    iframe(v-if="preview" :src="$root.basePath + preview")

</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'fixer-page',
  async asyncData({ route, app }) {
    const { data } = await app.$axios.$get('/api.php/api/getMate', { params: { router: route.path } });
    return data
  },
  data() {
    return {
      pageData: '',
      preview: ''
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
    images() {
      return this.pageData.images2?.split(',')
    }
  },
  async mounted() {
    this.pageData = await this.getRepair()
  },
  methods: {
    ...mapActions(['getRepair']),
    openPreview(prev) {
      this.preview = prev;
      this.$refs.dialog.showModal();
    }
  }
}
</script>
<style lang="scss" scoped>
.sc-1 {
  &__block {
    width: 1200px;

    .grid {
      &.mobile {
        width: auto;
      }

      &.desktop {
        width: 900px;
      }

      ion-icon {
        font-size: 100px;
      }
    }

    .products {
      &.mobile {
        height: auto;
      }

      &.desktop {
        height: 400px;
      }
    }

    .card {
      height: 600px;
      width: min(450px, 100%);

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

    .products {
      &.mobile {
        height: auto;
      }

      &.desktop {
        height: 350px;

        .card {
          height: 250px;
        }
      }
    }

    .card {

      &-cover {
        width: min(560px, 100%);

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
