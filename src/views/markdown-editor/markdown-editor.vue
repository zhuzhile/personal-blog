<style lang="less" scoped>
 @import './markdown-editor.less';
</style>


<template>
    <div>
        <Row class="margin-top-20">
            <Col span="24" >
                  <mavon-editor v-model="value"/>
            </Col>
        </Row>
    </div>
</template>

<script>

export default {
    name: 'markdown-editor',
    data(){
        return{
            value:''
        }
    }
};
</script>
