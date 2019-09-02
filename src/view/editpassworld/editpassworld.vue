<template>
  <div class="main">
      <div class="editbox">
          <div class="title">
             <span>修改密码</span>
              
          </div>
          <div class="itembox">
                <div class="itemtitle">原密码:</div>
                <div class="itmeinput">
                    <el-input v-model="passworld" placeholder="请输入原密码"></el-input>
                </div>
          </div>

          <div class="itembox">
                <div class="itemtitle">新密码:</div>
                <div class="itmeinput">
                    <el-input v-model="passworld" placeholder="请输入新密码"></el-input>
                </div>
          </div>

          <div class="itembox">
                <div class="itemtitle">确定密码:</div>
                <div class="itmeinput">
                    <el-input v-model="passworld" placeholder="请再次原密码"></el-input>
                </div>
          </div>
           <div class="itembox">
            <div class="sumberbox">
                <button >登录</button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
    width: 100vw;
    height: 100vh;
    // background-color: #fff;
    background-color: #F0F2F5;
    display: flex;
    justify-content: center;
    .editbox{
        margin-top: 62px;
        width: 428px;
        height: 374px;
        // border: 1px solid #777;
        position: relative;
        .title{
            width:100%;
            height:42px;
            font-size:30px;
            font-family:PingFangSC;
            font-weight:600;
            color:rgba(74,144,226,1);
            line-height:42px;
            display: flex;
            justify-content: center;
        }
        .itembox{
            width: 100%;
            height: 52px;
            // border: 1px solid #777;
            box-sizing: border-box;
            margin-top: 24px;
            display: flex;
            .itemtitle{
                width:80px;
                height:100%;
                display: flex;
                justify-content: center;
                align-items: center;

                font-size:14px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height:20px;
                // margin-right: 12px;
            }
            .itmeinput{
                width:360px;
                height:52px;
                // background:rgba(255,255,255,1);
                display: flex;
                justify-content: center;
                align-items: center;
                // border:1px solid rgba(206,206,206,1);
            }
        }
        .itembox:nth-child(2){
            margin-top: 50px;
        }
        .sumberbox{
                width:350px;
                height:42px;
                background:rgba(74,144,226,1);
                border-radius: 4px;
                position: absolute;
                // bottom: 80px;
                right: 0px;
                button{
                    width:350px;
                    height:42px;
                    background:rgba(74,144,226,1);
                    border-radius: 4px;
                    border: none;
                    color: #fff;
                    cursor: pointer;
                }
            }

    }
}
</style>
