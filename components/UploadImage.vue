<template>
  <Fragment>
    <b-img height="25px" src="../assets/icons/addImage-icon.svg" @click="isModalVisible = true" />
    <input id="uploadImage" type="file" hidden @change="onUploadImage" accept="image/*" />
    <b-modal
      title="上傳圖片"
      :visible="isModalVisible"
      @hidden="
        () => {
          isModalVisible = false
          previewImage = {}
        }
      "
      header-bg-variant="color1"
      header-text-variant="color4"
      body-bg-variant="color4"
      body-text-variant="color1"
      footer-bg-variant="color4"
      footer-text-variant="color1"
    >
      <b-aspect aspect="1:1" :style="{ border: '5px dashed var(--color1)', borderRadius: '5px' }">
        <div
          class="d-flex justify-content-center align-items-center flex-column h-100 position-relative"
          @click="onClick"
        >
          <template v-if="Object.keys(previewImage).length !== 0">
            <div
              class="position-absolute w-100 p-2 text-center"
              :style="{
                left: 0,
                top: 0,
                backgroundColor: 'var(--color1)',
                color: 'var(--color4)',
                opacity: 0.75
              }"
            >{{ previewImage.name }} ({{ previewImage.type }})</div>
            <b-img v-if="isUploadImage" :src="previewImage.base64" class="mw-100 mh-100" />
            <span v-else>格式錯誤，請選擇其它圖片</span>
          </template>
          <template v-else>
            <span class="my-3">選擇一張圖片</span>
            <!-- <span class="my-3">或者拖曳圖片到此區域內</span> -->
          </template>
        </div>
      </b-aspect>
      <template v-slot:modal-footer>
        <b-button variant="color1" @click="uploadImage" :disabled="!isUploadImage">傳送</b-button>
      </template>
    </b-modal>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  components: {
    Fragment
  },
  data() {
    return {
      isModalVisible: false,
      previewImage: {}
    }
  },
  methods: {
    onClick() {
      const t = document.querySelector('#uploadImage')
      t.click()
    },
    onUploadImage(e) {
      try {
        const vm = this
        const file = e.target.files[0]
        const fr = new FileReader()
        fr.readAsDataURL(file)
        fr.onload = () => {
          vm.previewImage = {
            name: file.name,
            type: file.type,
            base64: fr.result
          }
        }
      } catch (err) {
        // 如果在選取圖片的階段按下取消按紐時，這邊會接到 err
        // console.log(err)
      }
    },
    uploadImage() {
      const socket = this.$socket.client
      socket.emit('/messages#create', {
        message: { type: 'IMAGE', image: this.previewImage }
      })
      this.isModalVisible = false
    }
  },
  computed: {
    isUploadImage() {
      return /^image.*/.test(this.previewImage.type)
    }
  }
}
</script>
