<template>
  <b-col>
    <div :style="{ position: 'relative' }">
      <b-form-input v-model="inputMessage" @keyup.enter="createMessage" />
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
          :style="{ height: 'inherit', padding: '10px' }"
          @click="createMessage"
        />
        <!-- <b-spinner small type="grow" variant="color2"></b-spinner> -->
      </span>
    </div>
  </b-col>
</template>

<script>
export default {
  data() {
    return {
      inputMessage: ''
    }
  },
  methods: {
    createMessage() {
      this.$store.dispatch('chatMessage/createMessage', {
        message: this.inputMessage
      })
      this.inputMessage = ''
    }
  }
}
</script>
