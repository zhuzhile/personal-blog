import {turnUTCToGMT} from "@/util/util";
import Cookie from 'js-cookie';

export const getAllArticleInfo = vm =>{
    vm.$axios.request({
        url:'/article/getAllArticleInfo',
        method:'get'
    }).then(res => {
        let color = ['error','primary','success','yellow','orange'];
        vm.length = res.data.articleInfo.length;
        res.data.articleInfo.forEach((element, index) => {
            // element.isActive = false;
            if(element.tag){
                vm.tags.push({tagName:element.tag,tagColor:color[index%5]});
            }
        });

    }).catch(error => {
        console.log("error", error);
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
          
        })

        vm.$axios.request({
            url:'/personalCenter/getCompleteUserInfo',
            method:'get'
        }).then(res => {
            console.log('----res', res);
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
                    }
                }
            }
            articleInfo.forEach(element => {
                element.createTime = turnUTCToGMT(element.createTime)
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
        // vm.articles.splice(0);
        // console.log(vm.articles);
        vm.articles.splice(0);
        res.data.articleInfo.forEach(element => {
            element.createTime = turnUTCToGMT(element.createTime)
            vm.articles.push(element);
        })
        // console.log(res);
    }).catch( error => {
        console.log('error', error);
    })
}

export const collectArticle = (vm, content, title) => {
    vm.$axios.request({
        url:'/login/collectArticle',
        method:'post',
        data:{
            userName:Cookie.get('userName'),
            content,
            title
        }
    }).then( res => {
        if(res.data.result){
            // getAllArticleInfo(vm);
            getSplitArticleInfo(vm);
            vm.$Message.success(res.data.msg);
        }else{
            // getAllArticleInfo(vm);
            getSplitArticleInfo(vm);
            vm.$Message.success(res.data.msg);
        }

    }).catch(error => {
        console.log('error', error);
    } )
}

