<template>
  <BubbleBackground>
    <nuxt />
  </BubbleBackground>
</template>

<script>
import BubbleBackground from '~/components/BubbleBackground'

export default {
  components: {
    BubbleBackground
  }
}
</script>

<style>
* {
  font-family: Microsoft JhengHei;
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0);
}
::-webkit-scrollbar-thumb {
  background-color: var(--color1);
  border-radius: 10px;
}
</style>
