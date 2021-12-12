<template>
  <div class="page-content">
    <div class="nav-wrapper">
      <router-link to="/">
        <img alt="Joke logo" src="./assets/logo.png" class="logo" />
      </router-link>
      <div class="nav">
        <router-link to="/jokes">Jokes</router-link>
        <router-link to="/random-jokes">Random Jokes</router-link>
      </div>
    </div>
    <div class="content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/css-reset";
@import "./App";
</style>
