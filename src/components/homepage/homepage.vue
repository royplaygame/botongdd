<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="set" style="height: 100%;">
        <div class="main_left">
            <div class="business_head">
            	<img src="../../../static/img/h.png"/>
            </div>
            <p class="center">张三</p>
           <div class="outnumber">
           	   <p >企业人数</p>
           	   <p class="number_people">1人</p>
           </div>
           <div class="outnumber">
           	   <p >部门数</p>
           	   <p class="number_people">0个</p>
           </div>
           <div class="outnumber">
           	   <p >昨天使用人数</p>
           	   <p class="number_people">0人</p>
           </div>
        </div>
        <div class="main_right">
            <div class="right-box-pic">
            	<img src="../../../static/img/homepage.jpg"/>
            </div>
            <div class="staff-div">
								<div class="staff-box ng-isolate-scope">
									<p class="quick_entry">快捷入口</p>
									<div class="entry_classifi">
										<ul>
										<li><div><img src="../../../static/img/icon_TXL.png" width="35px"/> <span><a href="javascript:;" @click="QuickEntry_1">通讯录管理</a></span></div></li>
										<li><div><img src="../../../static/img/icon_WL.png" width="35px"/> <span><a href="javascript:;" @click="QuickEntry_2">应用中心</a></span></div></li>
										
										<li><div><img src="../../../static/img/icon_DX.png" width="35px"/> <span><a href="javascript:;" @click="QuickEntry_3">修改密码</a></span></div></li>
										<li><div><img src="../../../static/img/icon_ZCY.png" width="35px"/> <span><a href="javascript:;" @click="QuickEntry_4">员工管理</a></span></div></li>
										<li><div><img src="../../../static/img/icon_KQ.png" width="35px"/> <span><a  href="javascript:;" @click="QuickEntry_5">退出</a></span></div></li>
										
									</ul>
									<div class="clearfix"></div>
									</div>
								</div>
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
           QuickEntry_1(){
           	  this.$router.push({
                    path: '/home/addresslist'
                })
           },
             QuickEntry_2(){
           	  this.$router.push({
                    path: '/home/minapplication'
                })
           },
             QuickEntry_3(){
           	  this.$router.push({
                    path: '/home/set/modifyPassword'
                })
           },
             QuickEntry_4(){
           	  this.$router.push({
                    path: '/home/employeedata'
                })
           },
              QuickEntry_5(){
           	  this.$router.push({
                    path: '/login'
                })
           }
        }
    }

</script>
<!--私有样式-->
<style scoped>
	.staff-div {
    width: 100%;
}
.quick_entry {
    font-size: 16px;
    color: #333;
    font-weight: 600;
    padding: 10px 30px;
}
.entry_classifi {
    padding: 10px;
}
.entry_classifi ul li {
    width: 33.3333%;
    float: left;
    padding: 10px;
}
.entry_classifi ul li div {
    border-radius: 5px;
    cursor: pointer;
    width: 86%;
    margin: 0 auto;
    padding: 10px 20px;
    border: 1px solid #cecece;
}
a {
    text-decoration: none !important;
    color: #666666;
}
#footer a, span {
    margin-left: 10px;
    margin-right: 10px;
}
	.right-box-pic {
    padding: 20px 80px;
}
	.number_people {
    text-align: right;
    margin-top: -22px;
}
	.outnumber {
    width: 100%;
    padding: 10px 5px;
    height: 40px;
}
  .main_left {
        border-radius: 4px;
        float: left;
        width: 260px;
        height: 100%;
        background: #fffaf9;
        border-right: 1px solid #ccc;
    }
    
    .main_left li {
        cursor: pointer;
        line-height: 40px;
        color: #000;
        font-size: 14px;
    }
    
    .main_left li:nth-child(1) {
        margin-top: 14px;
    }
    
    .main_left li:hover {
        background: #f7f2f1;
    }
    
    .main_left li div span {
        margin-left: 15px;
    }
    
    .main_right {
        width: 820px;
        height: 100%;
        float: left;
        overflow-y: scroll;
        overflow-x: hidden;
    }
   .business_head {
    width: 60px;
    margin: 0 auto;
    padding: 30px 0 20px;
}
.center {
    text-align: center;
    width: 88%;
    margin: 0 auto;
    font-size: 16px;
    padding-bottom: 20px;
    border-bottom: 1px solid #cecece;
}
</style>