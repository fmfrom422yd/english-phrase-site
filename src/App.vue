<template>
  <div>
    <nav>
      <router-link to="/">ホーム</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  background: #333;
  padding: 10px;
}
nav a {
  color: white;
  text-decoration: none;
  margin-right: 15px;
}
</style>
