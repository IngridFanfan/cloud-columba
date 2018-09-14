<template>
  <div class="navbar navbar-default">

    <div class="container-fluid">
	        <div class="navbar-header">
	                    <a class="navbar-brand" href="#">New Project</a>
	        </div>

          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li v-for="header in headers">
                <nav-page>
                  <i :class="header.iconName"></i>
                  <p>{{header.name}}</p>
                </nav-page>
              </li>
            </ul>

          <!--  <ul class="nav navbar-nav navbar-right">
	                        <li>
	                            <a href="#stats" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
	                                <i class="ti-panel"></i>
									<p>Stats</p>
	                            </a>
	                        </li>
	                        <li class="dropdown">
	                            <a href="#notifications" class="dropdown-toggle btn-rotate" data-toggle="dropdown" aria-expanded="false">
	                                <i class="ti-bell"></i>
	                                <span class="notification">5</span>
									<p class="hidden-md hidden-lg">
										Notifications
									</p>
	                </a>
	                        </li>
							<li>
	                            <a href="#settings" class="btn-rotate">
									<i class="ti-settings"></i>
									<p class="hidden-md hidden-lg">
										Settings
									</p>
	                            </a>
	                        </li>
	                    </ul>-->
	        </div>
    </div>

  </div>
</template>

<!--考虑：这里需不需要对 navbar-header 使用props传参？针对两个不同的页面，new 和 history-->
<!--所有 @media 的似乎都不支持-->

<script>

import navPage from '../navigation/userNav/navPage';

export default {
  name: 'navBar',
  components:{
    'nav-page':navPage
  },
  data () {
    return {
      headers:[
        {
          iconName: "ti-panel",
          name:"Stats"
        },
        {
          iconName: "ti-bell",
          name:"Notification"
        },
        {
          iconName: "ti-settings",
          name:"Settings"
        }
      ]
    }
  }
}
</script>

<style scoped>
.main-panel .navbar {
    margin-bottom: 0;
}

.navbar-default {
    background-color: #f4f3ef;
    border-bottom: 1px solid #cfcfca;
}

.navbar {
    border: 0;
    border-radius: 0;
    font-size: 16px;
    position: relative;
    transition: all 300ms linear;
    -webkit-font-smoothing: antialiased;
    font-family: 'Muli', "Helvetica", Arial, sans-serif;
}
.navbar.navbar-default{
  display: block;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.container-fluid {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.container-fluid:before, .container:after{
    display: table;
    content: " ";
}

.container:after{
    clear: both;
}

.container-fluid>.navbar-header {
    margin-right: 0;
}

.navbar>.container-fluid .navbar-brand {
   margin-left: -15px;
}

.navbar .navbar-brand {
    font-weight: 600;
    margin: 12px 0px;
    padding: 15px 15px;
    font-size: 20px;
}

.navbar-default .navbar-brand {
    color: #777;
}

.navbar-brand {
    float: left;
    height: 50px;
    line-height: 20px;
}

.navbar-default .navbar-collapse {
    border-color: #e7e7e7;
}

.navbar-collapse {
    padding-right: 15px;
    padding-left: 15px;
}

.nav {
    padding-left: 0;
    list-style: none;
}

.nav>li {
    position: relative;
    display: block;
}

.navbar-default .navbar-nav > li > a:not(.btn) {
    color: #9A9A9A;
}

.navbar .navbar-nav > li > a {
    line-height: 1.42857;
    margin: 16px 0px;
    padding: 10px 15px;
    box-shadow: 0 0 black;
}

.nav>li>a {
    position: relative;
    display: block;
}
a {
    text-decoration: none;
    background-color: transparent;
}

a:-webkit-any-link {
    cursor: pointer;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
    list-style-type:none;
}
i,p {
   display: inline-block;
 }

ul{
     display: block;
     -webkit-margin-before: 1em;
     -webkit-margin-after: 1em;
     -webkit-margin-start: 0px;
     -webkit-margin-end: 0px;
     -webkit-padding-start: 40px;
 }

/*@media (min-width: 992px)
.navbar {
    min-height: 75px;
}

@media (min-width: 992px)
.navbar .navbar-header {
    margin-left: 15px;
}

@media (min-width: 768px)
.navbar-header {
    float: left;
}
@media (min-width: 768px)
.container-fluid>.navbar-collapse, .container-fluid>.navbar-header, .container>.navbar-collapse, .container>.navbar-header {
    margin-right: 0;
    margin-left: 0;
}

@media (min-width: 768px)
.navbar-right {
    float: right!important;
    margin-right: -15px;
}

@media (min-width: 768px)
.navbar-nav {
    margin: 0;
}

@media (min-width: 768px)
.navbar-nav>li {
    float: left;
}*/
.navbar {
    min-height: 75px;
}

.navbar .navbar-header {
    margin-left: 15px;
}

.navbar-header {
    float: left;
}

.container-fluid>.navbar-collapse, .container-fluid>.navbar-header, .container>.navbar-collapse, .container>.navbar-header {
    margin-right: 0;
    margin-left: 0;
}

.navbar-right {
    float: right!important;
    margin-right: -15px;
}

.navbar-nav {
    margin: 0;
}

.navbar-nav>li {
    float: left;
}

</style>
