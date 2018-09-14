<!--问题，title 中的 RULE， + 怎么安排单独的css？-->

<template>
  <!--paper dashboard 版本 no validation 想法：放在i-form标签中，使用iview的validation。不行的话就用原来的iview版本，加上这一页的不同class 的 css。下面和v-model的双向绑定还没做-->
  <div class="firstStep">
    <flow-content :title="title">
      <i-form inline>
      <div class="row">
          <div class="col-md-5 col-md-offset-1">
              <div class="form-group">

                  <label class="control-label">
min_spacing:
</label>
                  <input class="form-control"
                         type="number"
                         min="80"
                         max="300"
                         name="min_spacing"
                         required="true"
                         placeholder="100"
                  />
              </div>
          </div>
          <div class="col-md-5">
              <div class="form-group">
                  <label class="control-label">
                    flow_channel_width:
                  </label>
                  <input class="form-control"
                         type="number"
                         name="flow_channel_width"
                         required="true"
                         placeholder="100"
                  />
              </div>
          </div>
      </div>

      <div class="row">
          <div class="col-md-5 col-md-offset-1">
              <div class="form-group">
                  <label class="control-label">
control_channel_width:
</label>
                  <input class="form-control"
                         type="number"
                         min="80"
                         max="300"
                         name="control_channel_width"
                         required="true"
                         placeholder="100"
                  />
              </div>
          </div>
          <div class="col-md-5">
              <div class="form-group">
                  <label class="control-label">
                    control_inlet_dimension:
                  </label>
                  <input class="form-control"
                         type="number"
                         name="control_inlet_dimension"
                         required="true"
                         placeholder="100"
                  />
              </div>
          </div>
      </div>

      <div class="row">
         <div class="col-md-5 col-md-offset-1">
             <div class="form-group">
                 <label class="control-label">
inlet_dis:
</label>
                 <input class="form-control"
                        type="number"
                        min="1000"
                        max="5000"
                        required="true"
                        name="inlet_dis"
                        placeholder="2000"
                />
             </div>
         </div>
     </div>
   </i-form>
 </flow-content>

  </div>
</template>

<script>
import flowContent from '../component/flowContent'

export default {
  name: 'firstStep',
  components:{
    'flow-content': flowContent
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
                }
            }

        },
        methods: {

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
