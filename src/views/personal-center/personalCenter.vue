<template>
   <Row type='flex' justify="space-around" style = "margin-top: 20px;">
       <Col span='3' offset='1'>
        <Menu @on-select="redirectToOtherRouter">
            <MenuItem name='personalInfo'>
                <Icon type="ios-folder-open-outline" />
                个人资料
            </MenuItem>
            <MenuItem name="updatePassword">
                <Icon type="ios-hammer-outline" />
                修改密码
            </MenuItem>
            <MenuItem name="myCollection">
                <Icon type="md-heart-outline" />
                我的收藏
            </MenuItem>
            <MenuItem name="updateAvatar">
                <Icon type="md-color-filter" />
                修改头像
            </MenuItem>
            <MenuItem name="completeInfo">
                <Icon type="ios-briefcase-outline" />
                 完善信息
            </MenuItem>
        </Menu>
       </Col>
       <Col span="15"  >
            <router-view/>
       </Col>
   </Row>
</template>

<script>

export default {
    data(){
        return {

        }
    },
    methods:{
        redirectToOtherRouter(name){
            this.$router.push({name:name});
        }
    }

}
</script>

<style lang="less" scoped>
@import './personalCenter.less';
</style>

