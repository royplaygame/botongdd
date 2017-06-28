<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="set" style="height: 100%;">
        <div class="addChildTop">
        	<a href="javascript:;"><img src="/static/img/Shape.png" @click='back'/></a>
        	编辑子管理员
        </div>
        <div class="addChildBot">
        	<div class="member">
        		成员：<input type="text" placeholder='请选择成员' @focus='selectMembers'/>
        	</div>
        	<div class="chainCommand">
        		管理范围：
        		<div class="branch radioGroups" >
        				<input type="radio" name="gender" id="x" value="X" @click='allCompany' class="radio_origins"><label for="x" @click="single"> <div class="radio_inners"></div>全公司</label><br>
                        <input type="radio" name="gender" id="y" value="M" @click='lowerLevel' class="radio_origins"><label for="y" @click="single"> <div class="radio_inners"></div>所在部门及下级部门</label><br>
                        <input type="radio" name="gender" id="z" value="F" @click="Specific" class="radio_origins"><label for="z" @click="single"> <div class="radio_inners"></div>特定部门</label><br>
                        <input type="text" name="" id="Specific" placeholder='请选择特定企业部门' @focus='selectSpecific' v-show='specMem'/>
        		</div>
        	</div>
        	<div class="privileges">
        		分配权限：
        		<span id="bracket">
        			(将会在以上通讯录范围内配置权限)
        		</span>
        		<span id="allJurisdiction">
        		   <el-checkbox v-model="legal"></el-checkbox>&nbsp;&nbsp;全部权限
        		</span>
        	</div>
        	<div class="BasicPermissions">
        		<ul>
        			<li id='first'>基础权限</li>
        			<li>
        				<div class="ato">
        					<img src="../../../static/img/通讯录.png"/>&nbsp;&nbsp;通讯录管理
        				</div>
        				<div class="allAA">
        					<el-checkbox v-model="legal_1"></el-checkbox>&nbsp;全部管理权限
        				</div>
        			</li>
        			<li>
        				<div class="ato">
        					<img src="../../../static/img/微应用.png"/>&nbsp;&nbsp;微应用管理
        				</div>
        				<div class="allAA">
        					<el-checkbox v-model="legal_2"></el-checkbox>&nbsp;全部管理权限
        				</div>
        			</li>
        			<li>
        				<div class="ato">
        					<img src="../../../static/img/企业设置.png"/>&nbsp;&nbsp;企业设置
        				</div>
        				<div class="allAA">
        					<el-checkbox v-model="legal_3"></el-checkbox>&nbsp;全部管理权限
        				</div>
        			</li>
        		</ul>
        	</div>
        	<div class="BasicPermissions">
        		<ul>
        			<li id='first'>微应用权限</li>
        			<li>
        				<div class="ato">
        					<img src="../../../static/img/公告.png"/>&nbsp;&nbsp;公告
        				</div>
        				<div class="allAA">
        					 <el-checkbox v-model="legal_4"></el-checkbox>&nbsp;全部管理权限
        				</div>
        			</li>
        			<li>
        				<div class="ato">
        					<img src="../../../static/img/日志.png"/>&nbsp;&nbsp;日志
        				</div>
        				<div class="allAA">
        					<el-checkbox v-model="legal_6"></el-checkbox>&nbsp;全部管理权限
        				</div>
        			</li>
        			<li>
        				<div class="ato">
        					<img src="../../../static/img/审批.png"/>&nbsp;&nbsp;审批
        				</div>
        				<div class="allAA">
        					<el-checkbox v-model="legal_7"></el-checkbox>&nbsp;全部管理权限
        				</div>
        			</li>
        			<li>
        				<div class="ato">
        					<img src="../../../static/img/签到.png"/>&nbsp;&nbsp;签到
        				</div>
        				<div class="allAA">
        					<el-checkbox v-model="legal_8"></el-checkbox>&nbsp;全部管理权限
        				</div>
        			</li>
        			<li>
        				<div class="ato">
        					<img src="../../../static/img/考勤.png"/>&nbsp;&nbsp;考勤打卡
        				</div>
        				<div class="allAA">
        					<el-checkbox v-model="legal_9"></el-checkbox>&nbsp;全部管理权限
        				</div>
        			</li>
        			<li>
        				<div class="ato">
        					<img src="../../../static/img/企业咨询.png"/>&nbsp;&nbsp;企业咨询
        				</div>
        				<div class="allAA">
        					<el-checkbox v-model="legal_0"></el-checkbox>&nbsp;全部管理权限
        				</div>
        			</li>
        		</ul>
        	</div>
        	<div class="save">
        		<a href="javascript:;">保存</a>
        	</div>
        </div>
        <popup-box v-show='Modals' @abolishmem='abolishmem'></popup-box>
        <defini v-show='definiBox' @abolishmems='abolishmems'></defini>
    </div>
