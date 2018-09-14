<template>
  <ul>
    <li v-for="step in steps">
      <i-button :slot="step.slotName" type="primary" shape="circle" size="large" class="btn-info">{{ step.stepName }}</i-button>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'buttonGroup',
  props:['steps'],
  data () {
    return {

    }
  }
}
</script>

<style scoped>


.btn-info{
  min-width:180px;
  background-color: #68B3C8;
  border-color: #68B3C8
}
</style>
