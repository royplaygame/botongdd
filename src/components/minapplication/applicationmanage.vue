<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="minapplication" style="height: 100%;">
        <div class="main_rightTop">
            <p><span @click="wodeapply" class="defaultColor" :class="{fontColor:isfontColor == 0}">我的应用</span><span style="margin:0 5px;">|</span><span
                    class="defaultColor" :class="{fontColor:isfontColor == 1}" @click="editsort">编辑排序</span></p>
        </div>
        <div class="main_rightMain">
            <div v-show="wode">
                <p class="enabledprogram">已启用程序</p>
                <ul class="enableUl">
                    <li @mouseout="mouseouts(index)" @mouseover="mousehovers(index)" v-for="(item,index) in items">
                        <img :src="item.imgurl" alt="">
                        <div>{{item.name}}</div>
                        <div  v-show="hoverabled == index"  class="tingyong">
                            <p @click="entrance(index)">进入</p>
                            <p @click='minSet(index)'>设置</p>
                            <p @click="stopuse(index)">停用</p>
                        </div>
                    </li>
                </ul>
                <div class="clear"></div>
                <p class="enabledprogram">已停用程序</p>
                <ul class="disabledUl">
                    <li @mouseout="mouseout(index)" @mouseover="mousehover(index)" v-for="(item,index) in itemss">
                        <img :src="item.imgurls" alt="">
                        <div>{{item.name}}</div>
                        <!--<div class="graycolor"></div>-->
                        <div @click="startuse(index)" v-show="hoverdisable == index" class="qiyong">启用</div>
                    </li>
                </ul>
            </div>
            <div v-show="edit">
                <p class="enabledprogram">已启用程序</p>
                <ul class="enableUl">
                    <li v-for="(item,index) in items" v-dragging="{item:item,list:items}" :key="item.imgurl">
                        <img :src="item.imgurl" alt="">
                        <div>{{item.name}}</div>
                    </li>
                </ul>
                <div class="clear"></div>
                <p class="enabledprogram">已停用程序</p>
                <ul class="disabledUl">
                    <li v-for="(item,index) in itemss" v-dragging="{item:item,list:itemss,group:'item'}" :key="item.imgurl">
                        <img :src="item.imgurls" alt="">
                        <div>{{item.name}}</div>
                        <!--<div class="graycolor"></div>-->
                    </li>
                </ul>
            </div>
        </div>
        <!--弹出框-->
        <div class="ModalsBox" v-show="modifyBox">
            <div class="Modals" style="height: 615px;">
                <div class="modalsTop">
                    {{modalTitle}}
                </div>
                <div class="modalsBot" style="height: 470px;">
                    <div style="height: 90px;overflow: hidden;">
                        <span style="margin-top: 55px;">应用logo<i style="color: #E7744A">*</i>：</span>
                        <div><img :src="logoImg" alt="" style="margin-left: 12px;"></div>
                    </div>
                    <div>
                        <span>应用名称<i style="color: #E7744A">*</i>：</span>
                        <span>{{modalTitle}}</span>
                    </div>
                    <div>
                        <span style="margin-left: 10px;">AgentID：</span>
                        <span style="margin-left: 12px;">fflkasdjfklasdjfkasjdfklajsdlkfjasdkl</span>
                    </div>
                     <div>
                        <span>应用功能<i style="color: #E7744A">*</i>：</span>
                        <span>员工发送日报、周报、月报</span>
                    </div>
                     <div>
                        <span style="margin-left: 5px;">发送范围：</span>
                        <input style="cursor: pointer;" type="text" class="inputText" placeholder="选中部门、人员" @click="focusInput_1" >
                    </div>
                    <p class="grayfont">不选时，默认为所有员工可见</p>
                    <div>
                        <span style="margin-left: 33px;">其他：</span>
                        <el-checkbox v-model="hideicon"></el-checkbox>隐藏客户端图标
                    </div>
                    <p class="grayfont" style="margin-top: 0;">选择隐藏后，除管理员外，所有人员不可见，但仍接收应用消息</p>
                </div>
                <div class="modalfoot" style="padding:10px;padding-bottom: 36px;">
                    <input type="button" value="保存" class="baocun" style="margin-right: 24px;" @click="addBaocun">
                    <input type="button" value="取消" class="quxiao" style="margin-left: 24px" @click="cancle">
                </div>
            </div>
        </div>
        <popup-box v-show='Modals' @abolishmem='abolishmem'></popup-box>
    </div>
