<template lang="pug">
.w-full.flex.flex-col.items-center
  .banner.w-full
  section.w-full.flex.flex-col.items-center.desc2
   .title 发展历程
   .list
     .flex.items-center.item(v-for="x in 10" :key="x")
      .year {{2023-x}}
      .info
        p 成功首批登入北交所
        p 所有国家专项通过审计署审计
        p 复审通过2021年上海“专精特新”
          br
          |中小企业评审
      img.img(src="../assets/img/bg_sunset.jpg")


</template>

<script>
export default {
  name: "about-page",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
$blue: #005fab;
.banner {
  height: 434px;
  background: url("../assets/img/bg_sunset.jpg") no-repeat center / cover;
}
.container {
  width: 1200px;
}
.desc {
  width: 1047px;
  h5 {
    margin-top: 100px;
    font-size: 36px;
    font-weight: 400;
    color: #262626;
  }
  hr {
    border-bottom: 2px solid #666666;
    margin: 30px 0;
  }
  .content {
    margin-top: 43px;
    font-size: 24px;
    color: #585858;
    line-height: 42px;
  }
}
.banner2 {
  width: 1047px;
  height: 562px;
  margin: 84px 0;
  background: url("../assets/img/bg_sunset.jpg") no-repeat center / cover;
}
.title {
  width: 1551px;
  font-size: 48px;
  color: #222222;
  padding: 117px 0 87px 170px;
  text-align: left;
}
.list {
  width: 1551px;
  padding-bottom: 200px;
  .item {
    padding: 0 174px;
    height: 302px;
    background: #eaecec;
    .year {
      font-size: 97px;
      font-family: Arial;
      color: #000000;
      margin-right: 75px;
    }
    .info {
      flex: 1;
      font-size: 24px;
      color: #1a1a1a;
      p {
        margin: 18px 0;
      }
    }
    .img {
      width: 350px;
      height: 222px;
      margin-right: 20px;
      box-shadow: 12px 12px #c2c2c2;
    }
    &:nth-child(even) {
      background: #b5b9b9;
      .year {
        color: #c70008;
      }
      .img {
        box-shadow: 12px 12px #eaecec;
      }
    }
  }
}
</style>