</template>
<script>
    import {
        mapActions
    } from 'vuex';
    import popupBox  from '../pop-upBox' //这里引入全局组件
    import defini  from '../defini' 
    export default {
    	components: {popupBox,defini},//这里注册全局组件
        name: 'set',
        data() {
            return {
               Modals:false,
               specMem:false,
               definiBox:false,
               legal:"",
               legal_0:"",
               legal_1:"",
               legal_2:"",
               legal_3:"",
               legal_4:"",
               legal_5:"",
               legal_6:"",
               legal_7:"",
               legal_8:"",
               legal_9:"",
            }
        },

        created: function() {

        },
        watch: {

        },
          methods: {
        allCompany:function(){
        	this.specMem=false
        },
        lowerLevel:function(){
        	this.specMem=false
        },
//选择成员弹出框
        selectMembers:function(e){
        	e.srcElement.style.borderColor = '#E7744A'
        	this.Modals=true
        },
//选择部门弹出框        
        selectSpecific:function(e){
        	e.srcElement.style.borderColor = '#E7744A'
        	this.definiBox=true
        },
        abolishmem(){
        	this.Modals=false
        },
        abolishmems(){
        	this.definiBox=false
        },
//      特定部门
        Specific:function(){
        	this.specMem=true
        },
//返回上级页面
        back:function(){
        	var url = '/home/set/setchildManager'
				this.$router.push({
					path: url
				})
        },
         single: function (event) {
                var el = event.currentTarget;
                var radioId = el.getAttribute("name")
                $('.radioGroups label').removeAttr('class') && el.setAttribute("class", "checked")
                $('.radioGroups input[type = "radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked')
            },
         ...mapActions(['setchildManager'])
        }
    }

</script>
<style scoped>
	.set{
		position: relative;
	}
    .addChildTop{
    	width: calc(100%-88px);
    	height: auto;
    	border-bottom:1px solid rgba(0,0,0,0.1);
        margin-left: 44px;
        margin-right: 44px;
        padding-top: 20px;
        padding-bottom: 12px;
        color: #303030;
        font-size: 14px;
    }
    .addChildTop img{
    	margin-right: 8px;
    }
     .addChildBot{
    	width: calc(100%-88px);
    	height: auto;
    	margin-left: 44px;
        margin-right: 44px;
        margin-top: 20px;
    }
    .member{
    	width: 100%;
    	height: auto;
        padding-left: 54px;
    }
    .member input{
    	width: 320px;
    	height: 30px;
    	margin-left: 12px;
    	border-radius: 4px;
    	border: 1px solid rgba(0,0,0,0.1);
    	padding-left: 5px;
    }
    .chainCommand{
    	width: 100%;
    	height: auto;
    	margin-left: 27px;
        margin-top: 20px;
    }
    .branch{
    	margin-left: 90px;
    	margin-top: -20px;
    }
    .branch label{
    	margin-left: 10px;
    }
    #Specific{
    	width: 320px;
    	height: 30px;
    	border: 1px solid rgba(0,0,0,0.1);
    	padding-left: 5px;
    }
    .privileges{
    	width: 100%;
    	height: auto;
    	margin-left: 29px;
    	margin-top: 24px;
    }
    #bracket{
    	margin-left: 8px;
    	color: #8F8E94;
    	font-size:14px;
    }
    #allJurisdiction{
    	float: right;
    	margin-right: 118px;
    	color: #E7744A;
    	font-size:14px;
    }
    .BasicPermissions{
    	width: 75%;
    	height: auto;
    	margin-left: 108px;
    	margin-top: 16px;
    }
    .BasicPermissions ul li{
    	width: 100%;
    	height: 40px;
    	border-bottom:1px solid rgba(0,0,0,0.1);
    	color: #303030;
    	font-size:12px;
    }
    .BasicPermissions ul li div{
    	display: inline-block;
    }
    #first{
    	width: auto;
    	height: 36px;
    	line-height: 36px;
    	font-size:14px;
    }
    .ato{
    	width: auto;
    	height: 40px;
    	line-height: 40px;   	
    }
    .allAA{
    	width: auto;
    	height: 40px;
    	line-height: 40px;
    	float: right;
    }
    .save{
    	width: 100px;
    	height: 34px;
    	line-height: 34px;
    	text-align: center;
    	background-color: #E7744A;
    	border-radius: 4px;
    	margin:30px auto;
    }
    .save a{
    	display: inline-block;
    	width: 100%;
    	height: 100%;
    	text-decoration: none;
    	color: #FFFFFF;
    	font-size: 16px;
    }
      .radio_inners {
        margin-top: 1px;
        margin-left: -20px;
        float: left;
        width: 14px;
        height: 14px;
        background: url('/static/img/Slice.png') no-repeat -118px -113px;
    }
    
    label.checked .radio_inners {
        background-position: -98px -113px;
    }
     .radio_origins {
        opacity: 0;
        z-index: -1;
        position: absolute;
    }
</style>
