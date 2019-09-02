<template>
  <div class="main" ref="chart" >
   
  </div>
</template>

<script>
export default {
    props:[
        "fillinData"
    ],
  data () {
    return {
     
    }
  },

    mounted(){
         
    //   循环获取数据
      let seriesData = []
      let data ={}
       let xAxisdata = []
        let legendlist = []
      //设置series数据条数
      for (let i = 0; i < this.fillinData.data.length; i++) {
          data = {}
          data.name = this.fillinData.data[i][1][0]
          data.type = 'bar'
          data.data = []
          data.label ={
              show:true,
              position:'top',
              formatter:'{c}'

          }
          data.barWidth= '40'
          data.barGap ="5%"
          data.itemStyle = {
              color:this.fillinData.color[i],
          }
          
          for(let j = 1;j<=this.fillinData.data[i][1].length-1;j++){
               data.data.push(this.fillinData.data[i][1][j])
               if(i ==  this.fillinData.data.length - 1){
                   xAxisdata.push(this.fillinData.data[i][0][j])
               }
               
          }
          
          legendlist.push(this.fillinData.data[i][1][0])
          seriesData.push(data)
      }
        console.log(seriesData,2222)
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
        data: legendlist,
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
        data: xAxisdata
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
    series:seriesData
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
    .main{
        width: 100%;
        height: 100%;
    }
</style>
