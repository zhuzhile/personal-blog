import  Cookie from 'js-cookie';

const OWNER_NAME = 'BeMount'

export const baseUserNameChangeMenuList = (vm) =>{
    if(Cookie.get('userName') === OWNER_NAME){
        vm.$store.commit('updateMenuList');
    }
}