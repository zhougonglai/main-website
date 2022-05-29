<template lang="pug">
section.w-full.flex.flex-col.pb-20
  carousel-card(size="1" v-if="banner.length" :max-size="banner.length" dot
  dot-active-class="w-2 h-2 bg-white rounded-full scale-150"
  dot-class="bg-white w-2 h-2 rounded-full hover:scale-125"
  )
    carousel-item.flex.w-full(v-for="b in banner.filter(b => b.status)" :key="b.id")
      img.object-center.object-cover.w-full.h-480(:src="b.url")
  .sc-1.bg-white.flex.items-center.justify-center
    .sc-1-block.h-80.flex.flex-col.justify-center(class="w-1/2")
      h1.text-4xl(v-text="indexData.title")
      p.text-xl.mt-10(v-text="indexData.content")
  .sc-carousels.bg-gray-100.flex.items-center.justify-center
    .sc-block.flex.items-center.justify-center
      carousel-card.py-20(size="1" v-if="indexData.products && indexData.products.length" :max-size="indexData.products.length" dot
      dot-active-class="bg-red-600 rounded-full w-2 h-2"
      dot-class="border border-gray-500 w-2 h-2 hover:bg-red-500 rounded-full"
      dot-content-class=""
      contentClass="items-center justify-between")
        carousel-item.flex.gap-x-10.w-full.px-16(v-for="b in indexData.products" :key="b.id")
          .content.flex-1
            .title.text-4xl(v-text="b.name")
            .desc.mt-10.text-xl(v-text="b.title1")
            button.btn.mt-10.px-5.py-2.bg-red-500.text-white(class="hover:bg-red-600") 了解更多
          .cover.flex-1
            img.object-contain.object-center.w-full.h-full(:src="b.cover_path")
  .sc-news.flex.items-center.justify-center
    .news-block.flex.flex-col.justify-center.py-20
      h1.text-4xl.ml-10 新闻
      .news-content.bg-gray-100.flex.flex-col-reverse.items-center.mt-40.relative(v-if="indexData.news && indexData.news.length")
        .news-more.bg-white.flex.items-center.justify-center.absolute.-bottom-5
          nuxt-link.news-action(to="/news") 更多新闻
        .news-item.bg-white.flex.relative.shadow(v-for="(n, i) in indexData.news" :key="i" class="hover:shadow-lg")
          .news-cover
            img.object-cover.object-center.w-full.h-full(:src="n.url")
          .flex.flex-col.p-5.flex-1
            .news-info.flex.items-end
              .news-label.text-base 新闻发布
              .news-address.text-sm.ml-5.flex.gap-x-2
                time.not-italic(v-text="n.date")
                address.not-italic(v-text="n.addr")
            h2.news-title.text-lg.mt-5(v-text="n.name")
            .news-desc.leading-7.mt-5(v-if="i" v-text="n.title")
          button.news-btn.absolute.bottom-5.right-5 更多信息
  .sc-link.flex.justify-center.py-20
    .link-block
      h1.text-4xl.ml-10 快速链接
      ul.links.flex.gap-x-5.mt-10.justify-between
        li.link.bg-gray-100.cursor-pointer(v-for="(l, i) in link" :key="i" class="hover:shadow" v-text="l.title")
</template>

<script>
import link from '@/assets/constant/link.json'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  data() {
    return {
      link
    }
  },
  computed: {
    ...mapState(['banner', 'indexData']),
  },
  mounted() {
    this.getBanner();
    this.getIndexData();
  },
  methods: {
    ...mapActions(['getBanner', 'getIndexData'])
  }
}
</script>

<style lang="scss" scoped>
.sc-1 {
  &__block {
    width: 1200px;
    color: var(--color-1);
  }
}

.sc-block {
  width: 1200px;
}

.sc-news {
  .news-block {
    width: 1200px;
  }

  .news {
    &-content {
      height: 480px;
      padding-bottom: 70px;
    }

    &-item {
      width: 1000px;
      height: 120px;
      margin-top: 40px;
      cursor: pointer;

      &:hover {
        .flex.flex-col {
          border-bottom: 1px solid var(--primary-1);
        }
      }

      .news-cover {
        min-width: 200px;

        img {
          width: 100%;
        }
      }

      &:last-child {
        min-height: 315px;
        margin-top: 0;

        .news-cover {
          width: 50%;
        }
      }
    }

    &-label {
      color: var(--color-1);
    }

    &-address {
      color: var(--color-2);
    }

    &-title {
      color: var(--color-3);
    }

    &-desc {
      color: var(--color-2)
    }

    &-btn {
      color: var(--primary-2);
    }

    &-action {
      color: white;
      padding: 0 1rem;
      font-size: 24px;
      height: 50px;
      line-height: 50px;
      background-color: var(--primary-1);
      border: 1px solid var(--primary-1);
      transition: all 0.2s ease-in-out;

      &:hover {
        color: var(--primary-1);
        background: white;
      }
    }
  }
}

.sc-link {
  .link-block {
    width: 1200px;
  }

  .link {
    width: 200px;
    height: 56px;
    line-height: 56px;
    color: var(--color-4);
    text-indent: 20px;

    &:hover {
      border-bottom: 1px solid var(--primary-1);
    }
  }
}
</style>
