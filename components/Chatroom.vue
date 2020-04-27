<template>
  <b-col id="chatroom">
    <div class="chat_message" v-for="m of chatMessages">{{ m }}</div>
  </b-col>
</template>

<script>
export default {
  computed: {
    chatMessages() {
      if (this.$el) {
        console.log(this.$el.scrollHeight)
        console.log(this.$el.clientHeight)
        console.log(this.$el.scrollTop)
      }
      return this.$store.state.chatMessage.chatMessages
    }
  }
}
</script>

<style scoped>
div#chatroom {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  padding: 0 5vh;
}

div.chat_message {
  width: fit-content;
  background-color: white;
  padding: 10px 10px;
  border-radius: 5px;
  color: var(--color1);
  margin: 5px 0px;
}
</style>
