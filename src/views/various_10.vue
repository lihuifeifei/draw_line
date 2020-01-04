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
            data:[3492, 3573, 3724, 4198, 4657, 5394, 5874,6596,7273,7847]
          },
          {
            name:'MFO',
            type:'line',
            symbol:'circle',
            symbolSize:'7',
            data:[3314, 3451, 3479, 4113, 4483, 5260, 5783,6405,7047,7692],
          },
          {
            name:'CSA',
            type:'line',
            symbol:'diamond',
            symbolSize:'7',
            data:[3521, 3620, 3986, 4213, 4806, 5434, 5927,6649,7525,8242]
          },
          {
            name:'GA',
            type:'line',
            symbol:'triangle',
            symbolSize:'7',
            data:[3725, 3874, 4231, 4410, 4815, 5591, 5994,6972,8217,8935]
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
            data:[1126, 1175, 1237, 1318, 1364, 1376, 1427,1489,1521,1547]
          },
          {
            name:'MFO',
            type:'line',
            symbol:'circle',
            symbolSize:'7',
            data:[1179, 1127, 1195, 1243, 1276, 1319, 1386,1417,1478,1519],
          },
          {
            name:'CSA',
            type:'line',
            symbol:'diamond',
            symbolSize:'7',
            data:[1151, 1218, 1274, 1382, 1407, 1489, 1509,1558,1564,1613]
          },
          {
            name:'GA',
            type:'line',
            symbol:'triangle',
            symbolSize:'7',
            data:[1417, 1328, 1459, 1549, 1598, 1628, 1656,1678,1764,1813]
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
            data:[81.2, 82.3, 82.5, 83.4, 82.8, 81.9, 82.4,81.9,82.3,81.9]
          },
          {
            name:'MFO',
            type:'line',
            symbol:'circle',
            symbolSize:'7',
            data:[74.1, 75.7, 75.8, 75.1, 75.4, 75.8, 75.9,75.2,75.8,75.4],
          },
          {
            name:'CSA',
            type:'line',
            symbol:'diamond',
            symbolSize:'7',
            data:[73.3, 75.1, 74.8, 74.6, 74.1, 74.9, 74.6,73.4,74.1,73.8]
          },
          {
            name:'GA',
            type:'line',
            symbol:'triangle',
            symbolSize:'7',
            data:[72.4, 74.3, 73.2, 73.8, 73.5, 73.2, 73.7,72.8,73.4,72.3]
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
            data:[81.2, 81.6, 81.5, 82.1, 82.0, 81.3, 81.5,82.4,82.3,81.7]
          },
          {
            name:'MFO',
            type:'line',
            symbol:'circle',
            symbolSize:'7',
            data:[73.2, 73.3, 73.1, 72.8, 73.4, 73.7, 72.9,73.4,73.3,73.6],
          },
          {
            name:'CSA',
            type:'line',
            symbol:'diamond',
            symbolSize:'7',
            data:[72.1, 71.1, 71.2, 71.5, 71.9, 72.4, 71.9,71.6,72.3,72.1]
          },
          {
            name:'GA',
            type:'line',
            symbol:'triangle',
            symbolSize:'7',
            data:[70.2, 70.1, 69.8, 70.1, 71.2, 71.1, 70.2,70.4,71.2,70.7]
          },
        ]
      });
    },
  }
}
</script>
