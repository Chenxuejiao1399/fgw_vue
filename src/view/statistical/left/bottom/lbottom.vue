<template>
  <div class="main" ref="chart">
   
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  },

    mounted(){
    let echarts = require('echarts');
    let myChart = this.$refs.chart;
    let HChart = echarts.init(myChart,'light')
   
	  let option = {
    title: {
        text: '资本方党员占比',
                padding :[
            11,0,0,18
        ]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        orient: 'horizontal',
        padding :[
            71,
            0,
            0,
            18
        ],
        left: 'left',
        data: ['国有资方','非公资方'],
        // icon: "circle",
        textStyle:{
          color:'#8C8C8C'
        }
    },
    grid: {
        top:"127",
        left: '3%',
        right: '4%',
        bottom: '43',
        containLabel: true
    },
    xAxis: {
          type: 'category',
        
        // 留白空隙
        boundaryGap: [0, 0.5],
         axisLine:{
            lineStyle:{
                color:"#A0A4AA",
            },
           show:false,
        },
                // 影藏刻度
        axisTick:{
            show:false,
        },
        data: ["90%以上", "80%以上", "70%以上", "60%以上", "60%以下"]
    },
    yAxis: {
        type: 'value',
        axisLine:{
            lineStyle:{
                color:"#A0A4AA",
            },
           show:false,
        },
        // 影藏刻度
        axisTick:{
            show:false,
        },
      
        
    },
    series: [
        {
            name: '国有资方',
            type: 'bar',
            data: [324, 836, 314, 486, 491],
             itemStyle:{
                color:"#5B8FF9",
               
            }
        },
                {
            name: '非公资方',
            type: 'bar',
            data: [304, 476, 294, 116, 641],
            itemStyle:{
                color:"#5AD8A6",
               
            }
        }
    ]
};


      window.onresize = HChart.resize;
        HChart.setOption(option);
         window.devicePixelRatio = 2;
    }
}
</script>

<style lang="scss" scoped>
    .main{
        width: 100%;
        height: 100%;
    }
</style>
