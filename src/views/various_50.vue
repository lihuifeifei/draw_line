<template>
    <div>
        <div style="display: flex;justify-content: space-around">
            <div id="myChart1" :style="{width: '500px', height: '350px'}"></div>
            <div id="myChart2" :style="{width: '500px', height: '350px'}"></div>
        </div>
        <br>
        <hr>
        <div style="display: flex;justify-content: space-around">
            <div id="myChart3" :style="{width: '500px', height: '350px'}"></div>
            <div id="myChart4" :style="{width: '500px', height: '350px'}"></div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src


    export default {
        name: 'home',
        mounted(){
            this.drawLine1();
            this.drawLine2();
            this.drawLine3();
            this.drawLine4();
        },
        methods: {
            drawLine1(){
                // 基于准备好的dom，初始化echarts实例
                let myChart1 = this.$echarts.init(document.getElementById('myChart1'));
                // 绘制图表
                myChart1.setOption({
                    title: {
                        text: 'Cost($)',
                    },
                    tooltip: {
                        trigger: 'axis',

                    },
                    legend: {
                        data:['new_MFO','MFO','CSA','GA'],
                        bottom:'85%',
                        right:'3%',
                    },
                    grid: {
                        left: '13%',
                        right: '4%',
                        bottom: '20%',
                        containLabel: false
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {name:'cost'},
                        }
                    },
                    dataZoom: [{
                        type: "slider", /*类型*/
                        xAxisIndex: 0, /*对应的轴*/
                        bottom: "1", /*位置，定位*/
                        start: 0, /*开始*/
                        end: 10000, /*结束*/
                        handleIcon: "M0,0 v9.7h5 v-9.7h-5 Z",
                        handleStyle: { /*手柄的样式*/
                            color: "#40bcf9",
                            borderColor: "#1fb2fb"
                        },
                        backgroundColor: "#e2f3ff", /*背景 */
                        dataBackground: { /*数据背景*/
                            lineStyle: {
                                color: "#000000"
                            },
                            areaStyle: {
                                color: "#d4d9dd"
                            }
                        },
                        fillerColor: "rgba(31,178,251,0.2)", /*被start和end遮住的背景*/
                        labelFormatter: function (value, params) { /*拖动时两端的文字提示*/
                            var str = "";
                            if (params.length > 4) {
                                str = params.substring(0, 4) + "…";
                            } else {
                                str = params;
                            }
                            return str;
                        }
                    }],
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        name: 'Number of Requests',
                        nameLocation:'middle',
                        nameGap:'20',
                        data: ['1000','2000','3000','4000','5000','6000','7000','8000','9000','10000']
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap:false,
                        name:'Cost($)',
                        nameLocation:'center',
                        nameGap:48,
                        splitLine: {
                            lineStyle: {
                                type: 'dotted',
                            }
                        },
                        min:'dataMin',
                        max:'dataMax',
                        splitArea: {//背景条纹
                            show: true,
                            areaStyle: {
                                color: [
                                    'rgba(255,255,255,0)',
                                    'rgba(242,243,248,1)'
                                ]
                            }

                        },
                    },
                    series: [
                        {
                            name:'new_MFO',
                            type:'line',
                            symbol:'rect',
                            symbolSize:'7',
                            data:[30672, 33512, 39621, 43632, 45731, 48673, 55462,60563,61673,66932]
                        },
                        {
                            name:'MFO',
                            type:'line',
                            symbol:'circle',
                            symbolSize:'7',
                            data:[29263, 32234, 37245, 41673, 43232, 47762, 53264,58347,60652,65623],
                        },
                        {
                            name:'CSA',
                            type:'line',
                            symbol:'diamond',
                            symbolSize:'7',
                            data:[31345, 35782, 40134, 44253, 45796, 50245, 57258,62435,63584,69842]
                        },
                        {
                            name:'GA',
                            type:'line',
                            symbol:'triangle',
                            symbolSize:'7',
                            data:[32782, 37487, 43434, 47823, 49134, 54482, 61921,64831,66147,72246]
                        },
                    ]
                });
            },
            drawLine2(){
                // 基于准备好的dom，初始化echarts实例
                let myChart2 = this.$echarts.init(document.getElementById('myChart2'));
                // 绘制图表
                myChart2.setOption({
                    title: {
                        text: 'Time(s)',
                    },
                    tooltip: {
                        trigger: 'axis',

                    },
                    legend: {
                        data:['new_MFO','MFO','CSA','GA'],
                        bottom:'85%',
                        right:'3%',
                    },
                    grid: {
                        left: '13%',
                        right: '4%',
                        bottom: '20%',
                        containLabel: false
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {name:'cost'},
                        }
                    },
                    dataZoom: [{
                        type: "slider", /*类型*/
                        xAxisIndex: 0, /*对应的轴*/
                        bottom: "1", /*位置，定位*/
                        start: 0, /*开始*/
                        end: 10000, /*结束*/
                        handleIcon: "M0,0 v9.7h5 v-9.7h-5 Z",
                        handleStyle: { /*手柄的样式*/
                            color: "#40bcf9",
                            borderColor: "#1fb2fb"
                        },
                        backgroundColor: "#e2f3ff", /*背景 */
                        dataBackground: { /*数据背景*/
                            lineStyle: {
                                color: "#000000"
                            },
                            areaStyle: {
                                color: "#d4d9dd"
                            }
                        },
                        fillerColor: "rgba(31,178,251,0.2)", /*被start和end遮住的背景*/
                        labelFormatter: function (value, params) { /*拖动时两端的文字提示*/
                            var str = "";
                            if (params.length > 4) {
                                str = params.substring(0, 4) + "…";
                            } else {
                                str = params;
                            }
                            return str;
                        }
                    }],
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        name: 'Number of Requests',
                        nameLocation:'middle',
                        nameGap:'20',
                        data: ['1000','2000','3000','4000','5000','6000','7000','8000','9000','10000']
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap:false,
                        name:'Time(s)',
                        nameLocation:'center',
                        nameGap:40,
                        splitLine: {
                            lineStyle: {
                                type: 'dotted',
                            }
                        },
                        min:'dataMin',
                        max:'dataMax',
                        splitArea: {//背景条纹
                            show: true,
                            areaStyle: {
                                color: [
                                    'rgba(255,255,255,0)',
                                    'rgba(255,250,240,1)'
                                ]
                            }

                        },
                    },
                    series: [
                        {
                            name:'new_MFO',
                            type:'line',
                            symbol:'rect',
                            symbolSize:'7',
                            data:[5142, 5242, 5273, 5294, 5306, 5335, 5394,5423,5592,5670]
                        },
                        {
                            name:'MFO',
                            type:'line',
                            symbol:'circle',
                            symbolSize:'7',
                            data:[5083, 5121, 5192, 5223, 5268, 5298, 5302,5341,5473,5585],
                        },
                        {
                            name:'CSA',
                            type:'line',
                            symbol:'diamond',
                            symbolSize:'7',
                            data:[5225, 5279, 5283, 5305, 5368, 5392, 5436,5583,5639,5703]
                        },
                        {
                            name:'GA',
                            type:'line',
                            symbol:'triangle',
                            symbolSize:'7',
                            data:[5236, 5382, 5398, 5462, 5504, 5603, 5771,5806,5882,5980]
                        },
                    ]
                });
            },
            drawLine3(){
                // 基于准备好的dom，初始化echarts实例
                let myChart3 = this.$echarts.init(document.getElementById('myChart3'));
                // 绘制图表
                myChart3.setOption({
                    title: {
                        text: 'Availability(%)',
                    },
                    tooltip: {
                        trigger: 'axis',

                    },
                    legend: {
                        data:['new_MFO','MFO','CSA','GA'],
                        bottom:'85%',
                        right:'3%',
                    },
                    grid: {
                        left: '8%',
                        right: '4%',
                        bottom: '20%',
                        containLabel: false
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {name:'cost'},
                        }
                    },
                    dataZoom: [{
                        type: "slider", /*类型*/
                        xAxisIndex: 0, /*对应的轴*/
                        bottom: "1", /*位置，定位*/
                        start: 0, /*开始*/
                        end: 10000, /*结束*/
                        handleIcon: "M0,0 v9.7h5 v-9.7h-5 Z",
                        handleStyle: { /*手柄的样式*/
                            color: "#40bcf9",
                            borderColor: "#1fb2fb"
                        },
                        backgroundColor: "#e2f3ff", /*背景 */
                        dataBackground: { /*数据背景*/
                            lineStyle: {
                                color: "#000000"
                            },
                            areaStyle: {
                                color: "#d4d9dd"
                            }
                        },
                        fillerColor: "rgba(31,178,251,0.2)", /*被start和end遮住的背景*/
                        labelFormatter: function (value, params) { /*拖动时两端的文字提示*/
                            var str = "";
                            if (params.length > 4) {
                                str = params.substring(0, 4) + "…";
                            } else {
                                str = params;
                            }
                            return str;
                        }
                    }],
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        name: 'Number of Requests',
                        nameLocation:'middle',
                        nameGap:'20',
                        data: ['1000','2000','3000','4000','5000','6000','7000','8000','9000','10000']
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap:false,
                        name:'Availability(%)',
                        nameLocation:'center',
                        nameGap:30,
                        splitLine: {
                            lineStyle: {
                                type: 'dotted',
                            }
                        },
                        min:'dataMin',
                        max:'dataMax',
                        splitArea: {//背景条纹
                            show: true,
                            areaStyle: {
                                color: [
                                    'rgba(255,255,255,0)',
                                    'rgba(255,245,238,1)'
                                ]
                            }

                        },
                    },
                    series: [
                        {
                            name:'new_MFO',
                            type:'line',
                            symbol:'rect',
                            symbolSize:'7',
                            data:[68.4, 68.6, 68.1, 68.4, 69.3, 68.6, 68.9,69.3,68.4,68.9]
                        },
                        {
                            name:'MFO',
                            type:'line',
                            symbol:'circle',
                            symbolSize:'7',
                            data:[61.2, 61.5, 61.2,62.5, 61.6, 62.1, 61.7,61.2,61.8,61.2],
                        },
                        {
                            name:'CSA',
                            type:'line',
                            symbol:'diamond',
                            symbolSize:'7',
                            data:[59.4, 59.1, 59.6, 59.3, 60.1, 60.0, 59.2,59.0,59.7,59.9]
                        },
                        {
                            name:'GA',
                            type:'line',
                            symbol:'triangle',
                            symbolSize:'7',
                            data:[58.9, 58.2, 59.2, 58.1, 58.2, 58.4, 58.8,58.3,59.1,58.5]
                        },
                    ]
                });
            },
            drawLine4(){
                // 基于准备好的dom，初始化echarts实例
                let myChart4 = this.$echarts.init(document.getElementById('myChart4'));
                // 绘制图表
                myChart4.setOption({
                    title: {
                        text: 'Reliability(%)',
                    },
                    tooltip: {
                        trigger: 'axis',

                    },
                    legend: {
                        data:['new_MFO','MFO','CSA','GA'],
                        bottom:'85%',
                        right:'3%',
                    },
                    grid: {
                        left: '8%',
                        right: '4%',
                        bottom: '20%',
                        containLabel: false
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {name:'cost'},
                        }
                    },
                    dataZoom: [{
                        type: "slider", /*类型*/
                        xAxisIndex: 0, /*对应的轴*/
                        bottom: "1", /*位置，定位*/
                        start: 0, /*开始*/
                        end: 10000, /*结束*/
                        handleIcon: "M0,0 v9.7h5 v-9.7h-5 Z",
                        handleStyle: { /*手柄的样式*/
                            color: "#40bcf9",
                            borderColor: "#1fb2fb"
                        },
                        backgroundColor: "#e2f3ff", /*背景 */
                        dataBackground: { /*数据背景*/
                            lineStyle: {
                                color: "#000000"
                            },
                            areaStyle: {
                                color: "#d4d9dd"
                            }
                        },
                        fillerColor: "rgba(31,178,251,0.2)", /*被start和end遮住的背景*/
                        labelFormatter: function (value, params) { /*拖动时两端的文字提示*/
                            var str = "";
                            if (params.length > 4) {
                                str = params.substring(0, 4) + "…";
                            } else {
                                str = params;
                            }
                            return str;
                        }
                    }],
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        name: 'Number of Requests',
                        nameLocation:'middle',
                        nameGap:'20',
                        data: ['1000','2000','3000','4000','5000','6000','7000','8000','9000','10000']
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap:false,
                        name:'Reliability(%)',
                        nameLocation:'center',
                        nameGap:30,
                        splitLine: {
                            lineStyle: {
                                type: 'dotted',
                            }
                        },
                        min:'dataMin',
                        max:'dataMax',
                        splitArea: {//背景条纹
                            show: true,
                            areaStyle: {
                                color: [
                                    'rgba(255,255,255,0)',
                                    'rgba(245,245,245,1)'

                                ]
                            }

                        },
                    },
                    series: [
                        {
                            name:'new_MFO',
                            type:'line',
                            symbol:'rect',
                            symbolSize:'7',
                            data:[76.4, 76.5, 76.4, 76.6, 77.1, 76.5, 76.7,76.2,76.7,76.3]
                        },
                        {
                            name:'MFO',
                            type:'line',
                            symbol:'circle',
                            symbolSize:'7',
                            data:[69.5, 69.4, 69.6, 69.7, 70.2, 69.7, 69.3,69.6,69.4,70.2],
                        },
                        {
                            name:'CSA',
                            type:'line',
                            symbol:'diamond',
                            symbolSize:'7',
                            data:[68.3, 67.3, 67.5, 68.2, 67.2, 67.6, 68.3,68.0,68.2,67.3]
                        },
                        {
                            name:'GA',
                            type:'line',
                            symbol:'triangle',
                            symbolSize:'7',
                            data:[66.2, 66.7, 66.2, 66.5, 66.7, 66.2, 66.6,67.0,66.2,66.7]
                        },
                    ]
                });
            },
        }
    }
</script>
