<template>
  <section class="sp w-full flex flex-col">
    <div class="carousels h-80">
      <img src="~/assets/img/bg_sunset.jpg" alt="" class="object-center object-cover w-full h-80">
    </div>

    <div class="sp-1 flex items-center justify-center">
      <div class="sp-1__block py-10">
        <h1 class="text-2xl font-bold">无线电监测</h1>
        <article>
          随着国家经济发展，无线电频谱资源的使用也越来越多，特别是 5G 的商用，使得频谱资源从原来的 3GHz 以下提升到 6GHz
          以下。国家无线电管理局也出台了新的无线电监测固定站的建设标准。随着新的标准执行，原有的旧有站点在监测频率范围、测向频率范围、信号分析、特殊信号解调、原子化服务、动环控制等领域进行升级改造后才能适应当下频谱管理的需求。
        </article>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'service-page'
}
</script>

<style lang="scss" scoped>
.sp {
  &-1 {
    &__block {
      width: 855px;
    }
  }
}
</style>
