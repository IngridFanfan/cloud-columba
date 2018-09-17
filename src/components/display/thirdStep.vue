<template>
<div class="thirdStep">

  <!--
    cascader的测试
    <module-cascader></module-cascader>-->



  <flow-content :title="title">

    <i-input class="gruppeFilter" />

    <Collapse simple class="netlistCard">
      <Panel class="netlistCard" v-for="module in modules" >
        {{module.name}}
        <div slot="content">
          <Collapse class="itemFromGroupe">
            <Panel v-for="(child,index) in module.children" :key="module.name+'_'+index">
              {{module.name+'_'+index}}
              <div slot="content">
                <connection-selector slot="content" :targetIndex="module.netList" :modules="modules" :module="child"/>
              </div>
            </Panel>
          </Collapse>
        </div>
      </Panel>

    </Collapse>
  </flow-content>



</div>
</template>

<script>
import flowContent from '../component/flowContent'
import connectionSelector from '../component/transfer'

const uuidv1 = require('uuid/v1');

export default {
  name: 'thirdStep',
  props: {
    modules: {
      type: Array,
      required: true,

    }
  },
  components: {
    flowContent,
    connectionSelector

  },
  data() {
    return {
      title: {
        header: {
          part1: 'Please use ',
          part2: '+',
          part3: ' to create new conntections for NETLIST'
        },
        description: 'Here are some descriptions about these NETLIST which you should read them first.'
      },
      moduleRange: []
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.gruppeFilter{
  margin-bottom: 8px;
}
</style>
