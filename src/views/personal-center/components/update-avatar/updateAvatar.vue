<template>
    <Card>
         <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            头像修改
        </p>
        <div>
            AvatarUrl: 
            <Input v-model="avatarUrl">
               <Icon type="ios-camera-outline" slot='prefix'/>
            </Input>
            <span style="color:red;font-size:5px">(为线上图片格式)</span>
        </div>
        <div style="margin-top:50px">
            <Button type="info">提交</Button>
        </div>
    </Card>
</template>

<script>
    export default {
        data(){
            return {
                avatarUrl:''
            }
        },
        methods:{

        }
    }
</script>

<style lang='less'>

</style>