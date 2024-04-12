<script setup lang="ts"></script>

<template>
  <view class="viewport">
    <view class="content">
      <view class="btn">接货管理</view>
      <view class="btn">整批出库</view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  padding: 100rpx 25rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  width: 300rpx;
  height: 300rpx;
  border-radius: 30rpx;
  background: #ff7f01;
  color: #fff;
  font-size: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
