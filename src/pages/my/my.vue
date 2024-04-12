<script setup lang="ts">
import { logoutApi } from '@/services/user'
import { useUserStore } from '@/stores/index'
const useStore = useUserStore()
function changeLoginOut() {
  uni.showModal({
    content: '是否退出登录？',
    confirmColor: '#ff7f01',
    success: (res) => {
      if (res.confirm) {
        // 清理用户信息
        logoutApi().then(() => {
            useStore.loginOut()
            uni.redirectTo({ url: '/pages/login/login' })
        })
        
      }
    },
  })
}
</script>
<template>
  <view class="viewport">
    <button @click="changeLoginOut">退出登录</button>
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
</style>
