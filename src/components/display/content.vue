<template>
  <div class="content">

      <div class="container-fluid">
        <card :project="process">
          <!--vue wizard with i-button-->
          <form-wizard @on-complete="onComplete"
                                shape="tab"
                                color="#66615B">
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

                      <i-button slot="prev" type="primary" shape="circle" size="large" class="btn-info">Back</i-button>
                      <i-button slot="next" type="primary" shape="circle">Next</i-button>
                      <i-button slot="finish" type="primary" shape="circle">Finish</i-button>
                  </form-wizard>

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

.btn-info{
  min-width:180px;
  background-color: #68B3C8;
  border-color: #68B3C8
}
</style>
