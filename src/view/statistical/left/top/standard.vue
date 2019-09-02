<template>
  <div class="main" ref="chart"></div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    let echarts = require('echarts');
    let myChart = this.$refs.chart;
    let HChart = echarts.init(myChart, 'light')

    let option = {
      title: {
        text: '标准设立',
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
        data: ['否', '是'],
        icon: "circle",
        textStyle: {
          color: '#8C8C8C'
        }
      },
      series: [
        {
          name: '标准设立',
          type: 'pie',
          // radius : '45%',
          // 设置2个半径即得到一个扇形图
          radius: ['30%', '55%'],
          center: ['50%', '60%'],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          data: [
            { value: 65, name: '否' },
            { value: 135, name: '是' },
          ],
          color: ['#5B8FF9', '#5AD8A6']
        }
      ]
    }

    window.onresize = HChart.resize;
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
