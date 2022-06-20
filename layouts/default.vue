<template lang="pug">
main.flex.flex-col.items-center
  header.flex
    nuxt-link.logo.flex.items-center.py-2(to='/')
      img(:src='$root.basePath + info.title' alt="创远仪器" width="300")
    .flex-1
    .nav-list.flex.justify-center.items-center
      nuxt-link(to="/contact" class="hover:text-blue-500") 联系我们
      a.mx-5(type='button' target="_blank" href="https://transcominstruments.tmall.com/")
        ion-icon(v-cloak name="cart")
      button(type='button')
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
    ...mapActions(["getCate", "getBanner", 'getInfo']),
    createToast(text) {
      this.$refs.toast.createToast(text);
    },
    searcher() {
      if (!this.search.show) {
        this.search.show = true;
        this.$refs.search.focus();
      }
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
  &.input {

    input {
      border-radius: 0;
      border: none;
      border-bottom: 1px solid var(--color);
      background: transparent;
      color: var(--color);
      padding: 0;
      font-size: 16px;
      width: 100%;
      height: 40px;
      outline: none;

      &::placeholder {
        color: var(--color);
      }
    }
  }
}
</style>
