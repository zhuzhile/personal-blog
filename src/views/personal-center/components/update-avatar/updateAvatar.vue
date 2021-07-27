<template>
    <Card>
         <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            头像修改
        </p>
        <Upload action="http://101.200.187.225/imgs">
            <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
        </Upload>
        <!-- <div>
            AvatarUrl: 
            <Input v-model="avatarUrl">
               <Icon type="ios-camera-outline" slot='prefix'/>
            </Input>
            <span style="color:red;font-size:5px">(为线上图片格式)</span>
        </div>
        <div style="margin-top:50px">
            <Button type="info" @click="submitAvatarUrl">提交</Button>
        </div> -->
    </Card>
</template>

<script>
import {submitAvatarUrl} from '@/apis/personalCenter';
import {mapMutations} from 'vuex'
import Cookie from 'js-cookie'

    export default {
        data(){
            return {
                avatarUrl:''
            }
        },
        methods:{
            ...mapMutations(['initAvatarUrl','initUserName']),
            submitAvatarUrl(){
                if(!this.avatarUrl){
                    this.$Message.warning("头像URL不可为空");
                    return;
                }
                this.initAvatarUrl({url:this.avatarUrl});
                this.initUserName({name: Cookie.get('userName')});
                submitAvatarUrl(this);
            }
        }
    }
</script>

<style lang='less' scoped>

</style>