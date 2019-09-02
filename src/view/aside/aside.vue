<template>
  <div class="main">
    <el-menu
      default-active="newquestionhome"
      class="el-menu-vertical-demo"
      router
      background-color="#001A40"
      active-text-color="#B3BAC6"
    >
      <el-menu-item index="newquestionhome">
        <i class="iconfont">&#xe7b9;</i>
        <span slot="title">当前问卷</span>
      </el-menu-item>
      <el-menu-item index="historyquestionnaire">
        <i class="iconfont">&#xe7b4;</i>
        <span slot="title">历史问卷</span>
      </el-menu-item>
      <el-menu-item index="statistical">
        <i class="iconfont">&#xe78e;</i>
        <span slot="title">统计分析</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style>
.el-menu-vertical-demo .el-menu-item {
  color: #999;
}
</style>
<style lang="scss" scoped>
@import url("../../assets/fontcss/fontcss.css");
.main {
  width: 100%;
  height: 100%;
}
</style>
<style >
.el-menu {
  border: none;
}
.is-active {
  background-color: #4a90e2 !important;
  color: rgba(255, 255, 255, 1) !important;
}
.el-menu-item {
  color: rgba(255, 255, 255, 0.7);
}
</style>
