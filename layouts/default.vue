<template lang="pug">
main.flex.flex-col.items-center
  Dialog.search-dialog.rounded-xl.overflow-hidden.h-full(ref="search")
    .p-5.flex.flex-col.overflow-hidden
      .dialog-header.rounded.h-16.relative.border-gray-500.border(class="hover:border-blue-500 focus-visible:ring")
        .search-icon.w-10.h-10.flex.items-center.justify-center.absolute.left-5(class="top-1/2 -translate-y-1/2")
          svg.animate-spin.-ml-1.mr-3.h-5.w-5.text-blue-500(fill="none" viewBox="0 0 24 24" v-if="search.loading")
            circle.opacity-25(cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4")
            path.opacity-75(fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z")
          ion-icon.text-blue-500(v-cloak v-else name="search" size="large" )
        input.search.rounded.w-full.h-full.pl-16(placeholder="搜索" v-model="search.input" @input="searchWord")
      .dialog-content.w-full.flex-1.overflow-y-auto
        template(v-if="search.results && search.results.apply && search.results.apply.length")
          h5.mt-5.text-xl.text-blue-500 应用
          ul.search-list.grid.gap-y-2.mt-5
            li.search-result.rounded.bg-blue-100.text-blue-500(v-for="apply in search.results.apply" :key="apply.id"
            class="hover:bg-blue-500 hover:text-white" )
              nuxt-link.px-5.h-12.flex.items-center(:to="`/apply/${apply.id}`")
                .flex-1(v-text="apply.name")
                ion-icon(name="send-sharp")
        template(v-if="search.results && search.results.product && search.results.product.length")
          h5.mt-5.text-xl.text-blue-500.mt-5 产品
          ul.search-list.grid.gap-y-2.mt-5
            li.search-result.rounded.bg-blue-100.text-blue-500(v-for="product in search.results.product" :key="product.id"
            class="hover:bg-blue-500 hover:text-white" )
              nuxt-link.px-5.h-12.flex.items-center(:to="`/prod/${product.category_id}/detail/${product.id}`")
                .flex-1(v-text="product.name")
                ion-icon(name="send-sharp")
        template(v-if="search.results && search.results.solution && search.results.solution.length")
          h5.mt-5.text-xl.text-blue-500.mt-5 解决方案
          ul.search-list.grid.gap-y-2.mt-5
            li.search-result.rounded.bg-blue-100.text-blue-500(v-for="solution in search.results.solution" :key="solution.id"
            class="hover:bg-blue-500 hover:text-white" )
              nuxt-link.px-5.h-12.flex.items-center(:to="`/apply/${solution.category_id}/solution/${solution.id}`")
                .flex-1(v-text="solution.name")
                ion-icon(name="send-sharp")
        template(v-if="!search.results")
          img(src="~/assets/img/search-empty.webp")

  header.flex
    nuxt-link.logo.flex.items-center.py-2(to='/')
      img(:src='$root.basePath + info.title' alt="创远仪器" width="300")
    .flex-1
    .nav-list.flex.justify-center.items-center
      nuxt-link(to="/contact" class="hover:text-blue-500") 联系我们
      a.mx-5(type='button' target="_blank" href="https://transcominstruments.tmall.com/")
        ion-icon(v-cloak name="cart")
      button(type='button' @click="searcher")
        ion-icon(v-cloak name="search")
  .bg-gray-100.w-full.flex.justify-center
    nav.menus.flex.items-center.leading-10.relative(ref="menus" v-if="cate.length" v-cloak)
      .nav-link.px-8.py-4.cursor-pointer.text-lg.text-center(
        v-for="(menu, i) in cate.filter(menu => menu.display).sort((a, b) => a.sort - b.sort)"
        @click="selectMenu(menu, i)"
        @mouseenter="selectMenu(menu, i)"
        v-text="menu.title"
        :class="{ active: activeNav ? i == activeNav.tab : false, 'pl-0': !i }"
        :key="menu.id")
      transition(
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0")
        .nav-panel.absolute.top-20.-left-5.right-0.z-10.bg-white(v-if="Number.isFinite(active)")
          .nav-panel__icon(:style="{ left: stageIndex[active] + 'px' }")
          .nav-panel-content.flex
            .nav-panel-list.flex.flex-col.w-60.p-5
              template(v-if="activeLink.child.filter(m => m.router).length || activeLink.router")
                nuxt-link.nav-panel-list-item.leading-8.flex.items-center.text-left.cursor-pointer(
                  v-for="(item, i) in activeLink.child.filter(menu => menu.display).sort((a, b) => a.sort - b.sort)"
                  :to="item.router"
                  :key="item.id")
                  .flex-1(v-text="item.title")
                  ion-icon(name="chevron-forward" v-show="i === subActive")
              template(v-else)
                button.nav-panel-list-item.leading-8.flex.items-center.text-left.cursor-pointer(
                  v-for="(item, i) in activeLink.child.filter(menu => menu.display).sort((a, b) => a.sort - b.sort)"
                  :class="{ active: activeNav ? item.id == subActive : false }"
                  @click="selectSubmenu(item, i)"
                  :key="item.id")
                  .flex-1(v-text="item.title")
                  ion-icon(name="chevron-forward" v-show="i === subActive")
            .nav-panel-list.flex.flex-col.w-60.p-5(v-if="Number.isFinite(subActive)")
              nuxt-link.nav-panel-list-item.leading-8.text-left.cursor-pointer(
                v-for="(item, i) in subMenus.child.filter(menu => menu.display).sort((a, b) => a.sort - b.sort)"
                :key="item.id"
                :to="item.router"
                v-text="item.title")
                //- :class="{ active: activeNav ? item.id == subActive || item.id == activeNav.id : false }"
                //- :disabled="!item.child && !route[item.id]"
                //- @click="selectLeamenu(item, i)"
  section.breadcrumbs(v-if="$route.name != 'index' && cateFlat.length")
    NavBreadcrumbs(:navs="cateFlat" :nav="lea")
  nuxt
  AppFooter(:menus="cate" :info="info")
  ActionToast(ref="toast")
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import route from '@/assets/constant/route';

export default {
  name: "default",
  middleware: "router",

  data() {
    return {
      active: "",
      subActive: "",
      leaActive: "",
      route,
      show: false,
      stageIndex: [25, 130, 250, 400, 535],
      timer: 0,
      search: {
        show: false,
        input: '',
        results: '',
        timer: 0,
        loading: false,
      },
      info: '',
    };
  },
  computed: {
    activeLink() {
      return Number.isFinite(this.active) ? this.cate[this.active] : null;
    },
    subMenus() {
      return Number.isFinite(this.subActive) ? this.activeLink.child[this.subActive] : null;
    },
    leaMenus() {
      return Number.isFinite(this.leaActive) ? this.subMenus.child[this.leaActive] : null;
    },
    ...mapState(["activeNav", "lea", "cate"]),
    ...mapGetters(['cateFlat', 'cateGetter'])
  },
  created() {
    this.$root.$on("toast", (e) => {
      this.createToast(e);
    });
    this.$root.basePath = process.env.BASE_API
  },
  async mounted() {
    await this.getCate();
    this.closeMenus();
    // console.log(this.$router);
    // console.log(this.$root)
    this.$router.beforeEach((to, from, next) => {
      next();
      this.closeMenus();
      this.closeSearch();
    })
    // this.$store.commit(this.$route.path)
    window.addEventListener("click", e => {
      if (Number.isFinite(this.active) && this.$refs.menus) {
        if (!this.$refs.menus.contains(e.target)) {
          this.closeMenus();
        }
      }
      if (!this.$refs?.lea?.contains(e.target)) {
        this.show = false;
      }
    });
    this.info = await this.getInfo();
  },
  methods: {
    ...mapActions(["getCate", "getBanner", 'getInfo', 'getSearch']),
    createToast(text) {
      this.$refs.toast.createToast(text);
    },
    searcher() {
      this.search.input = '';
      this.search.results = '';
      this.$refs.search.showModal();
    },
    closeSearch() {
      this.$refs.search?.close();
    },
    async searchWord() {
      if (!this.search.input) return this.search.results = '';
      this.search.loading = true;
      if (this.search.timer) clearTimeout(this.search.timer);
      this.search.timer = setTimeout(async () => {
        const result = await this.getSearch({ keywords: this.search.input })
        console.log('data', result);
        this.search.results = result;
        this.search.loading = false;
      }, 500);
    },
    closeMenus() {
      this.leaActive = "";
      this.subActive = "";
      this.active = "";
    },
    selectMenu(menu, active) {
      if (menu.child) {
        this.active = active;
        this.subActive = "";
        this.leaActive = "";
        return;
      }
      if (menu.id in route) {
        this.$router.push({
          path: route[menu.id].link
        });
      }
      this.closeMenus();
    },
    selectSubmenu(menu, active) {
      if (menu.child) {
        return this.subActive = active;
      }
      if (menu.id in route) {
        this.$router.push({
          path: route[menu.id].link
        });
      }
      this.closeMenus();
    },
    selectLeamenu(menu, active) {
      if (menu.child) {
        return this.leaActive = active;
      }
      if (menu.id in route) {
        this.$router.push({
          path: route[menu.id].link
        });
      }
      this.closeMenus();
    }
  },
}
</script>

<style lang="scss" scoped>
main {
  header {
    width: 1200px;
    height: 96px;

    ion-icon {
      font-size: 24px;
    }
  }

  nav.menus {
    width: 1200px;
  }

  section.breadcrumbs {
    width: min(1200px, 100vw);
  }
}

.nav {
  &-link {
    color: var(--color);

    &:not(:disabled) {

      &:hover,
      &:active,
      &.active {
        color: var(--primary);
      }
    }

    &:disabled {
      cursor: not-allowed;
      color: darkgray;
    }
  }

  &-panel {
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2));

    &__icon {
      position: absolute;
      width: 0;
      height: 0;
      border-bottom: 10px solid white;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid transparent;
      top: -20px;
    }

    &-list {

      &:not(:last-child) {
        border-right: 1px solid lightgray;
      }

      &-item {
        color: var(--color);
        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:not(:disabled) {

          &:hover,
          &:active,
          &.active {
            color: var(--primary);
          }
        }

        &:disabled,
        &[disabled],
        &.disabled {
          cursor: not-allowed;
          color: darkgray;
        }
      }
    }
  }
}

.search {
  &-dialog {
    width: 100%;
    max-width: 650px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;

    .dialog-content {
      b+b {
        margin-top: 20px;
      }
    }
  }
}
</style>
