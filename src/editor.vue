<template>
  <div>
    <h2>{{ msg }}</h2>
    <button @click="addHeading">見出し</button>
    <button @click="addText">テキスト</button>
    <template v-for="part in parts">
      <component :is="part.type"></component>
    </template>
  </div>
</template>

<script>
import HeadingComponent from './components/heading.vue'
import TextComponent from './components/text.vue'

export default {
  components: {
    HeadingComponent,
    TextComponent
  },
  data() {
    return {
      msg: 'Editor Component',
      parts: [
        { type: 'heading-component' }
      ],
      counter: 0
    }
  },
  methods: {
    addHeading() {
      this.parts.push({ type: 'heading-component' });
    },
    addText() {
      this.parts.push({ type: 'text-component' });
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  color: red;
  font-family: 'YuGothic';
}
</style>
