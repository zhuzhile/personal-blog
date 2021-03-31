const mongoose = require('mongoose')

const schema = mongoose.Schema;

const userSchema = new schema({
    name:{
        type:String
    },
    password:{
        type:String
    },
    education:{
        type:String
    },
    postName:{
        type:String
    },
    companyName:{
        type:String
    },
    realName:
    {
        type:String
    },
    avatarUrl:{
        type:String
    },
    collections:{
        type: Array
    }

})

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;
