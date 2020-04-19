<template>
    <div>
        <div style="margin-top:20px">
            <span style="font-size:18px">
                <Icon type="ios-bulb-outline" />
                我的评论
            </span>
        </div>
        <Divider/>
        <div v-if="commentsList.length === 0"  style="height:100%;display:flex;justify-content:center;align-items:center;">
            <span>暂无数据</span>
        </div>
        <div v-else>
            <Collapse  accordion v-for="(item, index) in commentsList" :key='index' >
            <Panel >
                <span>{{item.articleName}}</span>
                <div slot="content" >
                    <span>{{item.commentContent}}</span>
                    <span style="margin-left:85%;margin-top:5px;">{{item.commentDate}}</span>
                </div>
            </Panel>
            <Button type="error" @click="deleteComment(item.articleName)" style="margin-left:92%;margin-bottom:5px;">删除</Button>
        </Collapse>
        </div>
        
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