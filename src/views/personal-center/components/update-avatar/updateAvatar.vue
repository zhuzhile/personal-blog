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
                show-upload-list
                :max-size = "2048"
                :on-format-error = "handleFormatError"
                :format = "['jpg','jpeg','png']"
                :on-exceeded-size = "handleMaxSize"
                action="-">
                <div style="padding: 20px 0">
                    <div>
                        <div v-if="isShow" height>
                            <img :src = "previewSrc" height = "50%" width="50%" alt = "上传图片(注意只支持JPG,PNG格式)"/>
                        </div>
                        <div v-else>
                            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                            <p>点击或将文件拖拽到这里上传</p>
                        </div>
                        
                    </div>
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
                previewSrc:'',
                isShow: false
            }
        },

        // created(){
        //     getLanRenConfig(this);
        // },

        methods:{
            ...mapMutations(['initAvatarUrl','initUserName']),
            
            // uploadSuccess(response,file){
            //     console.log(response,file, "图片上传到懒人图床")
            // },

            // uploadError(error){
            //     console.log(error, "图片上传失败");  
            // },

            handleMaxSize (file) {
                this.$Notice.warning({
                    title: '超出文件大小限制',
                    desc: '文件 ' + file.name + ' 太大，不能超过 5M。'
                });
            },

            handleFormatError (file) {
                this.$Notice.warning({
                    title: '文件格式不正确',
                    desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
                });
            },

            upload(){
                if(!this.file){
                    this.$Notice.error({
                        render: h => {
                        return h('span', {style:{Zindex: "10001", top: "64px"}}, "请先选择上传图片");
                    }
                    });
                    return;
                }

                if(Cookie.get('count_change_avatar') <= 0 
                && Cookie.get('userName').toLowerCase() !== 'bemount'){
                    this.$Notice.error({
                        render: h => {
                        return h('span', {style:{Zindex: "10001", top: "64px"}}, "今日次数已用尽");
                    }
                    });
                    return;
                }

                const Name = this.file.name;
                const suffix = Name.substr(Name.indexOf('.'))              // 文件后缀
                const filename = Date.parse(new Date()) + suffix           // 组成新文件名
                let format = ['.jpg', '.png', '.jpeg'];

                  // 不能大于5MB
                if(this.file.size > 1024 * 1024 * 5){
                    this.handleMaxSize(this.file);
                    return;
                }
                
                // 只能上传固定图片类型
                if(!format.includes(suffix)){
                    this.handleFormatError(this.file);
                    return;
                }


                client.multipartUpload(filename, this.file).then(res => {   // 上传
                    this.avatarUrl = res.res.requestUrls[0].split('?')[0];
                    this.submitAvatarUrl();
                }).catch(err => {
                    console.log('上传失败：', err)
                })
            },

            cancel(){
                this.file = "";
                this.isShow = false;
                this.$Notice.success({
                    render: h => {
                        return h('span', {style:{Zindex: "10001", top: "64px"}}, "取消成功")
                    }
                });
            },

            getFileContent(file){

                this.file = file;
                let that = this;
                let reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = function(){
                    that.$nextTick(function(){
                        that.isShow = true;
                        that.previewSrc = reader.result;
                    })
                }

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