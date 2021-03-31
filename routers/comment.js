const express = require('express');
const router = express.Router();
const commentModle = require('../mouldes/comments');

// 添加评论
router.post('/addComment',async function(req, res){
    let comment = new commentModle();
    comment.articleName = req.body.articleName;
    comment.commentDate = new Date();
    comment.commentContent = req.body.commentContent;
    comment.userName = req.body.userName;
    let commentInfo = await comment.save();
    res.send({
        result:true,
        msg:'评论成功'
    })
})

// 删除文章评论
router.delete('/deleteComments', async function(req, res){
    // console.log(req.body);
    let info = await commentModle.remove({articleName:req.body.name});
    res.send({
        result: true,
        msg:'删除文章成功'
    })

})

// 获得此篇文章所有评论
router.get('/getAllCommentsOfArticle', async function(req, res){
    // console.log(req.query);

   let commentsList = await commentModle.find({articleName:req.query.articleName});
   console.log(commentsList);
   res.send({
        commentsList: commentsList,
        result:true,
        msg:'查看所有这篇文章评论'
   })
})

// 查询这个用户的所有文章
router.get('/getAllCommentsOfUser', async function(req, res){
    let commentList = [];
    if(req.query.userName === ''){
        commentsList = await commentModle.find();
    }else{
        commentsList = await commentModle.find({userName:req.query.userName});
    }
    res.send({
        commentsList: commentsList,
        result:true,
        msg:'查看所有这个人评论'
    })
})

module.exports = router;

