<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  width: 75%;
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
