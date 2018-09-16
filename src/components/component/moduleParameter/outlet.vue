

<template>
  <div class="outlet">


  <div class="inputRow">
  <form-item label="X-axis sidelength" class="inputItem">
      <i-input v-model="outletData.x_axis" placeholder="Enter something..." style="width: 50%;"/>
  </form-item>

  <form-item label="Y-axis Sidelength" class="inputItem">
      <i-input v-model="outletData.y_axis" placeholder="Enter something..." style="width: 50%;"/>
  </form-item>

</div>



  </div>
</template>

<script>

export default {
  name: 'outlet',
  props: {
    outletData:{
      type:[Object, Array],
      required:true
    }
  },
  data () {
    this.outletData.x_axis=1500;
    this.outletData.y_axis=1500;
    this.outletData.count=1;
    this.outletData.remark='';

    return {

    }
  },
  methods: {

  }
}
</script>

</style>
