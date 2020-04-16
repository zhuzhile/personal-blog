<template>
    <div class="markdown-body">
        <div v-html="html"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            html:'<div class="hljs-center"><p><em>something is ok?</em></p></div>'
        }
    }
}
</script>

<style lang="less">
    @import './articleManagement.less';
    // @import 'mavon-editor/dist/css/index.css';
</style>