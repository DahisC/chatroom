<template>
  <div id="login">
    <BubbleDiv>
      <b-container>
        <b-row align-h="center" align-v="center">
          <b-col cols="10" sm="6">
            <!-- <b-form-input v-model="inputAccount" placeholder="暱稱" size="lg" :state="false"></b-form-input> -->
            <div role="group">
              <label for="input_alias">暱稱</label>
              <b-form-input
                id="input_alias"
                size="lg"
                v-model="inputAccount"
                :state="isErrored == null ? null : !isErrored"
                placeholder="陸小曼"
                trim
              ></b-form-input>

              <!-- This will only be shown if the preceding input has an invalid state -->
              <b-form-invalid-feedback id="input-live-feedback">哦喔！你跟別人撞名了 :(</b-form-invalid-feedback>

              <!-- This is a form text block (formerly known as help block) -->
              <b-form-text id="input-live-help">小心！這個輸入框會用星爆氣流斬砍掉所有空白字元</b-form-text>
            </div>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center">
          <b-col cols="10" class="text-center">
            <BubbleBtn text="開始聊天" :clickEvent="logIn" />
          </b-col>
        </b-row>
      </b-container>
    </BubbleDiv>
  </div>
</template>

<script>
import BubbleDiv from '~/components/BubbleDiv'
import BubbleBtn from '~/components/BubbleBtn'
import { mapState } from 'vuex'

export default {
  name: 'test',
  components: {
    BubbleDiv,
    BubbleBtn
  },
  data() {
    return {
      isLogging: false,
      isErrored: null,
      inputAccount: ''
    }
  },
  methods: {
    async logIn() {
      const vm = this
      const socket = vm.$socket.client
      const account = vm.inputAccount
      try {
        vm.isLogging = true
        await vm.$axios.post('/login', { account })
        vm.isErrored = false
        this.$store.commit('user/logIn', { account, socket }) // 在 Vuex 中控制 socket 的連接狀態
        this.$router.push({ path: '/chatroom' })
      } catch (err) {
        vm.isErrored = true
      } finally {
        vm.isLogging = false
      }
    }
  }
}
</script>

<style scoped>
div#login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

div#login .row {
  margin: 20px 0px;
}
</style>
