<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="set" style="height: 100%;">
        <div class="main_left">
                <ul>
                <li v-for="(list,index) in chidlists" :class="{sadeNav:isSadeNav == index}" @click="sadeNavClick(index)">
                    <div>
                        <span>{{list.name}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="main_right">
            <router-view></router-view>
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
                isSadeNav:0,
                chidlists:[{
                    name:'企业设置',
                    push:'companyset'
                },
                {
                    name:'通讯录信息',
                    push:'addresslistInfo'
                },
                {
                    name:'更换主管理员',
                    push:'changeMaster'
                },
                {
                    name:'设置子管理员',
                    push:'setchildManager'
                },
                {
                    name:'版本信息管理',
                    push:'versionManage'
                },
                {
                    name:'修改登录密码',
                    push:'modifyPassword'
                },
                ]
            }
        },

        created: function() {
                  this.setDate()
        },
        watch: {
                // 如果路由有变化，会再次执行该方法
                 "$route": "setDate"
        },
        methods: {
        	 //  根据路径匹配标记导航
            setDate: function() {
                var psthStr = this.$route.path.split('/')[3]
                switch (psthStr) {
                    case 'modifyPassword':
                        this.isSadeNav = 5
                        this.isSadeNav_1 = 5
                        break;
                        case 'versionManage':
                        this.isSadeNav = 4
                        this.isSadeNav_1 = 4
                        break;
                    case 'setchildManager':
                        this.isSadeNav = 3
                        this.isSadeNav_1 = 3
                        break;
                    case 'addChildMaster':
                        this.isSadeNav = 3
                        this.isSadeNav_1 = 3
                        break;
                    case 'compileChildMaster':
                        this.isSadeNav = 3
                        this.isSadeNav_1 = 3
                        break;   
                    case 'changeMaster':
                        this.isSadeNav = 2
                        this.isSadeNav_1 = 2
                        break;
                    case 'changMasterNext':
                        this.isSadeNav = 2
                        this.isSadeNav_1 = 2
                        break;
                    case 'addresslistInfo':
                        this.isSadeNav = 1
                        this.isSadeNav_1 = 1
                        break;
                    case 'companyset':
                        this.isSadeNav = 0
                        this.isSadeNav_1 = 0
                        break;                 
                }
            },
            sadeNavClick(index){
                this.isSadeNav = index
                var pathStr = this.chidlists[index].push
                var url = '/home/set/' + pathStr
                this.$router.push({
                    path: url
                })
            }
        }
    }

</script>
<!--私有样式-->
<style scoped>
.sadeNav{
    color:#fff!important;
    background: #E7744A!important;
}
.main_left{
    border-radius: 4px;
    float: left;
    width: 260px;
    height: 100%;
    background: #fffaf9;
    border-right: 1px solid #ccc;
}
.main_left li{
    cursor: pointer;
    line-height: 40px;
    color:#000;font-size: 14px;
}
.main_left li:nth-child(1){
    border-top-left-radius: 4px;
}
.main_left li:hover{
    background: #f7f2f1;
}
.main_left li div span{
    margin-left: 15px;
}
.main_right{
	width: 820px;
	height: 100%;
	float: left;
    overflow-y: scroll;
    overflow-x: hidden;
	}
    
</style>

