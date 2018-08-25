<template>
  <div class="sidebar-wrapper">

    <side-user></side-user>
    <side-nav></side-nav>

  </div>
</template>

<script>
import sideUser from './sideUser';
import sideNav from './sideNav';

export default {
  name: 'wrapper',
  components: {
    'side-user':sideUser,
    'side-nav':sideNav
  },
  data() {
    return {


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

.sidebar-wrapper {
    overflow: auto;
    position: relative;
    height: calc(100% - 75px);
    z-index: 4;
    box-shadow: inset -1px 0px 0px 0px #cfcfca;
    width: 260px;
    transition-duration: .2s,.2s, .35s;
    transition-timing-function: linear,linear,ease;
}
</style>
