<style>
  #editor-component h2 {
    color: red;
  }
</style>

<template>
  <div id="editor-component">
    <h2>{{msg}}</h2>
    <button class="btn" @click="alert">{{msg}}</button>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        msg: 'Editor Component'
      }
    },

    methods: {
      alert() {
        alert('hello world');
      }
    }
  }
</script>
