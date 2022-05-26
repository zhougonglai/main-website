<template lang="pug">
.app-select.relative
  ion-icon.absolute.right-5.text-primary(name="chevron-down" class="top-1/2 -translate-y-1/2" size="large")
  select.appearance-none(v-bind="$attrs" :class="contentClass" :value="value" :placeholder="placeholder")
    option(value="") 请选择
    option(v-for="(op, i) in options" :key="i" :value="op.value" v-text="op.label")
</template>
<script>
export default {
  name: 'app-select',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    contentClass: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Boolean, Number],
      default: '',
    }
  },
}
</script>
