<template>
  <div class="progressbar">
    <el-progress :percentage="Number(length)"></el-progress>
  </div>
</template>

<script>
export default {
  props: {
    length: String,
  },
  data() {
    return {

    }
  }
}
</script>

<style>
.progressbar .el-progress.el-progress--line {
  width: 200px;
  height: 15px !important;
  line-height: 15px;
}
.progressbar .el-progress-bar,
.el-progress-bar__outer {
  height: 15px !important;
}
</style>
<style scoped>
.progressbar {
  width: 200px;
  height: 20px;
  line-height: 20px;
  color: #fff;
  display: flex;
}
</style>
