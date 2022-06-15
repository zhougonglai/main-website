<template lang="pug">
.w-full.flex.flex-col.items-center.pb-20(v-cloak)
  .w-full.h-480.flex.items-center.justify-center.h-480.bg-gradient-to-r.from-blue-300.to-red-300.relative
    img.z-0.absolute.inset-0.w-full.h-full.object-center.object-cover(:src="$root.basePath + pageData.cover_path" height="100%" width="100%")
    .con.z-1
      h1.text-4xl.text-white(v-text="pageData.title")
      p.mt-5.text-white.text-xl(v-text="pageData.title1")
  section.w-full.flex.flex-col.items-center.desc2
    .con.text-4xl.py-20.pl-24 发展历程
    .list
      .flex.items-center.item(v-for="h in pageData.data" :key="h.id")
        .year(v-text="h.name")
        .info(v-html="h.content")
        img.img(:src="$root.basePath + h.url")
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "about-page",
  data() {
    return {
      pageData: ''
    };
  },
  async mounted() {
    this.pageData = await this.getHistory();
  },
  methods: {
    ...mapActions(['getHistory'])
  }
};
</script>

<style lang="scss" scoped>
$blue: #005fab;

.con {
  width: 1200px;
}

.box {
  width: 1123px;
}

.container {
  width: 1200px;
}

.desc {
  width: 1047px;

  h5 {
    margin-top: 100px;
    font-size: 36px;
    font-weight: 400;
    color: #262626;
  }

  hr {
    border-bottom: 2px solid #666666;
    margin: 30px 0;
  }

  .content {
    margin-top: 43px;
    font-size: 24px;
    color: #585858;
    line-height: 42px;
  }
}

.banner2 {
  width: 1047px;
  height: 562px;
  margin: 84px 0;
  background: url("../assets/img/bg_sunset.jpg") no-repeat center / cover;
}

.title {
  width: 1200px;
  color: #222222;
  padding: 100px 0 80px 140px;
  text-align: left;
}

.list {
  width: 1200px;
  padding-bottom: 100px;

  .item {
    padding: 0 90px;
    height: 241px;
    background: #eaecec;

    .year {
      font-size: 77px;
      font-family: Arial;
      color: #000000;
      margin-right: 60px;
    }

    .info {
      flex: 1;
      font-size: 18px;
      color: #1a1a1a;

      p {
        margin: 14px 0;
      }
    }

    .img {
      width: 280px;
      height: 177px;
      margin-right: 16px;
      box-shadow: 10px 10px #c2c2c2;
    }

    &:nth-child(even) {
      background: #b5b9b9;

      .year {
        color: #c70008;
      }

      .img {
        box-shadow: 10px 10px #eaecec;
      }
    }
  }
}
</style>
