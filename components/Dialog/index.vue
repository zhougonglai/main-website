<template lang="pug">
dialog.grid.round.shadow(:open="open")
  slot
</template>
<script>
export default {
  name: "app-dialog"
}
</script>
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
  overflow: hidden;
  margin: auto;
  padding: 0;
  position: fixed;
  inset: 0;
  z-index: 9;

  &::backdrop {
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
