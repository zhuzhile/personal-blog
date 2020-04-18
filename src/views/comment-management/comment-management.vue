<template>
    <div>
        <p>我的评论</p>
        <Collapse  accordion v-for="(item, index) in commentsList" :key='index'>
            <Panel >
                <span>{{item.articleName}}</span>
                <p slot="content">{{item.commentContent}}</p>
            </Panel>
            <Button type="error" @click="deleteComment(item.articleName)">删除</Button>
        </Collapse>
    </div>
</template>

<script>
import * as  commentRequest from '@/apis/commentManagement.js'

export default {
    data(){
        return {
            commentsList :[],
            defaultOpenShow:'1'
        }
    },
    methods:{
        deleteComment(name){
            commentRequest.deleteComment(this, name);
        }
    },
    created(){
        commentRequest.getAllCommentsOfUser(this);       
    }
    
}
</script>

<style lang="less">
@import './comment-management.less';
</style>