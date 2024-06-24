import request from '@/api/index'

// 定义接口的传参
interface UserInfoParam {
  userID: string,
  userName: string
}

// 获取用户信息
export function getUserInfo(param: UserInfoParam) {
  return request({
    url: 'get_user_info',
    method: 'post',
    data: param,
  })
}