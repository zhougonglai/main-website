<template lang="pug">
.w-full.flex.flex-col.items-center
  .container
    nav.Bread-crumbs.flex.items-center
      a(href="/")
        ion-icon(name='home-outline') 
      ion-icon(name='chevron-forward-outline') 
      | 招贤纳士
  .banner.w-full
  section.container 加入我们
  section.container.flex.justify-center
    Pager(:pager="pager")
</template>
<script>
export default {
  mounted() {
    //console.log();
  },
  computed: {
    // test() {
    //   return 0;
    // }
  },
  data() {
    return {
      pager: {
        pageTotal: 10,
        pageIndex: 5,
        getlink: (pi) => {
          return pi == 1 ? "" : "?page=" + pi;
        },
      },
    };
  },
  methods: {
    // test() {
    //   return 0;
    // }
  },
};
</script>

<style lang="scss" scoped>
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
