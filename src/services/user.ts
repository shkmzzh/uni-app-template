import { http } from '@/utils/http'
type LoginParams = {
  account: string
  pwd: string
}
export type LoginResult = {
  token: string
}
export const LoginApi = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/sgwh/login',
    data,
  })
}
