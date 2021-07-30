import {turnUTCToGMT} from "@/util/util";
import Cookie from 'js-cookie';
import Vue from 'vue';

export const getAllArticleInfo = vm =>{
    vm.$axios.request({
        url:'/article/getAllArticleInfo',
        method:'get'
    }).then(res => {
        let color = ['error','primary','success','yellow','orange'];
        vm.length = res.data.articleInfo.length;
        vm.tags.splice(0);

        res.data.articleInfo.forEach((element, index) => {
            if(element.tag){
                vm.tags.push({tagName:element.tag,tagColor:color[index%5]});
                // for(let i = 0;i < index; i++){
                //     if(element.tag === res.data.articleInfo[i].tag){
                //         vm.tags.pop();
                //         break;
                //     }
                // }
            }
            
        });

    }).catch(error => {
        console.log("error", error);
    })
}   

export const clearAllActive = vm =>{
    vm.$axios.request({
        url:'/article/clearAllActive',
        method:'get'
    }).then(res => {
        console.log(res.data.msg);

    }).catch(error => {
        console.log('error', error);
    })
}

export const getSplitArticleInfo = vm =>{
    vm.$axios.request({
        url:'/article/getSplitArticleInfo',
        method:'get',
        params:{
            pageSize: vm.pageSize,
            current: vm.current
        }
    }).then(res => {
        vm.articles.splice(0);
        let articleInfo = res.data.articleInfo;

        articleInfo.forEach(element => {
            element.isActive = false;
            Vue.set(vm.isActive, element.title, false);
        })

        vm.$axios.request({
            url:'/personalCenter/getCompleteUserInfo',
            method:'get'
        }).then(res => {

            //如果未登录
            if(!res.data.userInfo){
                articleInfo.forEach(element => {
                    element.createTime = turnUTCToGMT(element.createTime)
                    vm.articles.push(element);
                })
                return;
            }

            //如果已经登录则排查userInfo中收藏的文章
            for(let i = 0, len = res.data.userInfo.collections.length; i < len; i ++){
                for(let j = 0, len_article = articleInfo.length;j < len_article ;j++){
                    if(articleInfo[j].title === res.data.userInfo.collections[i].title){
                        articleInfo[j].isActive = true;
                        break;
                    }
                }
            }

            articleInfo.forEach(element => {
                element.createTime = turnUTCToGMT(element.createTime);
                Vue.set(vm.isActive, element.title, element.isActive);
                vm.articles.push(element);
            })

        }).catch(error => {
            console.log('error', error);
        })        

    }).catch(error =>{
        console.log('error',error);
    })
}


export const updateArticleList = (vm, tag) =>{
    vm.$axios.request({
        url:'/article/updateArticleList',
        method:'get',
        params:{
            tag,
            pageSize: vm.pageSize,
            current: vm.current
        }
    }).then(res => {
        vm.articles.splice(0);
        let articleInfo = res.data.articleInfo;
        
        articleInfo.forEach(element => {
            element.isActive = false;
            Vue.set(vm.isActive, element.title, false);
        })

        vm.$axios.request({
            url:'/personalCenter/getCompleteUserInfo',
            method:'get'
        }).then(res => {
            if(!res.data.userInfo){
                articleInfo.forEach(element => {
                    element.createTime = turnUTCToGMT(element.createTime)
                    vm.articles.push(element);
                })
                return;
            }
            for(let i = 0 ;i < res.data.userInfo.collections.length;i ++){
                for(let j = 0;j < articleInfo.length ;j++){
                    if(articleInfo[j].title === res.data.userInfo.collections[i].title){
                        articleInfo[j].isActive = true;
                        break;
                    }
                }
            }
            articleInfo.forEach(element => {
                element.createTime = turnUTCToGMT(element.createTime);
                vm.articles.push(element);
                Vue.set(vm.isActive, element.title, element.isActive);
            })
        }).catch(error => {
            console.log('error', error);
        })        
    }).catch( error => {
        console.log('error', error);
    })
}

export const collectArticle = (vm, content, title, isActive) => {
    vm.$axios.request({
        url:'/login/collectArticle',
        method:'post',
        data:{
            userName:Cookie.get('userName'),
            content,
            title,
            isActive
        }
    }).then( res => {
        if(res.data.result){
            // vm.isActive[] = true;
            Vue.set(vm.isActive, title, true);
            // getSplitArticleInfo(vm);
            // vm.isActive = true;
            vm.$Message.success(res.data.msg);
        }else{
            // getSplitArticleInfo(vm);
            // vm.isActive = false;
            Vue.set(vm.isActive, title, false);
            vm.$Message.warning(res.data.msg);
        }

    }).catch(error => {
        console.log('error', error);
    } )
}

