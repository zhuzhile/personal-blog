<template>
    <Card>
         <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            个人资料
        </p>    
        <Form ref='personalInfo' :model='personalInfoForm'>
            <FormItem prop='avatarUrl'>
                <div>
                    个人头像: 
                    <Avatar  size='large' style="margin-left:10px" v-if="personalInfoForm.avatarUrl" :src="personalInfoForm.avatarUrl"></Avatar>
                    <Avatar  size='large' style="margin-left:10px" v-else>{{userName}}</Avatar>
                </div>
                
            </FormItem>

            <FormItem prop='nickName'>
                <p>
                    <span>真实姓名: {{personalInfoForm.realName}}</span>
                </p>
            </FormItem>


            <FormItem prop='nickName'>
                <p>
                    <span>用户名: {{personalInfoForm.nickName}}</span>
                </p>
            </FormItem>

            <FormItem prop='address'>
                  <p>
                    <span>学历: {{personalInfoForm.education}}</span>
                  </p>
            </FormItem>
            
            <FormItem prop="companyName">
                <p>
                    <span>所在公司: {{personalInfoForm.companyName}}</span>
                </p>
            </FormItem>

            <FormItem prop="postName">
                  <p>
                    <span>岗位: {{personalInfoForm.postName}}</span>
                </p>
            </FormItem>
        </Form>
    </Card>
</template>

<script>
import * as personalCenterRequest from '@/apis/personalCenter.js';
import Cookie from 'js-cookie';

    export default {
        data(){
            return {
                personalInfoForm:{
                    nickName:'',
                    avatarUrl:'',
                    education:'',
                    companyName:'',
                    postName:'',
                    realName:''
                }
            }
        },
        created(){
            personalCenterRequest.getCompleteInfo(this);       
        },
        methods:{
           
        },
        computed:{
            userName(){
                return Cookie.get('userName');
            }
        }
    }
</script>

<style lang='less'>

</style>