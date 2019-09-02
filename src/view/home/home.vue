<template>
  <div class="home">
    <div class="header">
      <headerCmp />
    </div>
    <div class="content">
      <div class="aside">
        <asideCmp />
      </div>
      <div class="mainbox">
        <div class="mainContent">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerCmp from "../header/header"
import asideCmp from "../aside/aside"
export default {
  data() {
    return {

    }
  },
  components: {
    headerCmp,
    asideCmp
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 60px;
    background-color: #fff;
  }
  .content {
    width: calc(100vw);
    height: calc(100vh - 60px);
    display: flex;
    .aside {
      width: 230px;
      height: calc(100vh - 60px);
      background-color: rgba(0, 26, 64, 1);
    }
    .mainbox {
      width: calc(100% - 230px);
      height: calc(100vh - 60px);
      background-color: #f0f2f5;
      padding: 23px 24px 21px 24px;
      box-sizing: border-box;
      .mainContent {
        width: 100%;
        height: 100%;
        background-color: #fff;
        // overflow:
        // overflow-y: scroll;
      }
    }
  }
}
</style>