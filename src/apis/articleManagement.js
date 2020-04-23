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
                for(let i = 0;i < index;i++){
                    if(element.tag === res.data.articleInfo[i].tag){
                        vm.tags.pop();
                        break;
                    }
                }
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
                element.createTime = turnUTCToGMT(element.createTime);
                // console.log(" vm.articles", vm.articles);
                vm.articles.push(element);
            })
        }).catch(error => {
            console.log('error', error);
        })        
    }).catch(error =>{
        console.log('error',error);
    })
}


// async function updateArticleActiveInfo(vm ,title){
//     let info = await vm.$axios.request({
//         url:'/article/updateArticleActiveInfo',
//         method:'get',
//         params:{
//             title
//         }
//     })
// } 




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
                element.createTime = turnUTCToGMT(element.createTime);
                vm.articles.push(element);
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

