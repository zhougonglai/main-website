<template lang="pug">
.w-full.flex.flex-col.items-center.pb-20
  Dialog(ref="dialog" class="w-4/5")
    table.m-5.border-collapse.border.border-slate-400(v-if="position" )
      table-body.text-gray-500
        tr.flex
          td.w-40.p-5.border.border-slate-300 性别
          td.flex-1.p-5.border.border-slate-300(v-text="sex[position.sex]")
        tr.flex
          td.w-40.p-5.border.border-slate-300 年龄
          td.flex-1.p-5.border.border-slate-300(v-text="position.age")
        tr.flex
          td.w-40.p-5.border.border-slate-300 外语要求
          td.flex-1.p-5.border.border-slate-300(v-text="position.eng")
        tr.flex
          td.w-40.p-5.border.border-slate-300 职责
          td.flex-1.p-5.border.border-slate-300
            pre(v-text="position.duty")
        tr.flex
          td.w-40.p-5.border.border-slate-300 要求
          td.flex-1.p-5.border.border-slate-300
            pre(v-text="position.requirement")
  .banner.w-full.h-480.flex.items-center.justify-center.h-480.bg-gradient-to-r.from-blue-300.to-red-300
    .box
      h1.text-4xl.text-white 加入我们
  section.container.desc
    h5 为什么要加入我们
    .content 上海创远仪器技术股份有限公司成立于 2005 年，总部位于上海 G60 科创走廊 5G 产业基地，2015年在新三板挂牌（831961），2020年7月作为首批企业成功晋级新三板精选层，是一家自主研发射频通信测试仪器和提供整体测试解决方案的专业仪器仪表公司。
  section.container.flex.justify-center.items-center.add
    ion-icon(name="person-add-outline")
    div(v-if="positions")
      b(v-text="positions.position.length * positions.totalPage")
      p 职位招聘
  section.container.flex.justify-center.table.text-left
    .header.flex
      .flex-1.text-center
        ion-icon(name='star-outline')
      .flex-3
        | 职位名称
        span.selector.ml-2.leading-1.inline-grid.items-center
          ion-icon(name="chevron-down-circle")
          select(title="职位类型" v-model="pager.type" @change="changeType")
            option(v-for="t in type" :key="t.id" :selected="t.id == pager.type" :value="t.id") {{ t.name }}
      .flex-1.text-center
        | 职能范围
        span.ml-2.leading-1.inline-grid.items-center.selector
          ion-icon(name="chevron-down-circle")
          select(title="职能类型" v-model="pager.category" @change="changeCategory")
            option(v-for="c in category" :key="c.id" :selected="c.id == pager.category" :value="c.id") {{ c.name }}
      .flex-1.text-center
        | 学历水平
      .flex-2.text-right.pr-5 城市
    .item.flex.cursor-pointer(v-for="position, i in positions.position" :key="i")
      .flex-1.text-center.star(@click="startPosition(position)")
        ion-icon(name='star' v-if="star.indexOf(position.id) > -1")
        ion-icon(name='star-outline' v-else)
      .flex-3.jobname(@click="showModal(position)" v-text="position.title")
      .flex-1.text-center(v-text="category.find(item => item.id == position.category).name")
      .flex-1.text-center(v-text="position.education")
      .flex-2.text-right.pr-5(v-text="position.city")
  section.container.flex.justify-center.mt-10(v-if="positions.totalPage")
    SubmitPagination(:length="positions.totalPage" :value="pager.pages" @change="pagerChange")
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'join-us-page',
  data() {
    return {
      pager: {
        category: 0, // 1: 业务 2: 研发 3: 职能
        pages: 1,
        type: 2, // 1: 校招 2: 社招
      },
      category: [
        {
          id: 0,
          name: '不限',
        },
        {
          "id": 1,
          "name": "业务类"
        },
        {
          "id": 2,
          "name": "研发类"
        },
        {
          "id": 3,
          "name": "职能类"
        }
      ],
      type: [
        {
          "id": 1,
          "name": "校招"
        },
        {
          "id": 2,
          "name": "社招"
        },
      ],
      sex: {
        1: '男',
        2: '女',
        3: '不限'
      },
      star: [],
      position: '',
    };
  },
  computed: {
    ...mapState(['positions'])
  },
  mounted() {
    if (localStorage.star) {
      this.star = JSON.parse(localStorage.getItem('star'));
    }
    this.getPosition(this.pager);
  },
  methods: {
    ...mapActions(['getPosition']),
    pagerChange(pages) {
      this.pager.pages = pages
      this.getPosition(this.pager);
      window.scrollTo({ top: 1000, behavior: "smooth" })
    },
    changeType(type) {
      this.pager.type = type.target.value;
      this.getPosition(this.pager);
      window.scrollTo({ top: 1000, behavior: "smooth" })
    },
    changeCategory(category) {
      this.pager.category = category.target.value;
      this.getPosition(this.pager);
      window.scrollTo({ top: 1000, behavior: "smooth" })
    },
    startPosition(position) {
      if (this.star.includes(position.id)) {
        this.star = this.star.filter(item => item != position.id)
      } else {
        this.star.push(position.id)
        this.star = this.star;
      }
      localStorage.setItem('star', JSON.stringify(this.star))
    },
    showModal(position) {
      this.position = position
      this.$refs.dialog.showModal();
    }
  }
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

.desc {
  padding: 0 58px;

  h5 {
    margin-top: 100px;
    font-size: 36px;
    font-weight: 400;
    color: #262626;
  }

  .content {
    margin-top: 75px;
    font-size: 24px;
    color: #585858;
    line-height: 42px;
  }
}

.add {
  margin: 90px 0 40px;

  ion-icon {
    color: $blue;
    font-size: 85px;
    margin-right: 15px;
  }

  color: #666;
  line-height: 1;

  b {
    font-size: 72px;
  }

  p {
    font-size: 24px;
  }
}

.table {
  .flex-2 {
    flex: 2;
  }

  .flex-3 {
    flex: 3;
  }

  .flex-4 {
    flex: 4;
  }

  font-size: 18px;
  line-height: 74px;

  .header {
    background: #fbfbfb;
    border: 1px solid #626262;
  }

  .item {
    color: #666666;

    &:nth-child(even) {
      background: #fbfbfb;
    }

    &:hover {
      background: #efefef;
    }
  }

  .star ion-icon {
    color: $blue;
  }

  .jobname {
    color: $blue;
  }

  .selector {
    grid: [stack] 3ch / [stack] 3ch;
    place-items: center;

    &>* {
      grid-area: stack;
    }

    select {
      inline-size: 100%;
      block-size: 100%;
      opacity: .01;
      font-size: min(100%, 16px);
    }
  }

}
</style>
