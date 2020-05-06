<template>
  <b-col id="toolbar">
    <!-- <b-icon icon="image" scale="0.75"></b-icon>
    <b-icon icon="folder-plus" scale="0.75"></b-icon>-->
    <b-img height="30px" src="../assets/icons/emoji-icon.svg" id="popover-target-1" />
    <b-img height="25px" src="../assets/icons/addFile-icon.svg" />
    <b-img height="25px" src="../assets/icons/addImage-icon.svg" />
    <!--  -->
    <b-popover target="popover-target-1" triggers="hover" placement="top">
      <template v-slot:title>😀</template>
      <p>😀</p>
    </b-popover>
  </b-col>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>
#toolbar > img {
  margin: 0 10px;
}

#toolbar > img:hover {
  opacity: 0.5;
}
</style>
