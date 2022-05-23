<template lang="pug">
.w-full.flex.flex-col.items-center
  Dialog(ref="dialog")
    table.m-5.table-fixed.border-collapse.border.border-slate-400
      table-body
        tr
          td.p-5.border.border-slate-300 性别
          td.p-5.border.border-slate-300 不限
        tr
          td.p-5.border.border-slate-300 年龄
          td.p-5.border.border-slate-300 不限
        tr
          td.p-5.border.border-slate-300 外语要求
          td.p-5.border.border-slate-300 CET4
        tr
          td.p-5.border.border-slate-300 职责
          td.p-5.border.border-slate-300
            ul
              li 1、所辖区域的产品和技术解决方案的销售工作的策划与执行，完成销售目标；
              li 2、负责区域市场的客户开拓与维护相应客户关系，为客户展示和介绍创远公司仪器产品和解决方案；
        tr
          td.p-5.border.border-slate-300 要求
          td.p-5.border.border-slate-300
            ul
              li 1、通信工程、电子信息工程、测控仪器等理工科专业，本科/硕士学历；
              li 2、具备较强的客户沟通能力和商务处理能力，学习能力强；
              li 3、喜欢有挑战性的工作并有强烈的成功愿望，愿意出差。
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
      .flex-3 职位名称
      .flex-1 职能范围
      .flex-1 学历水平
      .flex-2 城市
    .item.flex.cursor-pointer(v-for="db, i in 10" :key="i")
      .flex-1.text-center.star
        ion-icon(name='star')
      .flex-3.jobname(@click="$refs.dialog.showModal()") 销售工程师（2020应届生）
      .flex-1 市场
      .flex-1 本科及以上
      .flex-2 中国/上海/浦东/静安
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
