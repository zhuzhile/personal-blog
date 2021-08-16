import moment from 'moment'

const OWNER_NAME = 'bemount'

let OSS = require("ali-oss");

// 配置OSS参数
export let client = new OSS({
  // region以杭州为例（oss-cn-hangzhou），其他region按实际情况填写。
  region: "oss-cn-beijing",
  // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录RAM控制台创建RAM账号。
  accessKeyId: "<YOUR KEYID>",
  accessKeySecret: "<YOUR Secret>",
  bucket: "bemountimgbed",
});


export const baseUserNameChangeMenuList = (vm) =>{
    if(vm.userName && vm.userName.toLowerCase() === OWNER_NAME){
        vm.$store.commit('updateMenuList');
    }else{
        vm.$store.commit('updateUserMenuList');
    }
}

export const turnUTCToGMT = utcTime =>{

    return moment(utcTime).format('YYYY-MM-DD HH:mm');
}

// 懒人图床拉取配置
export const getLanRenConfig = (vm) => {
    vm.$axios.request({
        url:'http://101.200.187.225:8081/api/',
        method: 'get'
    }).then( res => {
        console.log(res);
    }).catch( error => {
        console.log("error", error);
    })
}
