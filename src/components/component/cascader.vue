<!--
此页使用联级多项选器，参见main.js

注意每一种module的list中禁止连接的类型。因为针对单项的disabled不管用.

添加confirm的function
-->

<template>
  <div class="cascader"  style="width:100%">
    <card class="cascaderCard" dis-hover>

    <i-button class="addButton" type="primary" shape="circle">Confirm</i-button>
    </card>

  </div>
</template>

<script>


export default {
  name: 'thirdStep',
  data () {
    return {
                 end_code: [],
                 end_codes: [
                          {
                            value: 'p_i',
                            label: "inlet",
                            children: [
                              {
                              label: "inlet1",
                              value:"i_1",
                              multiple: true //!!!!!!只对当前选项起作用。!!!!!
                              },
                              {
                              label: "inlet2",
                              value: 'i_2',
                              multiple: true,
                              children: [
                                {
                                label:'inlet2_1',
                                value:'i_2_1',
                                multiple: true
                                },
                                {
                                  label:'inlet2_2',
                                  value:'i_2_2',
                                  multiple: true
                                }
                              ]
                            }
                          ]
                          },
                          {
                            value: 'c',
                            label: "chamber",
                            children: [
                              {
                              label: "chamber1",
                              value:"c_1",
                              multiple: true
                              //disabled: true
                              //disabled 针对单个选项的disabled不管用。
                              },
                              {
                              label: "chamber2",
                              value: 'c_2',
                              multiple: true,
                              children: [
                                {
                                label:'chamber2_1',
                                value:'c_2_1',
                                multiple: true
                                },
                                {
                                  label:'chamber2_2',
                                  value:'c_2_2',
                                  multiple: true
                                }
                              ]
                            }
                          ]
                          }
                            ]

            }
          }
}
</script>

<style scoped>
.cascader{
  width:40%;

}

.cascaderCard{
  width: 100%;
  height:6em;
}

.multiCascader{
  width:70%;
  float:left;
}

.addButton{
  float: right;
}

</style>
