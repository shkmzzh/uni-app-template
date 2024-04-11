<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/index'
import { LoginApi } from '@/services/user'
const useStore = useUserStore()

const form = ref({
  account: 'cangku',
  pwd: '123456',
})
function onSubmit() {
  LoginApi(form.value).then((res) => {
    loginSuccess(res.data.token)
  })
}
const loginSuccess = (token: string) => {
  // 保存会员信息
  useStore.setToken(token)
  // 成功提示
  uni.showToast({ icon: 'success', title: '登录成功' })
  setTimeout(() => {
    // 页面跳转
    uni.switchTab({ url: '/pages/index/index' })
    uni.navigateBack()
  }, 500)
}
</script>

<template>
  <view class="viewport">
    <view class="logo">
      <image src="@/static/images/seego.jpg"></image>
    </view>
    <view class="login">
      <input v-model="form.account" class="input" type="text" placeholder="请输入用户名" />
      <input v-model="form.pwd" class="input" type="text" password placeholder="请输入密码" />
      <button @tap="onSubmit" class="button">登录</button>
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

.logo {
  flex: 1;
  text-align: center;
  image {
    width: 308rpx;
    height: 385rpx;
    margin-top: 6vh;
  }
}

.login {
  display: flex;
  flex-direction: column;
  height: 60vh;
  padding: 40rpx 20rpx 20rpx;

  .input {
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    border: 1px solid #ddd;
    padding-left: 30rpx;
    margin-bottom: 20rpx;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    color: #fff;
    background: #ff7f01;
    margin-top: 25rpx;
  }
}
</style>
