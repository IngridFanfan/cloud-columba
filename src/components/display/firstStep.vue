<!--
v-model.trim="..." = :value="..."

1. 是否考虑为每个参数下方都添加一行解释？
2.每个参数的范围目前是随便写的
-->


<template>
  <div class="firstStep">
    <flow-content :title="title">
      <form inline>
      <div class="row">
          <div class="col-md-5 col-md-offset-1">

              <div class="form-group" v-bind:class="{ 'has-error': $v.min_spacing.$error }">

                  <label class="control-label">min_spacing:</label>
                  <input class="form-control"
                         v-model.trim="min_spacing"
                         @input="$v.min_spacing.$touch()"
                         step=10
                         type="number"
                         name="min_spacing"
                         placeholder="100"
                  />
                  <span class="help-block" v-if="$v.min_spacing.$error && !$v.min_spacing.required">min_spacing is required</span>
                  <span class="help-block" v-if="$v.min_spacing.$error && !$v.min_spacing.between">Please keep min_spacing between 30 and 200</span>
              </div>
          </div>
          <div class="col-md-5">
              <div class="form-group" v-bind:class="{ 'has-error': $v.flow_channel_width.$error }">
                  <label class="control-label">flow_channel_width:</label>
                  <input class="form-control"
                         v-model.trim="flow_channel_width"
                         @input="$v.flow_channel_width.$touch()"
                         step=10
                         type="number"
                         name="flow_channel_width"
                         placeholder="100"
                  />
                  <span class="help-block" v-if="$v.flow_channel_width.$error && !$v.flow_channel_width.required">flow_channel_width is required</span>
                  <span class="help-block" v-if="$v.flow_channel_width.$error && !$v.flow_channel_width.between">Please keep flow_channel_width between 30 and 200</span>
              </div>
          </div>
      </div>

      <div class="row">
          <div class="col-md-5 col-md-offset-1">
              <div class="form-group" v-bind:class="{ 'has-error': $v.control_channel_width.$error }">
                  <label class="control-label">control_channel_width:</label>
                  <input class="form-control"
                         v-model.trim="control_channel_width"
                         @input="$v.control_channel_width.$touch()"
                         step=10
                         type="number"
                         name="control_channel_width"
                         placeholder="30"
                  />
                  <span class="help-block" v-if="$v.control_channel_width.$error && !$v.control_channel_width.required">control_channel_width is required</span>
                  <span class="help-block" v-if="$v.control_channel_width.$error && !$v.control_channel_width.between">Please keep control_channel_width between 10 and 100</span>
              </div>
          </div>
          <div class="col-md-5">
              <div class="form-group" v-bind:class="{ 'has-error': $v.control_inlet_dimension.$error }">
                  <label class="control-label">control_inlet_dimension:</label>
                  <input class="form-control"
                         v-model.trim="control_inlet_dimension"
                         @input="$v.control_inlet_dimension.$touch()"
                         step=100
                         type="number"
                         name="control_inlet_dimension"
                         placeholder="1500"
                  />
                  <span class="help-block" v-if="$v.control_inlet_dimension.$error && !$v.control_inlet_dimension.required">control_inlet_dimension is required</span>
                  <span class="help-block" v-if="$v.control_inlet_dimension.$error && !$v.control_inlet_dimension">Please keep control_inlet_dimension between 1000 and 2000</span>
              </div>
          </div>
      </div>

      <div class="row">
         <div class="col-md-5 col-md-offset-1">
             <div class="form-group" v-bind:class="{ 'has-error': $v.inlet_dis.$error }">
                 <label class="control-label">inlet_dis:</label>
                 <input class="form-control"
                        v-model.trim="inlet_dis"
                        @input="$v.inlet_dis.$touch()"
                        step=100
                        type="number"
                        name="inlet_dis"
                        placeholder="2000"
                />
                <span class="help-block" v-if="$v.inlet_dis.$error && !$v.inlet_dis.required">inlet_dis is required</span>
                <span class="help-block" v-if="$v.inlet_dis.$error && !$v.inlet_dis.between">Please keep inlet_dis between 1000 and 5000</span>
             </div>
         </div>
     </div>

   </form>

 </flow-content>

</div>
</template>

<script>
import flowContent from '../component/flowContent'
import { required,between } from 'vuelidate/lib/validators'

export default {
  name: 'firstStep',
  components:{
    'flow-content': flowContent
  },
  props:{
    rules:{
      type:Object,
      required:true
    }
  },
  data () {
            return {
              title:
                {
                  header:{
                    part1:'Please enter the RULES you defined',
                    part2:'',
                    part3:''
                  },
                  description: 'Here are some descriptions about these RULES which you should read them first.'
                },
                min_spacing: 100,
                flow_channel_width: 100,
                control_channel_width: 30,
                control_inlet_dimension:1500,
                inlet_dis:2000
            }

        },
        validations: {
          min_spacing: {
            required,
            between: between(30, 200)
          },
          flow_channel_width: {
            required,
            between: between(30, 200)
          },
          control_channel_width: {
            required,
            between: between(10, 100)
          },
          control_inlet_dimension: {
            required,
            between: between(1000, 3000)
          },
          inlet_dis: {
            required,
            between: between(1000, 5000)
          },
          form: ['min_spacing', 'flow_channel_width', 'control_channel_width','control_inlet_dimension', 'inlet_dis']
        },
        methods: {
          validate() {
      this.$v.form.$touch();
      var isValid = !this.$v.form.$invalid
      this.$emit('on-validate', this.$data, isValid)
      return isValid
    }
        }
}
</script>

<style scoped>
.btn-info{
  min-width:140px;
  background-color: #68B3C8;
  border-color: #68B3C8
}
.btn-info:hover{
  background-color: #589ab3;
  border-color: #589ab3
}

.row {
    margin-right: -15px;
    margin-left: -15px;
}

.row:before {
    display: table;
    content: " ";
}

.row:after {
    clear: both;
}
.row:after, .row:before {
    display: table;
    content: " ";
}

.firstStep [class*="col-"]:first-child {
    padding-left: 15px;
}

.col-md-offset-1 {
    margin-left: 8%;
}

.col-md-5 {
    width: 41%;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    float: left;
}

.form-group {
    position: relative;
    margin-bottom: 15px;
}

label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
    cursor: default;
}

.form-control {
    background-color: #F3F2EE;
    border: 1px solid #e8e7e3;
    border-radius: 4px;
    color: #66615b;
    font-size: 14px;
    padding: 7px 18px;
    height: 40px;
    box-shadow: none;
    display: block;
    width: 100%;
    line-height: 1.42857143;
    background-image: none;
}

input {
    font-family: inherit;
    margin: 0;
    font: inherit;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    -webkit-writing-mode: horizontal-tb !important;

}

</style>
