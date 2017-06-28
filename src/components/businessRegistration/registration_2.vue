<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="set" style="height: 100%;">
        <div class="businessRegistration">伯通企业注册</div>
       <div class="procedure"></div>
       <div class="registrationBuss">
       	    <ul>
       	    	<li>企业（团队）名称：
       	    		<input type="text" placeholder="请输入企业名称" v-model="name" @focus="nameInput" @blur="nameOut" :class="{inputBorder:IsinputBorder}" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"/>
       	    		<div class="nameVale" v-show="nameVale">企业名称不能为空，请重新输入</div>
       	    	</li>
       	    	<li>所在地： <el-select v-model="value4" clearable placeholder="请选择" @change="locationInput" >
                                    <el-option
                                       v-for="item in options"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                                    </el-option>
                            </el-select>
                            <el-select v-model="value5" clearable placeholder="请选择" @change="locationInput">
                                    <el-option
                                       v-for="item in options_1"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                                    </el-option>
                            </el-select>
                            <div class="location" v-show="location">请选择所在地</div>
       	    	</li>
       	    	<li>行业类型：
       	    	            <el-select v-model="value6" clearable placeholder="请选择" @change="industryInput">
                                    <el-option
                                       v-for="item in options_2"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                                    </el-option>
                            </el-select>
                             <div class="industry" v-show="industry">请选择行业类型</div>
       	    	</li>
       	    </ul>
       	    <ol>
       	    	<li>联系人姓名：<input type="text" placeholder="请输入姓名" v-model="linkman" @focus="linkmanInput" @blur="linkmanOut" :class="{inputBorder:IsinputBorder_1}" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"/>
       	    		<div class="linkman" v-show="linkmanVal">联系人姓名不能为空</div>
       	    	</li>
       	    	<li>邮箱：<input type="text" placeholder="请输入邮箱" v-model="postCode" @focus="postcodeInput" @blur="postcodeOut" :class="{inputBorder:IsinputBorder_2}" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"/>
       	    		 <div class="postCode" v-show="postCodeVal">请输入正确的邮箱</div>
       	    	</li>
       	    	<li> 
       	    		<el-checkbox v-model="checked"></el-checkbox>
       	    		已阅读<span>《伯通服务协议》</span>
       	    	</li>
       	    </ol>
       	    <div class="tleXian"></div>
       	    <div class="registrationNext">
       	        <div @click="register">注册</div>
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
                 checked: false,
                 nameVale:false,
                 name:"",
                 IsinputBorder:false,
                 IsinputBorder_2:false,
                 IsinputBorder_1:false,
                 location:false,
                 industry:false,
                 linkman:"",
                 linkmanVal:false,
                 postCode:"",
                 postCodeVal:false,
                  options: [{
          value: '选项1',
          label: '陕西省'
        }],
                     options_2: [{
          value: '选项1',
          label: '医药'
        }, {
          value: '选项2',
          label: '互联网'
        }, {
          value: '选项3',
          label: '服务业'
        }, {
          value: '选项4',
          label: '教育'
        }, {
          value: '选项5',
          label: '制造业'
        }],
                     options_1: [{
          value: '选项1',
          label: '西安'
        }, {
          value: '选项2',
          label: '宝鸡'
        }, {
          value: '选项3',
          label: '渭南'
        }, {
          value: '选项4',
          label: '咸阳'
        }, {
          value: '选项5',
          label: '汉中'
        }],
        value4: '',
         value5: '',
          value6: ''
            }
        },
        created: function () {

        },
        watch: {

        },
        methods: {
//获取焦点
          nameInput(){
          	this.IsinputBorder=true
          	this.nameVale=false
          },
          linkmanInput(){
          	this.IsinputBorder_1=true
          	this.linkmanVal=false
          },
          postcodeInput(){
          	this.IsinputBorder_2=true
          	this.postCodeVal=false
          },
          locationInput(){
          	this.location=false
          },
          industryInput(){
          	this.industry=false
          },
//失去焦点
         nameOut(){
         	this.IsinputBorder=false
         },
         linkmanOut(){
         	this.IsinputBorder_1=false
         },
         postcodeOut(){
         	this.IsinputBorder_2=false
         },
          register(){
          	if(!this.valior()) {
					return
				}else{
					this.$router.push({
                        path: '/registration_3'
                        }) 
				}    	
          },
//验证规则
            valior:function(){
            	var flag = true
          	    var patterna = /^1[34578]\d{9}$/                           //手机号验证
          	    var pattern = /[`~!@#\$%\^\&\*_\+<>\?:"\{\},\.\\\/;'\[\]]/ //非法字符验证
          	    var feiK=/^\s*$/g                                          //非空验证  
          	    var postCode= /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/   // 邮箱验证
          	     if(feiK.test(this.name)) {
                    this.nameVale=true
					flag = false
				}
          	    if(feiK.test(this.value4)||feiK.test(this.value5)) {
                    this.location=true				
					flag = false
				}
          	    if(feiK.test(this.value6)){
          	    	this.industry=true
          	    	flag = false
          	    }
          	    if(feiK.test(this.linkman)){
          	    	this.linkmanVal=true
          	    	flag = false
          	    }
          	    if(!postCode.test(this.postCode)){
          	    	this.postCodeVal=true
          	    	flag = false
          	    }
          	    return flag
            },
        }
    }

</script>
<style scoped>
 .set{
		position: fixed;
		width: 100%;
        height: 100%;		
}
.inputBorder{
	border-color: #E7744A!important;
	}
.nameVale{
	position: absolute;
	left: 340px;
	top: 68px;
	color: #FF5F57;
	font-size: 12px;
}
.location{
	position: absolute;
	left: 340px;
	top: 138px;
	color: #FF5F57;
	font-size: 12px;
	z-index: 999;
}
.industry{
	position: absolute;
	left: 340px;
	top: 202px;
	color: #FF5F57;
	font-size: 12px;
	z-index: 999;
}
.linkman{
	position: absolute;
	left: 340px;
	top: 274px;
	color: #FF5F57;
	font-size: 12px;
	z-index: 999;
}
.postCode{
	position: absolute;
	left: 340px;
	top: 338px;
	color: #FF5F57;
	font-size: 12px;
	z-index: 999;
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
 	height: 60px;
 	border: 1px solid #AEAEAE;
 	background-color:rgba(255,255,255,0.6);
 	margin: 20px auto;
 	border-radius: 4px;
 	background: url(../../../static/img/2.png) no-repeat;
 	background-size: 100% 100%;
 	min-width: 1200px;
 }
  .registrationBuss{
  	position: relative;
 	width: 60%;
 	height: 550px;
 	border: 1px solid #AEAEAE;
 	border-radius: 4px;
 	margin:0 auto;
 	margin-top: 10px;
 	min-width: 1200px;
 }
  .registrationBuss ul li,
  .registrationBuss ol li{
 	margin-left: 200px;
 	padding-top: 30px;
 }
  .registrationBuss ul li input,
  .registrationBuss ol li input{
  	width: 260px;
  	height: 34px;
  	border-radius: 4px;
  	border:1px solid #bfcbd9;
  	padding-left: 12px;
  	color: #AEAEAE;
  	font-size: 14px;
  }
  .registrationBuss ul li:nth-child(2){
    margin-left: 267px;
 }
    .registrationBuss ol li:nth-child(1){
    margin-left: 204px;
 }
   .registrationBuss ol li:nth-child(2){
    margin-left: 246px;
 }
    .registrationBuss ol li:nth-child(3){
    margin-left: 290px;
 }
   .registrationBuss ul li:nth-child(3){
    margin-left: 252px;
 }
 .tleXian{
 	width: 80%;
 	height: 1px;
 	background-color:#CCCCCC;
 	margin-left:10%;
 	margin-top: 20px;
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
 	margin:40px 340px;
 	cursor: pointer;
 	
 }
</style>