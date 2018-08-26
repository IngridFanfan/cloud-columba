<template>
  <div class="content">

      <div class="container-fluid">
        <card :project="process">
          <form-wizard @on-complete="onComplete"
                      title="This is a new title"
                      subtitle="And a new subtitle"
                      shape="tab"
                      back-button-text="Go back!"
                      next-button-text="Go next!"
                      finish-button-text="We're there"
                      color="#777777">
            <tab-content title="Personal details"
                         icon="ti-user">
              My first tab content
            </tab-content>
            <tab-content title="Additional Info"
                         icon="ti-settings">
              My second tab content
            </tab-content>
            <tab-content title="Last step"
                         icon="ti-check">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
        </form-wizard>

<!--<pre v-html="prettyJSON"></pre>
<form-wizard @on-complete="onComplete"
validate-on-back
ref="wizard"
:start-index.sync="activeTabIndex"
shape="circle" color="#20a0ff" error-color="#ff4949">
  <tab-content title="Personal details" icon="ti-user"
   :before-change="() => validate('firstStep')">
    <first-step ref="firstStep" @on-validate="onStepValidate"></first-step>
    <el-button @click="forceClearError">Try to clear the error</el-button>
  </tab-content>
  <tab-content title="Additional Info" icon="ti-settings"
  :before-change="() => validate('secondStep')">
    <second-step ref="secondStep" @on-validate="onStepValidate"></second-step>
  </tab-content>
  <tab-content title="Last step" icon="ti-check">
    Your data
   <pre v-html="prettyJSON"></pre>
  </tab-content>

</form-wizard>-->
        </card>
      </div>

  </div>
</template>

<script>
import Card from './card'
import FirstStep from "../component/FirstStep.vue";
import SecondStep from "../component/SecondStep.vue";
import prettyJSON from "../../prettyJson.js";

export default {
  name: 'appContent',
  components:{
    'card': Card,
    FirstStep,
    SecondStep
  },
  data () {
    return {
      process:
        {
          title: 'Process Creating',
          subTitle: 'Following these steps to create your design process'
        },
        inalModel: {},
      activeTabIndex: 0
    }
  },
  //wizard
  computed: {
  prettyJSON() {
    return prettyJSON(this.finalModel);
  }
},
methods: {
  onComplete() {
    alert("Yay. Done!");
  },
  forceClearError() {
    this.$refs.wizard.tabs[this.activeTabIndex].validationError = null;
  },
  validate(ref) {
    return this.$refs[ref].validate();
  },
  onStepValidate(validated, model) {
    if (validated) {
      this.finalModel = { ...this.finalModel, ...model };
    }
  }
}
}
</script>

<style scoped>
.main-panel > .content {
    padding: 30px 15px 0 15px;
    padding-left: 10%;
    min-height: calc(100% - 172px);
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

</style>
