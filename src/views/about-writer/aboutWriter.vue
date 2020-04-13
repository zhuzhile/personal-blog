<template>
    <div class="aboutWriter">
        <span style="font-size:26px;font-weight:bold;">关于博客</span>
        <Row>
          <Col span="20" offset='2'>
            <Card>
                <p slot="title">博客介绍</p>
                <p style="text-indent: 2em;">博客介绍</p>
            </Card>
         </Col>
        </Row>
        <Row>
          <Col span="20"  offset='2'>
            <Card>
                <p slot="title">个人介绍</p>
                <p style="text-indent: 2em;">个人介绍</p>
            </Card>
         </Col>
        </Row>
        <Row>
          <Col span="20" offset='2'>
            <Card >
                <p slot="title">联系作者</p>
                <p style="text-indent: 2em;">联系作者</p>
            </Card>
         </Col>
        </Row>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>

<style lang="less">
@import './aboutWriter.less';
</style>