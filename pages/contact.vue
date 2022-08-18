<template lang="pug">
.w-full.flex.flex-col.items-center.pb-20(v-if="pageData")
  .banner.w-full.flex.items-center.justify-center.relative
    img.z-0.object-center.object-cover.w-full.h-full(:src="basePath + pageData.url" width="100%" height="100%")
    .box.z-1.absolute
      h1.text-4xl.text-white(v-text="pageData.title")
  pre.cn-font.container.whitespace-pre-line.leading-8.desc.text-gray-500.text-lg.px-4(class="lg:px-20" v-text="pageData.content")
  .container.bg-gray-100.grid.grid-cols-1.gap-10.p-4(class="lg:grid-cols-3 lg:p-10" v-if="pageData.comp.length")
    .col-span-1.bg-white.p-4(class="lg:col-span-3")
      .font-bold.text-3xl.text-gray-600.py-10(v-text="pageData.comp[0].city")
      .text-lg.text-gray-500(v-text="pageData.comp[0].addr")
      .flex.text-lg.text-gray-500.flex-col(class="lg:flex-row")
        .flex-1 电话：{{ pageData.comp[0].phone }}
        .flex-1 传真：{{ pageData.comp[0].fox }}
      .flex.text-lg.text-gray-500.flex-col(class="lg:flex-row")
        .flex-1 热线电话：{{ pageData.comp[0].hotline }}
        .flex-1 邮箱：{{ pageData.comp[0].email }}
    .col-span-1.bg-white.p-4(v-for="comp in pageData.comp.filter((c, i) => i)" :key="comp.id")
      .font-bold.text-3xl.text-gray-600.py-5(v-text="comp.city")
      .font-bold.text-gray-500.text-xl(v-text="comp.city + comp.type")
      .text-lg.text-gray-500(v-text="comp.addr")
      .text-lg.text-gray-500 电话：{{ comp.phone }}
      .text-lg.text-gray-500 传真：{{ comp.fox }}
  .container.p-10(class="lg:p-4")
    Submit
</template>

<script>
import { mapActions } from 'vuex'

export default {
  async asyncData({ route, app }) {
    const { data } = await app.$axios.$get('/api.php/api/getMate', { params: { router: route.path } });
    return data
  },
  data() {
    return {
      db: {
        sex: 1,
        name: "",
        company: "",
        question: "",
      },
      pageData: ""
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords,
        },
      ]
    }
  },
  computed: {
    basePath() {
      return process.env.BASE_API
    }
  },
  async mounted() {
    this.pageData = await this.getContact();
  },
  methods: {
    ...mapActions(['getContact'])
  },
};
</script>

<style lang="scss" scoped>
$blue: #005fab;


.desc {
  color: #464646;
  margin: 60px 0 70px;

  p {
    margin-top: 28px;
  }
}

.contact {
  background: #f5f5f5;
  border-radius: 6px;
  padding: 78px 56px;

  .item {
    padding: 18px 26px;
    font-size: 18px;
    margin: 13px;
    color: #525252;
    line-height: 40px;
    background: #fff;

    .title {
      font-size: 32px;
      font-weight: bold;
      color: #6d6d6d;
      line-height: 28px;
      margin: 32px 0;
    }

    b {
      margin: 4px 0 14px;
    }
  }

  .item1 {
    padding: 30px 32px;
    font-size: 22px;
    line-height: 28px;

    .title {
      margin: 48px 0;
    }
  }
}

.form {
  padding: 68px 0;
  font-size: 20px;
  color: #252525;

  h2 {
    font-size: 32px;
  }

  >p {
    margin-top: 32px;
    font-size: 20px;
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
    min-height: 140px;

    label {
      display: block;
      color: #252525;
      margin: 25px 0;
    }

    select,
    input {
      width: 499px;
      height: 50px;
      background: #eeeeed;
      border: 1px solid #8a8a8a;
      text-indent: 10px;

      &::placeholder {
        color: #8a8a8a;
      }
    }

    textarea {
      margin-top: 20px;
      width: 1035px;
      height: 283px;
      background: #eeeeed;
      border: 1px solid #303131;
      padding: 20px 25px;
    }
  }
}
</style>
