<!--问题：如何只增加titlede字体大小？在form-wizard中使用style="font-size:1.2em;" 会增大所有的字-->

<template>
  <div class="content">

      <div class="container-fluid">
        <my-card :project="process">
          <!--vue wizard with i-button-->
          <form-wizard @on-complete="onComplete"
                                shape="tab"
                                color="#66615B"
                                :title="title"
                                :subtitle="subtitle"
                                >
                      <tab-content title="RULES"
                                   icon="ti-user">
                        <first-step></first-step>
                      </tab-content>
                      <tab-content title="MODULES"
                                   icon="ti-settings">
                        <second-step></second-step>
                      </tab-content>
                      <tab-content title="NETLIST"
                                   icon="ti-check">
                        <third-step></third-step>
                      </tab-content>

                      <template v-for="step in steps">
                        <i-button :slot="step.slotName" type="primary" shape="circle" size="large" class="btn-info">{{ step.stepName }}</i-button>
                      </template>
                  </form-wizard>

        </my-card>
      </div>

  </div>
</template>

<script>
import myCard from './card'
import firstStep from './firstStep'
import secondStep from './secondStep'
import thirdStep from './thirdStep'

export default {
  name: 'appContent',
  components:{
    'my-card': myCard,
    'first-step':firstStep,
    'second-step':secondStep,
    'third-step':thirdStep,
  },
  data () {
    return {
      title: 'Process Creating',
      subtitle:'Following these steps to create your design process',
      process:
        {
          title: '',
          subTitle: ''
        },
        steps:[
          {slotName:'prev',stepName:'Back'},
          {slotName:'next',stepName:'Next'},
          {slotName:'finish',stepName:'Done'}
        ]
    }
  },
  methods: {
    onComplete: function(){
     alert('Yay. Done!');
  }
 }
}
</script>

<style scoped>
.main-panel > .content {
    padding: 30px 15px 15px 15px;
    padding-left: 10%;
    min-height: calc(100% - 160px);
    /*background-color: #f4f3ef;*/
}
.container-fluid {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.container-fluid:before {
    display: table;
    content: " ";
}

/*from Wizard*/

pre {
  overflow: auto;
}
pre .string {
  color: #885800;
}
pre .number {
  color: blue;
}
pre .boolean {
  color: magenta;
}
pre .null {
  color: red;
}
pre .key {
  color: green;
}

.btn-info{
  min-width:140px;
  background-color: #68B3C8;
  border-color: #68B3C8
}
.btn-info:hover{
  background-color: #589ab3;
  border-color: #589ab3
}
</style>
