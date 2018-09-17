<template>
       <Panel class="netlistCard" >
         {{module.name}}
         <div slot="content">
           <Collapse  class="itemFromGroupe">
             <Panel v-for="(child,index) in module.children" :key="module.name+'_'+index">
               {{module.name+'_'+index}}
             </Panel>
           </Collapse>
         </div>
       </Panel>
</template>

<script>


export default {
  name: 'netlistCard',
  props:{
    module:{
      type:Object,
      require:true
    },
    modules:{
      type:Array,
      require:true
    }

  },
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style>
.ivu-card-head > p > span{
  font-size: 1.1em;
  font-weight: lighter;
  color: rgb(102, 97, 91);
}

</style>

<style scoped>
.netlistCard{
  width:100%;
  max-height: 520px;
  margin: 5px 0px 15px 0px;
}

</style>
