<template>

<div class="article-management">
    <!-- 分类: -->
    <Tag size='large' color="orange" @click.native = "updateArticleList()">全部</Tag>
    <span v-for="(item, index) in tags" :key="index + '-label'"   style="margin-top:10px;margin-left:5px;">
          <Tag :color='item.tagColor' size='large' @click.native= "updateArticleList(item.tagName)" >{{item.tagName}}</Tag>
    </span>
  
    <div v-for="(item, index) in articles" :key="index" >
        <div  class ="article-management-style">
            <div class="article-management-style-title">
                   <span><Icon type="ios-leaf-outline" size="30px" /> {{item.title}} </span> 
            </div>
            <Divider/>
            <div class="article-management-style-description">
                <span>{{item.description}}</span>
            </div>

            <div class="article-management-style-detail" >
                <span >
                    <Icon type="ios-folder-outline" style="margin-right:5px" size="26px"/>
                     <a href="javascript:void(0)" @click="findArticleDetail(item.content,item.title)">查看全文</a> 
                </span>
            </div>

        </div>
    </div>
    <BackTop></BackTop>
    <Page :total = 'length'  @on-change = "getArticles" :current = 'current' :page-size='pageSize'></Page>   

</div>
    
</template>

<script>
import * as articleManagementRequest from '@/apis/articleManagement.js';

export default {
    data(){
        return {
           articles:[],
           tags:[],
        //    articlesAll:[],
           length:0,
           pageSize: 3,
           current: 1
        }
    },
    created(){
        articleManagementRequest.getAllArticleInfo(this); 
        articleManagementRequest.getSplitArticleInfo(this);
    },
    methods:{
        findArticleDetail(content, title){
            this.$router.push({name:'articleDetailIndex',params:{content: content,title: title}});
            // console.log(content);
        },
        getArticles(page){
            this.current = page;
            articleManagementRequest.getSplitArticleInfo(this);
        },
        updateArticleList(tag){
            // console.log(tag);
            articleManagementRequest.updateArticleList(this, tag);
        }
    }
}
</script>

<style lang="less">
    @import './articleManagement.less';
    // @import 'mavon-editor/dist/css/index.css';
</style>