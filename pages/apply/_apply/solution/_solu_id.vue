<template lang="pug">
section.w-full.pb-20(v-cloak)
  .sc-1.flex.items-center.justify-center.relative
    .sc-1__block.flex.items-center.absolute.hidden.z-1(class="lg:block")
      //- h1.text-4xl.text-white.z-1(v-text="solution.name")
    img.inset-0.object-center.object-cover.z-0.h-full(:src="basePath + solution.img" width="100%" height="100%")
  .sc-2.flex.items-center.justify-center
    .sc-2__block.flex.flex-col.py-10.px-4(class="lg:px-0")
      h1.text-4xl(v-text="solution.title")
      article
        pre.mt-10.text-lg.whitespace-pre-line(v-text="solution.content")

  .sc-3.flex.items-center.justify-center
    .sc-3__block.flex.flex-col.py-10
      h1.text-4xl 方案特色
      .scheme.bg-gray-100.flex.items-end.justify-center.gap-x-20.mt-60.pb-10.px-10(class="flex-col space-y-4 lg:space-y-0 lg:flex-row" :class="$root.ua.platform.type")
        .card.flex.flex-col.cursor-pointer.bg-white.border-b-2.border-white(class="hover:shadow hover:border-blue-300")
          .card-cover
            img.object-center.object-cover(:src="basePath + solution.feature_img1")
          .card-content.flex.flex-col.p-5
            h3.text-2xl.card-title(v-text="solution.title_feature")
            p.mt-3.card-desc.flex-1.text-gray-500.leading-8(v-text="solution.content_feature")
        .card.flex.flex-col.cursor-pointer.bg-white.border-b-2.border-white(class="hover:shadow hover:border-blue-300")
          .card-cover
            img.object-center.object-cover(:src="basePath + solution.feature_img2")
          .card-content.p-5.flex.flex-col
            h3.text-2xl.card-title(v-text="solution.title_feature1")
            p.mt-3.card-desc.flex-1.text-gray-500.leading-8(v-text="solution.content_feature1")
      h1.text-4xl.mt-20 典型应用
      .application.bg-gray-100.grid.grid-cols-1.justify-center.gap-x-10.gap-y-4.my-10.p-10(class="lg:grid-cols-3 lg:gap-y-0")
        .card.flex.flex-col.cursor-pointer.bg-white.border-b-2.border-white(class="hover:shadow hover:border-blue-300")
          .card-cover
            img.object-center.object-cover(:src="basePath + solution.apply_img1" width="350" height="200")
          .card-content.p-5
            h3.card-title.text-xl.truncate(v-text="solution.apply_title1")
            p.card-desc.text-lg.text-gray-500.mt-5(v-text="solution.apply_content1")
        .card.flex.flex-col.cursor-pointer.bg-white.border-b-2.border-white(class="hover:shadow hover:border-blue-300")
          .card-cover
            img.object-center.object-cover(:src="basePath + solution.apply_img2" width="350" height="200")
          .card-content.p-5
            h3.card-title.text-xl.truncate(v-text="solution.apply_title2")
            p.card-desc.text-lg.text-gray-500.mt-5(v-text="solution.apply_content2")
        .card.flex.flex-col.cursor-pointer.bg-white.border-b-2.border-white(class="hover:shadow hover:border-blue-300")
          .card-cover
            img.object-center.object-cover(:src="basePath + solution.apply_img3" width="350" height="200")
          .card-content.p-5
            h3.card-title.text-xl.truncate(v-text="solution.apply_title3")
            p.card-desc.text-lg.text-gray-500.mt-5(v-text="solution.apply_content3")
      h1.text-4xl.mt-20 相关产品
      .prod.bg-gray-100.grid.grid-cols-1.gap-10.my-10.p-10(class="lg:grid-cols-3")
        nuxt-link.card.flex.flex-col.cursor-pointer.bg-white.border-b-2.border-white(
          class="hover:shadow hover:border-blue-300"
          v-for="prod in solution.products" :key="prod.id"
          :to="`/prod/${prod.category_id}/detail/${prod.id}`")
          .card-cover.flex-1
            img.object-center.object-contain.h-full(:src="basePath + prod.cover_path" width="100%" height="100%")
          .card-content.p-5.h-60
            h3.card-title.text-xl.truncate(v-text="prod.name")
            p.card-desc.text-lg.text-gray-500.mt-5(v-text="prod.title1")
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "solution-page",
  async asyncData({ route, app }) {
    const { data } = await app.$axios.$get('/api.php/api/getMate', { params: { router: route.path } });
    return data
  },
  computed: {
    basePath() {
      return process.env.BASE_API
    },
    ...mapState(['solution', 'apply'])
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
  async mounted() {
    if (!this.apply) return await this.getApply({ id: this.$route.params.apply }).then(this.updateLea);
    this.updateLea(this.apply);
  },
  beforeDestroy() {
    this.$store.commit("updateLea", "");
  },
  methods: {
    ...mapActions(['getSolution', 'getApply']),
    async updateLea(apply) {
      const data = await this.getSolution({ id: this.$route.params.solu_id });
      console.log('apply', apply)
      this.$store.commit("updateLea", {
        path: `/apply/${data.category_id}/solution/${data.id}`,
        meta: {
          title: data.name,
          paths: this.apply.solutions ? this.apply.solutions.map((solu) => ({ link: `/apply/${solu.category_id}/solution/${solu.id}`, title: solu.name })) : []
        }
      });
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

    .application {
      .card {
        &-cover {
          img {
            width: 350px;
            height: 200px;
          }
        }
      }
    }
  }
}

.scheme {
  &.desktop {
    height: 500px;

    .card {
      width: 50%;

      &-content {
        height: 350px;
      }
    }
  }

  &.mobile {
    height: auto;
  }

  .card {

    &-cover {
      height: 250px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
