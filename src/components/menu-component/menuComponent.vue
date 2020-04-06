<template>
    <Menu>
        <template v-for='item in menuList' >
            <MenuItem :key='item' v-if='item.children.length == 1' name='item.name' @on-select="redirectToOtherRouter(item.children[0].name)"> {{item.title}}</MenuItem>
        </template>
    </Menu>
</template>

<script>
// import {mapState} from 'vuex';
import {appRouters} from '@/router/router'

export  default {
   
    data(){
        return {
             menuList:appRouters
        }
    },
    // computed:{
    //     ...mapState['menuList']
    // },
    methods:{
        redirectToOtherRouter(name){
            this.$router.push({name:name});
        }

    }
}
</script>

<style lang = 'less'>
@import './menuComponent.less';
</style>