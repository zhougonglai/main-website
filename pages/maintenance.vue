<template lang="pug">
section.w-full.flex.flex-col.pb-20
  .carousels.h-80
    img.object-center.object-cover.w-full.h-80(src="~/assets/img/bg_sunset.jpg")
  .sc-1.flex.items-center.justify-center
    .sc-1__block.py-20.flex.items-center.flex-col.justify-center
      h1.text-4xl.w-full 简介
      .grid.grid-cols-3.justify-center.my-20.justify-items-center
        .flex.flex-col
          ion-icon.text-blue-500(name="construct-sharp")
          .text-2xl.text-center.mt-5 维修
        .flex.flex-col
          ion-icon.text-blue-500(name="locate-sharp")
          .text-2xl.text-center.mt-5 校准
        .flex.flex-col
          ion-icon.text-blue-500(name="reload-sharp")
          .text-2xl.text-center.mt-5 升级
      article.text-gray-600
        p.text-lg 上海创远服务中心，是对本公司生产、销售的全部产品进行维修、校准、升级服务。
        p.text-lg.leading-8.mt-10 同时上海创远技术股份有限公司与美国BIRD公司合资成立的上海播德电子技术服务有限公司，是专门从事对所有在中国大陆境内销售的BIRD产品的维修，校准、升级服务。同时也是美国BIRD唯一指定的售后服务公司，且未指定任何其它代理公司。
      .products.bg-gray-100.flex.items-end.justify-center.gap-x-10.p-10.mt-80.w-full
        .card.flex.flex-col.cursor-pointer.border-b-2.border-gray-100(class="hover:shadow hover:border-blue-300")
          .card-cover
            img.object-center.object-cover(src="https://img01.yzcdn.cn/vant/cat.jpeg")
          .card-content.flex-1.p-5.bg-white.flex.flex-col
            h4.card-title.text-2xl.font-bold.flex.items-center
              ion-icon.mr-2(name="reload-sharp")
              | 升级服务
            p.card-desc.flex-1.leading-8.mt-5 创远公司开发的设备具备灵活的功能拓展空间，使您现有的设备具有可升级性不断适应发展要求，节约成本，减轻投资压力，提高使用效率。创远公司面向广大用户提供仪器功能升级服务，使仪器具有合理化和经济型的配置。
            .card-action
              button.card-btn.text-2xl.text-blue-500 了解详情
        .card.flex.flex-col.cursor-pointer.border-b-2.border-gray-100(class="hover:shadow hover:border-blue-300")
          .card-cover
            img.object-center.object-cover(src="https://img01.yzcdn.cn/vant/cat.jpeg")
          .card-content.flex-1.p-5.bg-white.flex.flex-col
            h4.card-title.text-2xl.font-bold.flex.items-center
              ion-icon.mr-2(name="locate-sharp")
              | 校准服务
            p.card-desc.flex-1.leading-8.mt-5 公司配置有专业的大功率校准仪器设备，为用户提供全面的计量解决方案。并且对所有BIRD产品进行校准服务。我们为您提供灵活的校准服务，根据客户要求可以安排现场校准。
            .card-action
              button.card-btn.text-2xl.text-blue-500 了解详情
  .sc-2.flex.items-center.justify-center
    .sc-2__block.py-20
      h1.text-4xl 送修仪器说明
      .products.bg-gray-100.flex.flex-col.justify-end.gap-x-10.p-10.mt-40.w-full
        .card.flex.cursor-pointer.shadow(class="hover:shadow-xl")
          .card-cover
            img.object-center.object-cover(src="https://img01.yzcdn.cn/vant/cat.jpeg")
          .card-content.flex-1.p-5.bg-white.flex.flex-col
            h4.text-2xl 维修简介
            p.leading-8.text-gray-500.mt-5 如果您送修的仪器仍在出厂保修期内，且仪器故障属于正常保修范围内，创远公司将承担维修费用。
        p.mt-10.leading-8.text-gray-500 如果您送修的仪器已超过保修期，或仪器虽在保修期但故障属于人为原因造成，创远公司将对仪器进行初检和维修费用估算，并将维修费用报价单传真给您进行确认。如您同意，请在报价单上签字盖章后回传，我们会立即进行维修工作，直至修复仪器。维修完成后，我们将用《付款通知》通知您付款取机事宜。在维修费用报价确认之前，用户有权中止维修。在这种情况下，用户需支付初检费用及仪器往返的运输/保险费用。
  .sc-3.flex.items-center.justify-center
    .sc-3__block.py-20.flex.items-center.justify-center.flex-col
      h1.text-4xl.w-full 文档下载区
      .grid.grid-cols-2.justify-center.my-20.justify-items-center
        .flex.flex-col.text-center.items-center
          ion-icon.text-blue-500(name="layers")
          .text-2xl.mt-5 服务流程
        .flex.flex-col.text-center.items-center
          ion-icon.text-blue-500(name="book")
          .text-2xl.mt-5 维修、校准协议书
      h1.text-4xl.w-full FAQ
      article.bg-gray-100.w-full.py-10.px-5.mt-10.text-gray-500.text-lg
        p 在填写《维修/校准服务协议书》时，请尽量详细地描述仪器故障或服务要求，若有必要请另附说明。它将有助于维修工程师的检修工作。
        p.mt-10 注意包装：在您送修仪器过程中，请加倍注意包装质量。长途运输仪器务必打好包装，垫实防振材料，尽量用泡沫塑料，避免不必要的损失。


</template>
<script>
export default {
  name: 'fixer-page'
}
</script>
<style lang="scss" scoped>
.sc-1 {
  &__block {
    width: 1200px;

    .grid {
      width: 900px;

      ion-icon {
        font-size: 100px;
      }
    }

    .products {
      height: 400px;
    }

    .card {
      height: 600px;
      width: 450px;

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

.sc-2 {
  &__block {
    width: 1200px;

    .products {
      height: 350px;
    }

    .card {
      height: 250px;

      &-cover {
        width: 560px;

        img {
          width: inherit;
          height: 250px;
        }
      }

      &:hover {
        .card-content {
          border-bottom: 2px solid rgb(147, 197, 253);
        }
      }
    }
  }
}

.sc-3 {
  &__block {
    width: 1200px;

    .grid {
      .flex {
        width: 300px;

        ion-icon {
          font-size: 100px;
        }
      }
    }
  }
}
</style>
