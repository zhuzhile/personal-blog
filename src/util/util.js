import  Cookie from 'js-cookie';
import moment from 'moment'

const OWNER_NAME = 'bemount'

export const baseUserNameChangeMenuList = (vm) =>{
    if(Cookie.get('userName').toLowerCase() === OWNER_NAME){
        vm.$store.commit('updateMenuList');
    }else{
        vm.$store.commit('updateUserMenuList');
    }
}

export const turnUTCToGMT = utcTime =>{
    // let date = new Date(utcTime);
    return moment(utcTime).format('YYYY-MM-DD HH:mm');
}