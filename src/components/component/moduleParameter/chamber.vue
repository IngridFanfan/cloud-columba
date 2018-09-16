

<template>
  <div class="chamber">

<div class="switchGroup">
  <div class="switchRow">
    <form-item label="Pump" class="switch_left">
        <i-switch v-model="chamberData.pump" size="large">
            <span slot="open">On</span>
            <span slot="close">Off</span>
        </i-switch>
    </form-item>

    <form-item label="Sieve Valve" class="switch_right">
        <i-switch v-model="chamberData.sieve_valve" size="large">
            <span slot="open">On</span>
            <span slot="close">Off</span>
        </i-switch>
    </form-item>
  </div>

  <div class="switchRow">
    <form-item label="Cell Trap" class="switch_left">
        <i-switch v-model="chamberData.cell_trap" size="large">
            <span slot="open">On</span>
            <span slot="close">Off</span>
        </i-switch>
    </form-item>

    <form-item label="Normal Valve at End" class="switch_right">
        <i-switch v-model="chamberData.normal_valve" size="large">
            <span slot="open">On</span>
            <span slot="close">Off</span>
        </i-switch>
    </form-item>

  </div>
</div>

  <div class="inputRow">
  <form-item label="X-axis sidelength" class="inputItem">
      <i-input v-model="chamberData.x_axis" placeholder="Enter something..." style="width: 50%;"/>
  </form-item>

  <form-item label="Y-axis Sidelength" class="inputItem">
      <i-input v-model="chamberData.y_axis" placeholder="Enter something..." style="width: 50%;"/>
  </form-item>

  <form-item label="Z-axis sidelength" class="inputItem">
      <i-input v-model="chamberData.z_axis" placeholder="Enter something..." style="width: 50%;"/>
  </form-item>
</div>



  </div>
</template>

<script>

export default {
  name: 'chamber',
  props: {
    chamberData:{
      type:[Object, Array],
      required:true
    }
  },
  data () {
    this.chamberData.pump=true;
    this.chamberData.sieve_valve=false;
    this.chamberData.cell_trap=true;
    this.chamberData.sieve_valve=false;
    this.chamberData.x_axis=1500;
    this.chamberData.y_axis=1500;
    this.chamberData.z_axis=50;
    this.chamberData.count=1;
    this.chamberData.remark='';

    return {

    }
  },
  methods: {

  }
}
</script>

</style>
