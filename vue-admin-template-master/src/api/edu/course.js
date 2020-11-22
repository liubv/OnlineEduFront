import request from '@/utils/request'

export default{
    addCourseInfo(courseInfo){
        return request({
            url:`/eduservice/course/addCourese`,
            method: 'Post',
            data:courseInfo
          })
    },
    getListTeacher(){
        return request({
            url:`/eduservice/teacher/findAll`,
            method: 'get',
        })
    },
}