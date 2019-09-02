<template>
  <div class="statistical">
    <div class="left">
      <div class="lTop">
        <div class="lfillin">
          <fillin :fillinData="fillInTheInformation" />
        </div>
        <div class="standard">
          <standard :fillinData="standardSetting" />
        </div>
      </div>
      <div class="lbottom">
        <lbottom :fillinData="proportionOfParty" />
      </div>
    </div>
    <div class="right">
      <right :fillinData="enterpriseType" />
    </div>
  </div>
</template>

<script>
import lbottom from "./left/bottom/ibottomcmp"
import fillin from "./left/top/fillin"
import standard from "./left/top/standardcmp"
import right from "./right/rightcmp"
export default {
  name: 'statistical', //统计分析
  components: {
    lbottom,
    fillin,
    standard,
    right
  },
  data() {
    return {
      //    标准设立
      standardSetting: {
        id: 'standardSetting',
        data: [
          ['标准设立', '是', '否'],
          ['占比', 123, 77],
        ]
      },

      // 标准设立
      fillInTheInformation: {
        id: 'fillInTheInformation',
        data: [
          ['填报情况', '已提交', '填报中', '未填报'],
          ['占比', 59, 90, 51],
        ]
      },

      //资本方党员占比
      proportionOfParty: {
        title: '资本方党员占比',
        id: 'proportionOfParty',
        color: ['#5B8FF9', '#5AD8A6'],
        data: [
          [
            ["比例", '90%以上', '80%以上', '70%以上', '60%以上', '60%以下'],
            ['国有资方', 324, 836, 314, 486, 491],
          ],
          [
            ["比例", '90%以上', '80%以上', '70%以上', '60%以上', '60%以下'],
            ['非公资方', 304, 476, 294, 116, 641],
          ]
        ]
      },

      //企业类型
      enterpriseType: {
        title: '企业类型',
        id: 'enterpriseType',
        color: ['#5B8FF9'],
        data: [
          [
            ['类型', '农、林、牧、渔业', '电力、燃气及水的生产和供应业', '建筑业', '交通运输、仓储和邮政业', '信息传输、计算机服务和软件业', '批发和零售业', '住宿和餐饮业', '金融业、房地产业', '居民服务和其他服务业', '租赁和商务服务业', '科学研究、技术服务和地质勘查业', '批发水利、环境和公共设施管理业和零售业'],
            ['数值', 24, 36, 14, 16, 41, 34, 8, 15, 13, 16, 22, 24],
          ]
        ]
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.statistical {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  display: flex;
  .left {
    width: 66.38%;
    height: 93.65%;
    margin-right: 0.85%;

    .lTop {
      width: 100%;
      height: 50.66%;
      margin-bottom: 1.55%;
      // background-color: #fff;
      display: flex;
      .lfillin {
        width: 49.7%;
        height: 100%;
        margin-right: 1.28%;
        background-color: #fff;
      }
      .standard {
        width: 49.7%;
        height: 100%;
        // margin-right: 1.28%;
        background-color: #fff;
      }
    }
    .lbottom {
      width: 100%;
      height: 47.77%;
      background-color: #fff;
      // margin-bottom: 0.85%;
    }
  }
  .right {
    width: 32.76%;
    height: 93.65%;
    background-color: #fff;
  }
}
</style>
