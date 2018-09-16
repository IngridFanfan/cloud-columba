<template>
  <div class="firstStep">
    <i-form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <form-item label="min_spacing" prop="min_spacing">
        <input-number :max="100" :min="10" :step="10" v-model="formInline.min_spacing"/>
      </form-item>

      <form-item label="flow_channel_width" prop="flow_channel_width">
        <input-number :max="1000" :min="500" :step="50" v-model="formInline.flow_channel_width"/>
      </form-item>

      <form-item label="control_channel_width" prop="control_channel_width">
        <input-number :max="1000" :min="500" :step="50" v-model="formInline.control_channel_width"/>
      </form-item>

      <form-item label="control_inlet_dimension" prop="control_inlet_dimension">
        <input-number :max="1000" :min="500" :step="50" v-model="formInline.control_inlet_dimension"/>
      </form-item>

      <form-item label="inlet_dis" prop="inlet_dis">
        <input-number :max="1000" :min="500" :step="50" v-model="formInline.inlet_dis"/>
      </form-item>
            <form-item>
                <!--<i-button type="primary" @click="handleSubmit('formInline')">Signin</i-button>-->
                <i-button :slot="next" type="primary" shape="circle" size="large" class="btn-info" @click="handleSubmit('formInline')">xiayige</i-button>
            </form-item>
        </i-form>
  </div>
</template>

<script>
import Card from './card'

export default {
  name: 'firstStep',
  components:{

  },
  data () {
            return {
                formInline: {
                    min_spacing: 10,
                    flow_channel_width: 500,
                    control_channel_width:100,
                    control_inlet_dimension:100,
                    inlet_dis:100
                },
                ruleInline: {
                    min_spacing: [
                        { required: true, message: 'Please fill in the value of min_spacing', trigger: 'blur' },
                        //{ validator: validateMobile, trigger: 'blur'}
                        //{max:100, min:10, message:'balabala', trigger:'blur'}只会自动恢复为100，不会提示
                    ],
                    flow_channel_width: [
                        { required: true, message: 'Please fill in the value of flow_channel_width.', trigger: 'blur' },
                        //{ type: 'string', min: 6, message: 'The flow_channel_width length cannot be less than 6 bits', trigger: 'blur' }
                    ],
                    control_channel_width: [
                        { required: true, message: 'Please fill in the value of control_channel_width', trigger: 'blur' },
                    ],
                    control_inlet_dimension: [
                        { required: true, message: 'Please fill in the value of min_spacing', trigger: 'blur' },
                    ],
                    inlet_dis: [
                        { required: true, message: 'Please fill in the value of min_spacing', trigger: 'blur' },
                    ]
                }/*,
                const validateMobile = (rule, value, callback) => {

                    if (!Number.isInteger(+value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        callback();
                    }
                }*/
            }

        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
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

</style>
