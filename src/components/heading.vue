<template>
  <div>
    <h2>{{ text }}</h2>
    <input v-model="text">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: '見出し'
      }
    }
  }
</script>

<style lang="scss" scoped>
  h2 {
    color: blue;
  }
</style>
