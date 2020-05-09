<template>
  <Fragment>
    <b-img
      id="popover-emoji"
      height="30px"
      src="../assets/icons/emoji-icon.svg"
    />
    <b-popover target="popover-emoji" triggers="hover" placement="top">
      <template v-slot:title>Emoji</template>
      <b-container fluid>
        <b-row>
          <b-col
            class="p-0 text-center"
            v-for="emoji in emojiList"
            :key="emoji"
            cols="2"
            @click="inputEmoji(emoji)"
          >
            <label for="inputMessage" class="emoji m-0">{{ emoji }}</label>
          </b-col>
        </b-row>
      </b-container>
    </b-popover>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  components: {
    Fragment
  },
  data() {
    return {
      emojiList: [
        '😀',
        '😁',
        '😂',
        '🤣',
        '😃',
        '😄',
        '😅',
        '😆',
        '😉',
        '😊',
        '😋',
        '😎',
        '😍',
        '😘',
        '🥰',
        '😗',
        '😙',
        '😚',
        '🙂',
        '🤗',
        '🤩',
        '🤔',
        '🤨',
        '😐',
        '😑',
        '😶',
        '🙄',
        '😏',
        '😣',
        '😥',
        '😮',
        '🤐',
        '😯',
        '😪',
        '😫',
        '😴',
        '😌',
        '😛',
        '😜',
        '😝',
        '🤤',
        '😒',
        '😓',
        '😔',
        '😕',
        '🙃',
        '🤑',
        '😲',
        '☹️',
        '🙁',
        '😖',
        '😞',
        '😟',
        '😤',
        '😢',
        '😭',
        '😦',
        '😧',
        '😨',
        '😩',
        '🤯',
        '😬',
        '😰',
        '😱',
        '🥵',
        '🥶',
        '😳',
        '🤪',
        '😵',
        '😡',
        '😠',
        '🤬',
        '😷',
        '🤒',
        '🤕',
        '🤢',
        '🤮',
        '🤧',
        '😇',
        '🤠',
        '🤡',
        '🥳',
        '🥴',
        '🥺',
        '🤥',
        '🤫',
        '🤭',
        '🧐',
        '🤓',
        '😈',
        '👿',
        '👹',
        '👺',
        '💀',
        '👻',
        '👽',
        '🤖',
        '💩',
        '😺',
        '😸',
        '😹',
        '😻',
        '😼',
        '😽',
        '🙀',
        '😿',
        '😾'
      ]
    }
  },
  methods: {
    inputEmoji(emoji) {
      this.$store.commit('chatroom/inputMessage', { emoji })
    }
  }
}
</script>

<style scoped>
.emoji {
  cursor: pointer;
  font-size: 1.5em;
  border-radius: 5px;
  user-select: none;
}

.emoji:hover {
  background-color: var(--color3);
}
</style>
