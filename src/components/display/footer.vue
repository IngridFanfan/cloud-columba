<template>
  <div class="footer">

    <div class="container-fluid">

      <div class="copyright pull-right">
          © Copyright 2018
          <i class="fa fa-heart heart"></i>
          by
          <a href="http://www.creative-tim.com">Cloud Columba</a>
      </div>

	  </div>

  </div>
</template>

<script>


export default {
  name: 'appFooter',
  components:{

  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.footer {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-attachment: fixed;
    position: relative;
    line-height: 20px;
    display: block;
}

.footer .copyright {
    color: #66615b;
    padding: 10px 15px;
    font-size: 14px;
    margin: 15px 3px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
}

.pull-right {
    float: right!important;
}


</style>
