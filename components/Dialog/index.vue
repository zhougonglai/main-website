<template lang="pug">
dialog.grid.round.shadow(:open="open" inert ref="dialog" @click="dismiss")
  slot
</template>
<script>
export default {
  name: "app-dialog",
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showModal() {
      this.$refs.dialog.showModal();
    },

    dismiss(e) {
      if (e.target.nodeName === 'DIALOG') {
        this.$refs.dialog.close();
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "https://unpkg.com/open-props/easings.min.css";
@import "https://unpkg.com/open-props/animations.min.css";

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
  overflow: hidden;
  margin: auto;
  padding: 0;
  position: fixed;
  inset: 0;
  z-index: 9;
  transition: opacity .5s var(--ease-3);

  @media (--motionOK) {
    animation: var(--animation-scale-down) forwards;
    animation-timing-function: var(--ease-squish-3);
  }

  &[open] {
    @media (--motionOK) {
      animation: var(--animation-slide-in-up) forwards;
    }
  }

  &::backdrop {
    transition: backdrop-filter .5s ease;
    backdrop-filter: blur(25px);
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
