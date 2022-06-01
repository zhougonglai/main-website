<template lang="pug">
.pagination.flex.items-center.gap-x-3
  button.pagination__arrow.flex.items-center.justify-center.w-10.h-10.bg-gray-100.hover-bg-primary.cursor-pointer(
    type="button" class="hover:text-white" @click="pageChange(value - 1)" :disabled="value === 1")
    ion-icon(name="chevron-back")
  .pagination__content.relative.flex.items-center.gap-x-3
    template(v-if="length <= 7")
      .pagination__item.flex.items-center.justify-center.w-10.h-10.bg-gray-100.hover-bg-primary.cursor-pointer(
        v-for="p in length" :key="p" v-text="p" class="hover:text-white"
        :class="{ 'bg-primary text-white': value == p }" @click="pageChange(p)")
    template(v-else-if="value > 4 && value < length - 3")
      .pagination__item.flex.items-center.justify-center.w-10.h-10.bg-gray-100.hover-bg-primary.cursor-pointer(
        class="hover:text-white" :class="{ 'bg-primary text-white': value == 1 }" v-text="1" @click="pageChange(1)")
      .pagination__item.flex.items-center.justify-center.w-10.h-10 ...
      .pagination__item.flex.items-center.justify-center.w-10.h-10.bg-gray-100.hover-bg-primary.cursor-pointer(
        v-for="p in [value - 2, value - 1, value, value + 1, value + 2]" :key="p" class="hover:text-white"
        :class="{ 'bg-primary text-white': value == p }" v-text="p" @click="pageChange(p)")
      .pagination__item.flex.items-center.justify-center.w-10.h-10 ...
      .pagination__item.flex.items-center.justify-center.w-10.h-10.bg-gray-100.hover-bg-primary.cursor-pointer(
        class="hover:text-white" :class="{ 'bg-primary text-white': value == length }" v-text="length" @click="pageChange(length)")
    template(v-else-if="value <= 4")
      .pagination__item.flex.items-center.justify-center.w-10.h-10.bg-gray-100.hover-bg-primary.cursor-pointer(
        v-for="p in Array(value + 2).fill(1).map((a, i) => i + 1)" :key="p" class="hover:text-white"
        :class="{ 'bg-primary text-white': value == p }" v-text="p" @click="pageChange(p)")
      .pagination__item.flex.items-center.justify-center.w-10.h-10 ...
      .pagination__item.flex.items-center.justify-center.w-10.h-10.bg-gray-100.hover-bg-primary.cursor-pointer(
        class="hover:text-white" :class="{ 'bg-primary text-white': value == length }" v-text="length" @click="pageChange(length)")
    template(v-else-if="value >= length - 3")
      .pagination__item.flex.items-center.justify-center.w-10.h-10.bg-gray-100.hover-bg-primary.cursor-pointer(
        class="hover:text-white" :class="{ 'bg-primary text-white': value == 1 }" v-text="1" @click="pageChange(1)")
      .pagination__item.flex.items-center.justify-center.w-10.h-10 ...
      .pagination__item.flex.items-center.justify-center.w-10.h-10.bg-gray-100.hover-bg-primary.cursor-pointer(
        v-for="p in Array(length).fill(1).map((a, i) => i + 1).filter(a => a >= value - 2)" :key="p" class="hover:text-white"
        :class="{ 'bg-primary text-white': value == p }" v-text="p" @click="pageChange(p)")

  button.pagination__arrow.flex.items-center.justify-center.w-10.h-10.bg-gray-100.hover-bg-primary.cursor-pointer(
    type="button" class="hover:text-white" @click="pageChange(value + 1)" :disabled="value === length")
    ion-icon(name="chevron-forward")

</template>
<script>
export default {
  name: 'pagination-form',
  props: {
    length: {
      type: Number,
      require: true
    },
    value: {
      type: Number,
      require: true
    }
  },
  methods: {
    pageChange(input) {
      if (input == this.value) return;
      this.$emit('change', input)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
