<template>
  <section class="sp w-full flex flex-col">
    <div class="carousels h-80">
      <img src="~/assets/img/bg_sunset.jpg" alt="" class="object-center object-cover w-full h-80">
    </div>

    <div class="sp-1 flex items-center justify-center">
      <div class="sp-1__block py-20">
        <h1 class="text-4xl font-bold">无线电监测</h1>
        <article class="mt-5">
          随着国家经济发展，无线电频谱资源的使用也越来越多，特别是 5G 的商用，使得频谱资源从原来的 3GHz 以下提升到 6GHz
          以下。国家无线电管理局也出台了新的无线电监测固定站的建设标准。随着新的标准执行，原有的旧有站点在监测频率范围、测向频率范围、信号分析、特殊信号解调、原子化服务、动环控制等领域进行升级改造后才能适应当下频谱管理的需求。
        </article>
      </div>
    </div>

    <div class="sp-2 flex items-center justify-center bg-gray-100">
      <div class="sp-2__block py-20 flex">
        <div class="left flex items-center justify-center flex-1">
          <img src="https://img01.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="right px-10 flex-1 leading-8">
          创远仪器经过多年的积累，已经承接与实施了多个大型固定站无线电监测测向站的新建工作，目前创远仪器具备按照国家标准划分的一、二、三、四类站建设能力。可以实现固定站 9kHz-18GHz 的频谱监测能力，实现
          20MHz-8GHz 的空间谱测向能力；同时可以实现旧有站点的频谱监测能力提升、测向能力提升；升级新增信号分析能力、原子化封装能力、短波监测能力、水上航空解调能力、动环系统等。
        </div>
      </div>
    </div>

    <div class="sp-3 flex items-center justify-center">
      <div class="sp-3__block py-20">
        <h1 class="text-4xl font-bold">相关解决方案</h1>
        <div class="resolve bg-gray-100 flex items-end justify-center gap-x-10 mt-80 pb-10">
          <div class="card flex flex-col">
            <div class="card-cover">
              <img class="object-center object-cover" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="card-content bg-white flex-1 p-5">
              <div class="card-title text-2xl font-bold">固定站新建与改造</div>
              <p class="card-desc leading-8 mt-10">
                创远仪器经过多年的积累，已经承接与实施了多个大型固定站无线电监测测向站的新建工作，目前创远仪器具备按照国家标准划分的一、二、三、四类站建设能力。
              </p>
            </div>
          </div>

          <div class="card flex flex-col">
            <div class="card-cover">
              <img class="object-center object-cover" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="card-content bg-white flex-1 pt-5 px-5">
              <div class="card-title text-2xl font-bold">车载监测测向系统</div>
              <p class="card-desc leading-8 mt-10">
                本方案是基于主流轻型卡车或SUV等高承载能力底盘，提供一批多通道无线电监测测向与车载附属设备设备供用户选择。通过改车集成，可实现无线电信号监测、测向、单站移动定位、专用业务信号解码等功能，适应日常无线电监管的工作需要。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sp-4 flex items-center justify-center">
      <div class="sp-4__block py-20">
        <h1 class="text-4xl font-bold">相关产品</h1>
        <div class="products bg-gray-100 flex items-end justify-center gap-x-10 p-10 mt-10">
          <div class="card flex flex-col">
            <div class="card-cover">
              <img class="object-center object-cover" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="card-content flex-1 pt-5 px-5">
              <h5 class="card-title text-2xl font-bold">ME208数字宽带接收机</h5>
              <p class="card-desc leading-8 mt-5">鹰眼ME208数字宽带接收机是创远仪器经过多年技术积累，充分利用当代射频接收技术和高速数字信号处理技术研制的中等性能无线电接收机</p>
            </div>
          </div>

          <div class="card flex flex-col">
            <div class="card-cover">
              <img class="object-center object-cover" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="card-content flex-1 pt-5 px-5">
              <h5 class="card-title text-2xl font-bold">ME208数字宽带接收机</h5>
              <p class="card-desc leading-8 mt-5">鹰眼ME208数字宽带接收机是创远仪器经过多年技术积累，充分利用当代射频接收技术和高速数字信号处理技术研制的中等性能无线电接收机</p>
            </div>
          </div>

          <div class="card flex flex-col">
            <div class="card-cover">
              <img class="object-center object-cover" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="card-content flex-1 pt-5 px-5">
              <h5 class="card-title text-2xl font-bold">ME208数字宽带接收机</h5>
              <p class="card-desc leading-8 mt-5">鹰眼ME208数字宽带接收机是创远仪器经过多年技术积累，充分利用当代射频接收技术和高速数字信号处理技术研制的中等性能无线电接收机</p>
            </div>
          </div>


        </div>
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

  &-2 {
    &__block {
      width: 1200px;

      .left {
        max-width: 600px;

        img {
          max-height: 320px;
        }
      }
    }
  }

  &-3 {
    &__block {
      width: 1200px;

      .resolve {
        height: 425px;
      }

      .card {
        width: 450px;
        height: 600px;

        &-cover {
          width: 100%;
          max-height: 250px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        &-desc {
          color: var(--color);
        }
      }
    }
  }

  &-4 {
    &__block {
      width: 1200px;

      .products {}

      .card {
        width: 350px;

        &-cover {
          width: 100%;

          img {
            width: 100%;
            max-height: 220px;
          }
        }

        &-desc {
          color: var(--color);
        }
      }
    }
  }
}
</style>
