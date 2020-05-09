<template>
  <b-col
    id="chatroom"
    class="px-3 position-relative"
    v-on:scroll.passive="onScroll"
  >
    <Message v-for="(m, i) of messages" :key="i" :message="m" />
    <transition name="sticker-fade">
      <div
        v-if="!isSticky"
        id="sticker"
        class="position-sticky text-center small p-1"
        :style="{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          bottom: 0,
          left: 0,
          borderRadius: '10px 10px 0 0',
          color: 'white',
          cursor: 'pointer'
        }"
        @click="sticking"
      >
        時光器飛快地轉動著。小心，別讓其他人看到你！
      </div>
    </transition>
  </b-col>
</template>

<script>
import _ from 'lodash'
import Message from './Message'

export default {
  components: {
    Message
  },
  data() {
    return {
      isSticky: true
    }
  },
  methods: {
    onScroll() {
      const e = this.$el
      if (Math.ceil(e.scrollTop + e.clientHeight) >= e.scrollHeight) {
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    },
    sticking() {
      const e = this.$el
      e.scrollTop = e.scrollHeight - e.clientHeight
    }
  },
  computed: {
    messages() {
      // return this.$store.state.chatroom.messages
      // cloneDeep 才可以在 watch 中正確取得改變前後的陣列
      return _.cloneDeep(this.$store.state.chatroom.messages)
    }
  },
  watch: {
    messages(next, prev) {
      const vm = this
      const e = this.$el
      if (next.legnth !== prev.length) {
        this.$nextTick(() => {
          if (vm.isSticky) vm.sticking()
        })
      }
    }
  }
}
</script>

<style scoped>
div#chatroom {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
}

.sticker-fade-enter-active {
  transition: opacity 0.5s ease;
}
.sticker-fade-enter {
  opacity: 0;
}
</style>
