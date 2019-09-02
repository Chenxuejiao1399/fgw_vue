<template>
  <!-- 完善治举 -->
  <div class="impbox">
    <!-- 问卷分类标题 -->
    <div class="question_classify">
      <span class="float_left">{{qn_name}}</span>
      <el-button class="float_right save_button" type="primary" size="mini" @click="saveResult">
        <i class="el-icon-upload el-icon--right"></i>
        保存
      </el-button>
    </div>
    <div class="question_body">
      <!-- 一级标题 -->
      <div class="title">{{questionName}}</div>
      <div class="question_item_body" v-loading="loading">
        <div v-for="(itemList,index) in totalQuestion" :key="index+'b'">
          <!-- 二级标题 -->
          <div class="twotitle">{{itemList.title}}</div>
          <!-- 单项题目 -->
          <div class="questuionitem" v-for="(item,index2) in itemList.childs" :key="index2+'d'">
            <div class="itemtitle">{{item.id}}.{{item.title}}</div>
            <div v-for="(question,index3) in item.childs" :key="index3+'c'">
              <div class="itemchoice">
                <div class="itemchTitle">
                  {{question.title}}
                  <span>*</span>
                </div>
                <div v-for="(optionList,index4) in question.options" :key="index4 +'e'">
                  <div class="itemchcontent" v-if="optionList.type=='radio'">
                    <el-radio
                      v-for="(itemName,index5) in optionList.value"
                      :key="index5+'f'"
                      v-model="optionList.result"
                      :label="itemName"
                      @change="optionChange(optionList.id,optionList.result,optionList.rid)"
                    >{{itemName}}</el-radio>
                  </div>
                  <div class="itemsiinput" v-if="optionList.type=='text'">
                    <el-input
                      v-model="optionList.value"
                      :placeholder="optionList.value ? '':optionList.content"
                      @blur="inputChange(optionList.id,optionList.value,optionList.rid)"
                    ></el-input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_button" v-if="navLength==index">
          <el-button
            class="submit_button"
            type="primary"
            size="mini"
            v-show="!loading"
            @click="submitAll"
          >提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewQuestionModule',
  props: {
    id: String,
    questionName: String,
    qn_name: String,
    navLength: Number,  //左边导航菜单长度
    index: Number,  //当前导航index
    questionnaireId: String  //当前问卷id(大的问卷分类，不是导航菜单小分类)
  },
  data() {
    return {
      loading: true,
      isSubmit: false,
      totalQuestion: null,  //问卷内容
      radioQuestionResult: [],  //存放单选框的值
      InputQuestionResult: [], //存放输入框值
    }
  },
  created() {
    // console.log("问卷id是", this.id)
    // console.log("问卷导航长度", this.navLength)
    // console.log("当前导航index", this.index)
    // console.log("当前问卷id", this.questionnaire)
    this.getDetailContent()
  },
  methods: {
    //获取当前用户问卷填写信息数据(完善治理)
    getDetailContent() {
      var data = this.querystring.stringify({
        uid: this.$commonTools.getCookie('uid'),
        fid: this.id,
      })
      this.$axios({
        method: "post",
        url: '/api/survey/index',
        data: data
      })
        .then((response) => {
          // console.log("获取填写表单信息成功", response.data.data)
          this.totalQuestion = response.data.data
          this.loading = false
        })
        .catch((error) => {
          this.$notify.error({
            title: '提示',
            message: '获取问卷内容失败，请重试',
            showClose: false
          })
          console.log(error)
        })
    },

    //单选按钮change时触发方法获取用户选择的值
    optionChange(questionId, questionResult, questionRid) {
      // console.log(questionId, questionResult, questionRid)
      this.radioQuestionResult.push({
        qid: questionId,
        result: questionResult,
        rid: questionRid
      })
      let data = JSON.stringify(this.radioQuestionResult)
      var formData = new FormData()
      formData.append("uid", this.$commonTools.getCookie('uid'))
      formData.append("data", data)
      this.$axios({
        method: "post",
        url: '/api/survey/result_submit',
        data: formData
      })
        .then((response) => {
          // console.log("提交问卷信息成功", response.data)
          this.radioQuestionResult = []  //提交成功后清空单选问卷数据，防止再次提交
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //输入框失去焦点时获取用户输入的值
    inputChange(questionId, InputValue, questionRid) {
      // console.log(questionId, InputValue, questionRid)
      if (InputValue.length > 0) {
        this.InputQuestionResult.push({
          qid: questionId,
          result: InputValue,
          rid: questionRid
        })
        let data = JSON.stringify(this.InputQuestionResult)
        var formData = new FormData()
        formData.append("uid", this.$commonTools.getCookie('uid'))
        formData.append("data", data)
        this.$axios({
          method: "post",
          url: '/api/survey/result_submit',
          data: formData
        })
          .then((response) => {
            // console.log("提交问卷信息成功", response.data)
            this.InputQuestionResult = []  //提交成功后清空单选问卷数据，防止再次提交
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },

    //点击保存提交用户所填写的问卷
    saveResult() {
      this.$notify.success({
        title: '提示',
        message: '信息保存成功',
        showClose: false,
        offset: 200
      })
    },

    //点击提交按钮验证用户所有问卷填写情况
    submitAll() {
      var formData = new FormData()
      formData.append("uid", this.$commonTools.getCookie('uid'))
      formData.append("qid", this.questionnaireId)
      console.log("uid", this.$commonTools.getCookie('uid'))
      console.log("qid", this.questionnaireId)
      // let data = JSON.stringify(this.InputQuestionResult)
      this.$axios({
        method: "post",
        url: '/api/survey/questionnaire_status',
        data: formData
      })
        .then((response) => {
          if (response.data.data != '100%') {
            this.$notify.error({
              title: '提示',
              message: '问卷未填写完整，提交失败',
              showClose: false,
              offset: 200
            })
          } else {
            this.$notify.success({
              title: '提示',
              message: '问卷提交成功',
              showClose: false,
              offset: 200
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
};
</script>

<style lang="scss" scoped>
.impbox {
  height: 100%;
}
.question_classify {
  height: 64px;
  line-height: 64px;
  font-weight: 400;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  color: #000;
  font-size: 16px;
  padding-left: 40px;
  padding-right: 50px;
}
.float_left {
  float: left;
}
.float_right {
  float: right;
  margin-top: 18px;
}
.question_body {
  padding: 0px 40px;
  height: calc(100% - 64px);
}
.question_body .title {
  width: 100%;
  height: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.question_item_body {
  // height: 670px;
  height: calc(100% - 71px);
  padding-bottom: 50px;
  overflow-y: auto;
  overflow-x: hidden;
}
.question_item_body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.question_item_body::-webkit-scrollbar {
  width: 5px;
  background-color: rgba(0, 0, 0, 0);
}
/*定义滑块 内阴影+圆角*/
.question_item_body::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  background-color: #555;
}

.twotitle {
  margin-top: 20px;
  width: 284px;
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
  padding-left: 20px;
}
.questuionitem {
  width: 960px;
  margin-top: 12px;
  margin-bottom: 25px;
  font-size: 14px;
  .itemtitle {
    padding-left: 20px;
  }
  .itemchoice {
    padding-left: 40px;
    margin-top: 15px;
    font-size: 14px;
    span {
      color: red;
    }
  }
  .itemchcontent {
    display: flex;
    margin: 10px 0px;
    flex-direction: column;
    justify-content: space-around;
    .el-radio {
      margin: 3px 0px;
    }
  }
  .itemsituation {
    padding-left: 44px;
    margin-top: 12px;
    font-size: 14px;
    span {
      color: red;
    }
    .itemsiinput {
      margin-top: 12px;
      width: 820px;
      height: 40px;
    }
  }
}
.twoitemlist {
  margin-top: 36px;
}
.itemsiinput {
  margin-top: 8px !important;
}
.bottom_button {
  text-align: center;
}
.submit_button {
  width: 100px;
  height: 32px;
  background-color: #1e9fff !important;
  border-color: #1e9fff !important;
  margin-bottom: 20px;
}
.save_button {
  background-color: #1e9fff !important;
  border-color: #1e9fff !important;
}
</style>
