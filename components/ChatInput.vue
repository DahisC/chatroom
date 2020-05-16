<template>
  <b-col>
    <div :style="{ position: 'relative' }">
      <b-form-input
        id="inputMessage"
        v-model="inputMessage"
        @keyup.enter="createMessage"
        placeholder="在紙飛機上放點東西"
        autocomplete="off"
        trim
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
          id="paper_plane"
          :class="{ 'readyToTakeOff': !isAllSpace }"
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
  methods: {
    createMessage() {
      if (this.isAllSpace) return
      const vm = this
      const socket = this.$socket.client
      socket.emit('/messages#create', {
        message: { type: 'CHAT', text: vm.inputMessage }
      })
      vm.inputMessage = ''
    }
    // async onPaste(e) {
    //   try {
    //     let res = await navigator.clipboard.read()
    //     let tt = await res[0].getType('image/png')
    //   } catch (err) {
    //     console.error(err)
    //   }
    // }
  },
  computed: {
    inputMessage: {
      get() {
        return this.$store.state.chatroom.inputMessage
      },
      set(text) {
        this.$store.commit('chatroom/inputMessage', { text })
      }
    },
    isAllSpace() {
      return this.inputMessage.trim() === ''
    }
  }
}
</script>

<style scoped>
#paper_plane {
  transition: opacity 0.5s;
  opacity: 0.3;
}

#paper_plane.readyToTakeOff {
  opacity: 1;
}
</style>