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
    getCourseInfo(courseId){
        return request({
            url:`/eduservice/course/getCourseInfo/${courseId}`,
            method: 'get',
        })
    },
    updateCourseInfo(courseInfo){
        return request({
            url:`/eduservice/course/updateCourseInfo`,
            method: 'post',
            data:courseInfo
        })
    },
    getPublishCourseInfo(courseId){
        return request({
            url:`/eduservice/course/getPublishCourseInfo/${courseId}`,
            method: 'get',
        })
    },
    publishCourse(courseId){
        return request({
            url:`/eduservice/course/getPublishCourseInfo/${courseId}`,
            method: 'get',
        })
    },
    getCourseCondition(current,limit,courseQuery){
        return request({
            url:`/eduservice/course/getCourseCondition/${current}/${limit}`,
            method: 'post',
            data:courseQuery
        })
    },
    deleteCourse(courseId){
        return request({
            url:`/eduservice/course/${courseId}`,
            method: 'delete',
        })
    },
}