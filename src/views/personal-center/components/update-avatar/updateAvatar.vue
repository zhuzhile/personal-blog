<template>
    <Card>
         <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            头像修改
        </p>

    <!-- 使用花瓣网的图床是行不通的 -->
        <!-- <div>
            <Upload action="http://101.200.187.225:8081/api/" multiple   :format="['jpg','jpeg','png']" :before-upload = "getFileContent"
             :on-success = "uploadSuccess" :on-error = "uploadError">
                <Button type="info" icon="ios-cloud-upload-outline" >选择图片</Button>
            </Upload>
            <Button @click = "upload">上传</Button>
        </div> -->

    <!-- 阿里云OSS服务存储 -->
         <div>
            <Upload
                :multiple = "false"
                type="drag"
                :before-upload = "getFileContent"
                action="//jsonplaceholder.typicode.com/posts/">
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>点击或将文件拖拽到这里上传</p>
                </div>
            </Upload>
            <Button type ="primary" @click = "upload" style = "margin-top: 20px;margin-left: 44%">确认上传</Button>
            <Button type ="error" @click = "cancel" style = "margin-top: 20px;margin-left: 20px">取消</Button>
        </div>

    <!-- 在线图片格式 -->
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
// import {getLanRenConfig} from '@/util/util.js'
import {mapMutations} from 'vuex'
import Cookie from 'js-cookie'
import {client} from '@/util/util.js';

    export default {
        data(){
            return {
                avatarUrl:'',
                token: '14ac5499cfdd2bb2859e4476d2e5b1d2bad079bf',
                file: '',
            }
        },
        // created(){
        //     getLanRenConfig(this);
        // },
        methods:{
            ...mapMutations(['initAvatarUrl','initUserName']),
            
            uploadSuccess(response,file){
                console.log(response,file, "图片上传到懒人图床")
            },

            uploadError(error){
                console.log(error, "图片上传失败");  
            },

            upload(){
                if(!this.file){
                    this.$Message.error("请选择图片后上传");
                    return;
                }

                const Name = this.file.name;
                const suffix = Name.substr(Name.indexOf('.'))              // 文件后缀
                const filename = Date.parse(new Date()) + suffix           // 组成新文件名

                client.multipartUpload(filename, this.file).then(res => {   // 上传
                    // console.log('上传成功：',res.res.requestUrls[0].split('?')[0])
                    this.avatarUrl = res.res.requestUrls[0].split('?')[0];
                    this.submitAvatarUrl();
                }).catch(err => {
                    console.log('上传失败：', err)
                })
            },

            cancel(){
                this.file = "";
                this.$Message.info("取消成功");
            },

            getFileContent(file){
                this.file = file;
                return false;
            },

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