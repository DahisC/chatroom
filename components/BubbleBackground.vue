<template>
  <div>
    <div class="bubble"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    let ss = document.styleSheets
    //a = ss.map(s => s)
    //console.log(a)
    console.log(ss)
    console.log(ss)
    console.log(Array.from(ss).map(s => Array.from(s.cssRules).map(cr => cr)))
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
  animation-name: floating;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  /* background-image: url('../assets/images/bubble-border.png');
  background-repeat: no-repeat; */
  background-color: rgba(255, 255, 255, 0.25);
}

@keyframes floating {
  0% {
    left: 25px;
    bottom: 0%;
    opacity: 0;
  }
  40% {
    left: 1px;
    bottom: 40%;
    opacity: 1;
  }
  80% {
    left: 25px;
    bottom: 80%;
    opacity: 1;
  }
  100% {
    left: 69px;
    bottom: 90%;
    opacity: 0;
  }
}
</style>
