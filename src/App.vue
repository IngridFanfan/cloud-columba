<template>
  <div id="app">
    <wrapper></wrapper>
  </div>
</template>

<script>
import wrapper from './components/wrapper';
import './assets/sass/themify-icons/themify-icons.css'; //import icons globally here. But dont't know why the following command does't work. Both 'themify-icons.css' are the same.
//import './assets/css/themify-icons.css';

export default {
  name: 'App',
  components:{
    'wrapper': wrapper
  }
}
</script>

<style>
#app {
  background-color: #66615b; /*color和background-color都不管用*/
  font-size: 14px;
  font-family: 'Muli', Arial, sans-serif;
  line-height: 1.42857143;
  margin: 0;
  display: block;
}
</style>
