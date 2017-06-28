<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="set" style="height: 100%;">
        <div class="main_rightTop">
            <p>通讯录信息标签</p>
        </div>
        <div class="main_rightMain">
            <div class="anchorTag">
                <p>部门</p>
                <p>职位</p>
                <p>姓名</p>
                <p>手机号码</p>
                <p>邮箱</p>
            </div>
            <div class="clear"></div>
            <ul class="deleteTag">
                <li v-for="(tag,index) in tags">
                    <span>{{tag}}</span>
                    <span class="crossImg" @click="deletetag(index)"></span>
                </li>
                <div class="userDefine">
                    <input v-model="userDefineCon" maxlength="15" onkeyup="this.value=this.value.replace(/\s+/g,'')" type="text" placeholder="自定义标签">
                    <div @click="addTag"></div>
                </div>
            </ul>
            <div class="clear"></div>
            <div class="phoneInfo">
                <p>手机端需要展示的信息</p>
            </div>
            <div class="phoneTag">
                <div class="phoneTag_left">
                    <div>
                        <p class="disab">
                            <el-checkbox v-model="checked" disabled>部门</el-checkbox>
                        </p>
                        <p class="disab">
                            <el-checkbox v-model="checked" disabled>邮箱</el-checkbox>
                        </p>
                        <p class="disab">
                            <el-checkbox v-model="checked" disabled>姓名</el-checkbox>
                        </p>
                        <p class="shouji">
                            <el-checkbox v-model="checked1">手机号</el-checkbox>
                        </p>
                        <p class="shouji">
                            <el-checkbox v-model="checked2">职位</el-checkbox>
                        </p>
                    </div>
                    <div class="clear"></div>
                    <el-checkbox-group v-model="checkTag">
                        <el-checkbox v-for="tag in tags" :label="tag" :key="tag">{{tag}}</el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="phoneTag_right">
                    <p>手机端展示效果图：</p>
                    <div style="box-shadow: -1px 1px 9px #ccc">
                        <img src="/static/img/zhaopian.png" alt="">
                        <ul>
                            <li v-for="(draw,index) in checkTag">
                                <span>{{draw}}</span>
                                <div style></div>
                            </li>
                        </ul>
                        <img src="/static/img/Group 4.png" alt="">
                    </div>
                </div>
            </div>
            <!--<div style="border:1px solid #000;width: 300px;height: 300px;float: right;">
                <ul>
                    <li v-for="(item, index) in items" v-show="item.selected">
                        {{item.text}}
                        <button @click="remove(index)">x</button>
                    </li>
                    
                </ul>
            </div>
            <div style="border:1px solid #000;width: 300px;height: 300px;float: left;">
                <ul>
                    <li v-for="(item, index) in items" @click="select(index)" :class="{'red': item.selected}">{{item.text}}</li>
                </ul>
            </div>-->
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
                element: '',
                userDefineCon: '',
                checked: true,
                checked1: false,
                checked2: false,
                checked3: false,
                tags: ['姓名', '工号'],
                checkTag: [],
                // items: [
                //     { id: 1, text: '哈哈哈', label: '喜羊羊', selected: false },
                //     { id: 2, text: '233333', label: '大灰狼', selected: false }
                // ],
            }

        },

        created: function () {
        },
        watch: {
            checked1: function (m) {
                var n = '手机号'
                this.ischeck(m, n)
            },
            checked2: function (m) {
                var n = '职位'
                this.ischeck(m, n)
            }
        },
        methods: {
            // remove: function (i) {
            //     this.items[i].selected = false;
            // },
            // select: function (i) {
            //     this.items[i].selected = true;
            // },
            // 手机号、职位是否选中
            ischeck(m, n) {
                if (m == true) {
                    this.checkTag.push(n)
                } else {
                    for (var i = 0; i < this.checkTag.length; i++) {
                        if (this.checkTag[i] == n) {
                            this.checkTag.splice(i, 1)
                            return
                        }
                    }
                }
            },
            // 添加自定义标签
            addTag: function () {
                var a
                for(var i=0;i<this.tags.length;i++){
                    if(this.tags[i] == this.userDefineCon){
                        a = false
                    }
                }
                console.log(this.tags)
                console.log(this.tags.length)
                if (this.tags.length > 9) {
                    this.$message('只能添加10个标签')
                    return
                } else if (this.userDefineCon == null || this.userDefineCon == "") {
                    this.$message('请输入标签内容')
                    return
                }else if (a == false) {
                     this.$message('添加过的标签不能重复添加')
                    return
                } else {
                    this.tags.push(this.userDefineCon)
                    this.userDefineCon = ''
                }
            },
            // 删除自定义标签
            deletetag(index) {
                this.element = this.tags[index]
                this.tags.splice(index, 1)
                for (var i = 0; i < this.checkTag.length; i++) {
                    if (this.checkTag[i] == this.element) {
                        this.checkTag.splice(i, 1)
                        return
                    } else {
                    }
                }
            },
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
        width: calc(100% - 88px);
    }
    
    .anchorTag {
        margin-top: 20px;
        margin-bottom: 24px;
    }
    
    .anchorTag p {
        float: left;
        border: 1px solid #FCB298;
        border-radius: 4px;
        margin-right: 12px;
        padding: 0 22px;
        color: #FCB298;
        height: 36px;
        line-height: 36px;
    }
    
    .deleteTag {
        float: left;
    }
    
    .deleteTag li {
        margin-top: 24px;
        position: relative;
        float: left;
        border: 1px solid #FCB298;
        border-radius: 4px;
        margin-right: 12px;
        padding: 0 22px;
        color: #FCB298;
        height: 36px;
        line-height: 36px;
    }
    
    .crossImg {
        background: url('/static/img/Group.png') no-repeat;
        position: absolute;
        top: -7px;
        right: -5px;
        width: 15px;
        height: 15px;
        cursor: pointer;
    }
    
    .userDefine {
        overflow: hidden;
        width: 149px;
        float: left;
        margin-top: 24px;
    }
    
    .userDefine input {
        float: left;
        width: 113px;
        height: 36px;
        line-height: 36px;
        border: 1px solid #d9d9d9;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        padding-left: 12px;
        border-right: none;
    }
    
    .userDefine div {
        cursor: pointer;
        width: 36px;
        height: 36px;
        float: left;
        background: url('/static/img/Rectangle 4.png') no-repeat;
    }
    
    .phoneInfo {
        width: 100%;
        margin-top: 48px;
    }
    
    .phoneInfo p {
        width: 100%;
        color: #303030;
        font-size: 14px;
        padding-top: 24px;
        padding-bottom: 12px;
        border-bottom: 1px solid #d9d9d9;
    }
    
    .disab .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
        background: #000!important;
        border-color: #000!important;
    }
    
    .el-checkbox__input.is-disabled+.el-checkbox__label {
        color: #303030;
    }
    
    .shouji .el-checkbox__inner {
        background: #fff;
    }
    
    .phoneTag {
        overflow: hidden;
    }
    
    .phoneTag_left {
        width: 65%;
        float: left;
    }
    
    .phoneTag_right {
        width: 28%;
        float: right;
    }
    
    .phoneTag_left>div p {
        float: left;
        margin-right: 40px;
        margin-top: 20px;
    }
    
    .phoneTag_left .el-checkbox-group label {
        margin-top: 36px;
        margin-right: 40px;
        margin-left: 0!important;
    }
    
    .el-checkbox-group .el-checkbox__input.is-checked .el-checkbox__inner {
        background-color: #e7744a;
        border-color: #e7744a;
    }
    
    .shouji .el-checkbox__input.is-checked .el-checkbox__inner {
        background-color: #e7744a;
        border-color: #e7744a;
    }
    
    .el-checkbox__input.is-focus .el-checkbox__inner {
        border-color: #ccc;
    }
    
    .phoneTag_right ul {
        border-left: 1px solid #f7f7f7;
        border-right: 1px solid #f7f7f7;
        ;
    }
    
    .phoneTag_right li {
        font-size: 12px;
        color: #7f6f71;
        background: #ffffff;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #efefef;
        position: relative;
    }
    
    .phoneTag_right li span:nth-child(1) {
        margin-left: 15px;
        float: left;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 73px;
    }
    
    .phoneTag_right li div {
        width: 34px;
        left: 81px;
        top: 16px;
        position: absolute;
        border-top: 1.5px solid #c6c5c8;
    }
    
    .phoneTag_right img {
        width: 100%;
    }
    
    .phoneTag_right p {
        margin-top: 20px;
        margin-bottom: 12px;
        text-align: center;
    }
    
    .phoneTag_right>div {
        box-shadow: rgb(204, 204, 204) -1px 1px 9px;
        max-height: 400px;
        overflow: hidden;
        overflow-y: scroll;
    }
     .phoneTag_right>div .el-checkbox{
         margin-left: 9px;
     }
</style>