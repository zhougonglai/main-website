<template lang="pug">
.w-full.flex.flex-col.items-center
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
      .flex-1.text-center 
        ion-icon(name='star-outline')
      .flex-4 职位名称
      .flex-2 职能范围
      .flex-2 学历水平
      .flex-1 城市
    NuxtLink.item.flex(v-for="db,i in 10" :key="i" to="")
      .flex-1.text-center.star 
        ion-icon(name='star')
      .flex-4.jobname 销售工程师（2020应届生）
      .flex-2 市场
      .flex-2 本科及以上
      .flex-1 上海
  section.container.flex.justify-center
    Pager(:pager="pager")
</template>
<script>
export default {

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
};
</script>

<style lang="scss" scoped>
$blue: #005fab;
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
    color: $blue;
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

.table {
  .flex-2 {
    flex: 2;
  }
  .flex-3 {
    flex: 3;
  }
  .flex-4 {
    flex: 4;
  }
  font-size: 18px;
  line-height: 74px;
  .header {
    background: #fbfbfb;
    border: 1px solid #626262;
  }
  .item {
    color: #666666;
    &:nth-child(even) {
      background: #fbfbfb;
    }
    &:hover {
      background: #efefef;
    }
  }
  .star ion-icon {
    color: $blue;
  }
  .jobname {
    color: $blue;
  }
}
</style>
