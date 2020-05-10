<template>
  <div
    class="message"
    :class="{
      chat_message: message.type === 'CHAT' || message.type === 'IMAGE',
      login_message: message.type === 'LOGIN',
      logout_message: message.type === 'LOGOUT',
      sendFromMyself: message.socketID === socketID
    }"
  >
    <!-- CHAT -->
    <template v-if="message.type === 'CHAT'">
      <template v-if="message.account !== account">
        <b :style="{ wordBreak: 'keep-all' }">{{ message.account }}</b>
        <span :style="{ opacity: 0.2 }">｜</span>
      </template>
      {{ message.text }}
    </template>
    <!-- IMAGE -->
    <template v-if="message.type === 'IMAGE'">
      <template v-if="message.account !== account">
        <b :style="{ wordBreak: 'keep-all' }">{{ message.account }}</b>
        <span :style="{ opacity: 0.2 }">｜</span>
      </template>
      <b-img
        :src="message.image.base64"
        :style="{ width: '200px', cursor: 'pointer' }"
        @click="debugBase64(message.image.base64)"
      />
    </template>
    <!-- LOGIN -->
    <template v-if="message.type === 'LOGIN'">
      <b-img height="30px" src="../assets/icons/anonymous-icon.svg" />
      {{ message.text }}
    </template>
    <!-- LOGOUT -->
    <template v-if="message.type === 'LOGOUT'">
      <b-img height="30px" src="../assets/icons/anonymous-icon.svg" />
      {{ message.text }}
    </template>
  </div>
</template>

<script>
export default {
  props: ['message'],
  computed: {
    socketID() {
      return this.$socket.client.id
    },
    account() {
      return this.$store.state.user.account
    }
  },
  methods: {
    debugBase64(base64URL) {
      // Error: Not allowed to navigate top frame to data URL
      // 解決無法在 a tag 中連結 base64 的問題
      // https://ourcodeworld.com/articles/read/682/what-does-the-not-allowed-to-navigate-top-frame-to-data-url-javascript-exception-means-in-google-chrome
      const win = window.open()
      win.document.write(
        '<iframe src="' +
          base64URL +
          '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'
      )
    }
  }
}
</script>

<style scoped>
div.message {
  width: fit-content;
  padding: 10px 10px;
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  word-break: break-all;
}

div.chat_message.sendFromMyself {
  align-self: flex-end;
  background-color: var(--color1);
  color: white;
}

div.chat_message {
  background-color: white;
  border-radius: 10px;
  color: var(--color1);
  position: relative;
}

div.login_message,
div.logout_message {
  color: var(--color1);
  align-self: center;
  flex-direction: column;
  align-items: center;
}

/* div.chat_message.sendFromMyself::before {
  right: 5px;
}

div.chat_message.sendFromMyself::after {
  right: -5px;
} */

/* div.chat_message::before {
  content: '';
  position: absolute;
  left: 5px;
  bottom: -7.5px;
  height: 15px;
  width: 15px;
  background-color: white;
  border-radius: 50%;
}

div.chat_message::after {
  content: '';
  position: absolute;
  left: -5px;
  bottom: -15px;
  height: 10px;
  width: 10px;
  background-color: white;
  border-radius: 50%;
} */
</style>
