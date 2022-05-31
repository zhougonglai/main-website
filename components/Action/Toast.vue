<template lang="pug">
div(ref="toast")
  transition-group.gui-toast-group.justify-end.grid.flex-col.gap-y-5.justify-items-end(name="list" tag="section")
    output.gui-toast.text-base.rounded.px-5.py-2.list-none.bg-primary.text-white.z-10(role="status" v-for="(toast, i) in toasts" :key="toast.rid" v-text="toast.text")
</template>
<script>
export default {
  name: 'action-toast',
  data() {
    return {
      toasts: []
    }
  },
  mounted() {
    document.body.appendChild(this.$refs.toast)
  },
  methods: {
    createToast(text) {
      const rid = Math.random().toString(16).substr(-10);
      const toast = {
        rid, text
      }
      if (this.toasts.length >= 3) {
        this.toasts.shift();
        this.toasts = this.toasts;
      }
      this.toasts = this.toasts.concat([toast]);
      setTimeout(() => {
        this.toasts = this.toasts.filter(t => t.rid !== rid);
      }, 3000)
    }
  }
}
</script>
<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: all .3s ease-in-out;
}

.list-enter,
.list-leave-to {
  opacity: 0;
}

.list-enter {
  transform: translateY(5vh);
}

.list-leave-to {
  transform: translateX(5vh);
}

.gui-toast {
  z-index: 10;
  will-change: transform;
  max-inline-size: min(25ch, 90vw);

  &-group {
    position: fixed;
    z-index: 99;
    right: 15px;
    bottom: 15px;

    pointer-events: none;
  }


}
</style>
