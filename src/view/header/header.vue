<template>
  <div class="main">
    <div class="logo">LOGO</div>
    <div class="userinfo">
      欢迎-中国国际工程咨询有限公司张三
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="personInfo">个人信息</el-dropdown-item>
          <el-dropdown-item command="editPassword">修改密码</el-dropdown-item>
          <el-dropdown-item command="logOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    //点击退出登录
    handleCommand(command) {
      if (command == 'logOut') {
        this.$commonTools.deleteCookie('uid')
        this.$notify.success({
          title: '提示',
          message: '退出登录成功',
          showClose: false,
          offset: 300
        })
        this.$router.push({ path: "/login" })
        console.log("uid", this.$commonTools.getCookie('uid'))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
}
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 58px;
  box-sizing: border-box;
  font-size: 12px;
  color: rgba(0, 0, 0, 1);
  position: relative;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  .logo {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    font-size: 30px;
    color: #fff;
    width: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00275f;
  }
}
</style>
