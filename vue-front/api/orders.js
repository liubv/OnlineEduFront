import request from '@/utils/request'
export default {
  createOrder(courseId) {
    return request({
      url: `/eduorder/order/createOrder/${courseId}`,
      method: 'post'
    })
  },
  //根据id查询订单信息
  getOrderInfo(orderId) {
    return request({
      url: `/eduorder/order/getOrderInfo/${orderId}`,
      method: 'get'
    })
  },
  //生成二维码到方法
  createNative(orderNo) {
    return request({
      url: `/eduorder/paylog/getNative/${orderNo}`,
      method: 'get'
    })
  },
  //查询订单状态
  queryPayStatus(orderNo) {
    return request({
      url: `/eduorder/paylog/queryPayStatus/${orderNo}`,
      method: 'get'
    })
  }
}