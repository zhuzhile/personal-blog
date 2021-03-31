const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const commentRouter = require('./routers/comment.js');
const jwt = require('jsonwebtoken');
const articleRouter = require('./routers/publish-article.js');
const mongoose = require('mongoose');
const personalCenterRouter = require('./routers/personal-center.js');
const {loginRouter, SECRET_KEY} = require('./routers/login.js');

mongoose.connect('mongodb://localhost/personal_blog', { useUnifiedTopology: true,useNewUrlParser: true });

app.use(express.json());
app.use(cors());
app.use(function(req, res, next){
    // let userId = '';
    if(req.headers.authorization != "null"){
        req.userId = jwt.verify(req.headers.authorization, SECRET_KEY);

    }
    next()
})

app.use('/article', articleRouter);
app.use('/login', loginRouter);
app.use('/personalCenter', personalCenterRouter);
app.use('/comment', commentRouter);

app.listen('30000',function(){
    console.log("connected successfully");
});