<template>
  <div v-if="phrase">
    <h1>{{ phrase.phrase }}</h1>
    <p><strong>意味：</strong> {{ phrase.meaning }}</p>
    <p><strong>例文：</strong> {{ phrase.example }}</p>
    <router-link to="/">戻る</router-link>
  </div>
</template>

<script>
import phrases from '../assets/phrases.json';

export default {
  data() {
    return {
      phrase: null
    };
  },
  created() {
    const id = this.$route.params.id;
    this.phrase = phrases.find(p => p.id == id);
  }
};
</script>
