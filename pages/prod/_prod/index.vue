<template lang="pug">
section.w-full.flex.flex-col.pb-20(v-cloak v-if="product")
  .carousels
    img.object-center.object-cover.w-full.h-480(:src="basePath + product.url")
  .sc-1.flex.items-center.justify-center
    .sc-1__block.py-10
      h1.text-4xl(v-text="product.title")
      article.mt-10.text-gray-600.leading-8(v-text="product.content")
  .sc-2.flex.items-center.justify-center
    .sc-2__block.py-10
      table.prod.border-collapse.border-gray-200.border.table-fixed.w-full.relative
        thead.prod-header.bg-gray-100
          tr.flex.p-5.flex.items-center.justify-between.text-primary
            .prod-title.flex-1.text-2xl.leading-relaxed 产品清单
            .prod-icon
              ion-icon.text-4xl(name="remove-outline")
        thead.prod-thd.bg-gray-100
          tr.flex.leading-relaxed.border-gray-200.border
            th.prod-td.flex-1.p-5(v-text="product.header[0]")
            th.prod-td.flex-1.p-5(v-text="product.header[1]")
            th.prod-td.w-20.py-5(v-text="product.header[2]")
            th.prod-td.w-20.py-5(v-text="product.header[3]")
            th.prod-td.w-20.py-5(v-text="product.header[4]")
            th.prod-td.flex-1.p-5(v-text="product.header[5]")
            th.prod-td.w-28.p-5
        tbody.prod-tbd
          tr.prod-tl.border-top.border-gray-200.h-20.flex.items-center(v-for="(prod, i) in product.production" :key="i")
            td.prod-ti.flex-1.p-2.h-full.flex.items-center.justify-center
              //- input(type="checkbox" v-model="selected[prod.id]")
              //- Checkbox(@change="selectChange($event, prod.id)" :disabled="selected[prod.id] ? false : selectedLength >= 3")
              img.object-center.object-cover(:src="basePath + prod.cover_path" :alt="prod.name")
            td.prod-ti.flex-1.p-2.h-full.flex.items-center.justify-center.bg-gray-50
              nuxt-link.w-full.h-full.flex.items-center.justify-center.transition(class="text-primary hover:text-blue-500" :to="{ path: `/prod/${$route.params.prod}/detail/${prod.id}` }" v-text="prod.name")
            td.prod-ti.w-20.p-2.h-full.flex.items-center.justify-center.text-center(v-text="prod.content")
            td.prod-ti.w-20.p-2.h-full.flex.items-center.justify-center.text-center.bg-gray-50(v-text="prod.content2")
            td.prod-ti.w-20.p-2.h-full.flex.items-center.justify-center.text-center(v-text="prod.content3")
            td.prod-ti.flex-1.p-2.h-full.flex.items-center.justify-center.bg-gray-50(v-text="prod.content4")
            td.prod-ti.w-28.p-2.h-full.flex.items-center.justify-center
              button.bg-primary.px-5.py-2.text-white.transition(class="hover:bg-blue-500" @click="showModal(prod)") 询价
    Dialog(ref="dialog" modal-mode="mega")
      .dialog-header.py-5.px-10.border-b.border-gray-100.flex
        h1.flex-1.text-2xl(v-text="prod.name")
        .dialog-close.cursor-pointer.text-2xl.text-gray-500(class="hover:text-gray-600" @click="closeDialog") &times;
      Submit.p-10.overflow-auto(style="max-height: calc(80vh - 160px);" @submit="submit")
        //- tfoot.prod-tfd.absolute.w-full.flex.items-center.justify-center
        //-   button.bg-blue-500.px-5.py-2.text-white.-mt-5(:disabled="selectedLength < 2") {{ selectedLength }}/3 产品比较
</template>

<script>
import productions from '@/assets/constant/production.json';
import { mapActions, mapState } from 'vuex';

export default {
  name: "production-page",
  data() {
    return {
      productions,
      prod: '',
      selected: {},
    };
  },
  computed: {
    ...mapState(['product']),
    basePath() {
      return process.env.BASE_API
    },
    selectedLength() {
      return Object.values(this.selected).filter(v => v).length
    }
  },
  methods: {
    ...mapActions(['getProducts']),
    selectChange(checked, id) {
      console.log('checked', checked, id);
      this.$set(this.selected, id, checked)
    },
    showModal(prod) {
      this.prod = prod;
      this.$refs.dialog.showModal()
    },
    closeDialog() {
      this.$refs.dialog.close();
    },
    submit() {
      this.closeDialog()
      this.$root.$emit('toast', '提交成功')
    }
  },
  mounted() {
    console.log(this.$route)
    this.getProducts({ c_id: this.$route.params.prod });
  }
}
</script>

<style lang="scss" scoped>
.sc {
  &-1 {
    &__block {
      width: 855px;
    }
  }

  &-2 {
    &__block {
      width: 1200px;
    }
  }
}

.prod {
  &-ti {
    img {
      // max-width: 100px;
      // max-height: 100px;
      max-width: 100%;
      max-height: 100%;
    }
  }

  &-tfd {
    button {
      &:disabled {
        filter: grayscale(1);
      }
    }
  }
}
</style>
