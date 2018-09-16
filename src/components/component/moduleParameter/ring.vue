

<template>
  <div class="ring">

<div class="switchGroup">
  <div class="switchRow">
    <form-item label="Pump" class="switch_left">
        <i-switch v-model="ringData.pump" size="large">
            <span slot="open">On</span>
            <span slot="close">Off</span>
        </i-switch>
    </form-item>

    <form-item label="Sieve Valve" class="switch_right">
        <i-switch v-model="ringData.sieve_valve" size="large">
            <span slot="open">On</span>
            <span slot="close">Off</span>
        </i-switch>
    </form-item>
  </div>

  <div class="switchRow">
    <form-item label="Cell Trap" class="switch_left">
        <i-switch v-model="ringData.cell_trap" size="large">
            <span slot="open">On</span>
            <span slot="close">Off</span>
        </i-switch>
    </form-item>

  </div>
</div>

  <div class="inputRow">
  <form-item label="X-axis sidelength" class="inputItem">
      <i-input v-model="ringData.x_axis" placeholder="Enter something..." style="width: 50%;"/>
  </form-item>

  <form-item label="Y-axis Sidelength" class="inputItem">
      <i-input v-model="ringData.y_axis" placeholder="Enter something..." style="width: 50%;"/>
  </form-item>

  <form-item label="Z-axis sidelength" class="inputItem">
      <i-input v-model="ringData.z_axis" placeholder="Enter something..." style="width: 50%;"/>
  </form-item>
</div>


  </div>
</template>

<script>

export default {
  name: 'ring',
  props: {
    ringData:{
      type:[Object, Array],
      required:true
    }
  },
  data () {
    this.ringData.pump=true;
    this.ringData.sieve_valve=false;
    this.ringData.cell_trap=true;
    this.ringData.x_axis=1500;
    this.ringData.y_axis=1500;
    this.ringData.z_axis=50;
    this.ringData.count=1;
    this.ringData.remark='';

    return {

    }
  },
  methods: {

  }
}
</script>

</style>
