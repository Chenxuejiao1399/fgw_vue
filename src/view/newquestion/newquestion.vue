<template>
  <div class="main">
    <div class="main_content_body">
      <el-tabs tab-position="left" v-model="activeName">
        <el-tab-pane
          v-for="(item,index) in questionData"
          :key="index"
          :label="item.indicator_name"
          :name="item.indicator_name"
        >
          <new-question-module
            v-if="item.indicator_name == activeName"
            :id="item.id"
            :questionName="item.indicator_name"
            :qn_name="qn_name"
            :index="index+1"
            :navLength="navLength"
            :questionnaireId="questionnaireId"
          ></new-question-module>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import NewQuestionModule from '@/components/newquestion/NewQuestionModule';
export default {
  name: 'newquestion',  //问卷调查总页面
  components: {
    "new-question-module": NewQuestionModule
  },
  data() {
    return {
      questionnaireId: this.$route.params.id,
      questionData: null, //总问卷调查nav导航
      activeName: '',  //推荐栏目Tab标签默认选中
      qn_name: null,   //当前问卷分类
      navLength: '', //当前问卷导航长度有多少
    }
  },
  created() {
    this.getQuestionData()
  },
  methods: {
    //获取当前用户问卷填写信息数据
    getQuestionData() {
      // console.log("问卷页", this.$commonTools.getCookie('uid'))
      // console.log("问卷id", this.$route.params.qn_name)
      this.qn_name = this.$route.params.qn_name
      var id = this.querystring.stringify({
        id: this.$route.params.id,
      })
      this.$axios({
        method: "post",
        url: '/api/survey/indicator_list',
        data: id
      })
        .then((response) => {
          // console.log("获取问卷填写信息成功", response.data.data)
          this.navLength = response.data.data.length  //存入问卷导航长度
          this.questionData = response.data.data
          this.activeName = response.data.data[0].indicator_name
          // console.log("第一个选项是", this.activeName)
        })
        .catch((error) => {
          this.$notify.error({
            title: '提示',
            message: '获取问卷信息失败,请重试',
            showClose: false,
          })
          console.log(error)
        })
    }
  }
};
</script>

<style>
/* @import url("../../assets/fontcss/fontcss.css"); */
.main {
  width: 100%;
  height: 100%;
}
.main_content_body {
  width: 100%;
  height: 100%;
}
.main_content_body .el-tabs--left {
  width: 100%;
  height: 100%;
}
.main_content_body .el-tabs--left .el-tabs__header.is-left {
  margin-right: 0px;
}
.main_content_body .el-tabs__header {
  width: 200px;
  margin-right: 0px;
}
.main_content_body .el-tabs--left .el-tabs__item.is-left {
  text-align: left;
}
.main_content_body .el-tabs--left .el-tabs__item.is-active {
  background: rgba(74, 144, 226, 0.2) !important;
  color: #1e9fff !important;
}
.main_content_body .el-tabs__content {
  height: 100%;
}
.main_content_body .el-tab-pane {
  height: 100%;
}
</style>

