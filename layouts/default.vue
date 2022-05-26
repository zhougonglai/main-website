<template lang="pug">
main.flex.flex-col.items-center
  header.flex.h-20
    nuxt-link.logo.flex.items-center(to='/')
      img(src='~/assets/img/logo.png' alt="创远仪器" width="226")
    .flex-1
    .nav-list.flex.justify-center.items-center
      nuxt-link(to="/contact" class="hover:text-blue-500") 联系我们
      .search.ml-5.relative.flex.items-center.justify-center(:class="{ input: search.show }")
        input.search-input.w-0.caret-blue-500.leading-10(ref="search" @blur="search.show = false")
        .search-icon.inline-flex.items-center.justify-center.cursor-pointer(@click="searcher")
          ion-icon(v-cloak name="search-outline")
  .bg-gray-100.w-full.flex.justify-center
    nav.menus.flex.items-center.leading-10.relative(ref="menus")
      .nav-link.px-8.py-4.cursor-pointer.text-lg.text-center(
        v-for="(menu, i) in menus.filter(menu => menu.display)"
        @click="selectMenu(menu, i)"
        @mouseenter="selectMenu(menu, i)"
        v-text="menu.title"
        :class="{ active: i == activeMenu, 'pl-0': !i }"
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
              button.nav-panel-list-item.leading-8.flex.items-center.text-left.cursor-pointer(
                v-for="(item, i) in activeLink.child.filter(menu => menu.display)"
                :key="item.id"
                :class="{ active: item.id == activeNav }"
                :disabled="!item.child && !links[item.id]"
                @click="selectSubmenu(item, i)")
                .flex-1(v-text="item.title")
                ion-icon(name="chevron-forward" v-show="i === subActive")
            .nav-panel-list.flex.flex-col.w-60.p-5(v-if="Number.isFinite(subActive)")
              button.nav-panel-list-item.leading-8.text-left.cursor-pointer(
                v-for="(item, i) in subMenus.child"
                :key="item.id"
                @click="selectLeamenu(item, i)"
                :disabled="!item.child && !links[item.id]"
                v-text="item.title")
            //- .nav-panel-list.flex.flex-col.w-60.p-5(v-if="Number.isFinite(leaActive)")
            //-   .nav-panel-list-item.leading-8.flex.items-center.cursor-pointer(
            //-     v-for="(item, i) in leaMenus.child"
            //-     :key="item.id"
            //-     v-text="item.title")
  section.breadcrumbs(v-if="$route.name != 'index'")
    nav.py-4.breadcrumb.flex.items-center(aria-label="breadcrumbs")
      nuxt-link(to="/")
        ion-icon(name="home-sharp" v-cloak)
      template(v-if="activeMenu >= 0")
        ion-icon.mx-5(name="chevron-forward-sharp"  v-cloak)
        nuxt-link(:to="links[activeNav]") {{ labels[activeNav] }}
      .relative.cursor-pointer(v-if="lea" ref="lea" @click.stop="show = !show")
        ion-icon.mx-5(name="chevron-forward-sharp"  v-cloak)
        nuxt-link(:to="lea.path") {{ lea.meta.title }}
        ion-icon.ml-5(name="chevron-down-sharp"  v-cloak)
        transition(
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0")
          ul.nav-drops.absolute.bg-white.top-full.left-10.w-full.py-2.z-10.shadow-2xl.shadow-slate-600.translate-y-2(v-if="show")
            li.nav-drop.pl-4.leading-10(v-for="(prod, i) in lea.meta.paths" :key="i" class="hover:bg-gray-300")
              nuxt-link.truncate(:to="prod.link") {{ prod.title }}
  nuxt
  AppFooter(:menus="menus")
</template>
<script>
import menus from '@/assets/constant/menus';
import labels from '@/assets/constant/labels';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'default',
  middleware: 'router',
  data() {
    return {
      menus: [],
      active: '',
      subActive: '',
      leaActive: '',
      links: menus,
      labels,
      show: false,
      stageIndex: [25, 130, 250, 400, 535],
      timer: 0,
      search: {
        show: false,

      }
    }
  },
  computed: {
    activeLink() {
      return Number.isFinite(this.active) ? this.menus[this.active] : null
    },
    subMenus() {
      return Number.isFinite(this.subActive) ? this.activeLink.child[this.subActive] : null
    },
    leaMenus() {
      return Number.isFinite(this.leaActive) ? this.subMenus.child[this.leaActive] : null
    },
    ...mapState(['activeNav', 'activeMenu', 'lea'])
  },
  mounted() {
    this.getMenus();
    this.closeMenus();
    window.addEventListener('click', e => {
      if (Number.isFinite(this.active) && this.$refs.menus) {
        if (!this.$refs.menus.contains(e.target)) {
          this.closeMenus();
        }
      }
      if (!this.$refs?.lea?.contains(e.target)) {
        this.show = false;
      }
    })
    this.getCate();
    this.getBanner();
  },
  methods: {
    ...mapActions(['getCate', 'getBanner']),
    searcher() {
      if (!this.search.show) {
        this.search.show = true;
        this.$refs.search.focus();
      }
    },
    async getMenus() {
      const { data } = await this.$axios.$get('/api/menus')
      this.menus = data;
    },
    closeMenus() {
      this.leaActive = '';
      this.subActive = '';
      this.active = '';
    },
    selectMenu(menu, active) {
      if (menu.child) {
        this.active = active
        this.subActive = '';
        this.leaActive = '';
        return
      }
      if (menu.id in menus) {
        this.$router.push({
          path: menus[menu.id]
        })
      }
      this.closeMenus();
    },
    selectSubmenu(menu, active) {
      if (menu.child) {
        return this.subActive = active
      }
      if (menu.id in menus) {
        this.$router.push({
          path: menus[menu.id]
        })
      }
      this.closeMenus();
    },
    selectLeamenu(menu, active) {
      if (menu.child) {
        return this.leaActive = active
      }
      if (menu.id in menus) {
        this.$router.push({
          path: menus[menu.id]
        })
      }
      this.closeMenus();
    }
  }
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

    nav.breadcrumb {}
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
