<template>
  <b-col>
    <div :style="{ position: 'relative' }">
      <b-form-input
        id="inputMessage"
        v-model="inputMessage"
        @keyup.enter="createMessage"
        placeholder="說點什麼吧？"
      />
      <span
        :style="{
          position: 'absolute',
          right: '0',
          top: '0',
          height: '100%',
          width: '38px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }"
      >
        <b-img
          src="../assets/icons/paper-plane.svg"
          :style="{ height: 'inherit', padding: '10px', cursor: 'pointer' }"
          @click="createMessage"
        />
        <!-- <b-spinner small type="grow" variant="color2"></b-spinner> -->
      </span>
    </div>
  </b-col>
</template>

<script>
export default {
  // data() {
  //   return {
  //     inputMessage: ''
  //   }
  // },
  methods: {
    createMessage() {
      const vm = this
      const socket = this.$socket.client
      socket.emit('/messages#create', {
        message: { type: 'CHAT', text: vm.inputMessage }
      })
      vm.inputMessage = ''
    }
  },
  computed: {
    inputMessage: {
      get() {
        return this.$store.state.chatroom.inputMessage
      },
      set(text) {
        this.$store.commit('chatroom/inputMessage', { text })
      }
    }
  }
}
</script>
