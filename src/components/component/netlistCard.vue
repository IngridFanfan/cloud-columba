<template>
  <div class="netlistCard">

    <card class="netlistCard" :title="moduleName"></card>

  </div>
</template>

<script>


export default {
  name: 'netlistCard',
  props:{
    moduleName:{
      type:String
    }

  },
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style>
.ivu-card-head > p > span{
  font-size: 1.1em;
  font-weight: lighter;
  color: rgb(102, 97, 91);
}

</style>

<style scoped>
.netlistCard{
  width:100%;
  max-height: 520px;
  margin: 5px 0px 15px 0px;
}

</style>
