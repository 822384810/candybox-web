<template >
  <div >
    <el-container class="layout-container-demo" >

        <el-container>
        <el-aside width="240px" >
        <div style=" width:100%;height:70px;background-color:#545c64;" >
        <span style="margin-left: 30px;margin-top: 20px;text-align:left;font-size: 36px;color: aliceblue;">糖果盒
        </span></div>
        <el-scrollbar>
            <el-menu :default-openeds="['3']" :router="true" active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose">
            
            <el-sub-menu index="3">
              
                <template #title>
                <el-icon><User /></el-icon>用户中心
                </template>
                <el-menu-item index="/user/user" >用户管理</el-menu-item>
                <el-menu-item index="/user/role">角色管理</el-menu-item>
                <el-menu-item index="/user/res">资源管理</el-menu-item>
            </el-sub-menu>
            </el-menu>
        </el-scrollbar>
        </el-aside>
        <el-container>
        <el-main>
        <el-header style="background-color:#f4f4f5;">
          <el-row >
            <el-col :span="12"><div style="text-align: left;  margin-left: 30px;margin-top: 12px; font-size: 12px;width:30%"><span ></span></div></el-col>
            <el-col :span="12">
            <div style="text-align: right; margin-top: 12px; font-size: 12px">
            <el-dropdown>
                <el-icon 
                ><setting
                /></el-icon>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item><el-link href="/">退出系统</el-link></el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>
            <span>admin</span>
            </div></el-col>
          </el-row>
        </el-header>   
        <el-scrollbar>
            <router-view></router-view>
        </el-scrollbar>
        <el-footer style="text-align: center; font-size: 12px">Footerd</el-footer>
        </el-main>
        
        </el-container>
        </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'


const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 30 }).fill(item))
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  /* background-color: #545c64; */
  /* text-color: #fff; */
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
  height: 100vh;
}
.layout-container-demo .el-menu {
  border-right: none;
  height: 100vh;
}
.layout-container-demo .el-main {
  padding: 0;
  height: 95vh;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
