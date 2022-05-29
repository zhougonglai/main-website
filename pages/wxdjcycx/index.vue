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
        <div class="resolve bg-gray-100 flex items-end justify-center gap-x-10 mt-60 pb-10" v-if="apply.solutions">
          <nuxt-link v-for="solutions in apply.solutions" :key="solutions.id" :to="`/service/${solutions.id}`"
            class="card flex flex-col cursor-pointer border-b-2 border-white hover:border-blue-300 hover:shadow">
            <div class="card-cover flex-1">
              <img class="object-center object-cover" :src="basePath + solutions.cover_path" width="100%"
                height="100%" />
            </div>
            <div class="card-content bg-white flex-1 p-5 flex flex-col">
              <div class="card-title text-2xl" v-text="solutions.name" />
              <p class="card-desc leading-8 my-5 flex-1" v-text="solutions.title1" />
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
        <div class="products bg-gray-100 flex  gap-x-10 p-10 mt-10">
          <div v-for="product in apply.products" :key="product.id"
            class="card flex flex-col cursor-pointer bg-white border-b-2 border-gray-100 hover:border-blue-300 hover:shadow">
            <div class="card-cover flex-1">
              <img class="object-center object-contain w-full h-full" :src="basePath + product.cover_path" width="100%"
                height="100%" />
            </div>
            <div class="card-content p-5">
              <h5 class="card-title text-2xl" v-text="product.name" />
              <p class="card-desc leading-8 mt-5" v-text="product.title1" />
            </div>
          </div>

          <!-- <div
            class="card flex flex-col cursor-pointer bg-white border-b-2 border-gray-100 hover:border-blue-300 hover:shadow">
            <div class="card-cover">
              <img class="object-center object-cover" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="card-content flex-1 p-5">
              <h5 class="card-title text-2xl">ME208数字宽带接收机</h5>
              <p class="card-desc leading-8 mt-5">鹰眼ME208数字宽带接收机是创远仪器经过多年技术积累，充分利用当代射频接收技术和高速数字信号处理技术研制的中等性能无线电接收机</p>
            </div>
          </div>

          <div
            class="card flex flex-col cursor-pointer bg-white border-b-2 border-gray-100 hover:border-blue-300 hover:shadow">
            <div class="card-cover">
              <img class="object-center object-cover" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="card-content flex-1 p-5">
              <h5 class="card-title text-2xl">ME208数字宽带接收机</h5>
              <p class="card-desc leading-8 mt-5">鹰眼ME208数字宽带接收机是创远仪器经过多年技术积累，充分利用当代射频接收技术和高速数字信号处理技术研制的中等性能无线电接收机</p>
            </div>
          </div> -->

        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'wxdjcycx-page',
  computed: {
    basePath() {
      return process.env.BASE_API
    },
    ...mapState(['apply'])
  },
  mounted() {
    this.getApply();
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
        height: 600px;

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
            max-height: 220px;
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
