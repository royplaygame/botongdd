<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="set" style="height: 100%;">
        <div class="masterTop">
        	更换主管理账号，需要验证当前主管理账号的身份
        </div>
        <div class="masterBot">
            <div class="BindingAccount">
            	<ul>
            		<li>当前绑定伯通账号</li>
            		<li id='asterisk'>*</li>
            		<li>：</li>
            		<li id='interval'>张晓</li>
            	</ul>
            </div>
            <div class="telPhone">
            	<ul>
            		<li>手机号</li>
            		<li id='asterisk'>*</li>
            		<li>：</li>
            		<li id='interval'>
            			<input type="text" placeholder='请输入手机号' v-model='telphone' @focus='inputFocus' @blur='inputOut' onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" :class="{borderMa:IsborderMa}"/>
            			<div id="prompt" v-show='promptTitle'>
            				请输入正确的手机号码
            			</div>
            		</li>
            		<li class='textCode'><ziksang-count-down :start='start' @countDown ='start=false' @click.native='sendCode'></ziksang-count-down></li>
            	</ul>
            </div>
            <div class="authCode">
            	<ul>
            		<li>验证码</li>
            		<li id='asterisk'>*</li>
            		<li>：</li>
            		<li id='interval'>
            			<input type="text" placeholder='请填写验证码' :class="{borderMa:IsborderMa}" @focus='inputFocus' @blur='inputOut' onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"/>
            			<div id="captcha" v-show='captcha'>
            				请输入正确的验证码
            			</div>
            		</li>
            	</ul>
            </div>
            <div class="masterNext"><a href="javascript:;" @click='masterNext'>下一步</a></div>
        </div>
    </div>
</template>
<script>
    import {
        mapActions
    } from 'vuex'
    import ZiksangCountDown  from '../my_component.vue' //这里引入全局组件
    export default {
    	components: {ZiksangCountDown},//这里注册全局组件
        name: 'set',
        data() {
            return {
              start:false,
              telphone:"",
              promptTitle:false,
              IsborderMa:false,
              captcha:false
            }
        },

        created: function() {

        },
        watch: {

        },
        methods: {
//      	短信验证码组件
        	sendCode (value) {
                //前面发送ajax请求成功之后调用this.start = true开始短信倒计时
                if(!this.valior()) {
					return
				}
                this.start = true
           },
//         输入框获取焦点改变边框颜色
            inputFocus: function(e) {
            	this.IsborderMa=false
				e.srcElement.style.borderColor = '#E7744A'
				this.promptTitle=false
			},
//			输入框失去焦点改变边框颜色
            inputOut:function(e){
            	e.srcElement.style.borderColor = 'rgba(0,0,0,0.1)'
            },
//         手机号验证
            valior:function(){
            	var flag = true
          	    var patterna = /^1[34578]\d{9}$/                           //手机号验证
          	    var pattern = /[`~!@#\$%\^\&\*_\+<>\?:"\{\},\.\\\/;'\[\]]/ //非法字符验证
          	    var feiK=/^\s*$/g                                          //非空验证
          	    var telphoneLi=document.getElementById('interval')
          	    var telphoneInput=telphoneLi.getElementsByTagName('input')
          	    if(!patterna.test(this.telphone)) {
                    this.IsborderMa=true
					this.promptTitle = true
					flag = false
				}
//        	    if(feiK.test(telphoneInput)) {
//                  this.IsborderMa=true
//					this.captcha = true
//					flag = false
//				}
          	    return flag
            },
//         跳转下一级
        	masterNext:function(){
        		if(!this.valior()) {
					return
				}
        		var url = '/home/set/changMasterNext'
				this.$router.push({
					path: url
				})
        	},
           ...mapActions(['changMasterNext'])
        }
    }

</script>
<style scoped>
    .masterTop{
    	width: calc(100%-88px);
    	height: auto;
    	border-bottom:1px solid rgba(0,0,0,0.15);
        margin-left: 44px;
        margin-right: 44px;
        padding-top: 20px;
        padding-bottom: 12px;
        color: #303030;
        font-size: 14px;
    }
    .masterBot{
    	width: calc(100%-88px);
    	height: 251px;
    	margin-left: 44px;
        margin-right: 44px;
        border-bottom:1px solid rgba(0,0,0,0.15); 
    }
    .masterBot ul li {
    	float: left;
    }
    .BindingAccount,
    .telPhone,
    .authCode{
    	width:100%;
    	height: 45px;
    	color: #303030;
    	font-size: 14px;
    }
    .telPhone input{
    	width: 240px;
    	height: 36px;
    	border: 1px solid rgba(0,0,0,0.1);
    	border-radius: 4px;
        margin-top: -10px;
        padding-left: 5px;
    }
     .textCode{
    	margin-top: -8px;
        margin-left: 70px;
    }
    .authCode input{
    	width: 240px;
    	height: 36px;
    	border: 1px solid rgba(0,0,0,0.1);
    	border-radius: 4px;
    	margin-top: -10px;
    	padding-left: 5px;
    }
    #interval{
    	margin-left: 12px;
    }
    #asterisk{
    	color: #E7744A;
    	font-size:14px;
    	margin-top:-4px;
    }
    .BindingAccount{
       margin-top: 20px;
       padding-left: 70px;
    }
    .telPhone,
    .authCode{
    	margin-top: 20px;
    	padding-left: 141px;
    }
    .masterNext{
    	width:100px;
    	height: 34px;
    	background-color:#E7744A;
    	
    	border-radius: 4px;
    	margin-top: 30px;
    	text-align: center;
    	line-height: 34px;
    	margin-left:312px;
    }
    .masterNext a{
    	display: inline-block;
    	width: 100%;
    	height: 100%;
    	text-decoration: none;
    	color:#FFFFFF;
    	font-size:16px;
    }
    #prompt{
    	color:#FF5F57;
    	font-size:12px;
    	margin-top: 6px;
    }
    #captcha{
    	color:#FF5F57;
    	font-size:12px;
    	margin-top: 6px;
    }
    .borderMa{
    	border: 1px solid #FF5F57 !important;
    }
</style>
