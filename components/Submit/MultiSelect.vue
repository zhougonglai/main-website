<template lang="pug">
aside
  form.form
    fieldset
      legend new
        div
          input(type="checkbox" id="c 1" name="c-1" value="c1")
          label(for="c 1") C 1
      legend select
        div
          select(multiple="true" title="Filter results by category")
            optgroup(label="New")
              option(value="last 30 days") Last 30 Days
              option(value="last 6 months") Last 6 Months
</template>
<script>
export default {
  name: 'multi-select',
}
</script>
<style lang="scss" scoped>
aside {
  counter-reset: filters;

  & :checked {
    counter-increment: filters;
  }

  & #applied-filters::before {
    content: counter(filters) " filters ";
  }

  form {
    display: grid;
    gap: 2ch;
    max-inline-size: 30ch;
  }

  @media (pointer: coarse) {
    select[multiple] {
      display: block;
    }
  }
}
</style>
