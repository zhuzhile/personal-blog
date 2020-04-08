<template>
    <Card>
        <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            完善个人信息
        </p>    
        <Form ref='completeInfo' :model='completeInfo' :label-width="80" label-position="left" >
        <FormItem prop='realName' label="真实姓名">
            <Input type="text" v-model="completeInfo.realName"/>
        </FormItem>
        <FormItem prop="education" label="学历">
            <Select v-model="completeInfo.education" style="width:200px">
                <Option v-for="item in educationList" :value="item.label" :key="item.label">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <FormItem prop="companyName" label = "公司名称">
            <Input type="text" v-model="completeInfo.companyName"/>
        </FormItem>
        <FormItem prop="postName" label = "岗位">
            <Input type="text" v-model="completeInfo.postName"/>
        </FormItem>
         <FormItem >
            <Button type="primary" @click="handleSubmit('completeInfo')">提交</Button>
        </FormItem>
    </Form>
    </Card>
</template>

<script>
    export default{
        data(){
            return {
                completeInfo:{
                    education:'',
                    companyName:'',
                    postName:'',
                    realName:''
                },
                educationList:[
                    {
                        label:'博士'
                    },
                    {
                        label:'硕士'
                    },
                    {
                        label:'本科',
                    },
                    {
                        label:'专科'
                    },
                    {
                        label:'其他'
                    }
                ]

                
            }
        },
        methods:{
             handleSubmit(name) {
               this.$refs[name].resetFields();
            }
        }
    }
</script>

<style scoped>
@import './completeInfo.less';
</style>