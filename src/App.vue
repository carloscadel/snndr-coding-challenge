<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from "@/views/Home";
export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: lightslategrey;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
