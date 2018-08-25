<template>
  <a :href="href" class="collapsed">
    <slot name="ti-clipboard"></slot>
    <slot></slot>
  </a>
</template>


<script>
export default {
  name: 'navPage',
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

a {
  color: #FFFFFF;
  margin: 10px 0px 0px;
  padding-left: 25px;
  padding-right: 25px;
  opacity: .7;
  white-space: nowrap;
  text-decoration:none; /*CSS下划线效果：无下划线*/
}
</style>
