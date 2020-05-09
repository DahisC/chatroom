<template>
  <b-col id="toolbar">
    <!-- <b-icon icon="image" scale="0.75"></b-icon>
    <b-icon icon="folder-plus" scale="0.75"></b-icon>-->
    <Emoji />
    <b-img height="25px" src="../assets/icons/addFile-icon.svg" />
    <b-img height="25px" src="../assets/icons/addImage-icon.svg" />
    <!--  -->
  </b-col>
</template>

<script>
import Emoji from '~/components/Emoji'

export default {
  components: { Emoji }
}
</script>

<style>
#toolbar > img {
  margin: 0 10px;
  cursor: pointer;
}

#toolbar > img:hover {
  opacity: 0.5;
}
</style>
