<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="set" style="height: 100%;overflow-x: hidden;overflow-y: auto;">
        <div class="employeemain">
            <div class="employeeheader">员工数据</div>
            <div class="threepart">
                <div class="peoplenum">
                    <p style="width: 84px;">当前企业人数</p>
                    <div>
                        <div>
                            <span>35700</span>人
                        </div>
                    </div>
                </div>
                <div class="peoplenum" style="margin:0 23px;">
                    <p>已激活人数</p>
                    <div>
                        <div>
                            <span>35700</span>人
                        </div>
                    </div>
                </div>
                <div class="peoplenum">
                    <p>未激活人数</p>
                    <div>
                        <div>
                            <span>35700</span>人
                        </div>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
            <div class="employeeheader">企业每日分析（截止昨天）</div>
        </div>
        <div class="tubiao">
            <div style="text-align: center;margin-top: 10px;margin-bottom: 30px;">伯通使用人数</div>
            <div id="map" style="width:695px;height: 280px;"></div>
        </div>

    </div>
</template>
<script>
    let echarts = require('echarts')
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

        },
        mounted() {
            // var self = this
            // var m = this.man
            var map = echarts.init(document.getElementById('map'));
            map.setOption({

                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'none',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                // legend: {
                //     data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                // },
                grid: {

                    left: '3%',
                    right: '5%',
                    bottom: '3%',
                    top: "2%",
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2017-06-06', '2017-06-07', '2017-06-08', '2017-06-09', '2017-06-10', '2017-06-11', '2017-06-12']
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        splitLine: {
                            lineStyle: {
                                    width: 1,
                                    color: '#979797',
                                    type: 'dotted'
                            },
                        },
                    }
                ],

                series: [
                    {
                        symbolSize: 10,
                        type: 'line',
                        smooth: true,
                        stack: '总量',
                        itemStyle : {  
                                normal : {  
                                    color:'#e7744a', 
                                    lineStyle:{  
                                        width:4,
                                        color:'#e7744a'  
                                    }  
                                }  
                            },  
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },

                ]
            });


        }
    }

</script>
<style scoped>
    .employeemain {
        width: 1008px;
        margin: 0 auto;
    }
    
    .employeeheader {
        text-align: left;
        padding: 12px 0;
        border-bottom: 1px solid #ececec;
        padding-top: 24px;
    }
    
    .threepart {
        text-align: center;
        margin-top: 23px;
    }
    
    .peoplenum {
        width: 290px;
        height: 132px;
        border-radius: 4px;
        box-shadow: 0px 1px 8px #eeeeee;
        float: left;
        background: #fff;
    }
    
    .peoplenum p {
        text-align: left;
        margin-top: 16px;
        margin-left: 20px;
        padding-bottom: 5px;
        width: 73px;
        border-bottom: 4px solid #FCB298;
    }
    
    .peoplenum>div {
        height: 84px;
        position: relative;
    }
    
    .peoplenum>div>div {
        position: absolute;
        right: 20px;
        bottom: 16px;
        color: #8F8E94;
    }
    
    .peoplenum>div>div span {
        margin-right: 6px;
        font-size: 44px;
    }
    
    .tubiao {
        width: 695px;
        margin: 0 auto;
    }
</style>