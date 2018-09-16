

<template>
  <div class="inlet">


  <div class="inputRow">
  <form-item label="X-axis sidelength" class="inputItem">
      <i-input v-model="inletData.x_axis" placeholder="Enter something..." style="width: 50%;"/>
  </form-item>

  <form-item label="Y-axis Sidelength" class="inputItem">
      <i-input v-model="inletData.y_axis" placeholder="Enter something..." style="width: 50%;"/>
  </form-item>

</div>


  </div>
</template>

<script>

export default {
  name: 'inlet',
  props: {
    inletData:{
      type:[Object, Array],
      required:true
    }
  },
  data () {
    this.inletData.x_axis=1500;
    this.inletData.y_axis=1500;
    this.inletData.count=1;
    this.inletData.remark='';

    return {

    }
  },
  methods: {

  }
}
</script>

</style>
