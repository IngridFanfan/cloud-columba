<template>
  <div class="wrapper">
    <side-bar></side-bar>
    <main-panel></main-panel>

  </div>
</template>

<script>
import sideBar from './navigation/sideBar';
import mainPanel from './display/mainPanel';


export default {
  name: 'wrapper',
  components: {
    'side-bar': sideBar,
    'main-panel': mainPanel
  },
  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >


.wrapper {
  min-height: 100vh;
  position: relative;
  top: 0;
  height: 100vh;
  background-color: white;
}
.wrapper:after {
  display: table;
  content: " ";
  clear: both;
}
</style>
