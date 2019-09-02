<template>
  <div class="requstionhome">
    <!-- 发改委登录显示界面 -->
      <div class="title">
          当前问卷
      </div>

      <!-- 问卷box -->
     <div class="requestionitem">
         <div class="reqtitle">
             1.企业评价指标体系
         </div>
         <div class="reqcontent">
             <div class="reqcontentinfo">
                 <div class="rqinfotitle">
                    <span >以提交</span>
                 </div>
                 <div class="prgrssbar">
                     <adminprgrssbar length="25" index="0" bgc="orange" />
                 </div>

             </div>
              <div class="reqcontentinfo">
                 <div class="rqinfotitle">
                    <span >填写中</span>
                 </div>
                 <div class="prgrssbar">
                     <adminprgrssbar length="75" index="1" bgc="orange" />
                 </div>

             </div>

              <div class="reqcontentinfo">
                 <div class="rqinfotitle">
                    <span >未填写</span>
                 </div>
                 <div class="prgrssbar">
                     <adminprgrssbar length="100" index="2" bgc="orange" />
                 </div>
                 <div class="reqoperation">
                      <el-button type="warning" size="mini"><i class="iconfont">&#xe61b;</i>&nbsp;查看</el-button>
                       <el-button type="primary" size="mini"><i class="iconfont">&#xe7d9;</i>&nbsp;下载</el-button>
                 </div>
             </div>
         </div>
     </div>

      <!-- 问卷box -->
     <div class="requestionitem">
         <div class="reqtitle">
             2.混合所有制改革企业评价指标体系
         </div>
         <div class="reqcontent">
             <div class="reqcontentinfo">
                 <div class="rqinfotitle">
                    <span >以提交</span>
                 </div>
                 <div class="prgrssbar">
                     <adminprgrssbar length="60" index="3" bgc="orange" />
                 </div>

             </div>
              <div class="reqcontentinfo">
                 <div class="rqinfotitle">
                    <span >填写中</span>
                 </div>
                 <div class="prgrssbar">
                     <adminprgrssbar length="20" index="4" bgc="orange" />
                 </div>

             </div>

              <div class="reqcontentinfo">
                 <div class="rqinfotitle">
                    <span >未填写</span>
                 </div>
                 <div class="prgrssbar">
                     <adminprgrssbar length="200" index="5" bgc="orange" />
                 </div>
                 <div class="reqoperation">
                      <el-button type="warning" size="mini"><i class="iconfont">&#xe61b;</i>&nbsp; 查看</el-button>
                       <el-button type="primary" size="mini"><i class="iconfont">&#xe7d9;</i>&nbsp;下载</el-button>
                 </div>
             </div>
         </div>
     </div>
      

  </div>
</template>

<script>
import adminprgrssbar from "../../components/adminprgrssBar/adminprgrssbar"
export default {
  data () {
    return {
        
    }
  },
  components:{
      adminprgrssbar
  }
}
</script>

<style lang="scss" scoped>
@import url("../../assets/fontcss/fontcss.css");
    .requstionhome{
        width: 100%;
        height: 100%;
        background-color: #fff;
        .title{
            width: 100%;
            height: 45px;
            padding: 20px;
            font-size:18px;
            font-family:PingFangSC;
            font-weight:600;
            color:rgba(0,0,0,1);
            margin-bottom: 10px;
             box-sizing: border-box;
        }
        .requestionitem{
            width: 864px;
            height: 165px;
            margin-left: 25px;
            .reqtitle{
                height: 20px;
                font-size:14px;
                font-family:PingFangSC;
                font-weight:400;
            }
            .reqcontent{
                margin: 19px 0 0 14px;
                height: 120px;
                width: 824px;
                // background-color: #777;
                .reqcontentinfo{
                    width: 824px;
                    height: 32px;
                   display: flex;
                   align-items: center;
                }
                .rqinfotitle{
                    width:42px;
                    height:20px;
                    font-size:14px;
                    line-height:20px;
                    margin-right: 24px;

                }
                .prgrssbar{
                    // width: 570px;
                     height:20px;
                     margin-right: 24px;
                    //   background-color: #FF7357;
                }
            }
        }
    }
    .orange{
        color: #FF7357;
        font-size:14px;
    }
        .green{
        color: #50C380;
        font-size:14px;
    }
        .blue{
        color: #4A90E2;
        font-size:14px;
    }
</style>
