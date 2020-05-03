<template>
  <div class="bubble_div">
    <slot></slot>
  </div>
</template>

<style scoped>
div.bubble_div {
  width: 90%;
  height: 75%;
  background-image: url('../assets/images/bubble-bg.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
