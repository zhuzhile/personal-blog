const express = require('express');
const bcrypt = require('bcrypt');
const saltRounds = 4;
const salt = bcrypt.genSaltSync(saltRounds);
const mongoose = require('mongoose');
const userModel = require('../mouldes/users.js');
const router = express.Router();



// 完善用户信息
router.post('/completeUserInfo',async function(req, res){
    // console.log("res.headers", req.userId);
    let user = await userModel.findById(req.userId);
    let userInfo = await userModel.update({name:user.name},
        {'realName':req.body.realName,'postName':req.body.postName,'education':req.body.education,'companyName':req.body.companyName} );
    res.send({
        result:true,
        msg:'更新用户信息成功'
    })
    
})

// 获得完整用户信息
router.get('/getCompleteUserInfo', async function(req, res){
    let user = await userModel.findById(req.userId);
    res.send({
        result: true,
        userInfo: user,
    })

})



// 修改个人头像
router.post('/submitAvatarUrl', async function(req, res){
    let user = await userModel.findById(req.userId);
    let userInfo = await userModel.update({name:user.name},
        {'avatarUrl':req.body.avatarUrl} );
    // console.log("------userInfo", userInfo);
    // if(userInfo.ok)
    res.send({
        result:true,
        msg:'头像更新成功'
    })
})

// 修改密码
router.post('/changePassword', async function(req, res){
    // console.log('---changePassword', req.body);
    let user = await userModel.findById(req.userId);
    if(bcrypt.compareSync(req.body.oldPassword, user.password)){
        let userInfo = await userModel.update({name:user.name},
            {'password':bcrypt.hashSync(req.body.newPassword, salt)} );
            res.send({
                result: true,
                msg: '密码更改成功'
            })
    }else{
        res.send({
            result:false,
            msg:'旧密码不匹配'
        })
    }
})






module.exports =  router;