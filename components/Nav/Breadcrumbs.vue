<template lang="pug">
nav.breadcrumbs.py-4.px-4.flex.items-center.gap-x-2(role="navigation" v-cloak class="lg:px-0")
  nuxt-link(to="/")
    ion-icon(name="home-sharp")
  span.crumb-separator.flex.items-center(aria-hidden="true")
    ion-icon(name="chevron-forward")
  .crumb.inline-flex.gap-x-2.items-center(v-if="activePath")
    nuxt-link.font-bold(:to="pathClip") {{ activePath.title }}
    span.crumbicon.grid.items-center
      ion-icon(name="chevron-down-sharp")
      select.disguised-select(v-if="siblings.length" @change="pathChange")
        option(v-for="s in siblings" :selected="s.router === activePath.router" :value="s.router") {{ s.title }}
  .crumb.inline-flex.gap-x-2.items-center(v-if="nav")
    nuxt-link.font-bold(:to="$route.path") {{ navPath ? navPath.title : nav.meta.title }}
    span.crumbicon.grid.items-center(v-if="nav.meta.paths && nav.meta.paths.length")
      ion-icon(name="chevron-down-sharp")
      select.disguised-select(@change="pathChange")
        option(v-for="path in nav.meta.paths" :key="path.link" :selected="path.link === $route.path" :value="path.link") {{ path.title }}


</template>
<script>
export default {
  name: 'nav-breadcrumbs',
  props: {
    navs: {
      type: Array,
      default: () => []
    },
    nav: {
      type: [Object, String],
      default: ''
    }
  },
  computed: {
    activePath() {
      return this.navs.find(n => n.router === this.pathClip)
    },
    siblings() {
      return this.activePath ? this.navs.filter(n => n.pid === this.activePath.pid) : [];
    },
    navPath() {
      return this.navs.find(n => n.router === this.$route.path)
    },
    pathClip() {
      return this.$route.name === 'news-id'
        ? '/news'
        : this.$route.name.split('-').length > 3
          ? `/${this.$route.name.split('-')[0]}/${this.$route.params.apply || this.$route.params.prod}`
          : this.$route.path;
    },
  },
  mounted() {
    console.log(this.$route)
  },
  methods: {
    pathChange(e) {
      console.log('pathChange', e.target.value);
      this.$router.push(e.target.value)
    }
  }
}
</script>
<style lang="scss" scoped>
.breadcrumbs {
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
  scroll-padding-inline: calc(var(--nav-gap) / 2);

  &>.crumb:last-of-type {
    scroll-snap-align: end;
  }

  @supports (-webkit-hyphens:none) {
    & {
      scroll-snap-type: none;
    }
  }

  .crumbicon {
    --crumbicon-size: 3ch;
    grid: [stack] var(--crumbicon-size) / [stack] var(--crumbicon-size);
    place-items: center;

    &>* {
      grid-area: stack;
    }

    .disguised-select {
      inline-size: 100%;
      block-size: 100%;
      opacity: .01;
      font-size: min(100%, 16px);
      /* Defaults to 16px; fixes iOS zoom */
    }
  }
}
</style>
