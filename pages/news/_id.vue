<template lang="pug">
.w-full.flex.flex-col.items-center
  .banner.w-full.flex.justify-center
    .box
      h1 新闻资讯
      .desc 及时了解我们所有的新闻发布、产品发布和生态合作——帮助您了解
      br
      | 快速发展的测试技术以及创远为国产仪器所作出的卓越贡献。
</template>
<script>
export default {
  mounted(){
    console.log("id");
  }
};
</script>
<style lang="scss" scoped>
.banner {
  height: 438px;
  background: url("../../assets/img/bg_sunset.jpg") no-repeat center / cover;
  margin-bottom: 136px;
  line-height: 1;
  .box {
    width: 770px;
  }
  h1 {
    font-size: 36px;
    color: #262626;
    margin: 82px 0 31px;
  }
}
</style>
