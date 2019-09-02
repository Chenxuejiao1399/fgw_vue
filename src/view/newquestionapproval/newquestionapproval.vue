<template>
  <div class="requstionhome">
    <!-- 发改委登录显示界面 -->
      <div class="title">
          当前问卷
      </div>
      <div class="tabledata">
           <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="序号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="问卷名称"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        label="填报周期">
      </el-table-column>
            <el-table-column
        prop="state"
        label="填报状态" width="180">
         <template slot-scope="scope">
             <span class="orange" v-if=" 0 == scope.row.state" >未填写</span>
               <span class="green" v-if=" 1 == scope.row.state" >未完成</span>
                 <span class="blue" v-if=" 2 == scope.row.state" >已完成</span>
      </template>
      </el-table-column>
            <el-table-column
        prop="Speed"
        label="填报进度" width="280">
               <template slot-scope="scope">
                    <progessbar :length="scope.row.Speed" :index="scope.$index"/>
            </template>
      </el-table-column>
 
            <el-table-column
        prop="address"
        label="操作" width="280">
        <template slot-scope="scope">
            <el-button type="warning" size="mini"><i class="iconfont" size="mini">&#xe7e1;</i>&nbsp;&nbsp;审批</el-button>
            <el-button type="success" size="mini"><i class="iconfont" size="small">&#xe7d9;</i> &nbsp;&nbsp;下载</el-button>
      </template>
      </el-table-column>
    </el-table>
  </template>
      </div>
      

  </div>
</template>

<script>
import progessbar from "../../components/progressBar/progressbar"
export default {
  data () {
    return {
         tableData: [{
            date: '1',
            name: '企业评价指标',
            address: '2019.09.01 - 2019.11.01',
            state:0,
            Speed:0,

          }, {
            date: '2',
            name: '混合所有制改革企业评价指标体系',
            address: '2019.09.01 - 2019.11.01',
             state:1,
             Speed:30,
          }, {
            date: '3',
            name: '企业评价指标体系',
            address: '2019.09.01 - 2019.11.01',
             state:2,
             Speed:80,
          }]
    }
  },
  components:{
      progessbar
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
        .tabledata{
            width: 100%;
            padding:0 64px;
            box-sizing: border-box;
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
