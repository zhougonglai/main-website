<template>
  <footer class="flex flex-col justify-center items-center bg-gray-100" v-cloak>
    <Dialog ref="qrcode">
      <img :src="$root.basePath + info.url" alt="微信公众号">
    </Dialog>
    <div class="footer-block container flex flex-col py-20">
      <div class="fc-0 lg:flex grid grid-cols-2">
        <div class="fb-1 hidden lg:block">
          <img class="" :src="$root.basePath + info.title" alt="创远仪器" width="300" />
          <h4 class="tt leading-8 mt-10">服务热线</h4>
          <div class="tl leading-8 text-sm" v-text="info.content" />
          <h4 class="tt leading-8">邮箱</h4>
          <div class="tl leading-8 text-sm" v-text="info.spare6" />
          <h4 class="tt leading-8">地址</h4>
          <div class="tl leading-8 text-sm" v-text="info.spare1" />
        </div>

        <div class="fb-2 flex-1 flex flex-col"
          v-for="menu in menus.filter(menu => menu.display).sort((a, b) => a.sort - b.sort)" :key="menu.id">
          <h4 class="ft text-2xl font-bold" v-text="menu.title" />
          <ul class="my-5">
            <li class="text-sm leading-8 cursor-pointer" v-for="nav in menu.child" :key="nav.id">

              <nuxt-link v-if="nav.router" :to="nav.router">{{ nav.title }}</nuxt-link>
              <nuxt-link v-else :to="nav.child.find(r => r.type).router">{{ nav.title }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="fc-1 flex leading-8 px-12 py-4 lg:p-0">
        <h4 class="font-bold font-5xl" v-text="info.spare2" />
        <div class="flex-1" />
        <div class="font-sm cursor-pointer" @click="showQRcode">
          官方公众号
        </div>
      </div>
      <hr class="mx-10 lg:mx-0">
      <div class="fc-2 flex flex-col lg:flex-row gap-x-5 leading-8 px-12 py-4 lg:p-0">
        <div class="sage font-sm" v-text="info.spare4" />
        <div class="sage font-sm" v-text="info.spare3" />
        <div class="flex-1 hidden lg:flex" />
        <div class="sage" v-text="info.spare5" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
  props: ["menus", "info"],
  methods: {
    showQRcode() {
      this.$refs.qrcode.showModal();
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;

  .footer-block {
    color: gray;
  }
}

.fc-1,
.fc-2 {
  color: var(--color-1);
}

.fb-2 {
  text-indent: 50px;

  .ft {
    color: var(--primary);
  }

  li {
    &:hover {
      color: var(--primary);
    }
  }
}
</style>
