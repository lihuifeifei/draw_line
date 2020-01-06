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
              data:[16936, 17972, 19831, 23512, 27110, 29025, 29387,31862,33539,35391]
            },
            {
              name:'MFO',
              type:'line',
              symbol:'circle',
              symbolSize:'7',
              data:[16352, 17134, 18153, 22138, 25191, 26991, 28153,30683,32973,33763],
            },
            {
              name:'CSA',
              type:'line',
              symbol:'diamond',
              symbolSize:'7',
              data:[17352, 18946, 20153, 24631, 28013, 29934, 31964,33137,35278,37372]
            },
            {
              name:'GA',
              type:'line',
              symbol:'triangle',
              symbolSize:'7',
              data:[18423, 21538, 25937, 31628, 32173, 37136, 39361,42357,43389,45072]
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
              data:[2830, 2835, 2874, 2901, 2926, 2979, 3072,3150,3174,3237]
            },
            {
              name:'MFO',
              type:'line',
              symbol:'circle',
              symbolSize:'7',
              data:[2812, 2795, 2824, 2846, 2901, 2957, 3015,3106,3124,3207],
            },
            {
              name:'CSA',
              type:'line',
              symbol:'diamond',
              symbolSize:'7',
              data:[2838, 2881, 2901, 2913, 2956, 3012, 3126,3183,3201,3273]
            },
            {
              name:'GA',
              type:'line',
              symbol:'triangle',
              symbolSize:'7',
              data:[2908, 2923, 2972, 2963, 3102, 3194, 3205,3259,3298,3406]
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
              data:[78.2, 79.3, 79.5, 79.4, 78.8, 79.2, 79.4,78.9,79.3,78.2]
            },
            {
              name:'MFO',
              type:'line',
              symbol:'circle',
              symbolSize:'7',
              data:[72.1, 72.7, 72.8, 72.1, 72.4, 72.8, 72.9,72.6,72.8,72.4],
            },
            {
              name:'CSA',
              type:'line',
              symbol:'diamond',
              symbolSize:'7',
              data:[70.4, 71.1, 71.6, 71.3, 70.8, 71.6, 71.2,72.0,71.3,70.9]
            },
            {
              name:'GA',
              type:'line',
              symbol:'triangle',
              symbolSize:'7',
              data:[70.1, 69.5, 69.7, 70.6, 70.2, 70.2, 70.4,69.8,70.4,69.3]
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
              data:[77.2, 77.6, 77.5, 78.1, 78.0, 77.3, 77.5,77.4,78.3,77.7]
            },
            {
              name:'MFO',
              type:'line',
              symbol:'circle',
              symbolSize:'7',
              data:[71.2, 71.3, 71.1, 71.8, 71.4, 71.7, 71.9,71.4,71.3,72.0],
            },
            {
              name:'CSA',
              type:'line',
              symbol:'diamond',
              symbolSize:'7',
              data:[69.2, 69.1, 69.2, 69.5, 69.9, 69.4, 70.1,69.6,69.3,69.1]
            },
            {
              name:'GA',
              type:'line',
              symbol:'triangle',
              symbolSize:'7',
              data:[68.2, 68.1, 67.9, 68.1, 68.3, 68.4, 68.9,67.9,68.2,68.6]
            },
          ]
        });
      },
    }
  }
</script>
