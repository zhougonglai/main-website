<template lang="pug">
.w-full.flex.flex-col.items-center.pb-20
  .banner.w-full.h-480.flex.items-center.justify-center.h-480.bg-gradient-to-r.from-blue-300.to-red-300
    .box
      h1.text-4xl.text-white 新闻资讯
      .desc.text-white 及时了解我们所有的新闻发布、产品发布和生态合作——帮助您了解
        br
        | 快速发展的测试技术以及创远为国产仪器所作出的卓越贡献。
  article
    .time 2022年2月13日
    h1.title 创远仪器参加2021年mwc
    .content
      p 新闻概述内容-及时了解我们所有的新闻发布、产品发布和生态合作帮助您了解快速发展的 测试技术以及创远为国产仪器所作出的卓越贡献。
      img(src="../../assets/img/bg_sunset.jpg")
      p 新闻概述内容-及时了解我们所有的新闻发布、产品发布和生态合作帮助您了解快速发展的 测试技术以及创远为国产仪器所作出的卓越贡献。
      p 新闻概述内容-及时了解我们所有的新闻发布、产品发布和生态合作帮助您了解快速发展的 测试技术以及创远为国产仪器所作出的卓越贡献。
      p 新闻概述内容-及时了解我们所有的新闻发布、产品发布和生态合作帮助您了解快速发展的 测试技术以及创远为国产仪器所作出的卓越贡献。
      p 新闻概述内容-及时了解我们所有的新闻发布、产品发布和生态合作帮助您了解快速发展的 测试技术以及创远为国产仪器所作出的卓越贡献。
      p 新闻概述内容-及时了解我们所有的新闻发布、产品发布和生态合作帮助您了解快速发展的 测试技术以及创远为国产仪器所作出的卓越贡献。
      p 新闻概述内容-及时了解我们所有的新闻发布、产品发布和生态合作帮助您了解快速发展的 测试技术以及创远为国产仪器所作出的卓越贡献。
      p 新闻概述内容-及时了解我们所有的新闻发布、产品发布和生态合作帮助您了解快速发展的 测试技术以及创远为国产仪器所作出的卓越贡献。
  section.flex.more
    a(href="") 上一篇：创远仪器参加国防科技展
    a(href="") 下一篇：创远仪器参加国防科技展
</template>
<script>
export default {
  mounted() {
    console.log("id");
  },
};
</script>
<style lang="scss" scoped>
.banner {
  margin-bottom: 86px;

  .box {
    width: 1000px;
  }
}

article {
  margin-bottom: 80px;

  .time {
    font-size: 16px;
    color: #aaa;
  }

  h1.title {
    font-size: 30px;
    color: #222222;
    margin: 50px 0 40px;
  }

  .content {
    width: 1000px;
    font-size: 24px;
    color: #222222;

    p {
      margin: revert;
    }

    ::v-deep {
      img {
        max-width: 100%;
      }
    }
  }
}

section.more {
  justify-content: space-between;
  width: 1000px;
  margin-bottom: 100px;

  a {
    padding: 10px;
    font-size: 24px;
    width: 438px;
    font-weight: bold;
    color: #4d4d4d;
    height: 54px;
    background: #eeeeee;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
