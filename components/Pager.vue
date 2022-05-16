<style scoped lang="scss">
.pager {
  $green:#005fab;
  margin: 50px auto;
  a {
    color: #333;
    margin: 0 10px;
    padding: 0 10px;
    &.active {
      color: $green;
      border-bottom: 1px solid $green;
    }
    &:hover{
      color: $green;
    }
    ion-icon {
      margin-top: 5px;
    }
  }
}
</style>
<template>
  <div class="flex items-center pager">
    <a :href="pager.getlink(1)"
      ><ion-icon name="chevron-back-outline"></ion-icon
    ></a>
    <a
      :href="pager.getlink(pi)"
      v-for="pi in list"
      :key="pi"
      :class="{ active: pi == pager.pageIndex }"
      >{{ pi }}</a
    >
    <a :href="pager.getlink(pager.pageTotal)"
      ><ion-icon name="chevron-forward-outline"></ion-icon
    ></a>
  </div>
</template>
<script>
export default {
  /**
   * @description:  分页参数
   * @param {*} { pageTotal,pageIndex,string:getlink(int:pageindex)}
   * @return {*}
   */
  props: ["pager"],
  computed: {
    list() {
      let ss = [];
      let { pageTotal, pageIndex } = this.pager;
      for (let i = pageIndex - 3; i < pageIndex; i++) {
        if (i < 1) continue;
        ss.push(i);
      }
      for (let i = pageIndex; i <= pageTotal && i <= pageIndex + 3; i++) {
        ss.push(i);
      }
      return ss;
    },
  },
};
</script>
