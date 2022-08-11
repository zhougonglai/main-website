<template lang="pug">
.bg-gray-100.w-full.justify-center.items-center.hidden(class="lg:flex")
  nav.container.flex.items-center.leading-10.relative(ref="menus" v-if="cate.length" v-cloak)
    .nav-link.px-8.py-4.cursor-pointer.text-lg.text-center(
      v-for="(menu, i) in cate.filter(menu => menu.display).sort((a, b) => a.sort - b.sort)"
      @click="selectMenu(menu, i)"
      @mouseenter="selectMenu(menu, i)"
      @mouseleave="leaveMenu"
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
      .nav-panel.absolute.top-20.-left-5.right-0.z-10.bg-white(v-if="Number.isFinite(active)"
        @mouseenter="clearTimer" @mouseleave="leaveMenu")
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
</template>
<script>
export default {
  name: 'nav-bar',
  props: ['cate'],
  data() {
    return {
      active: null,
      activeNav: null,
      activeLink: null,
      subActive: null,
      subMenus: null,
      stageIndex: [25, 130, 250, 400, 535],
      timer: null
    }
  },
  methods: {
    selectMenu(menu, active) {
      this.clearTimer();
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
  }
}
</script>
