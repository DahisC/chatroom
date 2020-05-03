<template>
  <div id="login">
    <BubbleDiv>
      <b-container>
        <b-row align-h="center" align-v="center">
          <b-col cols="10" sm="6">
            <b-form-input
              v-model="inputAccount"
              placeholder="暱稱"
              size="lg"
            ></b-form-input>
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

export default {
  components: {
    BubbleDiv,
    BubbleBtn
  },
  data() {
    return {
      inputAccount: ''
    }
  },
  methods: {
    logIn() {
      this.$store.dispatch('user/logIn', { account: this.inputAccount })
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
