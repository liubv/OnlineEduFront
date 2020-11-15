<template>
    <div class="app-container">
    讲师添加
    <el-form label-width="120px">
      <el-form-item label="讲师名称">
        <el-input v-model="teacher.name"/>
      </el-form-item>
      <el-form-item label="讲师排序">
        <el-input-number v-model="teacher.sort" controls-position="right" :min="0"/>
      </el-form-item>
      <el-form-item label="讲师头衔">
        <el-select v-model="teacher.level" clearable placeholder="请选择">
          <!--
            数据类型一定要和取出的json中的一致，否则没法回填
            因此，这里value使用动态绑定的值，保证其数据类型是number
          -->
          <el-option :value="1" label="高级讲师"/>
          <el-option :value="2" label="首席讲师"/>
        </el-select>
      </el-form-item>
      <el-form-item label="讲师资历">
        <el-input v-model="teacher.career"/>
      </el-form-item>
      <el-form-item label="讲师简介">
        <el-input v-model="teacher.intro" :rows="10" type="textarea"/>
      </el-form-item>

      <!-- 讲师头像：TODO -->

      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="addOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>
    </div>
</template>
<script>
import teacherApi from '@/api/edu/teacher'
export default {
    data() {
        return {
            teacher:{
                name:'',
                sort:0,
                level:1,
                career:'',
                intro:'',
                avater:''
            },
            saveBtnDisabled:false
        }
    },
    created() {//页面渲染之前执行
    //判断路径中是否有id值
    if(this.$route.params && this.$route.params.id){
        //从路径获取id值
        const id = this.$route.params.id
        //调用根据id查询的方法
        this.getInfo(id)
    } 
    },
    methods:{
        //根据id回显数据
        getInfo(id){
            teacherApi.getTeacherInfo(id)
            .then(response =>{
                this.teacher = response.data.teacher
            })
        },
        addOrUpdate(){
            if(!this.teacher.id){
                this.addTeacher()
            } else {
                this.updateTeacher()
            }
        }, 

        //修改
        updateTeacher() {
            teacherApi.updateTeacherInfo(this.teacher)
            .then(response =>{
                //提示信息
                this.$message({
                    type: 'success',
                    message: '修改成功!'
                })
                this.$router.push({path:'/teacher/table'})
            })
        },

        //添加讲师方法
        addTeacher() {
            teacherApi.addTeacher(this.teacher)
            .then(response =>{
                //提示信息
                this.$message({
                    type: 'success',
                    message: '添加成功!'
                })
                //返回list页面 路由跳转：redirect
                this.$router.push({path:'/teacher/table'})
            })
        }
    }
}
</script>
