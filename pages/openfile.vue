<template lang="pug">
section.w-full.pb-20(v-cloak v-if="pageData")
  .sc-1.h-480.flex.flex-col.items-center.justify-center.relative
    img.absolute.inset-0.z-0.object-center.w-full.h-full(v-if="cover" :src="$root.basePath + cover")
    .sc-1__block.z-1
      h1.text-4xl 文档搜索
      .search.mt-4.flex
        input.search-input.h-16.flex-1.leading-none.pl-5.caret-blue-500.text-xl.outline-0(type="text" v-model.trim="keyword" placeholder="搜索")
        button.search-btn.bg-blue-500.text-white.w-16.flex.items-center.justify-center(@click="search")
          ion-icon(name="search" size='large')
  .sc-2.flex.justify-center.align-center
    .sc-2__block.flex.flex-col.p-10.gap-x-10(class="lg:flex-row")
      aside.w-full(class="lg:w-60")
        .link.leading-10.border-t.cursor-pointer.text-lg.flex.items-center(
          v-for="(c, i) in category" :key="i"
          :class="{ 'text-blue-500': active === i }"
          @click="changeCategory(i)")
          .inline-flex.items-center.justify-center.w-10
            img(:src="c.link" width="20")
          | {{ c.label }}
      section.flex-1
        .file.flex.border-b.border-gray-300.py-5.cursor-pointer(
          v-for="file in pageData.attachment" :key="file.id" class="hover:bg-gray-100"
          @click="openFile(file)")
          .file-icon.w-20.h-20.flex.items-center.justify-center.shrink-0
            img(:src="category[active].link" width="40")
          .flex.flex-col
            .file-title.text-2xl.text-blue-500(v-text="file.title")
            .file-subtitle.text-lg.text-gray-500.mt-5(v-text="file.name")
        .flex.mt-20.items-center.justify-center(v-if="pageData.totalPage")
          SubmitPagination(:length="pageData.totalPage" :value="pages" @change="changePage")
  Dialog.w-full.h-full(ref="dialog" preview :url="file.url")
    embed(v-if="file" v-cloak :src="basePath + file.url" width="100%" height="100%")

</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "open-file-page",
  async asyncData({ route, app }) {
    const { data } = await app.$axios.$get('/api.php/api/getMate', { params: { router: route.path } });
    return data
  },
  data() {
    return {
      keyword: '',
      keywords: '',
      category: [
        {
          value: 1,
          label: 'Datasheet',
          link: require('@/assets/img/prod/datasheet.svg'),
        },
        {
          value: 2,
          label: '操作手册',
          link: require('@/assets/img/prod/resolve.svg'),
        },
        {
          value: 3,
          label: '解决方案',
          link: require('@/assets/img/prod/useage.svg'),
        },
      ],
      active: 0,
      pages: 1,
      file: '',
      cover: '',
      pageData: '',
    }
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
  computed: {
    basePath() {
      return process.env.BASE_API
    }
  },
  async mounted() {
    this.changeCategory(0)
    this.cover = (await this.getAttachmentImg()).url;
  },
  methods: {
    ...mapActions(['getAttachment', 'getAttachmentImg']),
    async changeCategory(index) {
      this.active = index;
      this.pages = 1;
      this.pageData = await this.getAttachment({ category: this.category[this.active].value, keyword: this.keyword, pages: this.pages });
    },
    openFile(file) {
      this.file = file;
      this.$refs.dialog.showModal();
    },
    async search() {
      this.changeCategory(0);
    },
    async changePage(page) {
      this.pages = page;
      this.pageData = await this.getAttachment({ category: this.category[this.active].value, keyword: this.keyword, pages: this.pages });
    }
  },
}
</script>

<style lang="scss" scoped>
.sc-1 {
  &__block {
    width: min(720px, 100vw);
  }
}

.sc-2 {
  &__block {
    width: min(1200px, 100vw);
  }
}

.file {
  &-icon {}
}
</style>
