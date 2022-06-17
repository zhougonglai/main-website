<template lang="pug">
.carousel-card.relative.w-full.flex.items-center.justify-center
  button.carousel-prev.cursor-pointer.absolute.left-0.z-10.text-blue-300.flex.items-center.justify-center.z-1(
    class="top-1/2 -translate-y-1/2 hover:text-blue-500" @click="prev")
    ion-icon.v-cloak(name="chevron-back-outline" size="large")
  .carousel-content.flex.overflow-hidden(:class="[contentClass, browser.name != 'Safari' ? 'smooth' : 'auto']" ref="content")
    slot
  button.carousel-next.cursor-pointer.absolute.right-0.z-10.text-blue-300.flex.items-center.justify-center.z-1(
    class="top-1/2 -translate-y-1/2 hover:text-blue-500" @click="next")
    ion-icon.v-cloak(name="chevron-forward-outline" size="large")
  .dot-container.absolute.bottom-5.left-0.right-0.flex.justify-center.items-center.gap-x-2.z-10(v-if="dot" :class="dotContentClass")
    .dot.flex.items-center.justify-center.cursor-pointer.transition(v-for="i in maxSize" :key="i" @click="moveTo(i - 1)" :class="{ [dotActiveClass]: (i - 1) == index, [dotClass]: (i - 1) != index }")
</template>
<script>
import Bowser from "bowser";

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
    },
    dot: {
      type: Boolean,
      default: false,
    },
    dotClass: {
      type: String,
      default: '',
    },
    dotContentClass: {
      type: String,
      default: ''
    },
    dotActiveClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      index: 0,
      timer: 0,
      ...Bowser.parse(window.navigator.userAgent)
    }
  },
  computed: {
    maxIndex() {
      return Math.ceil(this.maxSize / this.size);
    }
  },
  mounted() {
    // console.log(Bowser.parse(window.navigator.userAgent))
  },
  methods: {
    prev() {
      if (!this.index) return;
      this.index = this.index - 1;
      this.$refs.content.scroll({
        top: 0,
        left: this.index * this.$refs.content.offsetWidth,
      })
    },
    next() {
      // console.log(this.$refs.content)
      if (this.index == this.maxIndex - 1) return;
      this.index = this.index + 1;
      this.$refs.content.scroll({
        top: 0,
        left: this.index * this.$refs.content.offsetWidth,
      })
    },
    moveTo(index) {
      this.index = index;
      this.$refs.content.scroll({
        top: 0,
        left: this.index * this.$refs.content.offsetWidth,
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.carousel {
  &-content {
    &.smooth {
      scroll-behavior: smooth;
    }

    &.auto {
      scroll-behavior: auto;
    }
  }
}
</style>
