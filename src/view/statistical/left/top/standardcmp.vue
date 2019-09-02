<template>
  <div class="main" ref="standard"></div>
</template>

<script>
export default {
  props: ["fillinData"],
  data() {
    return {

    }
  },

  mounted() {
    //   循环获取数据
    // console.log(this.fillinData)
    let seriesData = []
    //设置series数据条数
    for (let i = 1; i <= this.fillinData.data[0].length - 1; i++) {
      seriesData.push({ name: this.fillinData.data[0][i], value: this.fillinData.data[1][i] })
    }
    let echarts = require('echarts');
    let myChart = this.$refs.standard;
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
          data: seriesData,
          color: ['#5B8FF9', '#5AD8A6']
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
