<template>
  <div>
    <p>{{ text }}</p>
    <input v-model="text">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: 'テキスト'
      }
    }
  }
</script>

<style lang="scss" scoped>
  p {
    color: orange;
  }
</style>
