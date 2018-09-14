<template>
    <ul class="nav">
      <li v-for="page in pages">
        <nav-page>
          <i :class="page.iconName" slot="ti-clipboard"></i>
          <p>{{page.name}}
            <b class="caret"></b>
          </p>
        </nav-page>
      </li>
    </ul>

</template>
<!--logo有问题，logo和内容的上下行有问题，不在同一行上。像是多加了一个标签的缘故-->

<script>
import navPage from './navPage';

export default {
  name: 'sideNav',
  components:{
    'nav-page':navPage
  },
   data(){
     return{
       pages:[
         {
          name:"New Project",
          hrefName:"newprojects",
          iconName:"ti-panel"
         },
         {
           name:"Histroy",
           hrefName:"histoty",
           iconName:"ti-clipboard"
         }
       ]
     }
   }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 li {
   list-style-type:none;
 }
  i,p {
    display: inline-block;
  }

  .nav {
      margin-top: 10px;
  }
  .nav i {
      font-size: 24px;
      float: left;
      margin-right: 15px;
      line-height: 30px;
      width: 30px;
      text-align: center;
  }

  .nav p {
    margin: 0;
    line-height: 30px;
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
    position: relative;
    transform: translate3d(0px, 0, 0);
    opacity: 1;
    display: block;
    height: auto;
    white-space: nowrap;
    transition: all 150ms ease-in;
}
 .caret {
    margin-top: 12px;
    position: absolute;
    right: 1px;
    transition: all 150ms ease-in;
}
</style>
