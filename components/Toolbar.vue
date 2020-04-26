<template>
  <b-col id="toolbar">
    <b-icon icon="image-fill" scale="0.75"></b-icon>
    <b-icon icon="image-fill" scale="0.75"></b-icon>
  </b-col>
</template>

<script>
import { BIcon, BIconImageFill, BIconFileEarmarkPlus } from 'bootstrap-vue'
export default {
  components: {
    BIcon,
    BIconImageFill,
    BIconFileEarmarkPlus
  }
}
</script>

<style scoped>
#toolbar > svg {
  width: auto;
  height: 100%;
  color: var(--color1);
}

#toolbar > svg:hover {
  color: var(--color2);
}
</style>
