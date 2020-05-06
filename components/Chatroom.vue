<template>
  <b-col id="chatroom">
    <!-- <div
      :class="{ 'chat_message': m.type === 'CHAT','system_message': m.type === 'SYSTEM', 'sendFromMyself': m.socketID === socketID }"
      class="message"
      v-for="(m,i) of messages"
      :key="i"
    >
      <div v-if="m.socketID !== socketID" class="font-weight-bolder">{{ m.account }}｜</div>
      <div>{{ m.text }}</div>
    </div>-->
    <Message v-for="(m,i) of messages" :key="i" :message="m" />
  </b-col>
</template>

<script>
import Message from './Message'

export default {
  components: {
    Message
  },
  computed: {
    messages() {
      if (this.$el) {
        console.log(this.$el.scrollHeight)
        console.log(this.$el.clientHeight)
        console.log(this.$el.scrollTop)
      }
      return this.$store.state.messages.messages
    }
  }
}
</script>

<style scoped>
div#chatroom {
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  height: 100%;
  padding: 0 5vh;
}
</style>
