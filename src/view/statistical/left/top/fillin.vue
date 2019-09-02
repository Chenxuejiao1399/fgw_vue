<template>
  <div class="main" ref="chart"></div>
</template>

<script>
export default {
  props: ["fillinData"],
  data() {
    return {

    }
  },

  mounted() {
    //设置series数据条数
    let seriesData = []
    for (let i = 1; i <= this.fillinData.data[0].length - 1; i++) {
      seriesData.push({ name: this.fillinData.data[0][i], value: this.fillinData.data[1][i] })
    }
    let echarts = require('echarts');
    let myChart = this.$refs.chart;
    let HChart = echarts.init(myChart, 'light')

    let option = {
      title: {
        text: '填报情况',
        x: 'left',
        padding: [
          11, 0, 0, 18
        ]
      },
      legend: {
        orient: 'horizontal',
        padding: [
          71,
          0,
          0,
          18
        ],
        left: 'left',
        data: ['已提交', '未填报', '填报中'],
        icon: "circle",
        textStyle: {
          color: '#8C8C8C'
        }
      },
      series: [
        {
          name: '开票来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: seriesData,
          color: ['#5B8FF9', '#5AD8A6', "#5D7092"],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
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
