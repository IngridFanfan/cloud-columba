<!--解决main-panel background color 下方留白的问题： overflow: auto; -->

<template>
  <div class="main-panel">

    <nav-bar></nav-bar>
    <app-content></app-content>
    <app-footer></app-footer>

  </div>
</template>

<script>
import navBar from './navBar';
import appContent from './content';
import appFooter from './footer';

export default {
  name: 'mainPanel',
  components:{
    'nav-bar': navBar,
    'app-content': appContent,
    'app-footer': appFooter
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.main-panel {
    max-height: 100%;
    height: 100%;
    background-color: #f4f3ef;
    position: relative;
    z-index: 2;
    float: right;
    width: calc(100% - 260px);
    min-height: 100%;
    overflow: auto;
    transition-timing-function: linear,linear,ease;
}

</style>
