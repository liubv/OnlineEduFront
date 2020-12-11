import request from '@/utils/request'
export default {
  getCourseList(page,limit,searchObj) {
    return request({
      url: `/eduservice/coursefront/getTeacherFrontList/${page}/${limit}`,
      method: 'post',
      data:searchObj
    })
  },
  getAllSubject(){
    return request({
        url: `/eduservice/subject/getAllSubject`,
        method: 'get'
      })
  },
  getCourseInfoById(courseId){
    return request({
        url: `/eduservice/coursefront/getFrontCourseInfo/${courseId}`,
        method: 'get'
      })
  },

}