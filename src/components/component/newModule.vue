<!--
基本完成，需要：
修改为inputNumber
switch和input的disable问题，


把所有标签里的css都整合到下面
-->

<template>
  <div class="addNewModule">
    <div style="padding: 30px;background: #f8f8f9; width: 60%">
      <Card title="Add a new Module"  shadow style="width: 100%;">

        <i-form :model="formItem" :label-width="90">

          <form-item label="Module Type">
              <i-select placeholder="Select" v-model="formItem.select" style="width: 50%;">
                  <Option value="p_i">Inlet</Option>
                  <Option value="c">Chamber</Option>
                  <Option value="r">Ring</Option>
                  <Option value="p_o">Outlet</Option>
              </i-select>
          </form-item>

      <div class="switchGroup">
        <div class="switchRow">
          <form-item label="Pump" class="switch_left">
              <i-switch v-model="formItem.switch_p" size="large">
                  <span slot="open">On</span>
                  <span slot="close">Off</span>
              </i-switch>
          </form-item>

          <form-item label="Sieve Valve" class="switch_right">
              <i-switch v-model="formItem.switch_sv" size="large">
                  <span slot="open">On</span>
                  <span slot="close">Off</span>
              </i-switch>
          </form-item>
        </div>

        <div class="switchRow">
          <form-item label="Cell Trap" class="switch_left">
              <i-switch v-model="formItem.switch_ct" size="large">
                  <span slot="open">On</span>
                  <span slot="close">Off</span>
              </i-switch>
          </form-item>

          <form-item label="Normal Valve at End" class="switch_right">
              <i-switch v-model="formItem.switch_nv" size="large">
                  <span slot="open">On</span>
                  <span slot="close">Off</span>
              </i-switch>
          </form-item>
        </div>
      </div>

        <div class="inputRow">
        <form-item label="X-axis sidelength" class="inputItem">
            <i-input v-model="formItem.input_x" placeholder="Enter something..." style="width: 50%;"/>
        </form-item>

        <form-item label="Y-axis Sidelength" class="inputItem">
            <i-input v-model="formItem.input_y" placeholder="Enter something..." style="width: 50%;"/>
        </form-item>

        <form-item label="Z-axis sidelength" class="inputItem">
            <i-input v-model="formItem.input_z" placeholder="Enter something..." style="width: 50%;"/>
        </form-item>
      </div>

      <form-item label="Define it">
          <i-input class="inputTimes" v-model="formItem.times" placeholder='1'/>
          <p class="times">times</p>
      </form-item>

        <form-item label="Text">
            <i-input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." style="width: 80%;"/>
        </form-item>
        <form-item style="margin-top:30px">
            <i-button type="primary">Submit</i-button>
            <i-button style="margin-left: 8px">Cancel</i-button>
        </form-item>
    </i-form>

    </Card>
  </div>


  </div>
</template>

<script>

export default {
  name: 'addNewModule',
  data () {
    return {
      formItem: {
                    select: '',
                    switch_p: true,
                    switch_ct:false,
                    switch_sv:true,
                    switch_nv:false,
                    input_x: '',
                    input_y: '',
                    input_z: '',
                    times:'1',
                    textarea: ''
                }
    }
  }
}
</script>

<style scoped>

.switch_left {
    float: left;
}

.switch_right {
  margin-left: 35%;
}

.inputItem{
  margin-bottom: 10px;
  padding:0px;
}

.inputRow{
  margin-bottom: 30px;
  margin-top: -10px;
}

.switchRow{
  margin-bottom: -20px;
}

.switchGroup{
  margin-bottom: 35px;
}

.times{
  float:left;
  font-size: 12px;
  color: #515a6e;
  margin-left: 12px;
}

.inputTimes{
  float: left;
  width: 15%;
}

</style>
