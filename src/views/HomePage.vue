<template>
    <div class="home">
      <h1 class="title">英語フレーズサイト</h1>
      
      <div class="category-list">
        <router-link to="/daily" class="category-card">
          <div class="category-title">日常英会話フレーズ集</div>
        </router-link>
        
        <router-link to="/slang" class="category-card">
          <div class="category-title">スラング&カジュアル英語</div>
        </router-link>
        
        <router-link to="/travel" class="category-card">
          <div class="category-title">お店や困ったときに使える英語</div>
        </router-link>
        
        <router-link to="/idioms" class="category-card">
          <div class="category-title">英語のイディオム</div>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>
  .home {
    background: linear-gradient(to right, #ff7e5f, #feb47b);
    text-align: center;
    padding: 50px;
  }
  
  .title {
    font-size: 3em;
    color: white;
    font-weight: bold;
    margin-bottom: 40px;
  }
  
  .category-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-items: center;
  }
  
  .category-card {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    text-decoration: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  
  .category-card:hover {
    transform: scale(1.05);
  }
  
  .category-title {
    font-size: 1.5em;
    font-weight: bold;
    color: #ff7e5f;
  }
  </style>
  