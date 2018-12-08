<template>
    <div id="app" class="index">
        <p>ヾ(^∀^)ﾉ</p>
        <p>vueCli3Mobile</p>
    </div>
</template>

<script>
    import { Dialog } from 'vant';
    export default {
        name: 'app',
        data: function () {
            return {

            }
        },
        methods: {},
        mounted() {
            Dialog.confirm({
                title: '标题',
                message: '一个开箱即用的移动端vue多页面脚手架。规划了目录，添加了常用组件和库。'
            }).then(() => {
                // on confirm
            }).catch(() => {
                // on cancel
            });
        },
        beforeDestroy: function () {

        },
        components: {}
    }
</script>
<style lang="scss" scoped>
    .index{
        background: #607D8B;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #fff;
        font-size: 16px;
    }
</style>
