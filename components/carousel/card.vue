<template lang="pug">
.carousel-card.relative.w-full.flex.items-center.justify-center
  button.carousel-prev.cursor-pointer.absolute.left-0.z-10.text-blue-300(
    class="top-1/2 -translate-y-1/2 hover:text-blue-500" @click="prev")
    ion-icon.v-cloak(name="chevron-back-outline" size="large")
  .carousel-content(:class="[contentClass]" ref="content")
    slot
  button.carousel-next.cursor-pointer.absolute.right-0.z-10.text-blue-300(
    class="top-1/2 -translate-y-1/2 hover:text-blue-500" @click="next")
    ion-icon.v-cloak(name="chevron-forward-outline" size="large")
</template>
<script>
export default {
  name: "carousel-card",
  props: {
    size: {
      type: [Number, String],
      default: 3
    },
    maxSize: {
      type: [Number, String],
      default: 3
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
      return Math.ceil(this.maxSize / this.size);
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
      if (this.index == this.maxIndex - 1) return;
      this.index = this.index + 1;
      this.$refs.content.scroll({
        top: 0,
        left: this.index * this.$refs.content.offsetWidth,
        behavior: 'smooth'
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.carousel {
  &-card {}
}
</style>
