<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="set">
       <div class="businessRegistration">伯通企业注册</div>
       <div class="procedure"></div>
       <div class="registrationTel">
       	    <ul>
       	    	<li>&nbsp;&nbsp;&nbsp;手机号码：
       	    		<input type="text" minlength="10" maxlength="11" placeholder="请输入手机号" :class="{inputBorder:IsinputBorder}" @blur='borderOut' @focus="borderfocus" v-model="telPhone"/>
       	    	   <div class="telVelBox">
       	    	   	  <div class="telVel" v-show="telVel">手机号码不正确，请重新输入</div>
       	    	      <div class="telVel" v-show="telVel1">手机号码不能为空</div>
       	    	   </div>      	    	  
       	    	</li>
       	    	<li>图片验证码：<input type="text" minlength="4" maxlength="4" class="placeholder-left" v-model="verify.code" placeholder="请输入验证码" :class="{inputBorder:IsinputBorder1}" @blur='borderOut1' @focus="borderfocus1"/>
       	    	    <div class="verify-img" slot="append" @click.prevent="refresh">
                           <div class="verify-code-item" v-for="item in verifyArray" :style="item.style">{{item.value}}</div>
                    </div>
       	    		<div class="telVelBox">
       	    	   	  <div class="telVel" v-show="telVel2">验证码不正确，请重新输入</div>
       	    	      <div class="telVel" v-show="telVel3">验证码不能为空</div>
       	    	   </div> 
       	    	</li>
       	    	<li>短信验证码：<input type="text" v-model="noteVel" minlength="4" maxlength="6" placeholder="请输入验证码" :class="{inputBorder:IsinputBorder2}" @blur='borderOut2' @focus="borderfocus2"/>
       	    		<div class="dxyzm">
       	    			<ziksang-count-down :start='start' @countDown ='start=false' @click.native='sendCode'></ziksang-count-down>
       	    		</div>	
       	    		<div class="telVelBox">
       	    	   	  <div class="telVel" v-show="telVel4">短信验证码不正确，请重新输入</div>
       	    	      <div class="telVel" v-show="telVel5">短信验证码不能为空</div>
       	    	   </div> 
       	    	</li>
       	    </ul>
       	    <div class="tleXian"></div>
       	    <div class="registrationNext">
       	        <div @click="next">下一步</div>
            </div>
       </div>
      
    </div>
</template>
<script>
    import {
        mapActions
    } from 'vuex';
     import ZiksangCountDown  from '../my_component.vue' //这里引入全局组件
    export default {
    	components: {ZiksangCountDown},//这里注册全局组件
        name: 'set',
        data() {
            return {
              IsinputBorder:false,
              IsinputBorder1:false,
              IsinputBorder2:false,
              telVel:false,
              telVel1:false,
              telVel2:false,
              telVel3:false,
              telVel4:false,
              telVel5:false,
              telPhone:"",
              noteVel:"",
              verifyCodeLength: 4,
              start:false,
        verify: {
          code: ''
        },
        verifyArray: []
            }
        },
        created: function () {

        },
        watch: {
   
        },
        methods: {
        	//      	短信验证码组件
        	sendCode (value) {
                //前面发送ajax请求成功之后调用this.start = true开始短信倒计时
//              if(!this.valior()) {
//					return
//				}
                this.start = true
           },
//      	获取焦点
        	borderfocus(){
        		this.IsinputBorder=true
        		 this.telVel1=false
        		 this.telVel=false
        	},
        	borderfocus1(){
        		this.IsinputBorder1=true
        		this.telVel2=false
        		this.telVel3=false
        	},
        	borderfocus2(){
        		this.IsinputBorder2=true
        		this.telVel5=false
        		this.telVel4=false
        	},
//      	失去焦点
        	borderOut(){
        		this.IsinputBorder=false
        	},
        	borderOut1(){
        		this.IsinputBorder1=false
        	},
        	borderOut2(){
        		this.IsinputBorder2=false
        	},
          next(){
          	if(!this.valior()||!this.validate()) {
					return
				}else{
					this.$router.push({
                        path: '/registration_2'
                        }) 
				} 
          },
          //         手机号验证
            valior:function(){
            	var flag = true
          	    var patterna = /^1[34578]\d{9}$/                           //手机号验证
          	    var pattern = /[`~!@#\$%\^\&\*_\+<>\?:"\{\},\.\\\/;'\[\]]/ //非法字符验证
          	    var feiK=/^\s*$/g                                          //非空验证    	   
          	     if(feiK.test(this.telPhone)) {
                    this.telVel1=true
					flag = false
				}else{
					if(!patterna.test(this.telPhone)) {
                    this.telVel=true
					flag = false
				}  
				}
          	    if(feiK.test(this.noteVel)) {
                    this.telVel5=true				
					flag = false
				}
          	    return flag
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
                    this.telVel3=true
				}else{
					let result = this.verifyArray.map(x => x.value).join('').toLocaleLowerCase() === this.verify.code.toLocaleLowerCase()
                    this.telVel2=true
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
      }
    },
    mounted() {
      this.refresh()
    }
        
    }

</script>
<style scoped>
input::-webkit-contacts-auto-fill-button {
        visibility: hidden;
        display: none!important;
        pointer-events: none;
        position: absolute;
        right: 0;
    }
.verify-img {
    height: 34px;
    width: 80px;
    border: 0;
    background: #e4e4e4;
    color: #000;
    cursor: pointer;
    line-height: 40px; 
    position: absolute;
    margin-left: 350px;
    margin-top: -34px;
  }
  .dxyzm{
  	position: absolute;
  	margin-left: 350px;
  	margin-top: -35px;
  }
  .verify-code-item {
    float: left;
    width: 20px;
    height: 34px;
    line-height: 34px;
    text-align: center;
  }
.telVelBox{
	position: absolute;
    margin-left: 90px;
    margin-top: 6px;
}
.telVel{
	color:#FF5F57;
	font-size: 12px;
}
.inputBorder{
	border: 1px solid #E7744A !important;
	}
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
 	background: url(../../../static/img/1.png) no-repeat;
 	background-size: 100% 100%;
 	min-width: 1200px;
 }
 .registrationTel{
 	width: 60%;
 	height: 300px;
 	border: 1px solid #AEAEAE;
 	border-radius: 4px;
 	margin:0 auto; 
 	margin-top: 10px;
 		min-width: 1200px;
 }
 .registrationTel ul li{
 	margin-left: 20%;
 	padding-top: 30px;
 }
  .registrationTel ul li input{
  	width: 260px;
  	height: 34px;
  	border-radius: 4px;
  	border:1px solid #AEAEAE;
  	padding-left: 12px;
  	color: #AEAEAE;
  	font-size: 14px;
  }
 .registrationTel ul li:nth-child(1){
 	padding-left: -282px;
 }
 .tleXian{
 	width: 80%;
 	height: 1px;
 	background-color:#CCCCCC;
 	margin-left:10%;
 	margin-top: 40px;
 }
 .registrationNext{
 	width: 80px;
 	height: 34px;
 	background-color:#E7744A;
 	border-radius: 4px;
 	text-align: center;
 	line-height: 34px;
 	color: #FFF;
 	font-size: 14px;
 	margin:20px 28%;
 	cursor: pointer;
 }
</style>