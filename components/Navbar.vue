<template>
  <div>
    <b-navbar type="dark" variant="color1">
      <b-navbar-brand href="#">
        <BIconChat scale="1.2" />
      </b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <OnlineUsers />
        <!-- <Settings /> -->
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { BIcon, BIconChat } from 'bootstrap-vue'
import OnlineUsers from '~/components/OnlineUsers'
// import Settings from '~/components/Settings'

export default {
  components: {
    OnlineUsers,
    BIcon,
    BIconChat
    // Settings
  },
  mounted() {
    this.$emit('getNavbarHeight', { navbarHeight: this.$el.offsetHeight })
  }
}
</script>
