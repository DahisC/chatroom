<template>
  <div>
    <Navbar v-on:getNavbarHeight="getNavbarHeight" />
    <b-container :style="{ height: `calc(100vh - ${navbarHeight}px)` }">
      <b-row :style="{ height: '85%' }">
        <b-col>聊天室</b-col>
      </b-row>
      <b-row :style="{ height: '5%' }">
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

export default {
  components: {
    Navbar,
    Toolbar,
    ChatInput
  },
  data() {
    return {
      navbarHeight: 0
    }
  },
  mounted() {
    // console.log(io)
  },
  methods: {
    getNavbarHeight({ navbarHeight }) {
      this.navbarHeight = navbarHeight
    }
  }
}
</script>
