<template>
  <div class="user">
    <div class="photo">
	     <img src="../../../assets/img/face-2.jpg">
	   </div>
     <div class="info">
						<a data-toggle="collapse" href="#" class="collapsed" aria-expanded="true">
	             <span>
								Max Mustermann
		           <!-- <b class="caret"></b>-->
							</span>
	           </a>
	   </div>
  </div>
</template>
<!--第44行，为什么一定要指明是 .user .photo呢？-->
<script>
export default {
  name: 'sideUser'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.user {
    position: relative;
    z-index: 4;
    margin-top: 20px;
    padding-bottom: 20px;
  }

.user:after {
  content: "";
  position: absolute;
  bottom: 0px;
  right: 15px;
  width: calc(100% - 30px);
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
}

.user .photo {
    border-color: rgba(255, 255, 255, 0.3);
}
.photo {
    /*border-color: rgba(255, 255, 255, 0.3);*/
    border: 2px solid;
    width: 34px;
    height: 34px;
    overflow: hidden;
    float: left;
    margin-right: 11px;
    z-index: 5;
    border-radius: 50%;
    margin-left: 23px;
}

.photo img {
    width: 100%;
}

.user .info a {
    color: #FFFFFF;
    padding: 7px 25px;
    white-space: nowrap;
    display: block;
    opacity: .7;
    position: relative;
    text-decoration:none; /*CSS下划线效果：无下划线*/
}
.info a:visited {
    opacity: 1;
}
.sidebar .user .info > a > span {
    opacity: 1;
    line-height: 22px;
    display: block;
    position: relative;
    font-size: 14px; /*我加的，原来的字体太小了*/
}
</style>
