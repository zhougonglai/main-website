<template>
  <footer class="flex flex-col justify-center items-center bg-gray-100">
    <Dialog ref="qrcode">
      <img src="@/assets/img/wechat.png" alt="微信公众号">
    </Dialog>
    <div class="footer-block flex flex-col py-20">
      <div class="fc-0 flex">
        <div class="fb-1">
          <img class="" src="@/assets/img/logo.png" alt="创远仪器" width="225" />
          <h4 class="tt leading-8 mt-10">服务热线</h4>
          <div class="tl leading-8 text-sm">400-677-8077</div>
          <h4 class="tt leading-8">邮箱</h4>
          <div class="tl leading-8 text-sm">400-677-8077</div>
          <h4 class="tt leading-8">地址</h4>
          <div class="tl leading-8 text-sm">上海市松江区高技路205弄7号C座</div>
        </div>

        <div class="fb-2 flex-1 flex flex-col" v-for="menu in menus.filter(menu => menu.display)" :key="menu.id">
          <h4 class="ft text-2xl font-bold" v-text="menu.title" />
          <ul class="my-5">
            <li class="text-sm leading-8 cursor-pointer" v-for="nav in menu.child" :key="nav.id" v-text="nav.title" />
          </ul>
        </div>
      </div>
      <div class="fc-1 flex leading-8">
        <h4 class="font-bold font-5xl">创远仪器</h4>
        <div class="flex-1" />
        <div class="font-sm cursor-pointer" @click="showQRcode">
          官方公众号
        </div>
      </div>
      <hr>
      <div class="fc-2 flex gap-x-5 leading-8">
        <div class="sage font-sm">版权所有©2005-2022</div>
        <div class="sage font-sm">上海创远仪器技术股份有限公司</div>
        <div class="flex-1"></div>
        <div class="sage">沪ICP备11027993号</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
  props: ["menus"],
  // components: { Dialog }
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
    width: 1200px;
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
