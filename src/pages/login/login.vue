<template>
    <div class="login">
        <div class="login-form">
            <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm">
                <el-form-item label="" prop="userNo">
                    <el-input v-model="loginForm.userNo" prefix-icon="el-icon-user" />
                </el-form-item>
                <el-form-item label="" prop="password">
                    <el-input v-model="loginForm.password" show-password  prefix-icon="el-icon-lock" />
                </el-form-item>
                <el-form-item label="" prop="authCode">
                    <el-input v-model="loginForm.authCode" prefix-icon="el-icon-warning-outline">
                        <!-- <template slot="append">获取验证码</template> -->
                    
                        <el-button slot="append" class="check-btn">获取验证码</el-button>
                    </el-input>
                </el-form-item>
                 <!-- <slide-verify :l="42"
                        :r="10"
                        :w="310"
                        :h="155"
                        @success="onSuccess"
                        @fail="onFail"
                        @refresh="onRefresh"
                        :slider-text="text"
                    ></slide-verify> -->
                <el-form-item prop="sliderCheck">
                    <sliderCheck :successFun="handleSuccessFun" :errorFun="handleErrorFun"></sliderCheck>
                </el-form-item>
                    
                <el-form-item style="margin-top: -20px;">
                    <el-checkbox v-model="remember" class="remember">记住密码</el-checkbox>
                    <el-link :underline="false" class="phone-login">短信登录</el-link>
                </el-form-item>
                <el-form-item>
                    <el-button class="login-btn" type="primary" plain @click="submitForm('loginForm')">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import sliderCheck from '../../common/sliderCheck'
import { USER } from '../../common/api'
export default {
    components: { sliderCheck },
    data(){
        return{
            loginForm: {
                userNo: '',
                password:'',
                authCode: ''
            },
            rules: {
                userNo: [
                    { required: true, message: '请输入账号', trigger: 'blur' },
                    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                ],
                authCode: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                    { min: 6, max: 6, message: '长度是 6 个字符', trigger: 'blur' }
                ],
            },
            remember: false,
            sliderCheck: true
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if(this.sliderCheck){
                    this.$message.error('请滑动验证码');
                    return;
                }
                if (valid) {
                    this.request.post(USER.LOGIN, this.loginForm).then( res => {
                        console.log(res)
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        handleSuccessFun(){
             this.$message({
                message: '验证成',
                type: 'success'
            });
            this.sliderCheck = false
        },
        handleErrorFun(){
             this.$message.error('验证失败');
        },
        
    },
}
</script>
<style scoped>
.login{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../../assets/login.jpg);
    background-size:cover;
}
.login-form{
    min-width: 200px;
    max-width: 400px;
    width: 50%;
    padding: 50px 30px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.2);
}
/* 以下两种方法均可修改input背景 */
/* .el-input /deep/ .el-input__inner { 
    background: none;
} */

.el-input >>> .el-input__inner {
    background: rgba(179, 178, 178, 0.2);
    color: #ffffff;
}
.login-btn{
    width: 100%;
    background-color: #409effb3;
    color: #fff;
}
.remember{
    float: left;
    color: #fff;
}
.phone-login{
    color: #ffffff;
    float: right;
}
.check-btn{
    width: 150px;
}

</style>