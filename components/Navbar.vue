<template>
  <div>
    <b-navbar type="dark" variant="color1">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <OnlineUsers />
          <Settings />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import OnlineUsers from '~/components/OnlineUsers'
import Settings from '~/components/Settings'

export default {
  components: {
    OnlineUsers,
    Settings
  },
  mounted() {
    this.$emit('getNavbarHeight', { navbarHeight: this.$el.offsetHeight })
  }
}
</script>
