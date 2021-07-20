<template>
    <div class="editor">
        <div>
            <span style="font-size:26px">
                <Icon type="ios-arrow-dropleft" size='26' style="margin-right:5px;color:rgb(73, 167, 231)" @click="goBack"/>
                返回</span>
        </div>
        <Row class="margin-top-20">
            <Col span = 24>
                 <mavon-editor v-model="content" :toolbarsFlag = 'false'  :ishljs='true' :subfield = 'false' defaultOpen = "preview"></mavon-editor>
            </Col>
        </Row>
        <div>
            <span style="font-size:26px">
                <Icon type="md-clipboard"  style="margin-right:5px;color:rgb(73, 167, 231)"/>
                评论</span>
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
           localStorage.setItem('content', this.$route.params.content);
           localStorage.setItem('title', this.$route.params.title);
        }
        this.content = localStorage.getItem('content');
        this.title = localStorage.getItem('title');
    
        commentRequest.getAllCommentsOfArticle(this);
    },

    destroyed(){
        localStorage.removeItem('content');
        localStorage.removeItem('title');
    }
}

</script>

<style lang="less" scoped>
@import './articleDetail.less';
</style>