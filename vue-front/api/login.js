import request from '@/utils/request'
export default {
  login(userInfo) {
    return request({
      url: `/eduucenter/member/login`,
      method: 'post',
      data:userInfo
    })
  },
  getLoginUserInfo() {
    return request({
      url: `/eduucenter/member/getMemberInfo`,
      method: 'get',
           // headers: {'token': cookie.get('guli_token')}
    })
  },
}