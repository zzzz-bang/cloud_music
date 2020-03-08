<template>
    <div id="content">
        <swiper :key='banners.length' :reswiper="{
            loop:true,
            autoplay: {
              delay: 10500000,
              disableOnInteraction: true,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
        }">
            <div class="swiper-slide" v-for="data in banners" :key="data.targetId">
                <img :src="data.picUrl" alt="">
            </div>
            
        </swiper>
        <!-- 推荐歌单 -->
        <div id="songsheet">
            <h4>推荐歌单</h4>
            <ul>
                <li v-for="data in songsheet" :key=data.id @click="handleClick(data)">
                    <img :src="data.picUrl" alt="">
                    <p>{{data.name}}</p>

                </li>
            </ul>
        </div>
    </div>
    
</template>
<script>
import swiper from '@/components/Swiper'
import axios from 'axios'
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return{
            banners:[],
            songsheet:[]
        }
    },
    computed: {
        ...mapState(['isCreated'])
    },
    components:{
        swiper,
    },
    methods: {
        ...mapMutations(['hide','show']),
        handleClick(data){
            this.hide()
            this.$router.push(`/detail/${data.id}`)
        }
    },
    mounted() {
        axios.get('/banner').then(res=>{
            this.banners=res.data.banners
            console.log(this.banners)
        })
        axios.get('/personalized').then(res=>{
            console.log(res.data.result,'歌单')
            this.songsheet=res.data.result
        })
    },
}
</script>
<style lang="scss" scoped>
    #content{
        margin-top:124px;
    }
    #songsheet{
        h4{
            margin:14px 0 14px 0;
            border-left: 3px solid #dd001b;
            padding-left:10px
        }
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding:0 5px 0 5px;
            li{
                width: 100px;
                margin-bottom:10px;
                img{
                    width: 100px;
                }
                p{
                    font-size: 12px;
                }
            }
        }

    }
</style>