<template lang="pug">
.carousel-box.relative.w-full.flex.items-center.justify-center
  button.carousel-prev.cursor-pointer.absolute.left-0.z-10.text-blue-300(
    class="top-1/2 -translate-y-1/2 hover:text-blue-500" @click="prev")
    ion-icon.v-cloak(name="chevron-back-outline" size="large")
  .carousel-content(v-if="items.length" :class="contentClass" ref="content")
    .carousel-item.cursor-pointer(v-for="(item, i) in items" :key="i" :class="itemClass" @mouseenter="handleSelect(item)" @click="select(item)" @mouseleave="cancelSelect")
      img.object-cover.object-center(:src="item.src")
  button.carousel-next.cursor-pointer.absolute.right-0.z-10.text-blue-300(
    class="top-1/2 -translate-y-1/2 hover:text-blue-500" @click="next")
    ion-icon.v-cloak(name="chevron-forward-outline" size="large")
</template>

<script>
export default {
  name: 'carousel-box',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    itemClass: {
      type: String,
      default: '',
    },
    contentClass: {
      type: String,
      default: ''
    },
    length: {
      type: Number,
      default: 3,
    }
  },
  data() {
    return {
      active: 0,
      index: 0,
      timer: 0,
    }
  },
  computed: {
    maxIndex() {
      return Math.ceil(this.items.length / 3);
    }
  },
  methods: {
    prev() {
      if (!this.index) return;
      this.index = this.index - 1;
      this.$refs.content.scroll({
        top: 0,
        left: this.index * this.$refs.content.offsetWidth,
        behavior: 'smooth'
      })
    },
    next() {
      if (this.index === this.maxIndex - 1) return;
      this.index = this.index + 1;
      this.$refs.content.scroll({
        top: 0,
        left: this.index * this.$refs.content.offsetWidth,
        behavior: 'smooth'
      })
    },
    select(item) {
      this.$emit('select', item);
    },
    handleSelect(item) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.$emit('select', item);
      }, 250);
    },
    cancelSelect() {
      clearTimeout(this.timer);
      this.timer = 0;
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
