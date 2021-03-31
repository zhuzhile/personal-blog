const mongoose = require('mongoose');

const schema = mongoose.Schema;

const commentSchema = new schema({
    userName:{
        type:String
    },
    commentContent:{
        type:String
    },
    articleName:{
        type:String
    },
    commentDate:{
        type:Date
    }
}) 

const commentModel = mongoose.model('comments', commentSchema);

module.exports = commentModel;

