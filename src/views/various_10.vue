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
          name:'Cost($)',
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
            data:[120, 132, 101, 134, 90, 230, 210,123,234,123]
          },
          {
            name:'MFO',
            type:'line',
            symbol:'circle',
            symbolSize:'7',
            data:[220, 182, 191, 234, 290, 330, 310,123,134,244],
          },
          {
            name:'CSA',
            type:'line',
            symbol:'diamond',
            symbolSize:'7',
            data:[150, 232, 201, 154, 190, 330, 410,122,121,213]
          },
          {
            name:'GA',
            type:'line',
            symbol:'triangle',
            symbolSize:'7',
            data:[320, 332, 301, 334, 390, 330, 320,132,432,124]
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
          name:'Time(s)',
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
            data:[120, 132, 101, 134, 90, 230, 210,123,234,123]
          },
          {
            name:'MFO',
            type:'line',
            symbol:'circle',
            symbolSize:'7',
            data:[220, 182, 191, 234, 290, 330, 310,123,134,244],
          },
          {
            name:'CSA',
            type:'line',
            symbol:'diamond',
            symbolSize:'7',
            data:[150, 232, 201, 154, 190, 330, 410,122,121,213]
          },
          {
            name:'GA',
            type:'line',
            symbol:'triangle',
            symbolSize:'7',
            data:[320, 332, 301, 334, 390, 330, 320,132,432,124]
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
            data:[120, 132, 101, 134, 90, 230, 210,123,234,123]
          },
          {
            name:'MFO',
            type:'line',
            symbol:'circle',
            symbolSize:'7',
            data:[220, 182, 191, 234, 290, 330, 310,123,134,244],
          },
          {
            name:'CSA',
            type:'line',
            symbol:'diamond',
            symbolSize:'7',
            data:[150, 232, 201, 154, 190, 330, 410,122,121,213]
          },
          {
            name:'GA',
            type:'line',
            symbol:'triangle',
            symbolSize:'7',
            data:[320, 332, 301, 334, 390, 330, 320,132,432,124]
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
            data:[120, 132, 101, 134, 90, 230, 210,123,234,123]
          },
          {
            name:'MFO',
            type:'line',
            symbol:'circle',
            symbolSize:'7',
            data:[220, 182, 191, 234, 290, 330, 310,123,134,244],
          },
          {
            name:'CSA',
            type:'line',
            symbol:'diamond',
            symbolSize:'7',
            data:[150, 232, 201, 154, 190, 330, 410,122,121,213]
          },
          {
            name:'GA',
            type:'line',
            symbol:'triangle',
            symbolSize:'7',
            data:[320, 332, 301, 334, 390, 330, 320,132,432,124]
          },
        ]
      });
    },
  }
}
</script>
