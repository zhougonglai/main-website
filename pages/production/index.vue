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
    .sc-2__block.py-20
      table.prod.border-collapse.border-gray-200.border.table-fixed.w-full.relative
        thead.prod-header
          tr.flex.p-5.flex.items-center.justify-between.text-blue-500
            .prod-title.flex-1.text-2xl.leading-relaxed 产品清单
            .prod-icon
              ion-icon.text-4xl(name="remove-outline")
        thead.prod-thd
          tr.flex.leading-relax.border-gray-200.border
            th.prod-td.flex-1.p-5 对比
            th.prod-td.flex-1.p-5 产品名称
            th.prod-td.flex-1.p-5 产品形态
            th.prod-td.flex-1.p-5 最大频率
            th.prod-td.flex-1.p-5 端口数
            th.prod-td.flex-1.p-5 型号
            th.prod-td.flex-1.p-5
        tbody.prod-tbd
          tr.prod-tl.border-top.border-gray-200.h-20.flex.items-center(v-for="(prod, i) in productions" :key="i")
            td.prod-ti.flex-1.p-5
              //- input(type="checkbox" v-model="selected[prod.id]")
              //- Checkbox(@change="selectChange($event, prod.id)" :disabled="selected[prod.id] ? false : selectedLength >= 3")
              img.ml-5.object-center.object-cover(:src="prod.url")
            td.prod-ti.flex-1.p-5
              nuxt-link(class="hover:text-blue-500" to="/production/t526c" v-text="prod.title")
            td.prod-ti.flex-1.p-5.text-center(v-text="prod.type")
            td.prod-ti.flex-1.p-5.text-center(v-text="prod.qz")
            td.prod-ti.flex-1.p-5.text-center(v-text="prod.port")
            td.prod-ti.flex-1.p-5(v-text="prod.types.join('/')")
            td.prod-ti.flex-1.p-5.flex.items-center.justify-center
              button.bg-blue-500.px-5.py-2.text-white 询价
        //- tfoot.prod-tfd.absolute.w-full.flex.items-center.justify-center
        //-   button.bg-blue-500.px-5.py-2.text-white.-mt-5(:disabled="selectedLength < 2") {{ selectedLength }}/3 产品比较
</template>

<script>
import productions from '@/assets/constant/production.json';
// import Checkbox from '~/components/Checkbox/index.vue';

export default {
  name: "production-page",
  data() {
    return {
      productions,
      selected: {},
    };
  },
  computed: {
    selectedLength() {
      return Object.values(this.selected).filter(v => v).length
    }
  },
  methods: {
    selectChange(checked, id) {
      console.log('checked', checked, id);
      this.$set(this.selected, id, checked)
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
      max-width: 100px;
      max-height: 100px;
    }
  }

  &-tfd {
    button {
      &:disabled {
        filter: grayscale(1);
      }
    }
  }
}
</style>
