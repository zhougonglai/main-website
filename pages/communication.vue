<template lang="pug">
section.w-full
  .sc-1.flex.items-center.justify-center.bg-gradient-to-r.from-blue-300.to-red-300.h-480
    .sc-1__block.color-white
      h1.text-4xl.text-white 无线通信
      article.mt-5
        p.text-white.text-2xl.leading-relaxed 现如今无线通信技术遍布全球的每个角落，全世界无时无刻在互联互通。同时用户还在追求更快、更高效和更稳定的连接，推动通信技术的发展，加快无线技术创新的步伐。
  .sc-2.flex.items-center.justify-center
    .sc-2__block.py-20
      article
        p.text-2xl.leading-relaxed 创远仪器提供多种测试设备和测量解决方案，覆盖从基站到用户，从实验室到现场的各种使用场景，向广大无线通信技术的研发人员及工程师提供支持。
  .sc-3.flex.items-center.justify-center.relative
    .sc-3__bg.bg-gray-100.absolute.inset-x-0.bottom-0.top-80.z-0
    .sc-3__block.py-20
      h1.text-4xl 相关应用
      .grid.grid-cols-3.gap-5.mt-10
        .card.flex.flex-col.cursor-pointer.bg-white.border-b-2.border-white(
          class="hover:shadow hover:border-blue-300" v-for="(c, i) in communication" :key="i")
          .card-cover
            img.object-center.object-cover(:src="c.cover")
          .card-content.p-5
            h3.text-2xl.card-title(v-text="c.title")
            p.mt-3.card-desc.text-gray-500.leading-8(v-text="c.desc")
          .card-action.p-5
            button.card-btn.text-blue-500.flex.items-center(class="hover:text-blue-600")
              ion-icon.mr-2(name="arrow-forward-outline")
              | 更 多 信 息
  .sc-4.flex.items-center.justify-center
    .sc-4__block.flex.py-20
      .left.flex-1
        h1.text-4xl  丰富知识库
        p.mt-5.text-2xl 探索讨论各种无线通信主题的最新视频。
      .right.flex-1
        video(src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" controls)
  .sc-5.flex.items-center.justify-center.bg-gray-100
    .sc-5__block.flex.flex-col.py-20
      h1.text-4xl 推荐产品
      carousel-card.mt-10(size="3" :max-size="prod.length" content-class="flex overflow-hidden content")
        carousel-item(v-for="(p, i) in prod" :key="i" class="item flex-shrink-0")
          .card.flex.flex-col.bg-white.border-b-2.border-white(class="hover:shadow hover:border-blue-300")
            .card-cover
              img.object-center.object-cover.h-40(:src="p.cover")
            .card-content.p-5
              .card-title(v-text="p.title")
              .card-desc.my-5.text-gray-500.leading-6(v-text="p.desc")
              .card-action
                button.card-btn.text-blue-500.flex.items-center(class="hover:text-blue-600")
                  ion-icon.mr-2(name="arrow-forward-outline")
                  | 产品信息
  .sc-6.flex.items-center.justify-center
    .sc-6__block.flex.flex-col.py-20
      .form
        h2.text-2xl 需要更多信息
        p.text-lg.text-gray-500.mt-5 如果您有任何疑问或需要了解更多信息，请填写此表格，我们会尽快回复您。
        .row.radio.mt-10
          input(type="radio" id="sex-1" v-model="db.sex" value="1")
          label(for="sex-1") 男
          input(type="radio" id="sex-0" v-model="db.sex" value="0")
          label(for="sex-0") 女
        .field.flex
          .flex-1
            label 姓 名
            input(v-model="db.name")
          .flex-1
            label 公司名称
            input(v-model="db.company")
        .field.flex
          .flex-1
            label 公司邮箱
            input(v-model="db.name")
          .flex-1
            label 城市
            input(v-model="db.city")
        .field.flex
          .flex-1
            label 电话号码
            input(v-model="db.phone")
          .flex-1
            label 询问
            input(v-model="db.ask")
        .field
          textarea.p-5(v-model="db.desc" placeholder="具体问题描述")
        .flex-1.mt-10
          h4.text-2xl 营销许可
          .w-full.my-5
            Checkbox
              span.text-gray-500 我希望通过电子邮件从创远仪器实体或子公司
          .flex.items-center.justify-end.mt-5
            button.bg-primary.px-5.py-2.text-white 获取信息
</template>

<script>
import communication from '@/assets/constant/communication'
import prod from '@/assets/constant/prods'

export default {
  name: "communication-page",
  data() {
    return {
      communication,
      prod,
      db: {
        sex: 1,
        name: "",
        company: "",
        desc: "",
        city: "",
        phone: "",
        ask: "",
        status: false,
      },
    };
  },
  // components: { Checkbox }
}
</script>

<style lang="scss" scoped>
.sc-1 {
  &__block {
    width: min(800px, 100%);
  }
}

.sc-2 {
  &__block {
    width: min(800px, 100%);
  }
}

.sc-3 {
  &__block {
    width: min(1200px, 100%);
    z-index: 1;
  }
}

.sc-4 {
  &__block {
    width: min(1200px, 100%);
  }
}

.sc-5 {
  &__block::v-deep {
    width: min(1200px, 100%);

    .content {
      width: 1020px;
    }

    .item {
      width: 300px;
      margin-left: 40px;

      // &:nth-of-type(2n),
      // &:nth-of-type(3n) {
      // }
    }
  }
}

.sc-6 {
  &__block {
    width: min(1200px, 100%);
  }
}

.form {
  padding: 85px 0;
  font-size: 26px;
  color: #252525;

  h2 {
    font-size: 40px;
  }

  >p {
    margin-top: 40px;
    font-size: 26px;
    color: #626363;
  }

  .radio {
    input {
      height: 20px;
      width: 20px;
      margin-right: 15px;
    }

    label {
      margin-right: 85px;
    }
  }

  .field {
    min-height: 200px;

    label {
      display: block;
      color: #252525;
      margin: 25px 0;
    }

    input {
      width: 499px;
      height: 50px;
      background: #eeeeed;
      border: 1px solid #8a8a8a;
      text-indent: 10px;
    }

    textarea {
      margin-top: 20px;
      width: 100%;
      height: 283px;
      background: #eeeeed;
      border: 1px solid #303131;
    }
  }
}
</style>
