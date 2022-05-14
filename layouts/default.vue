<template lang="pug">
main.flex.flex-col.items-center
  header.flex.h-20
    .logo.flex.items-center
      img(src='~/assets/img/logo.png' alt="创远仪器" width="226")
    .flex-1
    .nav-list.flex.justify-center.items-center
      ion-icon(name="search-outline")
  .bg-gray-100.w-full.flex.justify-center
    nav.menus.flex.items-center.h-10.gap-x-10.px-5
      .nav-link(v-for="menu in menus" :key="menu.key") {{ menu.title }}
  nuxt
</template>
<script>
import menus from '~/assets/constant/menus.json';

export default {
  name: 'default',
  async asyncData({ $axios }) {
    const ip = await $axios.$get('/api.php/api/getCate')
    return { ip }
  },
  data() {
    return {
      menus
    }
  },
  mounted() {
    this.getMenus();
  },
  methods: {
    async getMenus() {
      const { data } = await this.$axios.$get('/api.php/api/getCate')
      console.log(data);
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

        &:hover {
          color: var(--primary);
        }
      }
    }
  }
}
</style>
