<template lang="pug">
dialog.grid.round.shadow(:open="open" :inert="inert" ref="dialog" @click.stop="dismiss")
  Submit.p-10.overflow-auto(v-if="preview && !token" @post-end="postEnd")
  slot(v-else)
</template>
<script>
import Submit from '../Submit/index.vue';
import Cookies from 'js-cookie'

export default {
  name: "app-dialog",
  components: { Submit },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    preview: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inert: true,
      token: Cookies.get('token') || '',
    };
  },
  mounted() {
    dialogPolyfill.registerDialog(this.$refs.dialog)
  },
  methods: {
    showModal() {
      this.$refs.dialog.showModal();
      this.inert = false;
      this.token = Cookies.get('token');
      document.body.classList.add("overflow-hidden");
    },
    close() {
      this.$refs.dialog.close();
      this.inert = true;
      document.body.classList.remove("overflow-hidden");
    },
    dismiss(e) {
      if (e.target.nodeName === "DIALOG") {
        this.close();
      }
    },
    postEnd() {
      this.token = Cookies.get('token');
    }
  },
}
</script>
<style lang="scss">
@import "open-props/easings.min.css";
@import "open-props/animations.min.css";

html {
  &:has(dialog[open][modal-mode="mega"]) {
    overflow: hidden;
  }
}
</style>
<style lang="scss" scoped>
dialog {
  &:not([open]) {
    pointer-events: none;
    opacity: 0;
  }

  background: white;
  color: black;
  max-inline-size: 90vw;
  max-block-size: min(80vh, 100%);
  max-block-size: min(80dvb, 100%);
  margin: auto;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  inset: 0;
  z-index: 9;
  transition: opacity .5s var(--ease-3);

  @media (prefers-reduced-motion: no-preference) {
    animation: var(--animation-scale-down) forwards;
    animation-timing-function: var(--ease-squish-3);
  }

  &[open] {
    @media (prefers-reduced-motion: no-preference) {
      animation: var(--animation-slide-in-up) forwards;
    }
  }

  &::backdrop {
    transition: backdrop-filter .5s ease;
    backdrop-filter: blur(25px);
    z-index: 9;
  }
}

@media (max-width: 768px) {
  dialog[modal-mode="mega"] {
    margin-block-end: 0;
    border-end-end-radius: 0;
    border-end-start-radius: 0;
  }
}
</style>
