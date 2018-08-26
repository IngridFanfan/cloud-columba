<template>
  <a :href="href" :class="">
    <slot name="ti-clipboard"></slot>
    <slot></slot>
    <!--<slot name="notification"></slot>-->
  </a>
</template>

<!--如果a的class属性依据循环的li标签不同而不同，这里该怎么写？-->
<!--以及循环的时候，把其中一个p换成span。甚至是更多的内容？see navbar -> notification  -->

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
