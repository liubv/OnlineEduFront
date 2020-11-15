import request from '@/utils/request'

export default{
    //1. 讲师列表（条件查询，分页）
    getTeacherListPage(current,limit,teacherQuery){
        return request({
            // url: '/table/list'+current+'/'+limit,
            url:`/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
            method: 'post',
            // teacherQuery条件对象 后端使用RequestBody获取数据
            //data表示把对象转换成json进行传递到接口
            data:teacherQuery
          })
    },

    //2. 根据id删除
    deleteTeacherId(id) {
        return request({
            url:`/eduservice/teacher/${id}`,
            method: 'delete'
          })
    },
    //3. 添加讲师
    addTeacher(teacher) {
        return request({
            url:`/eduservice/teacher/addTeacher`,
            method: 'post',
            //data表示把对象转换成json进行传递到接口
            data:teacher
          })
    }
}
