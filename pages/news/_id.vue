<template lang="pug">
.w-full.flex.flex-col.items-center.pb-20(v-if="newsDetail.detail")
  .banner.w-full.flex.items-center.justify-center.relative
    img.object-center.object-cover.w-full.h-full.z-0(:src="basePath + newsDetail.detail.url" width="100%" height="100%")
    //- section.con.z-1.text-white
    //-   h1.text-4xl(v-text="newsDetail.title")
    //-   pre.text-lg.mt-10(v-text="newsDetail.content")
  article.mt-20
    .flex.gap-x-2.text-sm.text-gray-500
      time(v-text="newsDetail.detail.date")
      address.not-italic(v-text="newsDetail.detail.addr")
    h1.my-10.text-4xl(v-text="newsDetail.detail.name")
    .container(v-html="newsDetail.detail.content")
  section.container.flex.justify-between
    nuxt-link.border.border-gray-300.bg-gray-100.text-lg.px-5.py-2(v-if="newsDetail.detail.prve" :to="`/news/${newsDetail.detail.prve.id}`" class="hover:bg-gray-300") 上一篇: {{ newsDetail.detail.prve.name }}
    .flex-1(v-else)
    nuxt-link.border.border-gray-300.bg-gray-100.text-lg.px-5.py-2(v-if="newsDetail.detail.next" :to="`/news/${newsDetail.detail.next.id}`" class="hover:bg-gray-300") 下一篇: {{ newsDetail.detail.next.name }}
    .flex-1(v-else)
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'news-detail-page',
  async asyncData({ route, app }) {
    const { data } = await app.$axios.$get('/api.php/api/getMate', { params: { router: route.path } });
    return data
  },
  computed: {
    basePath() {
      return process.env.BASE_API
    },
    ...mapState(['newsDetail'])
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords,
        },
      ]
    }
  },
  async mounted() {
    const data = await this.getNewsDetail(this.$route.params)

    this.$store.commit('updateLea', {
      path: `/news/${this.$route.params.id}`,
      meta: {
        title: data.detail.name,
        paths: []
      }
    })
  },
  destroyed() {
    this.$store.commit('updateLea', '')
  },
  methods: {
    ...mapActions(['getNewsDetail'])
  }
};
</script>
<style lang="scss" scoped>
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

  .container {
    // font-size: 24px;
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
