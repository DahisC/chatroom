<template>
  <div
    class="message"
    :class="{ 'chat_message': message.type === 'CHAT','login_message': message.type === 'LOGIN', 'sendFromMyself': message.socketID === socketID }"
  >
    <template v-if="message.type === 'CHAT'">{{ message.text }}</template>
    <template v-if="message.type === 'LOGIN'">
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
}

div.chat_message {
  background-color: white;
  border-radius: 10px;
  color: var(--color1);
  position: relative;
}

div.chat_message::before {
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
}

div.chat_message.sendFromMyself {
  align-self: flex-end;
  background-color: var(--color1);
  color: white;
}

div.chat_message.sendFromMyself::before {
  right: 5px !important;
}

div.chat_message.sendFromMyself::after {
  right: -5px !important;
}

div.login_message {
  color: var(--color1);
  align-self: center;
  flex-direction: column;
  align-items: center;
}
</style>