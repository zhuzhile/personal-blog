<template>
    <div class="editor">
    
        <Row class="margin-top-20">
            <Col span = 24>
                 <mavon-editor v-model="content" :toolbarsFlag = 'false'  :ishljs='true' :subfield = 'false' defaultOpen = "preview"></mavon-editor>
            </Col>
        </Row>

        <Divider dashed orientation = "center">
                <span @click="goBack"  style="font-size:14px">回到首页</span>
        </Divider>

        <div>
            <span style="font-size:18px">
                <Icon type="md-clipboard"  style="margin-right:5px;color:rgb(73, 167, 231)"/>
                评论
            </span>
            <div style="margin-bottom:10px">
                <Input type="textarea"  v-model="commentContent" :row = '4' :maxlength="200" @on-blur="submitComment" placeholder="请文明用语,不喜勿喷"></Input>
            </div>
            <Collapse v-model="defaultShowContent" style="margin-bottom:10px" v-for = "(comment, index) in commentsList" :key='index'>
                <Panel :name="'index'">
                    {{comment.userName}}
                    <p slot="content">{{comment.commentContent}}</p>
                </Panel>
            </Collapse>
        </div>
    </div>
    
</template>

<script>
import * as commentRequest from '@/apis/commentManagement.js';

export default{
    data(){
        return {
            content:'文章详情',
            title:'',
            commentContent:'',
            commentsList: [],
            defaultShowContent:'0'
        }
    },
    methods:{
        // 返回
      goBack(){
          this.$router.go(-1);
      },
        //提交内容
      submitComment(){
          if(!this.commentContent){
              this.$Message.warning('提交评论不能为空');
              this.commentContent = '';
          }else{
              commentRequest.submitCommentContent(this);
          } 
      }
    },

    created(){
       if( this.$route.params.title ){
           sessionStorage.setItem('content', this.$route.params.content);
           sessionStorage.setItem('title', this.$route.params.title);
        //    this.content = this.$route.params.content;
        //    this.title = this.$route.params.title;
        }
        this.content = sessionStorage.getItem('content');
        this.title = sessionStorage.getItem('title');
    
        commentRequest.getAllCommentsOfArticle(this);
    }
}

</script>

<style lang="less" scoped>
@import './articleDetail.less';
</style>