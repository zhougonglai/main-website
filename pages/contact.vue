<template lang="pug">
.w-full.flex.flex-col.items-center.pb-20
  .banner.w-full.h-480.flex.items-center.justify-center.relative
    img.absolute.z-0.object-center.object-cover.w-full.h-full(:src="basePath + pageData.url" width="100%" height="100%")
    .box.z-1
      h1.text-4xl.text-white(v-text="pageData.title")
  pre.cn-font.container.whitespace-pre-line.leading-8.desc.text-gray-500.text-lg(v-text="pageData.content")
  .contact
    .item.item1
      .title 总公司
      .row 上海市松江区高技路 205 弄 7 号 C 座
      .flex.row
        .flex-1 电话：021-6432 6888
        .flex-1 传真：021-6432 6777
      .flex
        .flex-1 热线电话：400-677-8077
        .flex-1 邮箱：info@transcom.net.cn
    .flex.row
      .flex-1.item
        .title 南京
        b 南京分公司
        .row 南京市江宁区秣周东路 9 号无线谷 A3 楼 3102 室
        .row 电话：025-84937849
        .row 传真：025-84937849-804
      .flex-1.item
        .title 成都
        b 成都分公司
        .row 四川省成都市高新区九兴大道 14 号凯乐国际 3 栋 403 室
        .row 电话：028-83227390
        .row 传真：028-85120797
      .flex-1.item
        .title 西安
        b 西安分公司
        .row 西安市高新区锦业一路 56 号研祥城市广场 B 座 2217 室
        .row 电话：029- 81028261
        .row
    .item
      .title 深圳
      b 深圳办事处
      .row 深圳市南山区桃园街道大学城创客小镇 17 栋 309-2 室
      .row 电话：13817170735
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

.banner {
  .box {
    width: 1123px;
  }
}

.container {
  width: 1200px;
}

.desc {
  width: 1123px;
  color: #464646;
  margin: 60px 0 70px;

  p {
    margin-top: 28px;
  }
}

.contact {
  width: 1248px;
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
  width: 1072px;
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
