<template>
  <div id="login">
    <BubbleDiv>
      <BubbleBtn text="測試" />
    </BubbleDiv>
  </div>
</template>

<script>
import BubbleDiv from '~/components/BubbleDiv'
import BubbleBtn from '~/components/BubbleBtn'

export default {
  components: {
    BubbleDiv,
    BubbleBtn
  }
}
</script>

<style scoped>
div#login {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
