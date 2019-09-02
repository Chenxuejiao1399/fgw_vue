<template>
  <div class="requstionhome">
    <!-- 用户登录页 -->
    <div class="title">当前问卷</div>
    <div class="tabledata">
      <template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="id" label="序号" width="80"></el-table-column>
          <el-table-column prop="qn_name" label="问卷名称"></el-table-column>
          <el-table-column prop="start_time" label="填报周期">
            <template slot-scope="scope">
              <span>{{scope.row.start_time.split(" ")[0]}} — {{scope.row.end_time.split(" ")[0]}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="status" label="填报状态" width="180">
            <template slot-scope="scope">
              <span class="orange" v-if=" '未填写' == scope.row.status">未填写</span>
              <span class="green" v-if=" '填写中' == scope.row.status">填写中</span>
              <span class="blue" v-if=" '已完成' == scope.row.status">已完成</span>
            </template>
          </el-table-column>
          <el-table-column prop="finished" label="填报进度" width="250">
            <template slot-scope="scope">
              <progessbar :length="scope.row.finished" />
            </template>
          </el-table-column>

          <el-table-column prop="id" label="操作" width="240">
            <template slot-scope="scope">
              <el-button
                type="warning"
                size="mini"
                @click="editQuestion(scope.row.id,scope.row.qn_name)"
              >
                <i class="iconfont" size="mini">&#xe7e1;</i>&nbsp;&nbsp;编辑
              </el-button>
              <el-button type="success" size="mini">
                <i class="iconfont" size="small">&#xe7d9;</i> &nbsp;&nbsp;下载
              </el-button>
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
  name: "newquestionhome",
  components: {
    progessbar
  },
  data() {
    return {
      tableData: null,
    }
  },
  created() {
    this.getQuestionData()
  },
  methods: {
    //获取当前用户问卷填写信息数据
    getQuestionData() {
      let uid = this.$commonTools.getCookie('uid')  //获取当前用户的uid
      // console.log("uid", uid)
      this.$axios({
        method: "post",
        url: '/api/survey/current_questionnaires',
        params: { uid: uid }
      })
        .then((response) => {
          // console.log("获取问卷信息成功", response.data.data)
          this.tableData = response.data.data
        })
        .catch((error) => {
          this.$notify.error({
            title: '提示',
            message: '获取问卷信息失败，请重试',
            showClose: false,
          })
          console.log(error)
        })
    },

    //点击编辑进入问卷填写页并传入问卷id
    editQuestion(id, name) {
      this.$router.push({
        name: 'newquestion',
        params: {
          id: id,
          qn_name: name
        }
      })
    }
  }
}
</script>
<style>
.requstionhome .el-button--success {
  background-color: #1e9fff;
  border-color: #1e9fff;
}
</style>
<style lang="scss" scoped>
@import url("../../assets/fontcss/fontcss.css");
.requstionhome {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .title {
    width: 100%;
    height: 45px;
    padding: 20px;
    font-size: 18px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 10px;
    box-sizing: border-box;
  }
  .tabledata {
    width: 100%;
    padding: 0 64px;
    box-sizing: border-box;
  }
}
.orange {
  color: #ff7357;
  font-size: 14px;
}
.green {
  color: #50c380;
  font-size: 14px;
}
.blue {
  color: #4a90e2;
  font-size: 14px;
}
</style>
