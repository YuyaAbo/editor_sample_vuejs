<template>
  <div id="editor-component">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Editor Component'
      }
    }
  }
</script>

<style lang="scss" scoped>
  #editor-component h2 {
    color: red;
    font-family: 'YuGothic';
  }
</style>
