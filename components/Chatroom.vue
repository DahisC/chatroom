<template>
  <b-col id="chatroom">
    <div
      :class="messageClass(m.type)"
      class="message"
      v-for="(m,i) of messages"
      :key="i"
    >{{ m.text }}</div>
  </b-col>
</template>

<script>
export default {
  methods: {
    messageClass(type) {
      if (type === 'CHAT') return 'chat_message'
      if (type === 'SYSTEM') return 'system_message'
    }
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

div.message {
  width: fit-content;
  padding: 10px 10px;
  margin: 5px 0px;
}

div.chat_message {
  background-color: white;
  border-radius: 5px;
  color: var(--color1);
}

div.system_message {
  color: var(--color1);
  align-self: center;
}
</style>
