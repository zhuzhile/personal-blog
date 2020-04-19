
import Cookie from 'js-cookie';
import {turnUTCToGMT} from '@/util/util'

// 提交评论
export  const submitCommentContent = vm =>{
    if(! Cookie.get('userName')){
        vm.$Notice.warning({
            title:'警告',
            desc:'登录后评论',
            duration: 5
        });
        vm.commentContent = '';
        return;
    }

    let data = {
        articleName: vm.title,
        commentContent:vm.commentContent,
        userName:Cookie.get('userName')
    }

    vm.$axios.request({
        url:'/comment/addComment',
        data,
        method:'post'
    }).then(res => {
        vm.$Message.success(res.data.msg);
        vm.commentContent = '';
        getAllCommentsOfArticle(vm);
    }).catch(error => {
        console.log('error', error);
    })

}

// 获得这篇文章所有的评论
export const getAllCommentsOfArticle = vm =>{
    vm.$axios.request({
        url:'/comment/getAllCommentsOfArticle',
        method:'get',
        params:{
            articleName:vm.title
        }
    }).then(res => {
        vm.commentsList = res.data.commentsList;
    }).catch(error => {
        console.log('error', error);
    })
}

// 获得这个人所有评论
export const getAllCommentsOfUser = vm =>{
    vm.$axios.request({
        url:'/comment/getAllCommentsOfUser',
        method:'get',
        params:{
            userName:Cookie.get('userName').toUpperCase() === 'BEMOUNT' ? '':Cookie.get('userName')
        }
    }).then(res => {
        res.data.commentsList.forEach((item, index) => {
            item.commentDate = turnUTCToGMT(item.commentDate);
        })
        vm.commentsList = res.data.commentsList;
    }).catch(error => {
        console.log('error', error);
    })
}


export const deleteComment = (vm, name) => {
    vm.$axios.request({
        url:'/comment/deleteComments',
        method:'delete',
       data:{
           name
       }
    }).then(res => {
        vm.$Message.success(res.data.msg);
        getAllCommentsOfUser(vm);
    }).catch(error => {
        console.log('error', error);
    })
}
