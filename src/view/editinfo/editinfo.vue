<template>
  <div class="main">
      <div class="leftnav">
          <div class="userinfo">
              用户信息
          </div>
      </div>
      <div class="rightinfo">
          <div class="title">
              用户信息
          </div>

          <div class="infoitem">
              <div class="ifmtitle">
                  企业名称：
              </div>
              <div class="ifminput">
                  <el-input v-model="name" placeholder="中国国际咨询有限责任公司" size="small"></el-input>
              </div>
          </div>

           <div class="infoitem">
              <div class="ifmtitle">
                  所在省市：
              </div>
              <div class="ifminput">
                    <el-select v-model="province"  size="small" placeholder="请选择">
                        <el-option
                        v-for="item in provinces"
                        :key="item.value"
                        :label="item.label"
                        
                        :value="item.value">
                        </el-option>
                    </el-select>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <el-select v-model="city" size="small" placeholder="请选择">
                        <el-option
                        v-for="item in citys"
                        :key="item.value"
                        
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>



              </div>
          </div>

          <div class="infoitem">
              <div class="ifmtitle">
                  街道地址：
              </div>
              <div class="ifminput">
                  <el-input v-model="name" placeholder="高兴区XXX路" size="small"></el-input>
              </div>
          </div>

                    <div class="infoitem">
              <div class="ifmtitle">
                  企业类型：
              </div>
              <div class="ifmchick">
                  <template>
                <el-radio v-model="radio" label="1">农、林、牧、渔业；采矿业；</el-radio>
                <el-radio v-model="radio" label="1">采矿业；</el-radio>
                <el-radio v-model="radio" label="2">制造业；</el-radio>
                 <el-radio v-model="radio" label="2">电力、燃气及水的生产和供应业；</el-radio>
                   <el-radio v-model="radio" label="2"> 建筑业；</el-radio>
                 <el-radio v-model="radio" label="2">交通运输、仓储和邮政业；</el-radio>
                <el-radio v-model="radio" label="2">信息传输、计算机服务和软件业；</el-radio>
                <el-radio v-model="radio" label="2">批发和零售业；</el-radio>
                <el-radio v-model="radio" label="2">住宿和餐饮业；</el-radio>
                <el-radio v-model="radio" label="2">金融业；房地产业；</el-radio>
                <el-radio v-model="radio" label="2"> 租赁和商务服务业；</el-radio>
                <el-radio v-model="radio" label="2">科学研究、技术服务和地质勘查业；</el-radio>
                <el-radio v-model="radio" label="2">水利、环境和公共设施管理业；</el-radio>
                <el-radio v-model="radio" label="2">居民服务和其他服务业</el-radio>
                </template>
              </div>
          </div>

                    <div class="infoitem">
              <div class="ifmtitle">
                  办公室电话：
              </div>
              <div class="ifminput">
                  <el-input v-model="name" placeholder="0057" class="short" size="small"></el-input> &nbsp;&nbsp;&nbsp;&nbsp;
                   <el-input v-model="name" placeholder="87824567" class="long" size="small"></el-input>
              </div>
          </div>

                    <div class="infoitem">
              <div class="ifmtitle">
                  姓名：
              </div>
              <div class="ifminput">
                  <el-input v-model="name" placeholder="张三" class="minlle" size="small"></el-input>
              </div>
          </div>

                    <div class="infoitem">
              <div class="ifmtitle">
                  部门：
              </div>
              <div class="ifminput">
                  <el-input v-model="name" placeholder="技术部" class="minlle" size="small"></el-input>
              </div>
          </div>

                            <div class="infoitem">
              <div class="ifmtitle">
                  职务：
              </div>
              <div class="ifminput">
                  <el-input v-model="name" placeholder="技术经理" class="minlle" size="small"></el-input>
              </div>
          </div>

                              <div class="infoitem">
              <div class="ifmtitle">
                  手机号：
              </div>
              <div class="ifminput">
                  <el-input v-model="name" placeholder="技术部" class="minlle" size="small"></el-input>
              </div>
          </div>

                              <div class="infoitem">
              <div class="ifmtitle">
                  微信号：
              </div>
              <div class="ifminput">
                  <el-input v-model="name" placeholder="技术部" class="minlle" size="small"></el-input>
              </div>
          </div>

                              <div class="infoitem">
              <div class="ifmtitle">
                  邮箱：
              </div>
              <div class="ifminput">
                  <el-input v-model="name" placeholder="技术部" class="minlle" size="small"></el-input>
              </div>
          </div>

           <el-button type="primary" class="topmargin" size="mini">确认信息</el-button>
          
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        name:"",
        province:"",
        city:"",
         provinces: [{
          value: 'beijin',
          label: '北京'
        }, {
          value: 'shanghai',
          label: '上海'
        }, {
          value: 'shengzhen',
          label: '深圳'
        }, {
          value: 'guiyang',
          label: '贵阳'
        }, {
          value: 'chengdu',
          label: '成都'
        }],
        citys: [{
          value: 'guansanhu',
          label: '观山湖'
        }, {
          value: 'nanming',
          label: '南明'
        }, {
          value: 'huaxi',
          label: '花溪'
        }, {
          value: 'yunyan',
          label: '云岩'
        }, {
          value: 'xiaohe',
          label: '小河'
        }],
        
      }
    
  }
}
</script>

<style lang="scss" scoped>
    .main{
        width: 100%;
        height: 100%;
        display: flex;

        .leftnav{
            width: 200px;
            height: 100%;
            box-sizing: border-box;
            border-right: 1px solid #D8D8D8;
            .userinfo{
                margin-top: 10px;
                width: 200px;
                height: 40px;
                border-right: 2px solid #1E9FFF;
                background-color: #DAE8F9;
                box-sizing: border-box;
                color: #1E9FFF;
                display: flex;
                justify-content: center;
                align-items: center;

            }
        }
        .rightinfo{
            width: calc(100% - 200px);
            height: 100%;
            padding-left: 25px;
            .title{
                width: 100%;
                height: 25px;
                margin-top: 10px;
                box-sizing: border-box;
                
                height:25px;
                font-size:18px;
                font-family:PingFangSC;
                font-weight:600;
                color:rgba(0,0,0,1);
                line-height:25px;
            }
            .infoitem{
                // height: 58px;
                width: 100%;
                margin-top: 10px;
                display: flex;
                flex-direction: column;
                .ifmtitle{
                    width:170px;
                    height:20px;
                    font-size:14px;
                    font-family:PingFangSC;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:20px;
                    margin-bottom: 6px;
                }
                .ifminput{
                    width:300px;
                    height:32px;
                    display: flex;
                   
                    
                }
                .ifmchick{
                    width: 652px;

                }
            }
        }
    }
    .short{
        width: 77px;
    }
    .long{
        width: 123px;
    }
    .minlle{
        width: 205px;
    }
    .topmargin{
        margin-top: 10px;
    }
</style>
<style >
     .el-radio{
        margin-right: 5px;
        font-size: 12px;
        display:inline-block;
        white-space: normal;
    }
    .el-radio__inner{
        border-radius:4px;
        width: 12px;
        height: 12px;
        
    }
    /* .el-select .el-input__inner {

  height: 32px;

}
.el-select__caret .el-input__icon .el-icon-arrow-up{
    display: flex;
    align-items: center;
} */
</style>
