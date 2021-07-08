<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Topic 1</router-link> |
      <router-link to="/topic2">Topic 2</router-link> |
      <router-link to="/topic3">Topic 3</router-link> |
      <router-link to="/topic4">Topic 4</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
