<template>
  <section class="sp w-full flex flex-col pb-20">
    <div class="carousels">
      <img :src="basePath + apply.cover_path" alt="" class="object-center object-cover w-full h-480">
    </div>

    <div class="sp-1 flex items-center justify-center">
      <div class="sp-1__block py-20">
        <h1 class="text-4xl" v-text="apply.name" />
        <article class="leading-8 mt-5" v-text="apply.content" />
      </div>
    </div>

    <div class="sp-2 flex items-center justify-center bg-gray-100">
      <div class="sp-2__block py-20 flex">
        <div class="left flex items-center justify-center flex-1">
          <img :src="basePath + apply.img" />
        </div>
        <div class="right px-10 flex-1 leading-8">
          <h2 class="text-4xl" v-text="apply.title" />
          <p v-text="apply.title1" class="mt-5" />
        </div>
      </div>
    </div>

    <div class="sp-3 flex items-center justify-center">
      <div class="sp-3__block py-10">
        <h1 class="text-4xl">相关解决方案</h1>
        <div class="resolve bg-gray-100 flex items-end justify-center gap-x-10 mt-60 pb-10 px-10"
          v-if="apply.solutions">
          <nuxt-link v-for="solutions in apply.solutions" :key="solutions.id"
            :to="`/apply/${$route.params.apply}/solution/${solutions.id}`"
            class="card bg-white flex flex-col cursor-pointer border-b-2 border-white hover:border-blue-300 hover:shadow">
            <div class="card-cover">
              <img class="object-center object-contain h-full w-full" :src="basePath + solutions.cover_path"
                width="100%" height="250" />
            </div>
            <div class="card-content flex-1 p-5 flex flex-col">
              <div class="card-title text-2xl" v-text="solutions.name" />
              <p class="card-desc leading-8 my-5 flex-1 text-clamp-4" v-text="solutions.title1"
                :title="solutions.title1" />
              <div class="card-action px-5 flex justify-end">
                <button class="card-btn text-blue-500 flex items-center hover:text-blue-600">
                  <ion-icon class="mr-2" name="arrow-forward-outline" />
                  更 多 信 息
                </button>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="sp-4 flex items-center justify-center">
      <div class="sp-4__block py-10">
        <h1 class="text-4xl">相关产品</h1>
        <div class="products bg-gray-100 grid grid-cols-3 gap-10 p-10 mt-10">
          <nuxt-link v-for="product in apply.products" :key="product.id"
            class="card flex flex-col cursor-pointer bg-white border-b-2 border-gray-100 hover:border-blue-300 hover:shadow"
            :to="`/prod/${product.category_id}/detail/${product.id}`">
            <div class="card-cover">
              <img class="object-center object-contain w-full h-full" :src="basePath + product.cover_path" width="100%"
                height="160" />
            </div>
            <div class="card-content flex-1 p-5">
              <h5 class="card-title text-2xl" v-text="product.name" />
              <p class="card-desc leading-8 mt-5" v-text="product.title1" />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'apply-page',
  async asyncData({ route, app }) {
    const { data } = await app.$axios.$get('/api.php/api/getMate', { params: { router: route.path } });
    return data
  },
  computed: {
    basePath() {
      return process.env.BASE_API
    },
    ...mapState(['apply'])
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
  mounted() {
    this.getApply({ id: this.$route.params.apply });
  },
  methods: {
    ...mapActions(['getApply'])
  }
}
</script>

<style lang="scss" scoped>
.sp {
  &-1 {
    &__block {
      width: 855px;
    }
  }

  &-2 {
    &__block {
      width: 1200px;

      .left {
        max-width: 600px;

        img {
          max-height: 320px;
        }
      }
    }
  }

  &-3 {
    &__block {
      width: 1200px;

      .resolve {
        height: 425px;
      }

      .card {
        width: 450px;

        &-cover {
          width: 100%;

          img {
            width: 100%;
            height: 250px;
          }
        }

        &-desc {
          color: var(--color);
        }
      }
    }
  }

  &-4 {
    &__block {
      width: 1200px;

      .products {}

      .card {
        width: 350px;

        &-cover {
          width: 100%;

          img {
            width: 100%;
            height: 160px;
          }
        }

        &-desc {
          color: var(--color);
        }
      }
    }
  }
}
</style>
