<template>
  <div class="content">

      <div class="container-fluid">
        <card :project="process">
          <svg style="width=100%, height=250px"></svg>
        </card>
      </div>

  </div>
</template>

<script>
import Card from './card'

export default {
  name: 'appContent',
  components:{
    'card': Card
  },
  data () {
    return {
      process:
        {
          title: 'Process Creating',
          subTitle: 'Following these steps to create your design process'
        }
    }
  }
}
</script>

<style scoped>
.main-panel > .content {
    padding: 30px 15px 0 15px;
    padding-left: 10%;
    min-height: calc(100% - 172px);
}
.container-fluid {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.container-fluid:before {
    display: table;
    content: " ";
}

</style>
