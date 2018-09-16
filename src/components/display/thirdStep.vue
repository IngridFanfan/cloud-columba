<template>
  <div class="thirdStep">

    <!--
    cascader的测试
    <module-cascader></module-cascader>-->



  <flow-content :title="title">

  <netlist-card v-for="moduleList in moduleLists" :moduleName="moduleList"></netlist-card>
  </flow-content>



  </div>
</template>

<script>
import addNewModule from '../component/newModule'
import netlistCard from '../component/netlistCard'
import flowContent from '../component/flowContent'


export default {
  name: 'thirdStep',
  props: {
    modules:{
      type:Object,
      required:true,

    }
  },
  components: {
    flowContent,
    netlistCard
  },
  data () {
    return {
      title:
        {
          header:{
            part1:'Please use ',
            part2:'+',
            part3:' to create new conntections for NETLIST'
          },
          description: 'Here are some descriptions about these NETLIST which you should read them first.'
        },
        moduleLists:['inlet','chamber','ring','outlet']
    }
  }
}
</script>

<style>

</style>
