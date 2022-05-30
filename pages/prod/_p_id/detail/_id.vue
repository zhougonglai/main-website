<template lang="pug">
section.w-full.flex.flex-col.items-center.justify-center.pb-20
  Dialog(ref="dialog" modal-mode="mega")
    img(v-if="cover" :src="cover")
  .sc-1.w-full.flex.flex-col.items-center.py-10
    .sc-1__block(v-if="prod")
      h1.text-2xl(v-text="prod.name")
      .flex.w-full.my-5.gap-x-10
        .flex.flex-col.flex-1
          .relative.box.rounded.overflow-hidden
            img.object-center.object-contain.overflow-hidden(:src="cover" width="600" height="400")
            ion-icon.absolute.cursor-pointer.right-2.bottom-2.text-blue-500(name="expand-sharp" size="large" @click="openModal")
          carousel-card.my-10(size="3" :max-size="images.length" content-class="mx-10")
            carousel-item.relative.rounded.overflow-hidden.cursor-pointer(v-for="(img, i) in images" :key="i" class="w-1/3 px-2" :class="{ active: i === coverIndex }")
              img.object-center.object-contain.h-20.w-full.h-full(
                :src="img"
                width="100%"
                height="100%"
                @mouseenter="updateCover(i)")
        .flex.flex-col.flex-1
          h3.text-2xl 关键特性
          ul.mt-5.leading-8.flex.flex-col.gap-y-4
            li.pl-4.border-l-4.border-gray-300(v-for="(keyword, i) in prod.keywords" :key="i" v-text="keyword")
      .flex.gap-10.my-10
        a.flex.items-center.text-blue-500.gap-x-2(target="_blank" :href="basePath + prod.url1")
          ion-icon(name="document-text-outline" size='large')
          | Datasheet
        a.flex.items-center.text-blue-500.gap-x-2(target="_blank" :href="basePath + prod.url2")
          ion-icon(name="document-text-outline" size="large")
          | 用户手册
        a.flex.items-center.text-blue-500.gap-x-2(target="_blank" :href="basePath + prod.url3")
          ion-icon(name="document-text-outline" size="large")
          | 解决方案
      h1.text-2xl.mt-10 技术规范
      .tabs.my-10
        .tab-bar.flex.leading-10.border-b.border-gray-300
          .tab.flex-1.pl-5.cursor-pointer(:class="{ 'text-blue-500': 0 === tabActive, 'text-gray-500': 0 !== tabActive }" @click="tabActive = 0") 产品特色及应用
          .tab.flex-1.pl-5.cursor-pointer(:class="{ 'text-blue-500': 1 === tabActive, 'text-gray-500': 1 !== tabActive }" @click="tabActive = 1") 技术指标
          .tab.flex-1.pl-5.cursor-pointer(:class="{ 'text-blue-500': 2 === tabActive, 'text-gray-500': 2 !== tabActive }" @click="tabActive = 2") 配置清单
          .tab.flex-1.pl-5.cursor-pointer(:class="{ 'text-blue-500': 3 === tabActive, 'text-gray-500': 3 !== tabActive }" @click="tabActive = 3") 面板说明
        .tab-content.p-5
          pre.leading-8(v-if="tabActive === 0" v-text="prod.content6")
          pre.leading-8(v-else-if="tabActive === 1" v-text="prod.content7")
          pre.leading-8(v-else-if="tabActive === 3" v-text="prod.content8")
          table.table-auto.border-collapse.w-full.border.border-slate-400(v-else-if="tabActive === 2")
            tbody
              tr(v-for="(conf, i) in prod.configuration" :key="i" :class="{ 'bg-gray-100': i % 2 }")
                td.pl-5.pr-1.py-2(v-text="conf.value")
                td.pr-5.py-2(v-text="conf.param")

      h1.text-2xl.mt-10 产品视频
      .prod.bg-gray-100.flex.items-end.justify-center.gap-x-10.mt-60.pb-10
        .card.flex.flex-col.cursor-pointer.bg-white(class="hover:shadow hover:border-b-2 hover:border-blue-300")
          .card-cover
            video(:src="basePath + prod.goods_video1" controls)
          .card-content.p-5
            h3.text-xl.card-title(v-text="prod.video_title1")
            p.mt-3.card-desc.text-gray-500(v-text="prod.video_content1")
        .card.flex.flex-col.cursor-pointer.bg-white(class="hover:shadow hover:border-b-2 hover:border-blue-300")
          .card-cover
            video(:src="basePath + prod.goods_video2" controls)
          .card-content.p-5
            h3.text-xl.card-title(v-text="prod.video_title2")
            p.mt-3.card-desc.text-gray-500(v-text="prod.video_content2")

      h1.text-2xl.mt-10 相关型号
      .types.bg-gray-100.grid.grid-cols-3.my-10.p-10.gap-10
        .card.flex.flex-col.cursor-pointer.bg-white.border-b-2.border-white(class="hover:shadow hover:border-blue-300" v-for="p in prod.products" :key="p.id")
          .card-cover.flex-1
            img.object-center.object-contain.h-full(:src="basePath + p.cover_path" width="100%" height="100%")
          .card-content.p-5
            h3.card-title.text-xl.truncate(v-text="p.name")
      h1.text-2xl.mt-10 相关解决方案
      .types.bg-gray-100.grid.grid-cols-2.my-10.p-10.gap-10
        .card.flex.flex-col.cursor-pointer.bg-white.border-b-2.border-white(
          class="hover:shadow hover:border-blue-300"
          v-for="solution in prod.solutions" :key="solution.id")
          .card-cover.flex-1
            img.object-center.object-cover.h-full(:src="basePath + solution.cover_path" width="100%" height="100%")
          .card-content.p-5
            h3.card-title.text-xl.truncate(v-text="solution.name")
