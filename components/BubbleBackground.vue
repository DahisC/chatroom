<template>
  <div>
    <div v-for="(bubble, i) in bubbleArray" :key="i" class="bubble"></div>
    <!-- <div class="bubble"></div> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bubbleArray: [{ size: 30 }, { size: 30 }, { size: 30 }]
    }
  },
  mounted() {
    let bubbleArray = [{ size: 30 }, { size: 30 }, { size: 30 }]
    let ss = document.styleSheets
    console.log(ss)
    console.log(this.$options._scopeId)

    //a = ss.map(s => s)
    //console.log(a)
    // console.log(ss)
    // console.log(ss)
    // console.log(Array.from(ss).map(s => Array.from(s.cssRules).map(cr => cr)))
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
  width: 50px;
  height: 50px;
  left: 0;
  bottom: 0px;

  border-radius: 50%;
  z-index: 999;
  opacity: 1;
  /* animation-name: floating; */
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  /* background-image: url('../assets/images/bubble-border.png');
  background-repeat: no-repeat; */
  background-color: rgba(255, 255, 255, 1);
}

@keyframes floating {
  0% {
    left: 0px;
    bottom: 0%;
  }
  100% {
    left: 0px;
    bottom: 90%;
  }
}

@keyframes floating2 {
  0% {
    left: 50px;
    bottom: 0%;
  }
  100% {
    left: 50px;
    bottom: 90%;
  }
}

@keyframes floating3 {
  0% {
    left: 50px;
    bottom: 0%;
  }
  100% {
    left: 50px;
    bottom: 90%;
  }
}
</style>
