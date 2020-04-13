<style lang="less" scoped>
 @import './markdown-editor.less';
</style>


<template>
    <div>
        <Row class="margin-top-20">
            <Col span="24" >
                  <!-- <p></p> -->
                  <mavon-editor v-model="markdownContent" @save="getHTMLCode"/>
            </Col>
        </Row>
    </div>
</template>

<script>

export default {
    name: 'markdown-editor',
    data(){
        return{
            markdownContent:''
        }
    },
    methods:{
        getHTMLCode(f, s){
            console.log(f, s);
        }
    }
};
</script>
