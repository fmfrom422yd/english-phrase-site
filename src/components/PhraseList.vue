<template>
  <div>
    <h1>英語フレーズ集</h1>
    <ul>
      <li v-for="phrase in phrases" :key="phrase.id">
        <router-link :to="'/phrase/' + phrase.id">{{ phrase.phrase }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import phrases from '../assets/phrases.json';

export default {
  data() {
    return {
      phrases: phrases
    };
  }
};
</script>