</template>
<script>
import productions from '@/assets/constant/productions.json';
import Dialog from '@/components/Dialog/index.vue';
import tabs from '@/assets/constant/tabs.json';
import { mapActions, mapState } from 'vuex';

export default {
  name: "production-detail-page",
  components: { Dialog },
  data() {
    return {
      productions: productions.filter((p, i) => i),
      show: false,
      coverIndex: 0,
      banner: [],
      tabs,
      tabActive: 0,
      types: []
    };
  },
  computed: {
    basePath() {
      return process.env.BASE_API
    },
    ...mapState(['products', 'product', 'prod']),
    images() {
      return this.prod && [this.basePath + this.prod.cover_path, ...this.prod.images.split(',').map(img => this.basePath + img)];
    },
    cover() {
      return this.images && this.images[this.coverIndex]
    }
  },
  async mounted() {
    if (!this.product?.production?.length) this.getProduct({ c_id: this.$route.params.p_id });
    console.log(this.$route)
    const data = await this.getProductDetail({ id: this.$route.params.id })
    this.$store.commit("updateLea", {
      path: `/prod/${this.$route.params.p_id}/detail/${this.$route.params.id}`,
      meta: {
        title: data.name,
        paths: this.product.production.map(p => ({ link: `/prod/${this.$route.params.p_id}/detail/${p.id}`, title: p.name }))
      }
    });
  },
  beforeDestroy() {
    this.$store.commit("updateLea", "");
  },
  methods: {
    ...mapActions(["getProductDetail", 'getProduct']),
    updateCover(i) {
      this.coverIndex = i;
    },
    openModal() {
      this.$refs.dialog.showModal()
    },
  }
}
</script>
<style lang="scss">
.carousel-item {
  &.active {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>

<style lang="scss" scoped>
nav {
  width: 1200px;
}

.sc-1 {
  &__block {
    width: 1200px;

    .box {
      height: 400px;

      img {
        width: 100%;
        height: inherit;
      }
    }

    .relative::v-deep {

      .content {
        width: 520px;
      }

      .item {
        flex: 1 0 160px;

        img {
          width: 100%;
          height: 100%;
        }

        +.item {
          margin-left: 20px;
        }
      }
    }

    .prod {
      height: 340px;

      .card {
        width: 380px;
        height: 420px;
      }
    }

  }
}
</style>
