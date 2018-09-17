<template>
<my-transfer :data="transferData" :target-keys="targetIndex" :list-style="listStyle" :render-format="render3" filterable @on-change="handleChange3">

  <div :style="{float: 'right', margin: '5px'}">
    <Button size="small" @click="reloadMockData">Refresh</Button>
  </div>
</my-transfer>
</template>
<script>
import myTransfer from './mytransfer'

export default {
  props: {
    modules: {
      type: Array,
      require: true
    },

    targetIndex: {
      type: Array,

    },
    module:{
      type:Object,
    }
  },
  components: {
    'my-transfer':myTransfer
  },
  data() {
    return {

      listStyle: {
        width: '45%',
        height: '300px'
      },
      transferData: [],

    }
  },
  methods: {
    getMockData() {
      let mockData = [];
      for (let i = 1; i <= 20; i++) {
        mockData.push({
          key: i.toString(),
          label: 'Content ' + i,
          description: 'The desc of content  ' + i,
          disabled: Math.random() * 3 < 1
        });
      }
      return mockData;
    },
    handleChange3(newTargetKeys) {
      this.targetKeys3 = newTargetKeys;
    },
    render3(item) {
      //alert("xxx6666");
      console.log(item.pointer.id);
      return item.label;
      if(item.type=='Groupe'){

      }
    },
    reloadMockData() {
      this.data3 = this.getMockData();
      this.targetKeys3 = this.getTargetKeys();
    }
  },
  computed: {

  },
  watch: {
    modules: {
      handler: function(val) {
        let vm = this;
        this.transferData.splice(0, this.transferData.length);
        this.modules.forEach(function(module) {
          vm.transferData.push({
            title:'',
            label: module.id,
            key: module.id,
            pointer: module,
            type:'Groupe',
            childrenIndex:[],
            disabled:false,
            expand:true,
          });
          let groupIndex = vm.transferData.length-1;
          let groupePointer = vm.transferData[vm.transferData.length-1];
          module.children.forEach(function(child) {
            vm.transferData.push({
              title:'',
              label: child.id,
              key: child.id,
              pointer: child,
              type:'item',
              groupePointer:groupePointer,
              groupIndex: groupIndex,
              disabled:false,
            });
            console.log(vm.module);
            if(child==vm.module){
              vm.transferData[vm.transferData.length-1].disabled=true;
              vm.transferData[vm.transferData.length-1].title = 'Cannot connect to itself';
            }
            vm.transferData[groupIndex].childrenIndex.push(vm.transferData.length-1);
          })
        });

        console.log(this.transferData);

      },
      deep: true
    }
  }
}
</script>

<style scoped>


</style>
