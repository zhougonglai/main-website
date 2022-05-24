<template lang="pug">
section.w-full.flex.flex-col.pb-20
  .carousels
    img.object-center.object-cover.w-full.h-480(src="~/assets/img/bg_sunset.jpg")
  .sc-1.bg-white.flex.items-center.justify-center
    .sc-1-block.h-80.flex.flex-col.justify-center(class="w-1/2")
      h1.text-4xl.font-bold 创远仪器
      p.text-xl.text-base.mt-10 上海创远仪器技术股份有限公司成立于 2005 年，2021年作为首批企业成功登陆北交所，是一家自主研发射频通信测试仪器和提供整体测试解决方案的专业仪器仪表公司。
  .sc-carousels.bg-gray-100.flex.items-center.justify-center
    .sc-block.flex.items-center.justify-center.py-20
      //- Carousel(:items="banner")
      carousel-card(size="1" :max-size="banner.length" contentClass="mx-16 items-center justify-between")
        carousel-item.flex.gap-x-10.w-full(v-for="b in banner" :key="b.id" :item="b.id")
          .content.flex-1
            .title.text-2xl.font-bold {{ b.title }}
            .desc.mt-10.text-xl(v-text="b.subTitle")
            button.btn.mt-10.px-5.py-2.bg-red-500.text-white(class="hover:bg-red-600") 了解更多
          .cover.flex-1
            img.object-contain.object-center.w-full.h-full(:src="b.src")
  .sc-news.flex.items-center.justify-center
    .news-block.flex.flex-col.justify-center.py-20
      h1.text-4xl.font-bold.ml-10 新闻
      .news-content.bg-gray-100.flex.flex-col-reverse.items-center.mt-40.relative
        .news-more.bg-white.flex.items-center.justify-center.absolute.-bottom-5
          nuxt-link.news-action(to="/news") 更多新闻
        .news-item.bg-white.flex.relative.shadow(v-for="(n, i) in news" :key="i" class="hover:shadow-lg")
          .news-cover
            img.object-cover.object-center.w-full.h-full(src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg")
          .flex.flex-col.p-5.flex-1
            .news-info.flex.items-end
              .news-label.text-base 新闻发布
              .news-address.text-sm.ml-5(v-text="n.address")
            h2.news-title.text-lg.mt-5(v-text="n.title")
            .news-desc.leading-7.mt-5(v-if="i" v-text="n.desc")
          button.news-btn.absolute.bottom-5.right-5 更多信息
  .sc-link.flex.justify-center.py-20
    .link-block
      h1.text-4xl.font-bold.ml-10 快速链接
      ul.links.flex.gap-x-5.mt-10.justify-between
        li.link.bg-gray-100.cursor-pointer(v-for="(l, i) in link" :key="i" class="hover:shadow" v-text="l.title")
</template>

<script>
import banner from '@/assets/constant/banner.json'
import news from '@/assets/constant/news.json'
import link from '@/assets/constant/link.json'

export default {
  name: 'IndexPage',
  data() {
    return {
      banner,
      news: news.reverse(),
      link
    }
  },
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
