<template>
  <div id="app">
    <side-Bar></side-Bar>
  </div>
</template>

<script>
import sideBar from './components/sideBar';

export default {
  name: 'App',
  components:{
    'side-Bar': sideBar
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
