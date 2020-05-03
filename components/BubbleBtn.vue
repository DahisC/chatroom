<template>
  <div class="d-flex justify-content-center align-items-center">
    <button :class="{ disabled, dark }" @click="clickEvent">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    dark: Boolean,
    text: String,
    clickEvent: {
      type: Function,
      default: () => {
        console.warn('<BubbleBtn> The button needs a click function.')
      }
    }
  }
}
</script>

<style scoped>
div {
  height: 100px;
}

button {
  border: 1px solid var(--color2);
  border-radius: 7.5px;
  padding: 2vh 6vw;
  background-color: white;
  color: var(--color2);
  box-shadow: 0px 5px 0px 0px var(--color2);
  font-weight: bolder;
  outline: none;
}

button.disabled {
  opacity: 0.5;
}

button:active {
  margin-top: 7.5px;
  box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0);
}

button.dark {
  background-color: var(--color2);
  border: 1px solid white;
  color: white;
}
</style>
