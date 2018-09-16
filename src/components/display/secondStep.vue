<!--
TODO：新添加的折叠面板自动展开，已经打开的都自动关闭
times 修改的问题，页面重新渲染即会重新获得input焦点

-->

<template>
  <div class="secondStep">
    <flow-content :title="title">
      <div v-if="modules.length==0" class="emptyNotice">No Modules defined</div>
      <Collapse class="moduleGruppe" v-model="value">
        <Panel class="singleModule" :name="''+index" v-for="(module,index) in modules">
          <span class="singleName" @click="clearName(index)" contenteditable="true" >{{module.name}}</span><i-button class="delectIcon" type="text" icon="ios-trash-outline" @click="delectModule(index)"></i-button>
            <div slot="content">
              <i-form :label-width="90">
                <form-item label="Module Type">
                    <i-select placeholder="Select" v-model="module.type" style="width: 50%;">
                        <Option value="p_i">Inlet</Option>
                        <Option value="c">Chamber</Option>
                        <Option value="r">Ring</Option>
                        <Option value="p_o">Outlet</Option>
                    </i-select>
                </form-item>

                <component :is="module.type" :ringData="module" :chamberData="module" :inletData="module" :outletData="module"></component>

                <form-item label="Define it">
                    <i-input class="inputTimes" v-model="module.count" placeholder='1' @blur.native="resetArrayLength(index)"/>
                    <p class="times">times</p>
                </form-item>

                  <form-item label="Text">
                      <i-input v-model="module.remark" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." max="100" style="width: 80%;"/>
                  </form-item>
              </i-form>


            </div>
        </Panel>

      </Collapse>

      <Card class="addModuleCard" style="width:100%;height:40px">
        <div style="text-align:center">
            <h5 @click="addModule">Click <span class="addModule"> + </span> to create a new module</h5>
        </div>
    </Card>
    </flow-content>



  </div>
</template>

<script>
import flowContent from '../component/flowContent'
import ring from '../component/moduleParameter/ring'
import chamber from '../component/moduleParameter/chamber'
import inlet from '../component/moduleParameter/inlet'
import outlet from '../component/moduleParameter/outlet'

export default {
  name: 'secondStep',
  props: {
    modules:{
      type:[Array],
      required:true,

    }
  },

  components:{
    'flow-content': flowContent,
    'r':ring,
    'c':chamber,
    'p_i':inlet,
    'p_o':outlet
  },
  data () {
    return {
      value: '',
      title:
        {
          header:{
            part1:'Please use ',
            part2:'+',
            part3:' to add a new MODULE you needed'
          },
          description: 'Here are some descriptions about these MODULES which you should read them first.'
        }
    }
  },
  methods: {
    addModule() {

      this.modules.push({
        type:'',
        name:'Untitled '+(this.modules.length),
        count:1,
        remark:'',
        children:[]
      });
      let vm = this;
      this.$nextTick().then(function(){
        vm.value=[''+(vm.modules.length-1)]
      })

    },
    clearTitle: function(index){
      this.modules[index].name='';

    },
    delectModule:function(index){
      this.modules.splice(index,1);
    },
    resetArrayLength:function(index){
      this.modules[index].children.length=this.modules[index].count;
      alert ("skjdfh");
    }
  }
}
</script>

<style>
.ivu-collapse-header{
  background-color: white;
}



</style>

<style scoped>
span.addModule, p.addModule{
  font-size: 22px;
  font-weight: bolder;
  color:#68B3C8;
}

h5{
  margin-top:-1%;
  font-size: 1.1em;
}

.addRow{
  margin-top: 20px;
  margin-bottom: 20px;
  border: 30px;
}

.addModuleCard{
  margin-top: 10px;
}
.moduleGruppe{
  margin-top: -2px;
}

div.emptyNotice{
  text-align: center;
  color: #666;
  font-size: 0.8em;
  border-color:black;
  border: 2px solid;

}

span.singleName{

}

.delectIcon{

  position: absolute;
top: 10%;
right: 8px;
}


</style>
