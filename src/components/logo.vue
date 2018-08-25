<template>
  <div class="logo">
  <!--  <a :href="href" class="simple-text logo-mini">
    <slot name="miniText">Mini Logo</slot>
  </a>-->
  <a :href="href" class="simple-text logo-normal">
    <slot>Cloud Columba</slot>
  </a>

  </div>
</template>

<script>
export default {
  name: 'logo',
  props:{
     href:{
       type:String,
       default:"#"
     }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.logo {
    padding: 18px 0px;
    margin: 0;
    box-shadow: inset -1px 0px 0px 0px #cfcfca;
    height: 75px;
    position: relative;
    z-index: 4;
    display: block;
}

.logo:before {
    content: "";
    position: absolute;
    bottom: 0px;
    right: 15px;
    width: calc(100% - 30px);
    height: 1px;
    background-color: rgba(255, 255, 255, 0.3);
}
.simple-text {
    text-transform: uppercase;
    padding: 4px 0px;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    white-space: nowrap;
    color: #FFFFFF;
}
a.logo-normal {
    display: block;
    opacity: 1;
    transform: translate3d(0px, 0, 0);
    transition: all 150ms ease-in;
}
a {
text-decoration:none; /*CSS下划线效果：无下划线。不知道为什么没有这个css*/
}
</style>
