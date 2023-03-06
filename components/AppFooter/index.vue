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
      <div class="fc-1 flex space-x-4 leading-8 px-12 mt-5 py-4 lg:p-0">
        <h4 class="font-bold font-5xl inline-flex items-center" v-text="info.spare2" />
        <div class="flex-1" />
        <div class="social inline-flex space-x-4 py-4">
          <button class="social-bili relative" @click="toggleSocial('bili', true)"
            @mouseenter="toggleSocial('bili', true)" @mouseleave="toggleSocial('bili', false)">
            <img src="/bili.svg" width="45" height="45" />
            <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
              <div
                class="social-popup absolute p-4 left-1/2 -ml-2 bottom-10 z-10 -translate-x-1/2 transform lg:max-w-3xl overflow-hidden"
                v-show="social.bili">
                <div
                  class="popup-content p-4 relative w-60 max-w-sm bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <img src="/BILIBILI.png" />
                </div>
              </div>
            </transition>
          </button>
          <button class="social-wechat relative" @click="toggleSocial('wechat', true)"
            @mouseenter="toggleSocial('wechat', true)" @mouseleave="toggleSocial('wechat', false)">
            <img src="/wechat.svg" width="45" height="45" />
            <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
              <div
                class="social-popup absolute p-4 left-1/2 -ml-2 bottom-10 z-10 -translate-x-1/2 transform lg:max-w-3xl overflow-hidden"
                v-show="social.wechat">
                <div
                  class="popup-content p-4 relative w-60 max-w-sm bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <img src="/wechat.png" />
                </div>
              </div>
            </transition>
          </button>
          <button class="social-douyin relative" type="button" @click="toggleSocial('douyin', true)"
            @mouseenter="toggleSocial('douyin', true)" @mouseleave="toggleSocial('douyin', false)">
            <img src="/douyin.svg" width="45" height="45" />
            <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
              <div
                class="social-popup absolute p-4 -right-4 lg:right-1/2 mr-2 bottom-10 z-10 transform-none lg:translate-x-1/2 lg:transform lg:max-w-3xl overflow-hidden"
                v-show="social.douyin">
                <div :class="$root.ua.platform.type"
                  class="popup-content p-4 relative w-60 max-w-sm bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <img src="/douyin.png" />
                </div>
              </div>
            </transition>
          </button>
        </div>
        <!-- <div class="font-sm cursor-pointer" @click="showQRcode">
          官方公众号
        </div> -->
      </div>
      <hr class="mx-10 lg:mx-0">
      <div class="fc-2 flex flex-col lg:flex-row gap-x-5 px-12 py-4 lg:p-0">
        <div class="sage text-sm py-1" v-text="info.spare4" />
        <div class="sage text-sm py-1" v-text="info.spare3" />
        <div class="flex-1 hidden lg:flex" />
        <div class="sage text-sm py-1">
          <img src="/gongan.jpeg" class="inline" width="15" height="15" />
          公安备案号31010402001303
        </div>
        <div class="sage">
          <a href="https://beian.miit.gov.cn/" v-text="info.spare5" target="_blank" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
  props: ["menus", "info"],
  data() {
    return {
      social: {
        bili: false,
        wechat: false,
        douyin: false,
        timer: 0
      }
    }
  },
  methods: {
    showQRcode() {
      this.$refs.qrcode.showModal();
    },
    openTarget(target) {
      this.toggleSocial(target, true);
      switch (target) {
        case 'bili':
          window.open('https://space.bilibili.com/1188912525?spm_id_from=333.1007.0.0', '_blank');
          break
        case 'douyin':
          window.open('https://www.douyin.com/user/self')
          break
      }
    },
    toggleSocial(target, status) {
      if (!status) {
        if (this.social.timer) clearTimeout(this.social.timer)
        return this.social.timer = setTimeout(() => {
          this.social[target] = status;
        }, 15)
      }
      this.social.bili = false;
      this.social.wechat = false;
      this.social.douyin = false;
      this.social.timer = 0;
      this.social[target] = status;
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

.popup {
  &-content {

    &.mobile {
      &::after {
        left: 86%;
      }
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -16px;
      left: 50%;
      width: 0;
      height: 0;
      border-top: 8px solid white;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid transparent;
    }
  }
}
</style>
