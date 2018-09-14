<template>
  <div class="thirdStep">
    <!--
    add New Module的测试
    <add-new-module></add-new-module>
    -->

    <!--
    cascader的测试
    <module-cascader></module-cascader>
    -->

  <flow-content :title="title">


  </flow-content>



  </div>
</template>

<script>
import addNewModule from '../component/newModule'
import moduleCascader from '../component/cascader'
import flowContent from '../component/flowContent'


export default {
  name: 'thirdStep',
  components: {
    addNewModule,
    moduleCascader,
    flowContent
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
        }
    }
  }
}
</script>

<style>

</style>
