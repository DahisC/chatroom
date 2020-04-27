<template>
  <b-col id="toolbar">
    <b-icon icon="image" scale="0.75"></b-icon>
    <b-icon icon="folder-plus" scale="0.75"></b-icon>
  </b-col>
</template>

<script>
import {
  BIcon,
  BIconImage,
  BIconFileEarmarkPlus,
  BIconFolderPlus
} from 'bootstrap-vue'
export default {
  components: {
    BIcon,
    BIconImage,
    BIconFileEarmarkPlus,
    BIconFolderPlus
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
