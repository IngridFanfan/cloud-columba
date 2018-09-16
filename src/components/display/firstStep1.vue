<template>
  <div class="firstStep">
    <i-form  ref="formInline" :model="formInline" :rules="ruleInline" label-position="left" :label-width="200" inline>
      <!--
      <form-item prop="user">
        <i-input type="text" v-model="formInline.user" placeholder="Username" />
      </form-item>

      <form-item prop="password">
        <i-input type="password" v-model="formInline.password" placeholder="Password" />
      </form-item>
    -->
    <div class="row">
      <form-item label="min_spacing" prop="min_spacing">
      <input-number :max="100" :min="10" v-model="formInline.min_spacing" /> <!--required is working, but min and max still not.!!!-->
                                        <!-- vorsichtig! here must be v-model， don't know why.-->
      </form-item>

      <form-item label="flow_channel_width" prop="flow_channel_width">
      <input-number :max="100" :min="10" v-model="formInline.flow_channel_width" />
      </form-item>
    </div>

    <div class="row">
      <form-item label="control_channel_width" prop="control_channel_width">
      <input-number :max="100" :min="10" v-model="control_channel_width" />
      </form-item>


      <form-item label="control_inlet_dimension" prop="control_inlet_dimension">
      <input-number :max="100" :min="10" v-model="formInline.control_inlet_dimension" />
      </form-item>
    </div>

    <div class="row">
      <form-item label="inlet_dis" prop="inlet_dis">
      <input-number :max="100" :min="10" v-model="formInline.inlet_dis" />
      </form-item>
    </div>

      <form-item>
        <i-button type="primary" @click="handleSubmit('formInline')">Next</i-button>
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
              formInline:{
                user:'',
                password:'',
                min_spacing:10,
                flow_channel_width:100,
                control_channel_width:100,
                control_inlet_dimension:100,
                inlet_dis:10

              },
              ruleInline:{
                user:[
                  {required:true, message:'Please fill in your user name!', trigger:'blur'},
                  {type:'string', min:3, message:'Your user name should be minimal with 3 characters!', trigger:'blur'}
                ],
                password:[
                  {required:true, message:'Please fill in your password!', trigger:'blur'},
                  {type:'string', min:6, message:'The password length cannot be less than 6 bits!', trigger:'blur'}
                ],
                min_spacing:[
                  {required:true, message:'Please fill min_spacing',trigger:'blur'}
                  /*{type:'number', min:10, max:100, message:'Please fill a number between 10 and 100!', trigger:'blur' }*/
                ],
                flow_channel_width:[
                  {required:true, message:'Please fill flow_channel_width',trigger:'blur'}
                ],
                control_channel_width:[
                  {required:true, message:'Please fill control_channel_width',trigger:'blur'}
                ],
                control_inlet_dimension:[
                  {required:true, message:'Please fill control_inlet_dimension',trigger:'blur'}
                ],
                inlet_dis:[
                  {required:true, message:'Please fill inlet_dis',trigger:'blur'}
                ]
              }
            }

        },
        methods: {
          handleSubmit(name){
            this.$refs[name].validate((valid)=>{
              if(valid){
                this.$Message.success('Go to Next!');
              }else{
                this.$Message.error('Wrong!');
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
