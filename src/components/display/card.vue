<template>
  <div class="card">
    <div class="card-header">

        <h4 class="card-title">{{ project.title }}</h4>
        <p class="category">{{ project.subTitle }}</p>
    </div>

    <div class="card-content">
      <slot></slot>
    </div>

  </div>
</template>

<script>


export default {
  name: 'myCard',
  props:{
    project:{
      type:Object, // type = subject!!!
      required:true
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

.card {
    border-radius: 6px;
    box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);
    background-color: #FFFFFF;
    color: #252422;
    margin-bottom: 20px;
    position: relative;
    max-width:calc(100% - 172px);
}

.card .card-header {
    padding: 20px 15px 0px;
    position: relative;
    border-radius: 3px 3px 0 0;
    z-index: 3;
}
.card .card-title {
    margin: 0;
    color: #252422;
    font-weight: 300;
    position: relative;
}
.card .card-header .category {
    padding: 5px 0px;
}

.card .category {
    font-size: 14px;
    font-weight: 400;
    color: #9A9A9A;
    margin-bottom: 0px;
    position: relative;
}

.card .card-content {
    padding: 15px 15px 10px 15px;
    position: relative;
}



h4 {
    font-size: 1.5em;
    font-weight: 600;
    line-height: 1.2em;
    -webkit-font-smoothing: antialiased;
    font-family: 'Muli', "Helvetica", Arial, sans-serif;
    display: block;
    -webkit-margin-before: 1.33em;
    -webkit-margin-after: 1.33em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
</style>
