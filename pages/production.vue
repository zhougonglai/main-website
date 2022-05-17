<template lang="pug">
section.w-full.flex.flex-col
  .carousels.h-80
    img.object-center.object-cover.w-full.h-80(src="~/assets/img/bg_sunset.jpg")
  .sc-1.flex.items-center.justify-center
    .sc-1__block.py-10
      h1.text-4xl.font-bold.leading-relaxed
        | 创远仪器矢量网络分析仪产品组合。
        br
        | 精确，快速，多功能。
      article.mt-10.text-gray-600.leading-8
        p 矢量网络分析 (VNA) 是最重要的射频和微波测量方法之一。
        p.my-5 创远仪器提供广泛的多功能、高性能网络分析仪（最高26.5GHz）和标准多端口解决方案。创远仪器的矢量网络分析仪非常适用于分析无源及有源器件，比如滤波器、放大器、混频器及多端口模块。
        p 网络分析仪具有出色的射频特性以及丰富的分析功能，有助于用户快速评估重要参数。
  .sc-2.flex.items-center.justify-center
    .sc-2__block.py-10
      .prod.border.border-gray-200
        .prod-header.flex.p-5.flex.items-center.justify-between.text-blue-500
          .prod-title.flex-1.text-2xl.leading-relaxed 产品清单
          .prod-icon
            ion-icon.text-4xl(name="remove-outline")
        .prod-thd.flex.p-5
          .prod-td.flex-1 对比
          .prod-td.flex-1 产品名称
          .prod-td.flex-1 产品形态
          .prod-td.flex-1 最大频率
          .prod-td.flex-1 端口数
          .prod-td.flex-1 型号
          .prod-td.flex-1
        .prod-tbd
          .prod-tl.border-top.border-gray-200.h-20.flex.items-center(v-for="(prod, i) in productions" :key="i")
            .prod-ti.flex-1
              input(type="checkbox" v-model="selected[prod.id]")
              img.object-center.object-cover(:src="prod.url")
            .prod-ti.flex-1
              button(v-text="prod.title")
            .prod-ti.flex-1(v-text="prod.type")
            .prod-ti.flex-1(v-text="prod.qz")
            .prod-ti.flex-1(v-text="prod.port")
            .prod-ti.flex-1(v-text="prod.types.join('/')")
            .prod-ti.flex-1
              button 询价
</template>

<script>
import productions from '@/assets/constant/production.json';

export default {
  name: "production-page",
  data() {
    return {
      productions,
      selected: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.sc {
  &-1 {
    &__block {
      width: 855px;
    }
  }

  &-2 {
    &__block {
      width: 1200px;
    }
  }
}

.prod {
  &-ti {
    img {
      max-width: 200px;
      max-height: 150px;
    }
  }
}
</style>
