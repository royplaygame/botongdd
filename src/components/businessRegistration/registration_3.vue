<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="set">
       <div class="businessRegistration">伯通企业注册</div>
       <div class="procedure"></div>
       <div class="registrationAll">
       	   <h3>您已成功完成注册，3秒后跳转至登录页面</h3>
       	   <div class="clickLogin" @click="login">
       	   	倒计时完成如果未进入登录页面，请点击<p>登录</p>
       	   </div>
       </div>
    </div>
</template>
<script>
    import {
        mapActions
    } from 'vuex';
    export default {
        name: 'set',
        data() {
            return {
              
            }
        },
        created: function () {

        },
        watch: {
   
        },
        methods: {
          login(){
          	this.$router.push({
                        path: '/login'
                        }) 
          }
        }
    }

</script>
<style scoped>
.set{
		position: fixed;
		width: 100%;
        height: 100%;		
}
 .businessRegistration{
 	width: 100%;
 	height: 40px;
 	background-color:#E7744A;
 	line-height: 40px;
 	padding-left: 20%;
 	color: #FFF;
 	font-size: 16px;
 }
 .procedure{
 	width: 60%;
 	height: 70px;
 	border: 1px solid #AEAEAE;
 	background-color:rgba(255,255,255,0.6);
 	margin: 20px auto;
 	border-radius: 4px;
 	background: url(../../../static/img/3.png) no-repeat;
 	background-size: 100% 100%;
 }
 .registrationAll{
 	width: 60%;
 	height: 300px;
 	border: 1px solid #AEAEAE;
 	border-radius: 4px;
 	margin:0 auto;
 }
 .registrationAll h3{
 	padding-top: 70px;
 	padding-left: 30px;
 }
 .clickLogin{
 	padding-left: 30px;
 }
 .clickLogin p{
 	display: inline-block;
 	width: 40px;
 	height: 20px;
 	background: #E7744A;
 	color: #FFF;
 	font-size: 14px;
 	text-align: center;
 	line-height: 20px;
 	cursor: pointer;
 	border-radius: 4px;
 	margin-left: 5px;
 }
</style>