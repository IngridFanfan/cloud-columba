<template>
  <div class="content">

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-11 col-md-offset-2">

        <my-card :project="process">
    <form-wizard @on-complete="onComplete"
                                        shape="tab"
                                        color="#66615B"
                                        :title="title"
                                        :subtitle="subtitle"
                                        :start-index="2">
      <tab-content title="RULES"
                   icon="ti-user"
                  :before-change="()=>validateStep('step1')">
        <first-step ref="step1" :rules="formData.data.rules"></first-step>
      </tab-content>

      <tab-content title="MODULES"
                   icon="ti-settings"
                   :before-change="()=>ranking()">
        <second-step :modules="formData.subModules"></second-step>
      </tab-content>

      <tab-content title="NETLIST"
                   icon="ti-check">
        <third-step :modules="formData.subModules"></third-step>
      </tab-content>

    </form-wizard>

        </my-card>
      </div>
    </div>
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
        formData:{
          type:{},
          name:'',
          data:{
            rules:{},
            time:{}
          },
          subModules:[],
          netlist:{}
        }
    }
  },
  methods: {
    onComplete: function(){
     alert('Yay. Done!');
  },
  validateStep(name) {
      var refToValidate = this.$refs[name];
      return refToValidate.validate();
    },
    ranking(){

      this.formData.subModules.sort(function(a,b){
        return a.name > b.name;

      }
      );
      //console.log(this.formData.subModules);
      return true;
    }

 }
}
</script>
<style>
.wizard-header > h4{
  font-size: 1.4em;
}
</style>

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
h4{
  font-size: 2em;
}
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
