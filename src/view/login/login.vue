<template>
  <div class="main">
    <div class="loginBox">
      <div class="title">用户登录</div>

      <!-- 输入框 -->
      <div class="inputbox">
        <el-input v-model="password" show-password placeholder="用户密码："></el-input>
      </div>
      <div class="inputbox">
        <el-input v-model="username" placeholder="用户名称："></el-input>
      </div>

      <!-- 忘记密码 -->
      <div class="linkpassworld">忘记密码？</div>

      <!-- 登录按钮 -->
      <div class="sumberbox" @click="submitfun()">
        <button>登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    submitfun() {
      var data = this.querystring.stringify({
        username: this.username,
        password: this.password
      })
      //   设置锁，防止重复提交
      let key = true
      if (key) {
        key = false
        this.$axios({
          method: "post",
          url: '/api/user/login',
          data: data
        })
          .then((response) => {
            // console.log(response.data)
            if (response.data.status === 200) {
              this.$notify.success({
                title: '提示',
                message: '登录成功',
                showClose: false,
                offset: 300
              })
              this.$commonTools.setCookie('uid', response.data.data.uid, 360)
              this.$router.push({ path: "/" })
            } else if (response.data.status === 201) {
              this.$notify.error({
                title: '提示',
                message: '登录失败，请检查用户名和密码',
                showClose: false,
                offset: 200
              })
            }
            // console.log(this.$store.state.isLogin)
            key = true
          })
          .catch((error) => {
            // this.$notify.error({
            //   title: '提示',
            //   message: '登录失败，请检查用户名和密码',
            //   showClose: false,
            //   offset: 200
            // })
            console.log(error)
            key = true
          });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  width: 100vw;
  background: url("./image/login.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  .loginBox {
    width: 440px;
    height: 455px;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 24.07%;
    left: 58.91%;
    .title {
      width: 120px;
      height: 42px;
      font-size: 30px;
      // font-family:PingFangSC;
      font-weight: 600;
      color: rgba(74, 144, 226, 1);
      line-height: 42px;
      position: absolute;
      top: 24px;
      left: 45px;
    }
    .inputbox {
      width: 350px;
      height: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
      // background:rgba(255,255,255,1);
      position: absolute;
      top: 126px;
      left: 45px;
    }
    .inputbox:nth-child(2) {
      top: 216px;
      left: 45px;
    }
    .linkpassworld {
      width: 60px;
      height: 17px;
      font-size: 12px;

      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 17px;
      position: absolute;
      bottom: 156px;
      right: 45px;
    }
    .sumberbox {
      width: 350px;
      height: 42px;
      background: rgba(74, 144, 226, 1);
      border-radius: 4px;
      position: absolute;
      bottom: 80px;
      right: 45px;
      button {
        width: 350px;
        height: 42px;
        background: rgba(74, 144, 226, 1);
        border-radius: 4px;
        border: none;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
// 组件样式修改
</style>
