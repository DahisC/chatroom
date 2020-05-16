<template>
  <div class="position-relative">
    <div v-for="(bubble, i) of bubbleMax" :key="i" :id="`floating${i + 1}`" class="bubble"></div>
    <!-- <div class="bubble"></div> -->
    <slot></slot>
    <div class="position-absolute mb-1 mr-2" :style="{ right: 0, bottom: 0 }">
      <span :style="{ color: 'var(--color1)' }">
        <BIconCodeSlash class="mr-2" />Dahis
        <a href="https://github.com/DahisC/chatroom" target="_blank">
          <small>原始碼</small>
        </a>
      </span>
      <span :style="{ color: 'var(--color1)' }">
        <BIconBrush class="mr-2" />fish
        <a href="https://www.behance.net/gallery/84720235/THE-F2E-7-UI" target="_blank">
          <small>設計稿</small>
        </a>
      </span>
    </div>
  </div>
</template>

<script>
import { BIcon, BIconBrush, BIconCodeSlash } from 'bootstrap-vue'

export default {
  components: {
    BIcon,
    BIconBrush,
    BIconCodeSlash
  },
  data() {
    return {
      bubbles: [],
      bubbleMax: 10
    }
  },
  mounted() {
    setInterval(() => {
      this.blowABubble()
    }, 3000)
  },
  methods: {
    blowABubble() {
      const vm = this
      const isDev = process.env.NODE_ENV === 'Development'
      const ss = document.styleSheets[isDev ? 6 : 0]
      if (vm.bubbles.length >= vm.bubbleMax) return

      /**
       * 隨機產生範圍內的整數
       */
      function range(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }

      const size = range(20, 100) // 先產生隨機大小的 bubble
      const duration = range(15, 30) // 再給予動畫持續時間與銷毀時間

      /**
       * 製作泡泡
       */
      function makeAbubble(id) {
        return `
            @-webkit-keyframes floating${id} {
                0% {
                    left: calc(${range(0, 100)}% - ${size}px);
                    bottom: 0%;
                    opacity: 0.1;
                }
                60% {
                    left: calc(${range(0, 100)}% - ${size}px);
                    bottom: ${range(40, 60)}%;
                    opacity: 0.75;
                }
                100% {
                    left: calc(${range(0, 100)}% - ${size}px);
                    bottom: ${range(80, 100)}%;
                    opacity: 0.1
                }
            }
        `
      }

      const notChosenNumbers = Array.from(new Array(vm.bubbleMax))
        .map((x, i) => i + 1)
        .filter(x => !new Set(vm.bubbles).has(x))

      const chosenNumber =
        notChosenNumbers[range(0, notChosenNumbers.length - 1)]

      vm.bubbles.push(chosenNumber)

      ss.insertRule(makeAbubble(chosenNumber))
      ss.addRule(
        `#floating${chosenNumber}`,
        `
        animation-duration: ${duration}s;
        animation-name: floating${chosenNumber};
        width: ${size}px;
        height: ${size}px;
        `
      )

      setTimeout(() => {
        const cssRuleIndex = Array.from(ss.cssRules).findIndex(
          t =>
            t instanceof CSSStyleRule &&
            t.selectorText.includes(`floating${chosenNumber}`)
        )
        const keyframesRuleIndex = Array.from(ss.cssRules).findIndex(
          t =>
            t instanceof CSSKeyframesRule &&
            t.name.includes(`floating${chosenNumber}`)
        )

        ss.deleteRule(cssRuleIndex)
        ss.deleteRule(keyframesRuleIndex)

        vm.bubbles = vm.bubbles.filter(t => t !== chosenNumber)
      }, duration * 1000)
    }
  }
}
</script>

<style scoped>
div {
  background-color: #c7daf2;
  position: relative;
  overflow-x: hidden;
}

div.bubble {
  position: absolute;
  /* width: 50px;
  height: 50px; */

  border-radius: 50%;
  z-index: 999;
  opacity: 1;
  /* animation-name: floating; */
  /* animation-duration: 5s; */
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  /* animation-fill-mode: forwards; */
  /* background-image: url('../assets/images/bubble-border.png');
  background-repeat: no-repeat; */
  background-color: rgba(111, 160, 224, 0.25);
  pointer-events: none;
}
</style>
