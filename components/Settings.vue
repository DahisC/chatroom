<template>
  <b-nav-item-dd right>
    <template v-slot:button-content>
      <b-icon icon="gear-fill"></b-icon>
    </template>
    <b-dd-header class="text-center">設定</b-dd-header>
    <b-dd-divider />
    <b-dd-header class="text-center">訊息</b-dd-header>
    <b-dd-form>
      <b-form-checkbox v-model="checked" name="check-button" switch>系統</b-form-checkbox>
      <b-form-checkbox v-model="checked" name="check-button" switch>聊天</b-form-checkbox>
      <b-form-checkbox v-model="checked" name="check-button" switch>圖片</b-form-checkbox>
      <b-form-checkbox v-model="checked" name="check-button" switch>檔案</b-form-checkbox>
    </b-dd-form>
    <b-dd-divider />
  </b-nav-item-dd>
</template>

<script>
import { BIcon, BIconGearFill } from 'bootstrap-vue'

export default {
  components: {
    BIcon,
    BIconGearFill
  },
  data() {
    return {
      checked: false
    }
  }
  //   computed: {
  //     message: {
  //       get() {
  //         return this.$store.state.obj.message
  //       },
  //       set(value) {
  //         this.$store.commit('updateMessage', value)
  //       }
  //     }
  //   }
}
</script>