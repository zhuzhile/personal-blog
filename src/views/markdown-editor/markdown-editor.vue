<style lang="less" scoped>
 @import './markdown-editor.less';
</style>


<template>
    <div class="editor">
        <Row class="margin-top-20">
            <Col span="4" offset='10' style="text-align:center">
                <span style="font-size:16px;font-weight:bold"><Icon @click="submitContent" type="ios-cloud-upload-outline" size='24' style="margin-right:20px"/>发布文章</span>
            </Col>
            <Col span="24" > 
                  <mavon-editor v-model = "markdownContent" @save = "getHTMLCode" :ishljs="true"  :toolbarsFlag= "false"  :subfield=" false" :defaultOpen= "'preview'"/>
            </Col>
            <Col style="margin-top:20px" span="24">
                <Form ref="articleForm" :model="articleForm"  :label-width='100' :rules="articleRules" >
                    <FormItem label = "文章标题" prop="articleTitle">
                        <Input v-model="articleForm.articleTitle" style="width:200px"></Input>
                    </FormItem>
                    <FormItem label = "文章介绍" prop="articleDescription">
                        <Input  v-model= "articleForm.articleDescription" maxlength="200" show-word-limit type="textarea" placeholder="Enter something..." style="width: 300px"></Input>
                    </FormItem>
                </Form>
            </Col>
        </Row>
    </div>
</template>

<script>

export default {
    name: 'markdown-editor',
    data(){
        return{
            markdownContent:'## hello',
            articleForm:{
                articleTitle:'',
                articleDescription:''
            },
            articleRules:{
                articleTitle:[
                    { required: true, message: '请填写文章标题', trigger: 'blur' }
                ],
                articleDescription:[
                    { required: true, message: '请填写文章描述', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        getHTMLCode(f, s){
            console.log(f, s);
        },
        submitContent(){
            console.log('hello, submit content');
        }
    }
};
</script>
