<template lang="pug">
section.w-full
  .sc-1.h-96.bg-gradient-to-r.from-blue-300.to-red-300.flex.flex-col.items-center.justify-center
    .sc-1__block
      h1.text-4xl 文档搜索
      .search.mt-4.flex
        input.search-input.h-16.flex-1.leading-none.pl-5.caret-blue-500.text-xl(type="text" placeholder="搜索")
        button.search-btn.bg-blue-500.text-white.w-16.flex.items-center.justify-center
          ion-icon(name="search" size='large')
  .sc-2.flex.justify-center.align-center
    .sc-2__block.flex.p-10.gap-x-10
      aside.w-60
        .link.leading-10.border-t.cursor-pointer.text-lg(
          v-for="(l, i) in files" :key="i"
          :class="{ 'text-blue-500': active === i }"
          @click="active = i"
          v-text="l.name")
      section.flex-1
        .file.flex.border-b.border-gray-300.py-5.cursor-pointer(v-for="(file, i) in files[active].files" :key="i" class="hover:bg-gray-100")
          .file-icon.w-20.h-20.flex.items-center.justify-center
            ion-icon.text-4xl.text-blue-500(name="document-text-outline")
          .flex.flex-col
            .file-title.text-2xl.text-blue-500(v-text="file.title")
            .file-subtitle.text-lg.text-gray-500.mt-5(v-text="file.sub")


</template>

<script>
import files from '@/assets/constant/files';

export default {
  name: "open-file-page",
  data() {
    return {
      files,
      active: 0,
    }
  }
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
