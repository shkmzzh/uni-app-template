import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore('user', () => {
  const USERINFO = ref()
  const TOKEN = ref()
  const setUserInfo = (val: any) => {}
  const setToken = (val: string) => {
    TOKEN.value = val
    uni.setStorageSync('token', val)
  }
  const removeToken = () => {
    TOKEN.value = null
  }
  return {
    USERINFO,
    TOKEN,
    setUserInfo,
    setToken,
    removeToken,
  }
})