</template>
<script>
    import {
        mapActions
    } from 'vuex';
    import popupBox  from '../pop-upBox' //这里引入全局组件
    export default {
        components: {popupBox},//这里注册全局组件
        name: 'minapplication',
        data() {
            return {
                modalTitle:'',
                // isfocusBorder_1: false,
                hideicon:false,
                modifyBox:false,
                Modals:false,
                logoImg:'',
                isfontColor: 0,
                wode: true,
                edit: false,
                hoverdisable: 1111111,
                hoverabled: 11111,
                items: [{
                    name: '签到',
                    imgurl: '/static/img/qiandao.png',
                    imgurls: '/static/img/qiandaos.png'
                },
                {
                    name: '考勤打卡',
                    imgurl: '/static/img/daka.png',
                    imgurls: '/static/img/dakas.png',
                    url:'/home/attendance'
                },
                {
                    name: '审批',
                    imgurl: '/static/img/shenpi.png',
                    imgurls: '/static/img/shenpis.png',
                    url:'/home/approve'
                },
                {
                    name: '公告',
                    imgurl: '/static/img/gonggao.png',
                    imgurls: '/static/img/gonggaos.png',
                    url:'/home/notice'
                },
                {
                    name: '网盘',
                    imgurl: '/static/img/wangpan.png',
                    imgurls: '/static/img/wangpans.png'
                },
                {
                    name: '会议',
                    imgurl: '/static/img/huiyi.png',
                    imgurls: '/static/img/huiyis.png'
                },
                ],
                itemss: [{
                    name: '日志',
                    imgurl: '/static/img/rizhi.png',
                    imgurls: '/static/img/rizhis.png'
                },
                {
                    name: '咨询',
                    imgurl: '/static/img/zixun.png',
                    imgurls: '/static/img/zixuns.png'
                },]
            }
        },

        created: function () {

        },
        watch: {

        },
        methods: {
            focusInput_1: function () {
                // this.isfocusBorder_1 = true
                this.Modals = true
            },
            // blurInput_1: function () {
            //     this.isfocusBorder_1 = false
            // },
            mousehover(index) {
                this.hoverdisable = index
            },
            mouseout(index) {
                this.hoverdisable = 11111111
            },
            mousehovers(index) {
                this.hoverabled = index
            },
            mouseouts(index) {
                this.hoverabled = 11111111
            },
            entrance(index){
            	let url=this.items[index].url
            	this.$router.push({
					path: url
				})
            },
            // 开启应用
            startuse(index) {
                let a = this.itemss[index]
                this.itemss.splice(index, 1)
                this.items.push(a)
            },
            // 停用应用
            stopuse(index) {
                let a = this.items[index]
                this.items.splice(index, 1)
                this.itemss.push(a)
                this.hoverdisable = 111111
            },
            // 点击设置
            minSet(index){
                this.modifyBox = true
                this.modalTitle = this.items[index].name
                this.logoImg = this.items[index].imgurl
            },
            abolishmem:function(){
                this.Modals = false
            },
            // 点击编辑排序
            editsort: function () {
                this.isfontColor = 1
                this.wode = false
                this.edit = true
            },
            // 点击我的应用
            wodeapply: function () {
                this.isfontColor = 0
                this.wode = true
                this.edit = false
            },
            addBaocun:function(){

            },
            cancle:function(){
                this.modifyBox = false
            },
            ...mapActions(['attendance'])
        }
    }

</script>
<style scoped>
    .main_rightTop p {
        color: #303030;
        font-size: 14px;
        padding-top: 24px;
        padding-bottom: 12px;
        margin-left: 44px;
        width: calc(100% - 88px);
        border-bottom: 1px solid #d9d9d9;
    }
    
    .main_rightTop {
        width: 100%;
    }
    
    .main_rightMain {
        margin-left: 44px;
    }
    
    .enabledprogram {
        margin-top: 20px;
    }
    
    .enableUl li {
        cursor: pointer;
        position: relative;
        float: left;
        margin-top: 16px;
        margin-right: 16px;
    }
    
    .enableUl li div {
        margin-top: 10px;
        text-align: center;
    }
    
    .disabledUl li {
        cursor: pointer;
        position: relative;
        float: left;
        margin-top: 16px;
        margin-right: 16px;
    }
    
    .disabledUl li div {
        margin-top: 10px;
        text-align: center;
    }    
    .qiyong {
        line-height: 84px;
        background: #f1f1f1;
        width: 85px;
        height: 84px;
        border-radius: 10px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        margin-top: 0px!important;
    }
    
    .tingyong {
        background: #f1f1f1;
        width: 85px;
        height: 84px;
        border-radius: 10px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        margin-top: 0!important;
    }
    
    .tingyong p {
        font-size: 12px;
        line-height: 28px;
    }
    
    .tingyong p:nth-child(1) {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    
    .tingyong p:nth-child(3) {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    
    .tingyong p:hover {
        background: #e4e4e4;
    }
    
    .tingyong p:nth-child(2) {
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
    }
    
    .defaultColor {
        color: #8F8E94;
        cursor: pointer;
    }
    
    .fontColor {
        color: #E7744A!important;
    }
    /*各个图标设置对应弹出框*/
    .modalfoot {
        text-align: center;
        background: #fff;
    }
    
    .baocun {
        width: 80px;
        height: 35px;
        color: #fff;
        font-size: 16px;
        background: #E7744A;
        line-height: 35px;
    }
    
    .quxiao {
        width: 80px;
        height: 35px;
        color: #fff;
        font-size: 16px;
        background: #aeaeae;
        line-height: 35px;
    }
    
    .modalsBot {
        padding: 0px 65px;
        overflow: hidden;
        overflow-y: auto;
        padding-bottom: 0;
    }
    .inputText{
        width: 300px;
        margin-left: 12px;
    }
     .modalsBot>div {
        height: 36px;
        line-height: 36px;
        margin-top: 24px;
    }
    .modalsBot>div span {
        float: left;
    }
    .modalsBot>div span:nth-child(2) {
        margin-left: 12px;
    }
    .focusBorder {
        border: 1px solid #FCB298;
    }
      input::-webkit-input-placeholder {
        color: #E7744A!important;
        font-size: 14px
    }
    
    input:-moz-placeholder {
        color: #E7744A!important;
        font-size: 14px
    }
    
    input::-moz-placeholder {
        color: #E7744A!important;
        font-size: 14px
    }
    
    input:-ms-input-placeholder {
        color: #E7744A!important;
        font-size: 14px
    }
    .grayfont{
        margin-left: 85px;
        margin-top: 8px;
        color: #8F8E94;
        font-size: 12px;
    }
    .el-checkbox{
        margin-left: 13px;
        margin-right: 10px;
    }
</style>