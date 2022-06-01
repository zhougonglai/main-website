<template lang="pug">
.w-full.flex.flex-col.items-center
  .banner.w-full.h-480.flex.justify-center.bg-gradient-to-r.from-blue-300.to-red-300
    .box.flex.flex-col.justify-center
      h1.text-4xl.text-white 新闻资讯
      p.text-xl.mt-5.leading-8.desc.text-white 及时了解我们所有的新闻发布、产品发布和生态合作——帮助您了解
        br
        | 快速发展的测试技术以及创远为国产仪器所作出的卓越贡献。
  .new-list.grid.grid-cols-3.mt-20.gap-10
    nuxt-link.flex.flex-col.border-b-2.border-white(v-for="n in news.news" :key="n.id" :to="`news/${n.id}`" class="hover:border-blue-300")
      img.object-center.object-contain(:src="basePath + n.url" width="100%" height="100%")
      .bg-gray-100.flex.flex-col.p-5
        h2.text-xl 创远仪器参加2021年mwc
        .flex.text-lg.mt-5.justify-between.items-end
          button.underline.decoration-from-font 了解详情
          time.text-sm.text-gray-500 2022年2月13日
  section.py-20
    SubmitPagination(:length="news.totalPage" :value="pages" @change="handleChange")
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "news-page",
  data() {
    return {
      pages: 1
    }
  },
  computed: {
    basePath() {
      return process.env.BASE_API
    },
    ...mapState(['news'])
  },
  mounted() {
    this.getNewsList({ pages: this.pages });
  },
  methods: {
    ...mapActions(['getNewsList']),
    handleChange(value) {
      this.getNewsList({ pages: value });
      this.pages = value;
    }
  }
};
</script>
<style lang="scss" scoped>
.banner {
  .box {
    width: 1200px;
  }
}

.new-list {
  width: 1200px;

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
