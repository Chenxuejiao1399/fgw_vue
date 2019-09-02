<template>
  <div class="progressbar ">
          <span >{{length}}</span>
  </div>
</template>

<script>
export default {
props:['length','index','bgc'],
  data () {
    return {
     
    }
  },
    mounted(){
        let lengthdome = document.getElementsByClassName('progressbar');
        // 计算长度
        lengthdome[this.index].style.width = this.length * 2.85 + 'px' ;
        // 添加背景色
        lengthdome[this.index].classList.add(this.bgc)
    },
}
</script>

<style lang="scss" scoped>
    .progressbar{
        width: 570px;
        height: 20px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
    }
        .orange{
        background-color: #FF7357;
        
        
    }
        .green{
        background-color: #50C380;
        
    }
        .blue{
        background-color: #4A90E2;
       
    }

</style>
