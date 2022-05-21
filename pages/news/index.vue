<template lang="pug">
.w-full.flex.flex-col.items-center
  .banner.w-full.flex.justify-center
    .box
      h1 新闻资讯
      .desc 及时了解我们所有的新闻发布、产品发布和生态合作——帮助您了解
      br
      | 快速发展的测试技术以及创远为国产仪器所作出的卓越贡献。
  .new-list
    a.new(v-for="db, i in 16" :key="i" :href="'news/_id?id=' + i")
      .img
      .title
        h5 创远仪器参加2021年mwc
        .flex.desc
          .link 了解详情
          .time 2022年2月13日
</template>
<script>
export default {
  name: "news-page"
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

.new-list {
  width: 1482px;
  margin: 0 -13px 100px;

  .new {
    display: inline-block;
    width: 468px;
    margin: 24px 13px;

    .img {
      height: 246px;
      background: url("../../assets/img/bg_sunset.jpg") no-repeat center / cover;
    }

    .title {
      padding: 20px;
      height: 188px;
      background: #efefef;

      h5 {
        margin-top: 10px;
        font-size: 24px;
        color: #222222;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .desc {
        justify-content: space-between;
        margin-top: 50px;
        font-size: 24px;
        color: #111111;

        .link {
          border-bottom: 1px solid #383838;
        }

        .time {}
      }
    }
  }
}
</style>
