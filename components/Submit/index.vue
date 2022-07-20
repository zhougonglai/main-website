<template lang="pug">
form.form(ref="form" @submit.prevent="submit")
  h2.text-2xl 需要更多信息
  p.text-lg.text-gray-500.mt-5 如果您有任何疑问或需要了解更多信息，请填写此表格，我们会尽快回复您。
  .grid.grid-cols-1.gap-x-20.gap-y-5(class="lg:grid-cols-2")
    .flex.items-center.col-span-1.my-10(class="lg:col-span-1")
      input.w-5.h-5.mr-5(type="radio" id="sex-1" v-model="form.sex" value="男")
      label.text-xl.mr-20(for="sex-1") 男
      input.w-5.h-5.mr-5(type="radio" id="sex-0" v-model="form.sex" value="女")
      label.text-xl(for="sex-0") 女
    .flex-1.fex
      label.text-xl(for="name") 姓 名
      input.h-14.mt-5.border.border-gray-500.w-full.bg-gray-100.transition.pl-5(id="name" v-model="form.name" class="hover:bg-white" required)
    .flex-1
      label.text-xl(for="company") 公司名称
      input.h-14.mt-5.border.border-gray-500.w-full.bg-gray-100.transition.pl-5(id="company" v-model="form.company" class="hover:bg-white" required)
    .flex-1
      label.text-xl(for="email") 公司邮箱
      input.h-14.mt-5.border.border-gray-500.w-full.bg-gray-100.transition.pl-5(id="email" type="text" autocomplete="username email" v-model="form.email" class="hover:bg-white" required)
    .flex-1
      label.text-xl(for="city") 城市
      submit-select.mt-5(id="city"
      v-model="form.city"
      content-class="hover:bg-white h-14 border border-gray-500 w-full bg-gray-100 transition pl-5"
      :options="city")
    .flex-1
      label.text-xl(for="phone") 电话号码
      input.h-14.mt-5.border.border-gray-500.w-full.bg-gray-100.transition.pl-5(id="phone" v-model.number="form.phone" type="number" class="hover:bg-white")
    .flex-1
      label.text-xl(for="ask") 询问
      submit-select.mt-5(id="ask"
      v-model="form.question"
      class="hover:bg-white"
      content-class="hover:bg-white h-14 border border-gray-500 w-full bg-gray-100 transition pl-5"
      :options="question")
  .mt-10
    textarea.p-5.w-full.border.border-gray-500.bg-gray-100.transition.pl-5(
      v-model="form.description"
      placeholder="具体问题描述" class="hover:bg-white")
  .flex-1.mt-10
    h4.text-2xl 营销许可
    .w-full.my-5
      Checkbox
        span.text-gray-500 我希望通过电子邮件从创远仪器实体或子公司收到营销或广告信息（例如特价和折扣促销）。有关使用个人数据和撤回程序的更多详细信息，请参见隐私声明和营销许可。
    .flex.items-center.justify-end.mt-5
      button.bg-primary.px-5.py-2.text-white.inline-flex.items-center(class="hover:bg-blue-500" :disabled="loading" :class="{ 'cursor-not-allowed': loading }")
        svg.animate-spin.-ml-1.mr-3.h-5.w-5.text-white(fill="none" viewBox="0 0 24 24" v-if="loading")
          circle.opacity-25(cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4")
          path.opacity-75(fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z")
        | 获取信息
</template>
<script>
import Cookies from 'js-cookie'

export default {
  name: 'Submit',
  data() {
    return {
      form: {
        sex: '男',
        name: '',
        company: '',
        email: '',
        city: '',
        phone: '',
        question: '',
        description: '',
      },
      loading: false,
      city: [],
      question: [],
    }
  },
  mounted() {
    this.getCity();
    this.getQuestion();
  },
  methods: {
    async getCity() {
      const { data } = await this.$axios.get('/api.php/api/getCity').then(res => res.data)
      console.log(data)
      this.city = data.map(item => ({
        label: item.city,
        value: item.city
      }));
    },
    async getQuestion() {
      const { data } = await this.$axios.get('/api.php/api/getQuestion').then(res => res.data)
      this.question = data.map(item => ({
        label: item.title,
        value: item.title
      }));
    },
    submit() {
      this.loading = true;
      this.$emit('submit', this.form)
      this.$axios.post('/api.php/api/postFormData', this.form).then(res => res.data).then(({ data }) => {
        this.loading = false;
        this.$root.$emit('toast', data.msg);
        Cookies.set('token', data.token, { expires: new Date(data.expire * 1000) })
        this.$refs.form.reset();
        this.$emit('post-end', data);
      });
    }
  }
}
</script>
