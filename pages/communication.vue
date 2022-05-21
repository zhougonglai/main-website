<template lang="pug">
section.w-full
  .sc-1.flex.items-center.justify-center.bg-gradient-to-r.from-blue-300.to-red-300
    .sc-1__block.color-white.py-20
      h1.text-4xl.text-white 无线通信
      article.mt-5
        p.text-white.text-2xl 现如今无线通信技术遍布全球的每个角落，全世界无时无刻在互联互通。同时用户还在追求更快、更高效和更稳定的连接，推动通信技术的发展，加快无线技术创新的步伐。
  .sc-2.flex.items-center.justify-center
    .sc-2__block.py-20
      article
        p.text-2xl.leading-8 创远仪器提供多种测试设备和测量解决方案，覆盖从基站到用户，从实验室到现场的各种使用场景，向广大无线通信技术的研发人员及工程师提供支持。

</template>

<script>
export default {
  name: "communication-page"
}
</script>

<style lang="scss" scoped>
.sc-1 {
  &__block {
    width: min(1200px, 100%);
  }
}

.sc-2 {
  &__block {
    width: min(1200px, 100%);
  }
}
</style>
