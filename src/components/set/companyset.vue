<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="set" style="height: 100%;">
        <div class="main_rightTop">
            <p>企业名称与logo设置</p>
        </div>
        <div class="main_rightMain">
            <div>
                <div class="firmname">
                    <span style="color: #E7744A;">*</span><span>企业名称：</span>
                    <input v-model="companyname" class="inputText" @focus="focusInput" @blur="blurInput" :class="{redBorder:isredBorder_1,focusBorder:isfocusBorder_1}" type="text" placeholder="请输入中文或英文">
                </div>
                    <p v-show="warning_1" class="warnStyle">请输入中文或英文</p>
                <div class="firmprofile">
                    <span>企业简介：</span>
                    <textarea v-model="companyfile" @focus="focusInput_1" @blur="blurInput_1" :class="{redBorder:isredBorder_2,focusBorder:isfocusBorder_2}" @keyup="areachange" name="" id="area" cols="30" rows="10" placeholder="不超过150个汉字" style="width: 560px;height: 72px;"></textarea>
                    <p><span id="text-count">0</span> / 150</p>
                </div>
                <p v-show="warning_2" class="warnStyle">不能输入特殊字符</p>
                <div class="firmlogo">
                    <span style="margin-left: 5px;">企业logo：</span><img :src="defaultImg_1" alt="" width="80" height="80">
                    <input id="logofile" type="file" style="display: none;" accept="image/jpeg,image/jpg,image/png" @change="onFileChange">
                    <input type="button" value="上传" @click="upload"><br>
                    <span class="egRatio">建议上传尺寸为640*640,大小不超过1M</span>

                </div>
                <p v-show="warning_3" class="warnStyle">请上传正确的图片格式</p>
                <div class="firmlogo">
                    <span style="margin-left: 5px;">开机启动图：</span>
                    <img style="margin-left: -3px;" :src="defaultImg_2" alt=""width="80" height="80">
                    <input id="logofiles" type="file" style="display: none;" accept="image/jpeg,image/jpg,image/png" @change="onFileChanges">
                    <input type="button" value="上传" @click="uploads">
                    <br>
                    <span class="egRatio">建议上传尺寸为9000*750,大小不超过2M</span>
                </div>
                <p v-show="warning_4" class="warnStyle">请上传正确的图片格式</p>
                <div class="qidong">
                    <p>启动图跳转链接</p>
                    <input v-model="imgurl" @focus="focusInput_2" @blur="blurInput_2" :class="{redBorder:isredBorder_3,focusBorder:isfocusBorder_3}" style="margin-left: 8px;" class="inputText" type="text">
                </div>
                <!--<p v-show="warn_5" class="warnStyle">请上传正确的图片格式</p>-->
                <div class="qidong">
                    <p style="margin-top: 10px;margin-bottom: 4px;">启动如有效期（有效期到期后自动下线）</p>
                    <div style="overflow: hidden;">
                        <div class="datetimeBox" style="margin-left: 5px;" :class="{redBorder:isredBorder_4}">
                        <el-date-picker :picker-options="pickerOptions1" v-model="advStartTime" type="datetime" placeholder="起始时间" :editable='false' clearable></el-date-picker>
                        </div>
                        <span style="float: left;line-height: 36px;margin: 0 5px;color: #d9d9d9;">———</span>
                        <div class="datetimeBox" :class="{redBorder:isredBorder_5}">
                        <el-date-picker :picker-options="pickerOptions1" v-model="advEndTime" type="datetime" placeholder="结束时间" :editable='false' clearable></el-date-picker>
                        </div>
                    </div>
                </div>
                <p v-show="warning_6" class="warnStyle">{{warn_6}}</p>
                <div class="clear"></div>
                <input class="baocun" type="button" value="保存" @click="addsetBtn">
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
                pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
                },
                defaultImg_1:'static/img/123.png',
                defaultImg_2:'static/img/123.png',
                isfocusBorder_1: false,
                isfocusBorder_2: false,
                isfocusBorder_3: false,
                companyfile:'',
                companyname:'',
                imgurl:'http://',
                advStartTime:'',
                advEndTime:'',
                warning_1:false,
                warning_2:false,
                warning_3:false,
                warning_4:false,
                warning_5:false,
                warning_6:false,
                warn_6:'',
                isredBorder_1:false,
                isredBorder_2:false,
                isredBorder_3:false,
                isredBorder_4:false,
                isredBorder_5:false,
                flag:true,
                islogoImg:'',
            }
        },

        created: function () {

        },
        watch: {

        },
        methods: {
            focusInput: function () {
                this.isfocusBorder_1 = true
            },
            blurInput: function () {
                this.isfocusBorder_1 = false
            },
            focusInput_1: function () {
                this.isfocusBorder_2 = true
            },
            blurInput_1: function () {
                this.isfocusBorder_2 = false
            },
            focusInput_2: function () {
                this.isfocusBorder_3 = true
            },
            blurInput_2: function () {
                this.isfocusBorder_3 = false
            },
            upload: function () {
                $("#logofile").click();
            },
            uploads: function () {
                $("#logofiles").click();
            },
            // 选择图片上传
            onFileChange(e){
                // var self = this 
                // self.islogoImg = true
                // var files = e.target.files || e.dataTransfer.files;
                // var fileData = files[0]
                // // 读取图片数据
                // var reader = new FileReader()
                // reader.onload = function(e){
                //     var data = e.target.result;
                //     // 加载图片的真实宽度和高度
                //     var image = new Image()
                //     image.onload = function(){
                //         if(image.width !== image.height){
                //             self.warning_3 = true
                //             return
                //         }else if(fileData.size > 1024) {
                //             self.warning_3 = true
                //             return
                //         }else{
                //             self.warning_3 = false
                //             self.uploadImage(file[0])
                //         }
                //     };
                //     image.src = data;
                // }
                // reader.readAsDataURL(fileData)
            },
            onFileChanges(){

            },
            // 上传图片
            uploadImage(file){
                // var formdata = new FormData();
                // formdata.append('file',file);
                // formdata.append('appName','appName')
                // this.uploadFile(formdata).then((data)=>{
                //     console.log(data)
                //     if(data.code == 200){
                //         this.$message({
                //             message:'上传图片成功',
                //             type:'success'
                //         });
                //         if(this.islogoImg == true){
                //             this.defaultImg_1 = data.data[0].path
                //         }else{
                //             this.defaultImg_2 = data.data[0].path
                //         }
                //     }
                // })
            },
            areachange: function () {
                var _val = $('#area').val(),
                    count = "";
                if (_val.length > 150) {
                    $('#area').val(_val.substring(0, 150));
                }
                count = $('#area').val().length;
                $("#text-count").text(count);
            },
            panduan(){
                if(this.flag == true){
                if(this.companyname == null || this.companyname == ''){
                    this.isredBorder_1 = true
                }else{
                    this.isredBorder_1 = false
                }
                if(this.companyfile == null || this.companyfile == ''){
                    this.isredBorder_2 = true
                }else{
                    this.isredBorder_2 = false
                }
                
                if(this.defaultImg_1 == '/static/img/123.png'){
                    this.warning_3 = true
                }else{
                    this.warning_3 = false
                }
                if(this.defaultImg_2 == '/static/img/123.png'){
                    this.warning_4 = true
                }else{
                    this.warning_4 = false
                }
                if(this.imgurl == null || this.imgurl == '' || this.imgurl == 'http://'){
                    this.isredBorder_3 = true
                }else{
                    this.isredBorder_3 = false
                }
                if(this.advStartTime == null || this.advStartTime == ''){
                    this.isredBorder_4 = true
                }else{
                    this.isredBorder_4 = false
                }
                if(this.advEndTime == null || this.advEndTime == ''){
                    this.isredBorder_5 = true
                }else{
                    this.isredBorder_5 = false
                }
                if(this.isredBorder_1 == true || this.isredBorder_2 == true ||　this.warning_3 == true 
                || this.warning_4 == true || this.isredBorder_3 == true || this.isredBorder_4 == true || this.isredBorder_5 == true){
                    return false
                }else{
                    // 只能输入中文或英文
                    var leter = /^[a-zA-Z\u4e00-\u9fa5]+$/ 
                    // 不能输入特殊字符
                    var regs = new RegExp("[.\u3000-\u303F\uFF00-\uFFEF\u3400-\u4DBF`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]+");
                    if(!leter.test(this.companyname)){
                        this.isredBorder_1 = true
                        this.warning_1 = true
                    }else{
                        this.isredBorder_1 = false
                        this.warning_1 = false
                    }
                    if(regs.test(this.companyfile)){
                        this.isredBorder_2 = true
                        this.warning_2 = true
                    }else{
                        this.isredBorder_2 = false
                        this.warning_2 = false
                    }
                    if(this.advStartTime >= this.advEndTime){
                        this.isredBorder_4 = true
                        this.isredBorder_5 = true
                        this.warn_6 = '开始时间不能大于或者等于结束日期'
                        this.warning_6 = true
                    }else{
                        this.isredBorder_4 = false
                        this.isredBorder_5 = false
                        this.warning_6 = false
                    }
                    if(this.isredBorder_1 == true || this.isredBorder_2 == true ||　this.warning_3 == true 
                || this.warning_4 == true || this.isredBorder_3 == true || this.isredBorder_4 == true || this.isredBorder_5 == true){
                    return false
                    }
                }
                }

            },
            addsetBtn(){
                if(this.panduan() == false){
                    return
                }else{

                }
            },
            ...mapActions(['','','','uploadFile'])
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
    
    .firmname {
        line-height: 36px;
        height: 36px;
        margin-top: 20px;
    }
        
    textarea {
        margin-left: 15px;
    }
    
    .focusBorder {
        border: 1px solid #FCB298;
    }
    
    .main_rightMain {
        margin-left: 44px;
    }
    
    .firmprofile>span {
        float: left;
        margin-left: 5px;
        margin-top: 5px;
    }
    
    .firmprofile {
        position: relative;
        height: 72px;
        margin-top: 24px;
    }
    
    .firmprofile p {
        position: absolute;
        bottom: 4px;
        left: 600px;
        font-size: 12px;
        color: #E7744A;
    }
    
    .firmlogo {
        position: relative;
        margin-top: 24px;
    }
    
    .firmlogo input {
        width: 80px;
        height: 30px;
        background: #E7744A;
        font-size: 14px;
        color: #fff;
        margin-left: 24px;
    }
    
    .egRatio {
        position: absolute;
        bottom: 0;
        left: 196px;
        color: #8F8E94;
    }
    
    .firmlogo img {
        margin-left: 15px;
    }
    .qidong{
        margin-left: 83px;
        margin-top: 24px;
    }
    .qidong p{
        margin: 5px;
    }
    .datetimeBox{
        float: left;
        width: 175px!important;
        height: 36px;
        overflow: hidden;
        position: relative;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
    }
    .el-date-editor.el-input{
        width: 180px;
    }
    .datetimeBox .el-date-editor.el-input{
        margin-left: -2px;
        margin-top: -1px;
    }
    .baocun{
        width: 100px;
        height: 34px;
        color: #fff;
        font-size: 16px;background: #E7744A;
        margin-left: 238px;
        margin-top: 32px;
    }
    .warnStyle{
        color: #FF5F57;font-size: 12px;margin-left: 90px;
    margin-top: 6px;
    }
    .redBorder{
        border:1px solid #FF5F57;
    }
</style>