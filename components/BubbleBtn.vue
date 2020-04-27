<template>
  <button :class="{ dark }" @click="clickEvent">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    dark: Boolean,
    text: String,
    clickEvent: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style scoped>
button {
  border: 1px solid var(--color2);
  border-radius: 7.5px;
  padding: 15px 60px;
  background-color: white;
  color: var(--color2);
  box-shadow: 0px 7.5px 0px 0px var(--color2);
  font-weight: bolder;
  outline: none;
}

button:active {
  box-shadow: 0px 0px 0px 0px white;
  margin-top: 7.5px;
}

button.dark {
  background-color: var(--color2);
  border: 1px solid white;
  color: white;
}
</style>
