<template lang="pug">
section.w-full.flex.flex-col.items-center.justify-center
  Dialog(ref="dialog" modal-mode="mega")
    img(:src="cover.src")
  .sc-1.w-full.flex.flex-col.items-center.py-10
    .sc-1__block
      h1.text-2xl T5260C系列矢量网络分析仪
      .flex.w-full.my-5.gap-x-5
        .flex.flex-col.flex-1
          .relative.box
            img.object-center.object-cover.overflow-hidden(:src="cover.src" width="600" height="400")
            ion-icon.absolute.cursor-pointer.right-2.bottom-2.text-blue-500(name="expand-sharp" size="large" @click="openModal")
          CarouselBox.py-2(
            :items="banner"
            item-class="h-20 item"
            content-class="flex content overflow-hidden"
            @select="updateCover")
        .flex.flex-col.flex-1
          h3.text-2xl 关键特性
          ul.mt-5.leading-8.flex.flex-col.gap-y-4
            li.pl-4.border-l-4.border-gray-300 频率范围：300kHz~8.5GHz
            li.pl-4.border-l-4.border-gray-300 大动态范围：＞ 125 dB @(IFBW=10 Hz )，typ.130 dB
            li.pl-4.border-l-4.border-gray-300 低迹线噪声：2 mdB rms @(IFBW=3 kHz )
            li.pl-4.border-l-4.border-gray-300 测量速度快：42 μs/point @(IFBW=500 kHz)
            li.pl-4.border-l-4.border-gray-300 高等效方向性：＞ 45 dB
            li.pl-4.border-l-4.border-gray-300 支持远程控制： LAN
      .flex.gap-10
        button.flex.items-center.text-blue-500.gap-x-2
          ion-icon(name="document-text-outline" size='large')
          | Datasheet
        button.flex.items-center.text-blue-500.gap-x-2
          ion-icon(name="document-text-outline" size="large")
          | 用户手册
        button.flex.items-center.text-blue-500.gap-x-2
          ion-icon(name="document-text-outline" size="large")
          | 解决方案
      h1.text-2xl.mt-10 技术规范
      .tabs.my-10
        .tab-bar.flex.leading-10.border-b.border-gray-300
          .tab.flex-1.pl-5 产品特色及应用
          .tab.flex-1.pl-5 技术指标
          .tab.flex-1.pl-5 配置清单
          .tab.flex-1.pl-5 面板说明
        .tab-content.p-5
          template(v-if="tabActive === 0")
            h2.text-lg 产品特色及应用
            ul
              li 多种分析功能（如时域分析、夹具仿真等）
              li 支持标准 VISA 通讯协议
              li 简单快捷的人机操作界面
</template>
<script>
import productions from '@/assets/constant/productions.json';
import banner from '@/assets/constant/banner.json';
import Dialog from '@/components/Dialog/index.vue';

export default {
  name: "production-detail-page",
  comments: {
    Dialog
  },
  data() {
    return {
      productions: productions.filter((p, i) => i),
      show: false,
      banner,
      cover: banner[0],
      tabActive: 0,
    };
  },
  mounted() {
    this.$store.commit("updateLea", {
      path: "/production/t526c",
      meta: {
        title: "T5260C 485矢量网络分析仪",
        productions: productions.filter((p, i) => i)
      }
    });
  },
  beforeDestroy() {
    this.$store.commit("updateLea", "");
  },
  methods: {
    updateCover(item) {
      this.cover = item;
    },
    openModal() {
      this.$refs.dialog.showModal()
    },
  },
  components: { Dialog, Dialog }
}
</script>

<style lang="scss" scoped>
nav {
  width: 1200px;
}

.sc-1 {
  &__block {
    width: 1200px;

    .box {
      height: 400px;

      img {
        width: 100%;
        height: inherit;
      }
    }

    .relative::v-deep {

      .content {
        width: 520px;
      }

      .item {
        flex: 1 0 160px;

        img {
          width: 100%;
          height: 100%;
        }

        +.item {
          margin-left: 20px;
        }
      }
    }
  }
}

.tab {
  &s {}

}
</style>
