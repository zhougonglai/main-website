<template lang="pug">
section.w-full.flex.flex-col.items-center.justify-center
  nav.flex.leading-10.py-2.items-center
    nuxt-link(to="/")
      ion-icon(name="home-sharp" v-cloak)
    ion-icon.mx-5(name="chevron-forward-sharp"  v-cloak)
    nuxt-link(to="/production") 矢量网络分析
    ion-icon.mx-5(name="chevron-forward-sharp"  v-cloak)
    .nav-menus.flex.items-center.relative
      .nav-menu(@click="show = !show") T5260C 485矢量网络分析仪
      ion-icon.ml-5(name="chevron-down-sharp"  v-cloak @click="show = !show")
      transition(
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0")
        ul.nav-drops.absolute(v-if="show")
          li.nav-link(v-for="(prod, i) in productions" :key="i")
            nuxt-link(to="/production/t526c") {{ prod.title }}

</template>
<script>
import productions from '@/assets/constant/productions.json';

export default {
  name: 'production-detail-page',
  data() {
    return {
      productions,
      show: false
    }
  },
}
</script>

<style lang="scss" scoped>
nav {
  width: 1200px;
}
</style>
