<template>
    <div>
        <aplayer autoplay
            :music="{
                title: 'secret base~君がくれたもの~',
                artist: 'Silent Siren',
                src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
                pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
            }"
        />
    </div>
</template>
<script>
import Aplayer from 'aplayer'
import Vue from 'vue'
export default {
    components: {
        Aplayer
    }
}
</script>