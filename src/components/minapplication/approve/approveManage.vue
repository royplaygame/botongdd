<template xmlns:v-on="http://www.w3.org/1999/xhtml">
	<div class="set" style="height: 100%;">
		<div class="addAttendance">
			<span id="add" @click="addcheck">
        		新建审批
        	</span>
		</div>
		<div class="approveBot">
			<div class="approveName">
				<span>审批名称</span>
				<span>说明</span>
				<span>操作</span>
			</div>
			<ul class="ulo">
				<li v-for="(lists,index) in itemsa">
					<div>{{lists.list}}</div>
					<div>
						<span>编辑表单</span>
						<span>审批人设置</span>
						<span>抄送人</span>
						<span>停用</span>
					</div>
				</li>
			</ul>
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
				itemsa:[
				  {
				  	list:'请假'
				  },
				  {
				  	list:'报销'
				  },
				  {
				  	list:'出差'
				  },
				  {
				  	list:'外出'
				  },
				  {
				  	list:'物品领用'
				  },
				  {
				  	list:'采购'
				  },
				  {
				  	list:'通用审批'
				  },
				  {
				  	list:'转正申请'
				  },
				  {
				  	list:'离职申请'
				  },
				  {
				  	list:'用车申请'
				  },
				  {
				  	list:'用印申请'
				  },
				  {
				  	list:'合同审批'
				  },
				  {
				  	list:'礼品领用申请'
				  },
				  {
				  	list:'招聘申请'
				  },
				  {
				  	list:'发文申请'
				  },
				  {
				  	list:'名片申请'
				  },
				],
			}
		},

		created: function () {

		},
		watch: {

		},
		methods: {
			
			addcheck: function () {
				this.$router.push({
					path: "/home/formDesign"
				})
			}
		}
	}

</script>
<style scoped>
	.addAttendance {
		height: auto;
		border-bottom: 1px solid rgba(0, 0, 0, 0.15);
		margin-left: 16px;
		margin-right: 16px;
		padding-top: 20px;
		padding-bottom: 12px;
		color: #303030;
		font-size: 14px;
	}
	
	#add {
		border: 1px solid #E7744A;
		color: #E7744A;
		border-radius: 4px;
		padding: 5px 10px;
		cursor: pointer;
	}
	
   .approveName{
   	width: 90%;
   	height: 40px;
   	line-height: 40px;
   	color: #000000;
    font-size: 14px;
    background-color:#F4F4F6;
    margin-left: 16px;
    margin-top: 10px;
   }
   .approveName span:nth-child(1){
   	margin-left: 20px;
   	float: left;
   }
   .approveName span:nth-child(2){
   	margin-left: 180px;
   }
   .approveName span:nth-child(3){
   	margin-right: 180px;
   	float: right;
   }
   ul li {
   	width: 90%;
   	height: 40px;
   	border-bottom: 1px solid #CCCCCC;
   	margin-left: 16px;
   	line-height: 40px;
   	color: #000000;
   	font-size: 12px;
   }
   .ulo li div{
   	display: inline-block;
   }
  .ulo li div:nth-child(2){
  	display: inline-block;
  	float: right;
  	margin-right: 20px;
  	color: #E7744A;
  	cursor: pointer;
  }
  .ulo li div:nth-child(1){
  	padding-left: 20px;
  }
  .ulo li div:nth-child(2) span {
  	margin-left: 4px;
  }
</style>