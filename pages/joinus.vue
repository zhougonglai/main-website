<template lang="pug">
.w-full.flex.flex-col.items-center
  .container
    nav.Bread-crumbs.flex.items-center
      a(href="/")
        ion-icon(name='home-outline') 
      ion-icon(name='chevron-forward-outline') 
      | 招贤纳士
  .banner.w-full
  section.container.desc
    h5 为什么要加入我们
    .content 上海创远仪器技术股份有限公司成立于 2005 年，总部位于上海 G60 科创走廊 5G 产业基地，2015年在新三板挂牌（831961），2020年7月作为首批企业成功晋级新三板精选层，是一家自主研发射频通信测试仪器和提供整体测试解决方案的专业仪器仪表公司。
  section.container.flex.justify-center.items-center.add
    ion-icon(name="person-add-outline")
    div
      b 88
      p 职位招聘
  section.container.flex.justify-center.table.text-left
    .header.flex
      .flex-1 
        ion-icon(name='star-outline')
      .flex-3 职位名称
      .flex-1 职能范围
      .flex-1 学历水平
      .flex-2 城市
    .item.flex(v-for="db,i in 10" :key="i")
      .flex-1 
        ion-icon(name='star')
      .flex-3 销售工程师（2020应届生）
      .flex-1 职能范围
      .flex-1 学历水平
      .flex-2 城市
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
      // list:[
      //   {
      //     title:""
      //   }
      // ]
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
.desc {
  padding: 0 58px;
  h5 {
    margin-top: 100px;
    font-size: 36px;
    font-weight: 400;
    color: #262626;
  }
  .content {
    margin-top: 75px;
    font-size: 24px;
    color: #585858;
    line-height: 42px;
  }
}
.add {
  margin: 90px 0 40px;
  ion-icon {
    color: #005fab;
    font-size: 85px;
    margin-right: 15px;
  }
  color: #666;
  line-height: 1;
  b {
    font-size: 72px;
  }
  p {
    font-size: 24px;
  }
}
.table{
  .flex-2{
    flex:2
  }
  .flex-3{
    flex:3
  }
}
</style>
