<template>
  <b-col>
    <div :style="{ position: 'relative' }">
      <b-form-input id="input-default" />
      <span
        :style="{ position: 'absolute', right: '0', top: '0', height: '100%' }"
      >
        <b-img
          src="../assets/icons/paper-plane.svg"
          :style="{ height: 'inherit', padding: '10px' }"
        />
      </span>
    </div>
  </b-col>
</template>
