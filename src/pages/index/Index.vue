<template>
    <div id="app" class="index">
        <p class="one-px-t">ヾ(^∀^)ﾉ</p>
        <p class="one-px">vueCli3Mobile</p>
    </div>
</template>

<script>
    import {wechatSignature} from '../../utils/weixin'
    export default {
        name: 'app',
        data: function () {
            return {

            }
        },
        methods: {},
        mounted() {

            console.log(wechatSignature().then(r=>{alert('ttt')}).catch(r=>{alert(r)}))
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
        p{
            padding: 6px;
        }
    }
</style>
