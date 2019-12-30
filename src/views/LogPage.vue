<template>
  <el-container class="log">
    <el-aside width="200px"></el-aside>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
export default {
  name: 'log',
  components: {}
}
</script>

<style lang="less">
.log {
  .el-aside {
    background-color: rgb(211, 211, 211);
  }
  .el-main {
    background-color: rgb(231, 231, 231);
  }
}
</style>
