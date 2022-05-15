<template lang="pug">
main.flex.flex-col.items-center
  header.flex.h-20
    .logo.flex.items-center
      img(src='~/assets/img/logo.png' alt="创远仪器" width="226")
    .flex-1
    .nav-list.flex.justify-center.items-center
      ion-icon(name="search-outline")
  .bg-gray-100.w-full.flex.justify-center
    nav.menus.flex.items-center.h-10.relative(ref="menus")
      .nav-link.px-5.cursor-pointer(v-for="(menu, i) in menus.filter(menu => menu.display)" :key="menu.id" :class="{ active: i === active }" @click="selectMenu(menu, i)" v-text="menu.title")
      transition(
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0")
        .nav-panel.absolute.top-10.left-0.right-0.z-10.bg-white.shadow-lg(v-if="Number.isFinite(active)")
          .nav-panel-content.flex
            .nav-panel-list.flex.flex-col.w-60.p-5
              .nav-panel-list-item.leading-8.flex.items-center.cursor-pointer(
                v-for="(item, i) in activeMenu.child.filter(menu => menu.display)"
                :key="item.id"
                :class="{ active: i === subActive }"
                @click="selectSubmenu(item, i)"
                v-text="item.title")
            .nav-panel-list.flex.flex-col.w-60.p-5(v-if="Number.isFinite(subActive)")
              .nav-panel-list-item.leading-8.flex.items-center.cursor-pointer(
                v-for="(item, i) in subMenus.child"
                :key="item.id"
                @click="selectLeamenu(item, i)"
                v-text="item.title")
            //- .nav-panel-list.flex.flex-col.w-60.p-5(v-if="Number.isFinite(leaActive)")
            //-   .nav-panel-list-item.leading-8.flex.items-center.cursor-pointer(
            //-     v-for="(item, i) in leaMenus.child"
            //-     :key="item.id"
            //-     v-text="item.title")
  nuxt
  AppFooter(:menus="menus")
</template>
<script>

export default {
  name: 'default',
  data() {
    return {
      menus: [],
      active: '',
      subActive: '',
      leaActive: '',
    }
  },
  computed: {
    activeMenu() {
      return Number.isFinite(this.active) ? this.menus[this.active] : null
    },
    subMenus() {
      return Number.isFinite(this.subActive) ? this.activeMenu.child[this.subActive] : null
    },
    leaMenus() {
      return Number.isFinite(this.leaActive) ? this.subMenus.child[this.leaActive] : null
    }
  },
  mounted() {
    this.getMenus();
    window.addEventListener('click', e => {
      if (Number.isFinite(this.active) && this.$refs.menus) {
        if (!this.$refs.menus.contains(e.target)) {
          this.leaActive = '';
          this.subActive = '';
          this.active = '';
        }
      }
    })
  },
  methods: {
    async getMenus() {
      const { data } = await this.$axios.$get('/api.php/api/getCate')
      this.menus = data;
    },
    selectMenu(menu, active) {
      this.active = active
      this.subActive = '';
      this.leaActive = '';
    },
    selectSubmenu(menu, active) {
      this.subActive = active
    },
    selectLeamenu(menu, active) {
      this.leaActive = active
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

    .nav {
      &-link {
        color: var(--color);

        &:hover,
        &:active,
        &.active {
          color: var(--primary);
        }
      }

      &-panel {
        &-list {

          &:not(:last-child) {
            border-right: 1px solid lightgray;
          }

          &-item {
            color: var(--color);

            &:hover,
            &:active,
            &.active {
              color: var(--primary);
            }
          }
        }
      }
    }
  }
}
</style>
