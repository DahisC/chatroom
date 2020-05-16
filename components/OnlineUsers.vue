<template v-slot:button-content>
  <b-nav-item-dropdown right no-caret>
    <b-dd-header class="text-center">線上的使用者</b-dd-header>
    <b-dd-divider />
    <template v-slot:button-content>
      <b-icon icon="person-lines-fill" class="align-bottom"></b-icon>
      <b-badge variant="color5">
        <span :style="{ color: 'var(--color1)' }">{{ onlineUsers.length }}</span>
      </b-badge>
    </template>
    <b-dropdown-item v-for="u in onlineUsers" :key="u" href="#">{{ u }}</b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import { BIcon, BIconPersonLinesFill } from 'bootstrap-vue'

export default {
  components: {
    BIcon,
    BIconPersonLinesFill
  },
  computed: {
    onlineUsers() {
      return this.$store.state.chatroom.onlineUsers
    }
  }
}
</script>
