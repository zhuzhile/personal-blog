const express = require('express');
const router = express.Router();
const userModel = require('../mouldes/users.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 4;
const articleModel = require('../mouldes/articles.js');
const salt = bcrypt.genSaltSync(saltRounds);
const SECRET_KEY = 'areyouokayman$';


//登录
router.post('/signIn', async function(req, res){

    let arry = await userModel.find({name:req.body.userName});

    if(arry.length === 0){
        res.send({
            result:false,
            message:"不存在该用户"
        })
    }else{
       if(!bcrypt.compareSync(req.body.password, arry[0].password)){
           res.send({
               result:false,
               message:'密码错误'
           })
       }else{
           res.send({
               result:true,
               jwt:jwt.sign(arry[0].id, SECRET_KEY)
           })
       }
    }


})

// 注册
router.post('/addUser', async function(req, res){
    var user = new userModel();
    user.name = req.body.userName;
    let arry = await userModel.find({name:req.body.userName});
    if(arry.length > 0){
        res.send({code:400,message:'已存在该用户',result:false});
        return;
    }
    user.password = bcrypt.hashSync(req.body.password, salt);
    let userInfo =await user.save();
    res.send({code:200,obj:userInfo,result:true});
})

// 收藏文章
router.post('/collectArticle',async function(req, res){
    console.log('collectArticle', req.body.isActive);
    if(! req.body.isActive){
        let info = await userModel.findOneAndUpdate({name:req.body.userName}, {$push:{collections:{title:req.body.title,content:req.body.content}}});
        
        let updateInfo = await articleModel.update({title:req.body.title},{isActive:true});
        console.log(updateInfo);
        res.send({
            result:true,
            msg:'收藏成功'
        })
    }else{
        let info = await userModel.findOneAndUpdate({name:req.body.userName}, {$pull:{collections:{title:req.body.title,content:req.body.content}}});
        let updateInfo = await articleModel.update({title:req.body.title},{isActive:false});
        res.send({
            result:false,
            msg:'取消收藏'
        })
    }
 
})




//根据jwt获取用户信息
// router.get('/getUserInfo',async function(req, res){
//     console.log(req.header);
// })






module.exports = {loginRouter:router,SECRET_KEY};