import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore('user', () => {
  const USERINFO = ref()
  const TOKEN = ref()
  const setUserInfo = (val: any) => {
    uni.setStorageSync('user', val)
  }
  const setToken = (val: string) => {
    TOKEN.value = val
    uni.setStorageSync('token', val)
  }

  const loginOut = () => {
    USERINFO.value = undefined
    TOKEN.value = undefined
  }
  return {
    USERINFO,
    TOKEN,
    setUserInfo,
    setToken,
    loginOut,
  }
})
