<template lang="pug">
section.w-full.flex.flex-col.items-center.justify-center
  nav.flex.leading-10.py-2.items-center
    nuxt-link(to="/")
      ion-icon(name="home-sharp" v-cloak)
    ion-icon.mx-5(name="chevron-forward-sharp"  v-cloak)
    nuxt-link(to="/production") 矢量网络分析
    ion-icon.mx-5(name="chevron-forward-sharp"  v-cloak)
    .nav-menus.flex.items-center.relative.cursor-pointer(ref="menus")
      .nav-menu(@click.stop="show = !show") T5260C 485矢量网络分析仪
        ion-icon.ml-5(name="chevron-down-sharp"  v-cloak)
      transition(
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0")
        ul.nav-drops.absolute.bg-white.top-full.w-full.py-2.z-10.shadow(v-if="show")
          li.nav-link.pl-4(v-for="(prod, i) in productions" :key="i" class="hover:bg-gray-300")
            nuxt-link.truncate(to="/production/t526c") {{ prod.title }}
  .sc-1.w-full.flex.flex-col.items-center.py-10
    .sc-1__block
      h1.text-2xl T5260C系列矢量网络分析仪
      .flex.w-full.my-5.gap-x-5
        .flex.flex-col.flex-1.relative
          img.object-center.object-cover.overflow-hidden(src="https://img01.yzcdn.cn/vant/cat.jpeg" width="600" height="400")
          ion-icon.absolute.right-2.bottom-2.text-blue-500(name="expand-sharp" size="large")
        .flex.flex-col.flex-1
          h3.text-2xl 关键特性
          ul.mt-5.leading-8.flex.flex-col.gap-y-4
            li.pl-4.border-l-4.border-gray-300 频率范围：300kHz~8.5GHz
            li.pl-4.border-l-4.border-gray-300 大动态范围：＞ 125 dB @(IFBW=10 Hz )，typ.130 dB
            li.pl-4.border-l-4.border-gray-300 低迹线噪声：2 mdB rms @(IFBW=3 kHz )
            li.pl-4.border-l-4.border-gray-300 测量速度快：42 μs/point @(IFBW=500 kHz)
            li.pl-4.border-l-4.border-gray-300 高等效方向性：＞ 45 dB
            li.pl-4.border-l-4.border-gray-300 支持远程控制： LAN

</template>
<script>
import productions from '@/assets/constant/productions.json';

export default {
  name: 'production-detail-page',
  data() {
    return {
      productions: productions.filter((p, i) => i),
      show: false
    }
  },
  mounted() {
    window.addEventListener('click', e => {
      if (!this.$refs?.menus?.contains(e.target)) {
        this.show = false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
nav {
  width: 1200px;
}

.sc-1 {
  &__block {
    width: 1200px;

    ul {
      li {}
    }
  }
}
</style>
