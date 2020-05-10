<template>
  <b-col id="toolbar">
    <!-- <b-icon icon="image" scale="0.75"></b-icon>
    <b-icon icon="folder-plus" scale="0.75"></b-icon>-->
    <Emoji />
    <UploadImage />
    <b-img height="25px" src="../assets/icons/addFile-icon.svg" />

    <!--  -->
  </b-col>
</template>

<script>
import Emoji from '~/components/Emoji'
import UploadImage from '~/components/UploadImage'

export default {
  components: { Emoji, UploadImage }
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
