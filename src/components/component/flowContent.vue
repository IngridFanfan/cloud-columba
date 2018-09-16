<template>

    <div class="tab-pane" id="tab">
      <h5 class="text-center">{{title.header.part1}}<span class="specification">{{title.header.part2}}</span>{{title.header.part3}}</h5>
      <p class="category text-center">{{title.description}}</p>
      <slot></slot>
    </div>

</template>

<script>

export default {
  name: 'flowContent',
  props:{
    title:{
      type:Object
    }
  },
  data () {
            return {

            }

        },
        methods: {

        }
}
</script>

<style scoped>
.tab-pane{
  margin-top: -10px;
}

h5 {
    padding: 20px;
    font-size: 1.25em;
    font-weight: 400;
    line-height: 1.2em;
    color: inherit;
    display: block;
}

.specification{
  font-weight: bolder;
  font-size: 1.2em;
  color:#68B3C8;
}

.text-center {
    text-align: center;
}

.category{
  margin-top: -5px;
  margin-bottom: 40px;
}

p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}




</style>
