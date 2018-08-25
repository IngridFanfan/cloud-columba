<template>
    <ul class="nav">
      <li v-for="page in pages">
        <nav-page>
          <i :class="page.icon">{{page.icon}}</i>
          <p>{{page.name}}
            <b class="caret"></b>
          </p>
        </nav-page>
      </li>
    </ul>

</template>

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
          icon: "N",
          hrefName:"newprojects"
         },
         {
           name:"Histroy",
           icon: "H",
           hrefName:"histoty"
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
    font-size: 12px;
    font-weight: 600;
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
