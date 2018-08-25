<template>
  <div class="sidebar">

    <logo :href="href"></logo>
    <sidebar-wrapper></sidebar-wrapper>

  </div>
</template>

<script>


import logo from './logo';
import sidebarWrapper from './sidebarWrapper';

export default {
  name: 'sidebar',
  components:{

    'logo': logo,
    'sidebar-wrapper':sidebarWrapper

  },
  data () {
    return {
        href:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  max-height: 100%;
  height: 100%;
  width: 260px;
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  overflow: hidden;
  background-color: #66615b;
}

</style>
