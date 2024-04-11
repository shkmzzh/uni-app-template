<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/index'
const useStore = useUserStore()

const form = ref({
  account: '',
  password: '',
})
function onSubmit() {}
</script>

<template>
  <view class="viewport">
    <view class="logo">
      <image src="@/static/images/seego.jpg"></image>
    </view>
    <view class="login">
      <input v-model="form.account" class="input" type="text" placeholder="请输入用户名/手机号码" />
      <!-- <input v-model="form.password" class="input" type="text" password placeholder="请输入密码" /> -->
      <input class="uni-input" password type="text" placeholder="这是一个密码输入框" />
      <button @tap="onSubmit" class="button phone">登录</button>
    </view>
  </view>
</template>

<style scoped lang="scss">
page {
  height: 100%;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20rpx 40rpx;
}
.form {
  margin-top: 100rpx;
  .input {
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-bottom: 1px solid $uni-border-color;
    padding-left: 30rpx;
    margin-bottom: 20rpx;
  }

  .button {
    margin: 60rpx 0;
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    background-color: $uni-color-primary;
    color: $uni-text-color-inverse;
    letter-spacing: 6rpx;
    line-height: 80rpx;
  }
  .newuesr {
    color: $uni-text-color;
    text-align: center;
    .icon-right {
      font-weight: 700;
    }
  }
}
</style>
