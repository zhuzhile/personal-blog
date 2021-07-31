<template>

<div class="article-management">
    <!-- 分类: -->
    <div style="margin:10px">
        <Tag size='large' color="orange" @click.native = "updateArticleList()">全部</Tag>
        <span v-for="(item, index) in tags" :key="index + '-label'"   style="margin-left:10px;">
            <Tag :color='item.tagColor' size='large' @click.native= "updateArticleList(item.tagName)" >{{item.tagName}}</Tag>
        </span>
    </div>

    <div v-for="(item, index) in articles" :key="index" >
        <div  class ="article-management-style">
            <div class="article-management-style-title">
                   <span><Icon type="ios-leaf-outline" size="30px" /> {{item.title}} </span> 
            </div>

            <Divider/>

            <div class="article-management-style-description">
                <span>{{item.description}}</span>
            </div>
            <!-- <div> -->
                <span style="margin-left:80%;margin-top:5px;"> 创建于: {{item.createTime}}</span>
            <!-- </div> -->

            <div class="article-management-style-detail">
                <span style="margin-right:10px" >
                    <Icon type="ios-heart-outline"  :class = "{active: isActive[item.title]}" style="margin-right:5px" size="28px" @click = "collectArticle(item.content, item.title, isActive[item.title])"/>收藏
                </span>
                <span>
                    <Icon type="ios-folder-outline" style="margin-right:5px" size="26px"/>
                     <a href="javascript:void(0)" @click="findArticleDetail(item.content,item.title)">查看全文</a> 
                </span>
            </div>

        </div>
    </div>
    <BackTop></BackTop>
    <Page :total = 'length'  v-show = 'isShowPage' :styles= "pageStyle" @on-change = "getArticles" :current = 'current' :page-size='pageSize'></Page>   

</div>
    
</template>

<script>
import * as articleManagementRequest from '@/apis/articleManagement.js';
import Cookie from 'js-cookie';

export default {
    data(){
        return {
           articles:[],
           tags:[],
           isShowPage:true,
           length:0,
           pageSize: 3,
           isActive: {},
           current: 1,
           pageStyle:{
               float:'right',
           }
        }
    },
    created(){
        // console.log("---- created articleManagement");
        articleManagementRequest.getAllArticleInfo(this); 
        articleManagementRequest.getSplitArticleInfo(this);
    },

    // activated(){
    //     articleManagementRequest.getAllArticleInfo(this); 
    //     articleManagementRequest.getSplitArticleInfo(this);
    // },

    methods:{
        findArticleDetail(content, title){
            this.$router.push({name:'articleDetailIndex',params:{content: content,title: title}});
        },

        collectArticle(content, title, isActive){
            if(!Cookie.get('userName')){
                this.$Message.warning('请登录后收藏');
                return;
            }
            // this.isActive = true;
            articleManagementRequest.collectArticle(this, content, title, isActive);
        },

        getArticles(page){
            this.current = page;
            articleManagementRequest.getSplitArticleInfo(this);
        },

        updateArticleList(tag){
            if(tag){
                this.isShowPage = false;
            }else{
                this.isShowPage = true;
            }
            articleManagementRequest.updateArticleList(this, tag);
        }
    }
}
</script>

<style lang="less" scoped>
    @import './articleManagement.less';
</style>