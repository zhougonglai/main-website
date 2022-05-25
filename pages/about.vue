<template lang="pug">
.w-full.flex.flex-col.items-center
  .banner.w-full.h-480
  section.container.desc.py-20
    h1.text-4xl 关于我们
    article.mt-10
      p.text-xl.leading-8.text-gray-500 上海创远仪器技术股份有限公司成立于　2005 年，2015 年在新三板挂牌（831961），是一家自主研发射频通信测试仪器和提供整体测试解决方案的专业仪器仪表公司。
      hr.my-10
      p.text-xl.leading-8.text-gray-500 重点专注于无线通信网络运营测试、无线电监测和北斗导航测试、无线通信智能制造测试等三个方向，是我国高端无线通信测试仪器行业的代表性企业。自 TD-SCDMA 时代伊始，创远仪器便积极参与中国自主知识产权移动通信标准和产业发展，在 TD-LTE 时代更是取得丰硕成果，多款产品获得广泛商用。2017 年 1 月与中国移动、华为、中兴、展讯等 14 家企业共同荣获国家科学技术进步特等奖。
  .banner2
  section.w-full.flex.flex-col.items-center
    .container
      h1.text-4xl 公司战略
      .strategy.relative.flex.flex-col.items-center.justify-between.p-10.text-primary
        .step-title.text-7xl.text-blue.mt-0.font-bold 1+3
        .step.step-1.absolute.flex.flex-col.items-center.justify-center
          .step-icon
            ion-icon(name="logo-facebook")
          label.mt-5 无线通信测试
        .step.step-2.absolute.flex.flex-col.items-center.justify-center
          .step-icon
            ion-icon(name="logo-google")
          label.mt-5 车联网测试
        .step.step-3.absolute.flex.flex-col.items-center.justify-center
          .step-icon
            ion-icon(name="logo-alipay")
          label.mt-5 无线通信设备
        img(src="@/assets/img/about/state.svg" width="775" height="300")
  section.w-full.flex.flex-col.items-center.bg-white.relative
    .bg-gray-100.absolute.z-0.inset-x-0.bottom-0.h-60
    .container.py-10.z-10
      h1.text-4xl 核心技术
      .flex.justify-center.mt-10.gap-x-5
        .card.cursor-pointer.border-b-2.border-white.bg-white(class="hover:border-blue-300")
          .card-cover
            img.object-center.object-cover(src="https://img01.yzcdn.cn/vant/cat.jpeg")
          .card-content.p-5
            .card-title.text-xl 射频微波电路
            .card-desc.mt-2 设计及制造
        .card.cursor-pointer.border-b-2.border-white.bg-white(class="hover:border-blue-300")
          .card-cover
            img.object-center.object-cover(src="https://img01.yzcdn.cn/vant/cat.jpeg")
          .card-content.p-5
            .card-title.text-xl 射频微波电路
            .card-desc.mt-2 设计及制造
        .card.cursor-pointer.border-b-2.border-white.bg-white(class="hover:border-blue-300")
          .card-cover
            img.object-center.object-cover(src="https://img01.yzcdn.cn/vant/cat.jpeg")
          .card-content.p-5
            .card-title.text-xl 射频微波电路
            .card-desc.mt-2 设计及制造
        .card.cursor-pointer.border-b-2.border-white.bg-white(class="hover:border-blue-300")
          .card-cover
            img.object-center.object-cover(src="https://img01.yzcdn.cn/vant/cat.jpeg")
          .card-content.p-5
            .card-title.text-xl 射频微波电路
            .card-desc.mt-2 设计及制造

  section.w-full.flex.flex-col.items-center.desc4.relative.bg-gray-100.pb-20
    .bg-white.absolute.z-0.inset-x-0.h-40
    .container.py-20.z-10
      h2.text-4xl.mb-28 重点客户
      carousel-card.mt-10(v-for="(logo, i) in logos" size="4" :max-size="logo.length" :key="i" content-class="flex-1 mx-10")
        carousel-item(v-for="l in logo" :key="l.name" class="w-1/4")
          .flex.items-center.bg-white.justify-center.mx-2.h-28.hover-border-primary.border-b-2.border-gray-100.cursor-pointer
            ion-icon(:name="l.name")
</template>

<script>
import banner from '@/assets/constant/banner.json'

export default {
  name: "about-page",
  data() {
    return {
      banner,
      logos: [
        [
          {
            name: 'logo-alipay',
          },
          {
            name: 'logo-amazon',
          },
          {
            name: 'logo-amplify',
          },
          {
            name: 'logo-android',
          },
          {
            name: 'logo-angular',
          },
          {
            name: 'logo-apple',
          },
          {
            name: 'logo-apple-appstore',
          },
          {
            name: 'logo-apple-ar',
          },
        ],
        [
          {
            name: 'logo-behance',
          },
          {
            name: 'logo-bitbucket',
          },
          {
            name: 'logo-bitcoin',
          },
          {
            name: 'logo-buffer',
          },
          {
            name: 'logo-capacitor',
          },
          {
            name: 'logo-chrome',
          },
          {
            name: 'logo-closed-captioning',
          },
          {
            name: 'logo-codepen',
          },
        ],
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
$blue: #005fab;

.banner {
  background: url("../assets/img/bg_sunset.jpg") no-repeat center / cover;
}

.container {
  width: 1200px;
}

.banner2 {
  width: 1047px;
  height: 562px;
  margin: 84px 0;
  background: url("../assets/img/bg_sunset.jpg") no-repeat center / cover;
}

.strategy {
  min-height: 650px;

  .step {
    &-icon {
      width: 120px;
      height: 120px;
      font-size: 120px;
      line-height: 120px;
    }

    label {
      font-size: 24px;
    }

    &-1 {
      left: 180px;
      bottom: 400px;
    }

    &-2 {
      bottom: 150px;
    }

    &-3 {
      right: 180px;
      bottom: 400px;
    }
  }
}
</style>
