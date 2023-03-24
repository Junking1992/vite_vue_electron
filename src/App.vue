<script setup>
import { ElNotification } from "element-plus";

const onBack = () => {
  ElNotification.success({
    title: "Success",
    message: "This is a success message",
    offset: 60,
  });
};
</script>

<template>
  <div>
    <el-container>
      <el-header style="background-color: #3c3c3c">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
            background-color="#3c3c3c"
            text-color="#ccc"
            active-text-color="#ccc"
            style="margin-right: 117px"
        >
          <el-sub-menu index="1">
            <template #title>Processing Center</template>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <div class="flex-grow" />
          <el-menu-item index="3" disabled>Info</el-menu-item>
          <el-menu-item index="4">Orders</el-menu-item>
        </el-menu>
      </el-header>
      <el-main style="background-color: #ccc">
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.flex-grow {
  /*将后面的元素撑到右边*/
  flex-grow: 1;
  /*使这个元素可以拖动（用于electron）*/
  -webkit-app-region: drag;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
