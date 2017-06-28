<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="set" style="height: 100%;">
       <div class="childMasterTop">
       	子管理员
       	<a href="javascript:;" @click='add'><img src="../../../static/img/添加.png" alt="" /></a>
       </div>
       <div class="childMasterBot">
       	<table>
       		<tr>
       			<th>成员</th>
       			<th>管理范围</th>
       			<th>权限</th>
       			<th>操作</th>
       		</tr>
       		<tr>
       		    <td>张宇</td>
       		    <td>所属部门和下级部门</td>
       		    <td>
       		       <span id="jurisdiction">
       		       	通讯录管理 
       		       </span>	
       		      <span id="jurisdiction">客户管理</span>
       		    </td>
       		    <td>
       		    	<a href="javascript:;" @click='compile'><img src="../../../static/img/编辑.png" alt=""/></a>
       		    	<a href="javascript:;" @click='remove'><img src="../../../static/img/删除.png" id='remove'/></a>
       		    </td>
       		</tr>
       	</table>
       </div>
       <remove-master v-show='removeM' @abolish='abolish'></remove-master>
    </div>
</template>
<script>
    import {
        mapActions
    } from 'vuex';
    import removeMaster  from '../removeMaster.vue' //这里引入全局组件
    export default {
    	components: {removeMaster},//这里注册全局组件
        name: 'set',
        data() {
            return {
              removeM:false,
              ModalsBox:false
            }
        },

        created: function() {

        },
        watch: {

        },
        methods: {
//      	跳转编辑页面
           compile:function(){
           	var url = '/home/set/compileChildMaster'
				this.$router.push({
					path: url
				})
           },
//         删除管理员
           remove:function(){
           	this.removeM=true
           },
           abolish:function(){
           		this.removeM=false
           },
//         跳转添加子管理员页面
           add:function(){
           	var url = '/home/set/addChildMaster'
				this.$router.push({
					path: url
				})
           },
           ...mapActions(['addChildMaster','compileChildMaster'])
        }
    }

</script>
<style scoped>
	.set{
		position: relative;
	}
    .childMasterTop{
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
    .childMasterTop a{
    	margin-left: 8px;
    }
    .childMasterBot{
        width: calc(100%-88px);
    	height: 251px;
    	margin-left: 44px;
        margin-right: 44px;
        margin-top: 20px;
        border-bottom:1px solid rgba(0,0,0,0.15); 
    }
    .childMasterBot table{
       width: 100%;
       height: auto; 
    }
    .childMasterBot tr th{
    	height: 40px;
    	text-align: center;
    	line-height: 40px;
    	background-color: #F4F4F6;
    	font-size: 14px;
    }
    .childMasterBot tr td{
    	height: 36px;
    	text-align: center;
    	line-height: 36px;
    	font-size: 14px;
    	color: #5A5A5A;
    	border-bottom: 1px solid rgba(0,0,0,0.1);
    }
  #remove{
  	margin-left: 10px;
  }
 #jurisdiction{
 	border: 1px solid #FCB298;
 	color: #FCB298;
 	font-size: 12px;
 	margin-left: 2px;
 	border-radius: 10px;
 	padding-left: 8px;
 	padding-right: 8px;
 	padding-top: 3px;
 	padding-bottom: 3px;
 }
</style>
