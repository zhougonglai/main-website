<template lang="pug">
.w-full.flex.flex-col.items-center
  .container
    nav.Bread-crumbs.flex.items-center
      NuxtLink(to="/")
        ion-icon(name='home-outline') 
      ion-icon(name='chevron-forward-outline') 
      NuxtLink(to="/about") 关于我们       
      ion-icon(name='chevron-forward-outline') 
      | 荣誉资质
  .banner.w-full
  section.container
    | 荣誉资质
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
$blue: #005fab;
nav.Bread-crumbs {
  height: 66px;
  font-size: 20px;
  color: #606060;
}
.banner {
  height: 438px;
  background: url("../assets/img/bg_sunset.jpg") no-repeat center / cover;
}
.container {
  width: 1200px;
}
</style>
