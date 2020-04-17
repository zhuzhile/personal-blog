<template>
    <div class="editor">
        <div>
            <span style="font-size:26px">
                <!-- <Icon type="md-arrow-round-back"  /> -->
                <Icon type="ios-arrow-dropleft" size='26' style="margin-right:5px;color:rgb(73, 167, 231)" @click="goBack"/>
                返回</span>
        </div>
        <Row class="margin-top-20">
            <Col span = 24>
                 <mavon-editor v-model="content" :toolbarsFlag = 'false'  :ishljs='true' :subfield = 'false' defaultOpen = "preview"></mavon-editor>
            </Col>
        </Row>
    </div>
    
</template>

<script>
export default{
    data(){
        return {
            content:'文章详情'
        }
    },
    methods:{
      goBack(){
          this.$router.go(-1);
      }  
    },
    // computed:{
    //     content(){
    //         return this.$route.params.content;
    //     }
    // },
    created(){
        this.content = this.$route.params.content;
        console.log(this.$route);
    }
}

</script>

<style lang="less">
@import './articleDetail.less';
</style>