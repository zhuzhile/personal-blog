<template>
    <Menu @on-select="redirectToOtherRouter">
        <template v-for='item in menuList' >
            <MenuItem :key='item.name' v-if='item.children.length == 1' :name='item.children[0].name' > 
                <Icon :type="item.icon" size='16'/>
                {{item.title}}</MenuItem>
        </template>
    </Menu>
</template>

<script>

export  default {
    props:['menuList'],
    data(){
        return {
        }
    },
    computed:{
        // menuList(){
        //     return this.$store.state.menuList;
        // }
    },
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