<template>
     <div class='ModalsmemBox'>
         <div class="Modalsmem">
            <div class="ModalsmemTop">
            	选择人员
            </div>
            <div class="ModalsmemBot">
                <el-transfer
                       filterable
                       :filter-method="filterMethod"
                       :titles="['选择人员', '已选人员']"	
                       filter-placeholder="请输入城市拼音"
                       v-model="value2"
                       :data="data2">
                </el-transfer>
                <div class="anNiu">
            		<div class="ensure"><a href="javascript:;">确定</a></div>
            		<div class="abolish" @click='abolishmem'><a href="javascript:;">取消</a></div>
            	</div>
            </div>
         </div>
     </div>
</template>
<script type="text/javascript">
export default {
    data() {
      const generateData2 = _ => {
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都','太原'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu','taiyuan'];
        cities.forEach((city, index) => {
          data.push({
              label: city,
              key: index,
              pinyin: pinyin[index]
            });
        });
            return data;
      };
        return {
             data2: generateData2(),
             value2: [],
        filterMethod(query, item) {
             return item.pinyin.indexOf(query) > -1;
        }
      };
    },
    methods:{
    	   abolishmem () {
			   this.$emit('abolishmem')
		},
    }
  };
</script>
<style> 
    .el-transfer{
    	margin-left: 26px;
    }
    .el-transfer-panel{
    	width: 430px !important;
    	height: 388px;
        margin-top: 10px;
    }
    .el-transfer-panel__list.is-filterable{
    	height: 280px !important;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner {
        background-color: #E7744A !important;
        border-color: #E7744A !important;
    }
    .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        background-color: #E7744A !important;
        border-color: #E7744A !important;
    }
    .el-button--primary {
        background-color: #E7744A !important;
        border-color: #E7744A !important;
    }
    .el-button.is-disabled, .el-button.is-disabled:focus, .el-button.is-disabled:hover {  
        background-color: #eef1f6 !important;
        border-color: #d1dbe5 !important;
}
	.ModalsmemBox{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color:rgba(255,255,255,0.1);
        z-index: 9999;
	}
	.Modalsmem{
		position: absolute;
	    left: 0;
	    top: 0px;
	    right: 0;
	    bottom: 0;
	    margin: auto auto;
		width: 960px;
		height: 560px;
		box-shadow: 0 5px 14px rgba(0,0,0,0.15);
		animation: madalsBox .8s ;
	}
	@keyframes madalsBox{
		from{
			transform: translateY(-200px);
			opacity: 0;
		}
		to{
			transform: translateY(0);
			opacity: 1;
		}
	}
	.ModalsmemTop{
		width: 100%;
		height: 64px;
		background-color:#F4F4F6;
		text-align: center;
		line-height: 64px;
		color: #303030;
		font-size: 16px;
	}
	.ModalsmemBot{
		width: 100%;
		height: 496px;
		background-color: #CCCCCC;
	}
    .el-checkbox__input.is-checked .el-checkbox__inner::after {
    margin-left: 0px!important;
}
</style>