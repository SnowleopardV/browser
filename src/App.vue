<template>
  <div id="app">
    <AnalyseCart></AnalyseCart>
  </div>
</template>

<script>
import AnalyseCart from './components/AnalyseCart.vue'
export default {
  name: 'App',
  components: { AnalyseCart }
}
</script>

<style>
html, body {
  height: 100%;
  background: #100C2A;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 0px; */
  padding: 30px;
  /* background: black; */
  height: 100%
}
</style>
