<template>
  <div class="main" ref="chart"></div>
</template>

<script>
export default {
  props: [
    "fillinData"
  ],
  data() {
    return {

    }
  },

  mounted() {
    //   循环获取数据
    let seriesData = []
    let data = {}
    let xAxisdata = []
    let legendlist = []
    //设置series数据条数
    for (let i = 0; i < this.fillinData.data.length; i++) {
      data = {}
      data.name = this.fillinData.data[i][1][0]
      data.type = 'bar'
      data.data = []
      data.label = {
        show: true,
        position: 'top',
        formatter: '{c}'

      }
      data.barWidth = '26'
      data.barGap = "5%"
      data.itemStyle = {
        // color:"#5B8FF9",

        color: this.fillinData.color[i],
        normal: {
          label: {
            show: true, //开启显示
            position: 'inside', //在上方显示
            textStyle: { //数值样式
              color: '#fff',
              fontSize: 16
            }
          }
        }
      }

      for (let j = 1; j <= this.fillinData.data[i][1].length - 1; j++) {
        data.data.push(this.fillinData.data[i][1][j])
        if (i == this.fillinData.data.length - 1) {
          xAxisdata.push(this.fillinData.data[i][0][j])
        }
      }

      legendlist.push(this.fillinData.data[i][1][0])
      seriesData.push(data)
    }
    let echarts = require('echarts');
    let myChart = this.$refs.chart;
    let HChart = echarts.init(myChart, 'light')

    let option = {
      title: {
        text: '企业类型',
        padding: [
          11, 0, 0, 18
        ]
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: "20",
        left: '3%',
        right: '4%',
        bottom: "25",
        containLabel: true
      },
      xAxis: {
        splitNumber: 3,
        type: 'value',
        // 留白空隙
        boundaryGap: [0, 0.5],
        axisLine: {
          lineStyle: {
            color: "#A0A4AA",
          },
          show: false,
        },
        // 影藏刻度
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        // splitNumber:3,
        axisLine: {
          lineStyle: {
            color: "#A0A4AA",
          },
          show: false,
        },
        // 影藏刻度
        axisTick: {
          show: false,
        },
        type: 'category',
        data: xAxisdata
      },
      series: seriesData
    };


    window.addEventListener("resize", () => {
      HChart.resize()
    })
    HChart.setOption(option);
    window.devicePixelRatio = 2;
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
}
</style>
