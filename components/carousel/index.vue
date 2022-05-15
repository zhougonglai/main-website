<template>
  <div class="carousel relative" v-if="items && items.length" @mouseenter="stopInterval" @mouseleave="updateInterval">
    <div class="carousel-prev cursor-pointer transition absolute left-0 top-1/2 -translate-y-1/2 z-10"
      @click="switcher(false)">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </div>

    <div class="carousel-item px-10 flex inset-0 absolute" v-for="(b, i) in items" :key="b.key">
      <transition enter-active-class="transition duration-500 delay-200 ease-out" enter-from-class="transform opacity-0"
        enter-to-class="transform opacity-100" leave-active-class="transition duration-300 ease-in"
        leave-from-class="transform opacity-100" leave-to-class="transform opacity-0">
        <div class="carousel-content flex flex-col justify-center w-3/5 p-5" v-show="active === i">
          <h3 class="text-2xl w-60" v-text="b.title" />
          <p class="text-base my-5 w-96" v-text="b.subTitle" />
          <button class="hover:shadow-xl">了解更多</button>
        </div>
      </transition>
      <transition enter-active-class="transition duration-500 delay-1000 ease-out"
        enter-from-class="transform opacity-0 -translate-y-1" enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in" leave-from-class="transform opacity-100 translate-y-0"
        leave-to-class="transform opacity-0 -translate-y-1">
        <div class="carousel-cover flex items-center justify-center w-2/5 p-5 absolute right-0 inset-y-0"
          v-show="active === i">
          <img :src="b.src" width="220" />
        </div>
      </transition>
    </div>

    <div class="carousel-next cursor-pointer transition absolute right-0 top-1/2 -translate-y-1/2 z-10"
      @click="switcher()">
      <ion-icon name="chevron-forward-outline"></ion-icon>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Carousel',
  props: {
    items: {
      type: Array,
    },
    interval: {
      type: Number,
      default: 6000
    }
  },
  data() {
    return {
      active: 0,
      timer: 0,
    }
  },
  mounted() {
    // this.updateInterval();
  },
  beforeDestroy() {
    this.stopInterval();
  },
  methods: {
    switcher(bool = true) {
      if (bool) {
        this.active = this.active === this.items.length - 1 ? 0 : this.active + 1;
      } else {
        this.active = this.active === 0 ? this.items.length - 1 : this.active - 1;
      }
    },
    updateInterval() {
      if (this.timer) return;
      this.timer = setInterval(this.switcher, this.interval);
    },
    stopInterval() {
      clearInterval(this.timer);
      this.timer = 0;
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  height: 500px;
  width: 960px;

  &-prev,
  &-next {
    color: rgba(white, 0.8);
    background-color: rgba(black, 0.2);
    width: 30px;
    height: 50px;
    line-height: 50px;
    text-align: center;

    &:hover {
      color: white;
      background-color: rgba(black, 0.4);
    }
  }

  &-item {

    h3 {
      color: var(--color-1);
    }

    button {
      background-color: #E60012;
      color: white;
      width: 120px;
      height: 50px;
      line-height: 50px;
    }
  }
}
</style>
