<template>
    <Card>
        <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            我的收藏
        </p> 
        <div v-for="(item, index) in collections" :key='index'>
            <div  @click="goToDetail(item.title, item.content)">{{item.title}}</div>
            <Divider/>
        </div>
    </Card>
</template>

<script>
import * as personalCenterRequest from '@/apis/personalCenter.js';

    export default {
        data(){
            return {
                collections:[]
            }
        },
        methods:{
            goToDetail(title, content){
                   this.$router.push({name:'articleDetailIndex',params:{content: content,title: title}});
            }
        },
        created(){
            personalCenterRequest.getUserCollections(this);
  
        }
    }
</script>

<style lang='less' scoped>

</style>