<template>
  <div>
    <div
      v-for="(bubble, i) of bubbleMax"
      :key="i"
      :id="`floating${i + 1}`"
      class="bubble"
    ></div>
    <!-- <div class="bubble"></div> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
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

      //   const notChosenNumbers = new Array(10)
      //     .fill(0)
      //     .map((x, i) => i + 1)
      //     .filter(x => !new Set(vm.bubbles).has(x))

      const notChosenNumbers = Array.from(new Array(vm.bubbleMax))
        .map((x, i) => i + 1)
        .filter(x => !new Set(vm.bubbles).has(x))
      console.log(notChosenNumbers)

      const chosenNumber =
        notChosenNumbers[range(0, notChosenNumbers.length - 1)]

      console.log(chosenNumber)

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
        console.log('---BEFORE DELETE---', ss)
        const cssRuleIndex = Array.from(
          document.styleSheets[6].cssRules
        ).findIndex(
          t =>
            t instanceof CSSStyleRule &&
            t.selectorText.includes(`floating${chosenNumber}`)
        )
        const keyframesRuleIndex = Array.from(
          document.styleSheets[6].cssRules
        ).findIndex(
          t =>
            t instanceof CSSKeyframesRule &&
            t.name.includes(`floating${chosenNumber}`)
        )

        ss.deleteRule(cssRuleIndex)
        ss.deleteRule(keyframesRuleIndex)

        console.log('---AFTER DELETE---', ss)

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
}

div.bubble {
  position: absolute;
  /* width: 50px;
  height: 50px; */
  left: 0;
  bottom: 0px;

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
  background-color: rgba(255, 255, 255, 0.75);
}
</style>
