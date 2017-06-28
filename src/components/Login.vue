<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="app" class="login"> 
    	<div class="loginTop">
    		<img src="../../static/img/logo.png"/>
    		伯通管理后台
    	</div>
    	<div class="loginBot">
         <div class="loginLeft">
         	<div class="botong">Bo   Tong</div>
         	<div class="cloud">Cloud Administracttion</div>
         	<div class="welcome">欢迎使用伯通云管理系统</div>
         </div>
         <div class="loginRight">
            <div class="loginTitle">管理端登录</div>
            <div class="markedWordsBox">
            	<div class="markedWords" v-show="markedWords">账号或密码输入不正确，请重新输入</div>
            	<div class="markedWords" v-show="markedWords_1">验证码输入不正确,请重新输入</div>
            	<div class="markedWords" v-show="markedWords_2">账号不能为空</div>
            	<div class="markedWords" v-show="markedWords_3">密码不能为空</div>
            	<div class="markedWords" v-show="markedWords_4">验证码不能为空</div>
            </div>  
            <div class="account" id="interval">
            	<input type="text" placeholder="账号" minlength="11" maxlength="11" id="account" v-model='account' @focus='inputFocus' onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"/>
            	<img src="../../static/img/账号.png" alt="" />
            </div>
            <div class="password">
                 <input type="text" minlength="4" maxlength="12" placeholder="密码" onfocus="this.type='password'" id="password" v-model='password' @focus='inputFocus' onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"/>
                 <img src="../../static/img/密码.png"/>
            </div>
            <div class="authCode">
            	<input   class="placeholder-left" minlength="4" maxlength="4" v-model="verify.code" placeholder="验证码" @focus='inputFocus' onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"/>
                <div class="verify-img" slot="append" @click.prevent="refresh">
                     <div class="verify-code-item" v-for="item in verifyArray" :style="item.style">{{item.value}}</div>
                </div>   	
            </div>
            <div class="retrievePassword" @click="passwordBack">找回密码</div>
            <div class="register"><div @click="loginss">登录</div></div>
         </div> 
         <div class="retrievePasswordBox" v-show="passwordBox">
         	<div class="retrievePasswordSmallBox">
         		<div class="smallBoxTitle">找回密码</div>
         		<ul>
         			<li>绑定手机号：<input minlength="11" maxlength="11" type="text" placeholder="请输入绑定的手机号" v-model="telPhone" @focus='inputFocusT' onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"/> 
         			               <div class="telphoneCode"><ziksangs-count-down :start='start' @countDown ='start=false' @click.native='sendCode'></ziksangs-count-down></div>
         			               <div class="yanzgz" ><span v-show="yanzgzT">请输入正确的手机号码</span></div>
         			</li>
         			<li>验证码：<input minlength="4" maxlength="6" type="text" placeholder="请填写验证码" v-model="yanzm" @focus='inputFocusC' onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"/>
         				        <div class="yanzgz yanzgzC" ><span v-show="yanzgzC">请输入正确的验证码</span></div>
         			</li>
         			<li>新密码：<input minlength="4" maxlength="12" type="password"placeholder="请输入新密码" v-model="newPassword" @focus='inputFocusP' onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"/>
         				        <div class="yanzgz yanzgzP"><span v-show="yanzgzP">请输入密码</span></div>
         			</li>
         			<li>确认密码：<input minlength="4" maxlength="12" type="password" placeholder="请输入确认密码" v-model="newPasswords" @focus='inputFocusNp' onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"/>
         				<div class="yanzgz yanzgzNp"><span v-show="yanzgzNp">两次密码输入不一致，请重新输入</span></div>
         			</li>
         		</ul>
         		<div class="passwordBox">	
         		<div class="passwordSave" @click="closeSave">保存</div>
         		<div class="passwordAbolish" @click="abolish">取消</div>
         		</div>      		
         	</div>
         </div>
        </div>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    import ZiksangsCountDown  from './passwordBack.vue' //这里引入全局组件
    export default {
    	components: {ZiksangsCountDown},//这里注册全局组件
        name: 'login',
        data() {
            return {
                loginIngbox: false,
                loginIng: true,
                checked: false,
                user: {
                    name: '',
                    password: ''
                },
                loading: false,
                seePassword:true,
                start:false,
                passwordBox:false,
                verifyCodeLength: 4,
                verify: {
                code: ''
                },
                verifyArray: [],
                markedWords:false,
                account:"",
                password:"",
                verify:{
                	code:""
                },
                telPhone:"",
                yanzm:"",
                newPassword:"",
                newPsaawords:"",
                yanzgzT:false,
                yanzgzC:false,
                yanzgzP:false,
                yanzgzNp:false,
                telPhone:"",
                yanzm:"",
                newPassword:"",
                newPasswords:"",
                markedWords_1:false,
                markedWords_2:false,
                markedWords_3:false,
                markedWords_4:false
            }
        },
        created: function () {
             if(navigator.userAgent.toLowerCase().indexOf('se 2.x')>-1 ? true : false)
            { 
                 this.seePassword=false
            }
            var self = this      
            sessionStorage.removeItem('userId')
            sessionStorage.removeItem('userName')
            var name = localStorage.getItem('name')
            var psw = localStorage.getItem('psd')
            var checkStr = localStorage.getItem('check');
            if (checkStr == 'true') {
                self.checked = true
            } else {
                self.checked = false
            }
            self.user.name = name
            self.user.password = psw
//          document.querySelector('body').addEventListener('keypress', function (e) {
//          	var  path=self.$route.path.split('/')[1]
//          	if(path=='login'){
//          		 if (e.keyCode === 13) {
//                         self.submit();
//              }
//          	}
//             
//          })
    
        },
        mounted(){
            this.refresh()
        },
        methods: {
//      	获取焦点
        	inputFocus(e){
        		this.markedWords=false
        		this.markedWords_1=false
        		this.markedWords_2=false
        		this.markedWords_3=false
        		this.markedWords_4=false
        	},
        	inputFocusT(e){
        		this.yanzgzT=false
        	},
        	inputFocusC(e){
        		this.yanzgzC=false
        	},
        	inputFocusP(e){
        		this.yanzgzP=false
        	},
        	inputFocusNp(e){
        		this.yanzgzNp=false
        	},
        	  /**
       * 获取随机数值
       */
      getValue() {
        return Math.random().toString(36).substr(7, 1)
      },
      /**
       * 获取验证码样式
       */
      getStyle() {
        let transformY = `translateY(${Math.floor((Math.random() - 0.5) * 10)}px)`
        let scale = `scale(${Math.random() + 0.8})`
        let rotate = `rotate(${Math.floor((Math.random() - 0.5) * 100)}deg)`
        let font = `${12 + Math.floor((Math.random() - 0.5) * 4)}px`
        return {
          transform: `${transformY} ${scale} ${rotate}`,
          fonSize: font
        }
      },
      /**
       * 刷新验证码
       */
      refresh() {
        var array = Array.from(Array(this.verifyCodeLength)).map(x =>
          ({
            value: this.getValue(),
            style: this.getStyle()
          })
        )
        this.verifyArray = array
      },
      /**
       * 验证码校验
       */
      validate(rule, value, callback) {
        // 验证用户验证码输入
        var feiK=/^\s*$/g                                          //非空验证
        if(feiK.test(this.verify.code)) {
                    this.markedWords_4=true
				}else{
					let result = this.verifyArray.map(x => x.value).join('').toLocaleLowerCase() === this.verify.code.toLocaleLowerCase()
                    this.markedWords_1=true
                     return result
				}   
       
      },
      /**
       * 获取验证码输入值
       */
      getVerifyValue() {
        return this.verify.code
      },
      reset() {
        this.verify.code = ''
        this.refresh()
      },
        	passwordBack(){
        		this.passwordBox=true
        	},
        	abolish(){
        		this.passwordBox=false
        		this.yanzgzT=false
        		this.yanzgzC=false
        		this.yanzgzP=false
        		this.yanzgzNp=false
        	    this.telPhone=""
                this.yanzm=""
                this.newPassword=""
                this.newPasswords=""
        	},
        	//短信验证码
        	sendCode (value) {
                //前面发送ajax请求成功之后调用this.start = true开始短信倒计时
                
                var patterna = /^1[34578]\d{9}$/                           //手机号验证
                 if(!patterna.test(this.telPhone)) {
                  this.yanzgzT=true
					return false
				}  
                this.start = true
           },
//         修改密码弹出框
           closeSave(){
           	     if(!this.newValior()) {
					return
				}          	
				 this.telPhone=""
                 this.yanzm=""
                 this.newPassword=""
                 this.newPasswords=""
           	     this.passwordBox=false
           },
//表单验证
            newValior:function(){
            	var flag = true
          	    var patterna = /^1[34578]\d{9}$/                           //手机号验证
          	    var pattern = /[`~!@#\$%\^\&\*_\+<>\?:"\{\},\.\\\/;'\[\]]/ //非法字符验证
          	    var feiK=/^\s*$/g                                          //非空验证
          	    var telphoneLi=document.getElementById('interval')
          	    var telphoneInput=telphoneLi.getElementsByTagName('input')
          	    if(!patterna.test(this.telPhone)) {
                  this.yanzgzT=true
					flag = false
				}         	  
          	    if(feiK.test(this.yanzm)) {
                  this.yanzgzC=true
					flag = false
				} 
				 if(feiK.test(this.newPassword)) {
                  this.yanzgzP=true
					flag = false
				} 
				 if(!(this.newPasswords==this.newPassword)) {
                  this.yanzgzNp=true
					flag = false
				} 
          	    return flag
            },
            valior:function(){
            	var flag = true
          	    var patterna = /^1[34578]\d{9}$/                           //手机号验证
          	    var pattern = /[`~!@#\$%\^\&\*_\+<>\?:"\{\},\.\\\/;'\[\]]/ //非法字符验证
          	    var feiK=/^\s*$/g                                          //非空验证
          	    var telphoneLi=document.getElementById('interval')
          	    var telphoneInput=telphoneLi.getElementsByTagName('input')
          	    if(feiK.test(this.account)) {
                  this.markedWords_2=true
                  this.markedWords=false
					flag = false
				}else{
					if(!patterna.test(this.account)) {
                    this.markedWords=true
					flag = false
				}  
				}       	  
          	    if(feiK.test(this.password)) {
                    this.markedWords_3=true
					flag = false
				}
          	    return flag
            },
        	loginss(){
        		if(!this.valior()||!this.validate()) {
					return
				}else{
					this.$router.push({
                        path: '/home'
                        }) 
				}       		
        	    },
        	chakan:function(){
        		this.loginIngbox=true
        		this.loginIng=false
        	},
        	mimi:function(){
        		this.loginIngbox=false
        		this.loginIng=true
        	},
        	accountDelete:function(){
        		this.user.name=""
        	},
        	submit:function(){
        		this.loginClick()
        	},
            loginClick() {            	
                var memoryStr = this.checked
                if (memoryStr == true) {
                    localStorage.setItem('name', this.user.name)
                    localStorage.setItem('psd', this.user.password)
                    localStorage.setItem('check', this.checked);
                } else {
                    localStorage.removeItem('name', this.user.name)
                    localStorage.removeItem('psd', this.user.password)
                    localStorage.removeItem('check', this.checked);
                }
                if (this.user.name == null || this.user.password == null) {
                    this.$message({
                        type: 'info',
                        message: '账号或密码不能为空!'
                    });
                } else {               	 
                    this.loading = true
                    this.login({
                        account: this.user.name,
                        password: this.user.password                       
                    }).then((data) => {                      
                        if (data.code == 200) {
                            this.loading = false
                            sessionStorage.setItem('userId', data.data.id)
                            sessionStorage.setItem('userName', data.data.account)
                            sessionStorage.setItem('companyName', data.data.companyName)
                            this.$router.push({
                                path: '/home'
                            })                          
                        } else {
                            this.loading = false
                            this.$message({
                                type: 'info',
                                message: '账号或密码错误!'
                            });
                        }
                    }).catch(msg => {
                        if (msg.status == 500) {
                            this.$message({
                                type: 'info',
                                message: '服务器没有启动!'
                            });
                            this.loading = false
                        }
                        if (msg.status == 603) {
                            this.$message({
                                type: 'info',
                                message: '请求超时，服务器没有启动!'
                            });
                            this.loading = false
                        }
                    });
                }
            },
        ...mapActions(['login'])
        }
    }

</script>
<style scoped src="../assets/css/login.css">

</style>