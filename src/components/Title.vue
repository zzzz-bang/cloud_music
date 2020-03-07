<template>
    <div class="detailtitle" @click="handleClick">
        <h6>
            <span class="iconfont icon-back"></span>
        </h6>
        <span>
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
    methods:{
        handleClick(){
            this.$emit('back')
        }
    }
}
</script>
<style lang="scss" scoped>
    .detailtitle{
        position: fixed;
        top:0;
        left:0;
        height: 40px;
        background: #D44439;
        color: floralwhite;
        text-align: center;
        line-height: 40px;
        width: 100%;
        z-index:5;
        h6{
            position: absolute;
            left:5px;
            top:0px;
            font-size: 16px
        }
    }
</style>