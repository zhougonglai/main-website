<template lang="pug">
.w-full.flex.flex-col.items-center
  .container
    nav.Bread-crumbs.flex.items-center
      NuxtLink(to="/")
        ion-icon(name='home-outline') 
      ion-icon(name='chevron-forward-outline') 
      NuxtLink(to="/about") 关于我们       
      ion-icon(name='chevron-forward-outline') 
      | 联系我们
  .banner.w-full
  .container.desc
    p 上海创远仪器技术股份有限公司（简称创远仪器）成立于 2005 年，总部位于上海，首批北交所上市（831961），是一家自主研发射频通信测试仪器和提供整体测试解决方案的专业仪器仪表公司。专注于无线通信、射频微波、无线电监测、北斗导航及智能制造测试领域，拥有自主品牌和一系列测试仪器核心专利技术，集研发、生产和销售为一体，是一家具有自主知识产权的高新技术企业。荣获 2016 年度国家科学技术进步奖特等奖和 2020 年度江苏省科学技术奖一等奖。
    p 创远仪器多年承担国家“新一代宽带无线移动通信网”科技重大专项课题开发任务及上海市高新技术产业化专项、战略性新兴产业发展专项、科技创新行动等研发任务，承担上海无线通信测试仪器工程技术研究中心的持续建设任务，全面展开5G/6G 通信测试技术的研究，参与国家 5G/6G 测试规范及标准制定，是国家知识产权优势企业，上海市专利工作示范企业，截止到 2021 年底累计申请国内外专利364 个。2020 年联合东南大学等单位发布了 5G 毫米波技术白皮书。
  .contact
    .item.item1
      .title 总公司
      .row 上海市松江区高技路 205 弄 7 号 C 座
      .flex.row
        .flex-1 电话：021-6432 6888
        .flex-1 传真：021-6432 6777
      .flex
        .flex-1 热线电话：400-677-8077
        .flex-1 邮箱：info@transcom.net.cn
    .flex.row
      .flex-1.item
        .title 南京
        b 南京分公司
        .row 南京市江宁区秣周东路 9 号无线谷 A3 楼 3102 室
        .row 电话：025-84937849
        .row 传真：025-84937849-804
      .flex-1.item
        .title 成都
        b 成都分公司
        .row 四川省成都市高新区九兴大道 14 号凯乐国际 3 栋 403 室
        .row 电话：028-83227390
        .row 传真：028-85120797
      .flex-1.item
        .title 西安
        b 西安分公司
        .row 西安市高新区锦业一路 56 号研祥城市广场 B 座 2217 室
        .row 电话：029- 81028261
        .row  
    .item
        .title 深圳
        b 深圳办事处
        .row 深圳市南山区桃园街道大学城创客小镇 17 栋 309-2 室
        .row 电话：13817170735
  .form
   h2.title 需要更多信息
   p.info 如果您有任何疑问或需要了解更多信息，请填写此表格，我们会尽快回复您。
   .row.radio
    input(type="radio" id="sex-1" v-model="db.sex" value="1")
    label(for="sex-1") 男
    input(type="radio" id="sex-0" v-model="db.sex" value="0")
    label(for="sex-0") 女
   .field.flex
    .flex-1
      label 姓 名
      input(v-model="db.name")
    .flex-1
      label 公司名称
      input(v-model="db.company")
   .field.flex
    .flex-1
      label 公司邮箱
      input(v-model="db.name")
    .flex-1
      label 城市
      input(v-model="db.company")
   .field.flex
    .flex-1
      label 电话号码
      input(v-model="db.name")
    .flex-1
      label 询问
      input(v-model="db.company")
   .field
    textarea(v-model="db.company" placeholder="具体问题描述")
</template>

<script>
export default {
  data() {
    return {
      db: {
        sex: 1,
        name: "",
        company: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
$blue: #005fab;
nav.Bread-crumbs {
  height: 66px;
  font-size: 20px;
  color: #606060;
}
.banner {
  height: 484px;
  background: url("../assets/img/bg_sunset.jpg") no-repeat center / cover;
}
.container {
  width: 1200px;
}
.desc {
  width: 1123px;
  font-size: 28px;
  color: #464646;
  line-height: 48px;
  margin: 114px 0 128px;
  p {
    margin-top: 30px;
  }
}
.contact {
  width: 1560px;
  background: #f5f5f5;
  border-radius: 6px;
  padding: 98px 70px;
  .item {
    padding: 23px 33px;
    font-size: 23px;
    margin: 17px;
    color: #525252;
    line-height: 50px;
    background: #fff;
    .title {
      font-size: 40px;
      font-weight: bold;
      color: #6d6d6d;
      line-height: 36px;
      margin: 40px 0;
    }
    b {
      margin: 4px 0 14px;
    }
  }
  .item1 {
    padding: 38px 40px;
    font-size: 28px;
    line-height: 36px;
    .title {
      margin: 60px 0;
    }
  }
}
.form {
  width: 1340px;
  padding: 85px 0;
  font-size: 26px;
  color: #252525;
  h2 {
    font-size: 40px;
  }
  > p {
    margin-top: 40px;
    font-size: 26px;
    color: #626363;
  }
  .radio {
    input {
      height: 20px;
      width: 20px;
      margin-right: 15px;
    }
    label {
      margin-right: 85px;
    }
  }
  .field {
    min-height: 200px;
    label {
      display: block;
      color: #252525;
      margin: 25px 0;
    }
    input {
      width: 499px;
      height: 50px;
      background: #eeeeed;
      border: 1px solid #8a8a8a;
      text-indent: 10px;
    }
    textarea {
      margin-top: 20px;
      width: 100%;
      height: 283px;
      background: #eeeeed;
      border: 1px solid #303131;
    }
  }
}
</style>
