<template>
  <div class="home">
    <el-container>
      <el-header height="60px">
        <el-row :gutter="20">
          <el-col :span="6">
            <div>
              <span class="logo">王一文的博客系统</span>
            </div>
          </el-col>
          <el-col :span="18">
            <el-menu :default-active="activeIndex" mode="horizontal" router>
              <el-menu-item index="logPage">个人博客</el-menu-item>
              <el-menu-item index="MailPage">个人邮箱</el-menu-item>
              <el-menu-item index="ToolPage">小工具</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data() {
    return {
      activeIndex: 'logPage'
    }
  }
}
</script>

<style lang="less">
.home {
  height: 100%;
  background-color: rgb(207, 207, 207);
  .el-header {
    line-height: 60px;
    background-color: rgb(238, 238, 238);
    text-align: center;
    .logo {
      font-size: 22px;
      font-weight: 700;
      color: rgb(8, 73, 104);
    }
    .el-menu {
      background-color: transparent;
      border-bottom: none;
    }
  }
  .el-main {
    padding: 0;
  }
}
</style>
