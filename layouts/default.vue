<template lang="pug">
main.flex.flex-col.items-center
  header.flex.h-20
    nuxt-link.logo.flex.items-center(to='/')
      img(src='~/assets/img/logo.png' alt="创远仪器" width="226")
    .flex-1
    .nav-list.flex.justify-center.items-center
      ion-icon(v-cloak name="search-outline")
  .bg-gray-100.w-full.flex.justify-center
    nav.menus.flex.items-center.h-10.leading-10.relative(ref="menus")
      .nav-link.text-center.cursor-pointer(
        v-for="(menu, i) in menus.filter(menu => menu.display)"
        @click="selectMenu(menu, i)" v-text="menu.title"
        :class="{ active: i == activeNav }"
        :key="menu.id")
      transition(
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0")
        .nav-panel.absolute.top-14.left-0.right-0.z-10.bg-white.filter.drop-shadow(v-if="Number.isFinite(active)")
          .nav-panel__icon(:style="{ left: (55 + active * 120) + 'px' }")
          .nav-panel-content.flex
            .nav-panel-list.flex.flex-col.w-60.p-5
              button.nav-panel-list-item.leading-8.text-left.cursor-pointer(
                v-for="(item, i) in activeMenu.child.filter(menu => menu.display)"
                :key="item.id"
                :class="{ active: i === subActive }"
                :disabled="!item.child && !links[item.id]"
                @click="selectSubmenu(item, i)"
                v-text="item.title")
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
  nuxt
  AppFooter(:menus="menus")
</template>
<script>
import menus from '@/assets/constant/menus';
import { mapState } from 'vuex';

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
    },
    ...mapState(['activeNav'])
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
    })
  },
  methods: {
    async getMenus() {
      // const { data } = await this.$axios.$get('/api.php/api/getCate')
      const { data } = await this.$axios.$get('/api/menus')
      // console.log('getMenus', data)
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
}

.nav {
  &-link {
    color: var(--color);
    width: 120px;

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
</style>
