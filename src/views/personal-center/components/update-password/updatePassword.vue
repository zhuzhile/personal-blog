<template>
        <Card>
            <p slot="title">
            <Icon type="ios-film-outline"></Icon>
             更改密码
            </p>    
            <Form ref="updatePasswordInfo" :model="updatePasswordInfo" :label-width='80' label-position='left' :rules="rules">
                <FormItem label='原密码' prop="oldPassword" >
                    <Input type='password' password v-model="updatePasswordInfo.oldPassword">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem label="新密码" prop='newPassword'>
                    <Input type='password' password v-model="updatePasswordInfo.newPassword">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem label="确认密码" prop="reNewPassword">
                    <Input type='password' password v-model="updatePasswordInfo.reNewPassword">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('updatePasswordInfo')">更改</Button>
                </FormItem>
            </Form>
        </Card>
</template>

<script>
    export default {
        data(){
            return {
                updatePasswordInfo:{
                    oldPassword:'',
                    newPassword:'',
                    reNewPassword:''
                },
                rules:{
                     newPassword: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ],
                    reNewPassword:[
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ],
                    oldPassword: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            handleSubmit(name){
                 this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
                this.$refs[name].resetFields();
            }
        }
    }
</script>

<style lang='less'>
@import './updatePassword.less';
</style>