<template>
  <div>
    <Navbar v-on:getNavbarHeight="getNavbarHeight" />
    <b-container
      id="app"
      :style="{ height: `calc(100vh - ${navbarHeight}px)` }"
    >
      <b-row :style="{ height: '82.5%' }" class="p-1">
        <Chatroom />
      </b-row>
      <b-row class="d-flex align-items-center" :style="{ height: '7.5%' }">
        <Toolbar />
      </b-row>
      <b-row>
        <ChatInput />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Toolbar from '~/components/Toolbar'
import ChatInput from '~/components/ChatInput'
import Chatroom from '~/components/Chatroom'

export default {
  components: {
    Navbar,
    Toolbar,
    ChatInput,
    Chatroom
  },
  data() {
    return {
      navbarHeight: 0
    }
  },
  methods: {
    getNavbarHeight({ navbarHeight }) {
      this.navbarHeight = navbarHeight
    }
  },
  middleware: 'authenticated'
}
</script>

<style scoped></style>
