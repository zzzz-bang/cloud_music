<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <slot></slot>
                <div class="swiper-pagination"></div>
            </div> 
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
    props:['reswiper'],
    mounted() {
        new Swiper('.swiper-container',this.reswiper)
    },
}
</script>
<style lang="scss" scoped>
    .swiper-container{
        // height: 165px;
        background:#d43c33;
        text-align: center;
        img{
            width: 90%;
        }
    }
</style>