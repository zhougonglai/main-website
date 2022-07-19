<template lang="pug">
.w-full.flex.flex-col.items-center.pb-20(v-cloak)
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
  .banner.w-full.h-480.flex.items-center.justify-center.relative
    img.absolute.inset-0.z-0.object-center.object-cover.h-full(:src="basePath + positions.url" width="100%" height="100%")
    .box.z-1
      h1.text-4xl.text-white 加入我们
  section.container.desc.py-20
    h1.text-4xl(v-text="positions.title")
    p.mt-10.text-2xl.leading-10(v-text="positions.content")
  section.container.flex.justify-center.items-center.add
    ion-icon(name="person-add-outline")
    div
      b(v-text="positions.total")
      p 职位招聘
  section.container.flex.justify-center.table.text-left
    .header.flex
      .flex-1.text-center
        ion-icon(name='star-outline')
      .flex-3
        | 职位名称
        //- span.selector.ml-2.leading-1.inline-grid.items-center
        //-   ion-icon(name="chevron-down-circle")
        //-   select(title="职位类型" v-model="pager.type" @change="changeType")
        //-     option(v-for="t in type" :key="t.id" :selected="t.id == pager.type" :value="t.id") {{ t.name }}
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
  name: 'recruit-page',
  async asyncData({ route, app }) {
    const { data } = await app.$axios.$get('/api.php/api/getMate', { params: { router: route.path } });
    return data
  },
  data() {
    return {
      pager: {
        category: 0, // 1: 业务 2: 研发 3: 职能
        pages: 1,
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
    ...mapState(['positions']),
    basePath() {
      return process.env.BASE_API
    }
  },
  mounted() {
    if (localStorage.star) {
      this.star = JSON.parse(localStorage.getItem('star'));
    }
    this.pagerChange(this.pager.pages);
  },
  methods: {
    ...mapActions(['getPositions']),
    pagerChange(pages) {
      this.pager.pages = pages
      this.getPositions(this.pager);
      window.scrollTo({ top: 1000, behavior: "smooth" })
    },
    changeCategory(category) {
      this.pager.category = category.target.value;
      this.pager.pages = 1
      this.getPositions(this.pager);
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

.container {
  width: 1200px;
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
