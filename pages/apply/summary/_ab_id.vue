<template lang="pug">
section.w-full
  .sc-1.flex.items-center.justify-center.relative
    img.absolute.inset-0.object-center.object-cover.h-full.z-0(:src="basePath + summary.cover_path" width="100%" height="100%")
    .sc-1__block.color-white.z-1.py-32(class="sm:px-10")
      h1.text-4xl.text-white(v-text="summary.name")
      article.mt-5
        p.text-white.text-2xl.leading-relaxed(v-text='summary.content')
  .sc-2.flex.items-center.justify-center
    .sc-2__block
      h1.text-4xl(v-text="summary.title")
      article.mt-10
        p.text-2xl.leading-relaxed(v-text="summary.title1")
  .sc-3.flex.items-center.justify-center.relative
    .sc-3__bg.bg-gray-100.absolute.inset-x-0.bottom-0.top-80.z-0
    .sc-3__block.py-20
      h1.text-4xl 相关应用
      .grid.grid-cols-3.gap-5.mt-10
        nuxt-link.card.flex.flex-col.cursor-pointer.bg-white.border-b-2.border-white(
          class="hover:shadow hover:border-blue-300" v-for="(apply, i) in summary.applys" :key="apply.id"
          :to="`/apply/${apply.id}`")
          .card-cover
            img.object-center.object-cover(:src="basePath + apply.cover_path" width="387" height="261")
          .card-content.p-5
            h3.text-2xl.card-title(v-text="apply.name")
            p.mt-3.card-desc.text-gray-500.leading-8(v-text="apply.title")
          .card-action.p-5
            button.card-btn.text-blue-500.flex.items-center(class="hover:text-blue-600")
              ion-icon.mr-2(name="arrow-forward-outline")
              | 更 多 信 息
  .sc-4.flex.items-center.justify-center
    .sc-4__block.flex.py-20
      .left.flex-1
        h1.text-4xl(v-text="summary.video_title")
        p.mt-5.text-2xl(v-text="summary.video_content")
      .right.flex-1
        video(:src="basePath + summary.goods_video" controls)
  .sc-5.flex.items-center.justify-center.bg-gray-100
    .sc-5__block.flex.flex-col.py-20
      h1.text-4xl 推荐产品
      carousel-card.mt-10(size="3" v-if="summary.products" :max-size="summary.products.length" content-class="flex overflow-hidden content")
        carousel-item(v-for="(p, i) in summary.products" :key="p.id" class="item flex-shrink-0")
          nuxt-link.card.flex.flex-col.bg-white.border-b-2.border-white.h-full(class="hover:shadow hover:border-blue-300" :to="`/prod/${p.category_id}/detail/${p.id}`")
            .card-cover
              img.object-center.object-contain.h-40(:src="basePath + p.cover_path")
            .card-content.p-5.flex-1.flex.flex-col
              .card-title.text-xl(v-text="p.name")
              .card-desc.my-5.text-base.text-gray-500.leading-6.flex-1(v-text="p.title1")
              .card-action
                button.card-btn.text-blue-500.flex.items-center(class="hover:text-blue-600")
                  ion-icon.mr-2(name="arrow-forward-outline")
                  | 产品信息
  .sc-6.flex.items-center.justify-center
    .sc-6__block.flex.flex-col.py-20
      Submit(@submit="submit")
</template>

<script>
import communication from '@/assets/constant/communication'
import prod from '@/assets/constant/prods'
import { mapActions, mapState } from 'vuex';

export default {
  name: "about-page",
  async asyncData({ route, app }) {
    const { data } = await app.$axios.$get('/api.php/api/getMate', { params: { router: route.path } });
    return data
  },
  data() {
    return {
      communication,
      prod,
      db: {
        sex: 1,
        name: "",
        company: "",
        desc: "",
        city: "",
        phone: "",
        ask: "",
        status: false,
      },
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
    ...mapState(['summary']),
  },
  mounted() {
    this.getSummaryData({ c_id: this.$route.params.ab_id })
  },
  methods: {
    ...mapActions(['getSummaryData']),
    submit(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.sc-1 {
  &__block {
    width: min(1200px, 100%);
  }
}

.sc-2 {
  &__block {
    width: min(800px, 100%);
  }
}

.sc-3 {
  &__block {
    width: min(1200px, 100%);
    z-index: 1;

    .card {
      &-cover {
        img {
          height: 261px;
        }
      }
    }
  }
}

.sc-4 {
  &__block {
    width: min(1200px, 100%);
  }
}

.sc-5 {
  &__block::v-deep {
    width: min(1200px, 100%);

    .content {
      width: 1020px;
    }

    .item {
      width: 300px;
      margin-left: 40px;
    }
  }
}

.sc-6 {
  &__block {
    width: min(1200px, 100%);
  }
}
</style>
