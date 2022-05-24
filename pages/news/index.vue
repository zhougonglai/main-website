<template lang="pug">
.w-full.flex.flex-col.items-center
  .banner.w-full.h-480.flex.items-center.justify-center.h-96.bg-gradient-to-r.from-blue-300.to-red-300
    .box
      h1.text-4xl.text-white 新闻资讯
      .desc.text-white 及时了解我们所有的新闻发布、产品发布和生态合作——帮助您了解
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
  margin-bottom: 136px;
  .box {
    width: 1200px;
  }
   h1 {
    margin: 82px 0 31px;
  }
}

.new-list {
  width: 1200px;
  margin: 0 -13px 100px;

  .new {
    display: inline-block;
    width: 375px;
    margin: 19px 10px;

    .img {
      height: 196px;
      background: url("../../assets/img/bg_sunset.jpg") no-repeat center / cover;
    }

    .title {
      padding: 12px;
      height: 150px;
      background: #efefef;

      h5 {
        margin-top: 8px;
        font-size: 19px;
        color: #222222;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .desc {
        justify-content: space-between;
        margin-top: 40px;
        font-size: 16px;
        color: #111111;
        .link {
          border-bottom: 1px solid #383838;
        }
        .time {
          color: #999;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
