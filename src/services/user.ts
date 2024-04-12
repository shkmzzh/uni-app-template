import { http } from '@/utils/http'
type LoginParams = {
  account: string
  pwd: string
}
export type LoginResult = {
  token: string
}
// 登录
export const LoginApi = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/sgwh/login',
    data,
  })
}
// 用户详情

export function getUserInfoApi() {
  return http({
    url: '/sgwh/admin/info',
  })
}

/**
 * 注销API
 */
export function logoutApi() {
  return http({
    url: '/sgwh/admin/logout',
  })
}
