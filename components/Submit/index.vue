<template lang="pug">
.form
  h2.text-2xl 需要更多信息
  p.text-lg.text-gray-500.mt-5 如果您有任何疑问或需要了解更多信息，请填写此表格，我们会尽快回复您。
  .grid.grid-cols-2.gap-x-20.gap-y-5
    .flex.items-center.col-span-2.my-10
      input.w-5.h-5.mr-5(type="radio" id="sex-1" v-model="form.sex" value="1")
      label.text-xl.mr-20(for="sex-1") 男
      input.w-5.h-5.mr-5(type="radio" id="sex-0" v-model="form.sex" value="0")
      label.text-xl(for="sex-0") 女
    .flex-1.fex
      label.text-xl(for="name") 姓 名
      input.h-14.mt-5.border.border-gray-500.w-full.bg-gray-100.transition.pl-5(id="name" class="hover:bg-white")
    .flex-1
      label.text-xl(for="company") 公司名称
      input.h-14.mt-5.border.border-gray-500.w-full.bg-gray-100.transition.pl-5(id="company" class="hover:bg-white")
    .flex-1
      label.text-xl(for="email") 公司邮箱
      input.h-14.mt-5.border.border-gray-500.w-full.bg-gray-100.transition.pl-5(id="email" class="hover:bg-white")
    .flex-1
      label.text-xl(for="city") 城市
      submit-select.mt-5(id="city"
      content-class="hover:bg-white h-14 border border-gray-500 w-full bg-gray-100 transition pl-5"
      :options="city")
    .flex-1
      label.text-xl(for="phone") 电话号码
      input.h-14.mt-5.border.border-gray-500.w-full.bg-gray-100.transition.pl-5(id="phone" class="hover:bg-white")
    .flex-1
      label.text-xl(for="ask") 询问
      submit-select.mt-5(id="ask"
      class="hover:bg-white"
      content-class="hover:bg-white h-14 border border-gray-500 w-full bg-gray-100 transition pl-5"
      :options="ask")
  .mt-10
    textarea.p-5.w-full.border.border-gray-500.bg-gray-100.transition.pl-5(placeholder="具体问题描述" class="hover:bg-white")
  .flex-1.mt-10
    h4.text-2xl 营销许可
    .w-full.my-5
      Checkbox
        span.text-gray-500 我希望通过电子邮件从创远仪器实体或子公司收到营销或广告信息（例如特价和折扣促销）。有关使用个人数据和撤回程序的更多详细信息，请参见隐私声明和营销许可。
    .flex.items-center.justify-end.mt-5
      button.bg-primary.px-5.py-2.text-white(class="hover:bg-blue-500") 获取信息
</template>
<script>
export default {
  name: 'Submit',
  data() {
    return {
      form: {
        sex: 1,
      },
      city: [
        {
          label: '上海',
          value: '001'
        },
        {
          label: '北京',
          value: '002'
        },
        {
          label: '杭州',
          value: '003'
        },
        {
          label: '武汉',
          value: '004'
        },
      ],
      ask: [
        {
          label: '想具体了解产品报价及指标',
          value: 'price'
        },
        {
          label: '需要售后指导及维修方面问询',
          value: 'service'
        }
      ]
    }
  }
}
</script>
