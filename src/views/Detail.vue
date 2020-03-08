<template>
    <div>
        <Title @back="handleBack" v-title='140'>
            {{playlist.name}}
        </Title>
        <div class="header">
            <!-- <ul> -->
                <img :src="playlist.coverImgUrl" alt="">
                <span>{{playlist.name}}</span>
            <!-- </ul> -->
        </div>
        <div class="direction">
            <div class="title">
                <p>标签：</p>
                <p>
                    <span v-for="(data,index) in playlist.tags" :key="index">
                        {{data}}
                    </span>
                </p>
            </div>
            <div class="tcontent">
                <span>简介:{{playlist.description}}</span>
                <!-- <span></span> -->
            </div>
        </div>
        <div class="playlist">
            <h6>歌曲列表</h6>
            <ul>
                <li v-for="(data,index) in playlist.tracks" :key="data.id">
                    <p>{{index+1}}</p>
                    <div>
                        <h3>{{data.name}}</h3>
                        <p>{{data.ar[0].name}} -- {{data.al.name}}</p>
                    </div>
                    <p><span class="iconfont icon-start"></span></p>
                </li>
            </ul>
            <!-- <van-list>
              <van-cell v-for="(item,index) in playlist.tracks" :key="item.id" :title="index+item.name"/>
            </van-list> -->
        </div>
        <!-- <aplayer autoplay
          :music="{
            title: 'secret base~君がくれたもの~',
            artist: 'Silent Siren',
            src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
            pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
          }"
        /> -->
    </div>
</template>
<script>
import axios from 'axios';
import Vue from 'vue';
import Title from '@/components/Title';
import Aplayer from 'vue-aplayer'
import {mapMutations} from 'vuex';
// import {List,Cell} from 'vant';

// Vue.use(List);
// Vue.use(Cell);


export default {
    data(){
        return{
            playlist:[]
        }
    },
    components:{
        Title,
        Aplayer
    },
    methods: {
        ...mapMutations(['show','hide']),
        handleBack(){
            this.show()
            this.$router.back()
        }
    },
    mounted(){
        this.hide()
        axios.get(`http://musicapi.leanapp.cn/playlist/detail?id=${this.$route.params.playlistId}`).then(res=>{
            console.log(res.data)
            this.playlist=res.data.playlist
            console.log(this.playlist)
        })
    }
}
</script>
<style lang="scss" scoped>
    div{
        .header{
            height:200px;
            background: gray;
            padding:0 15px;
            background-image:'http://p1.music.126.net/Ea68Bc06RFNaki_NyU1SUQ==/109951164735533364.jpg ';
            display: flex;
            justify-content: center;
            align-items: center;
                img{
                    width: 114px;
                }
                span{
                    color: floralwhite;
                    font-size: 16px;
                }
        };
        .direction{
            padding:0 10px;
            overflow: hidden;
            box-sizing: border-box;
            width: 100%;
            .title{
                width: 100%;
                margin:10px 0 15px 0;
                p{
                display: inline-block;
                font-size: 12px;
                height: 22px;
                line-height: 22px;
                color:#666666;
                    span{
                        width:50px;
                        display: inline-block;
                        border:1px solid #333333;
                        // padding:1px 8px;
                        border-radius: 20%;
                        text-align: center;
                        line-height: 20px;
                        margin-right: 5px;
                    }
                }
            }
            .tcontent{
                width: 100%;
                float: left;
                font-size: 12px;
                line-height: 20px;
                height: 40px;
                color:#666666;
                overflow: hidden;
            } 
        }
        .playlist{
            margin-top: 10px;
            overflow: hidden;
            padding:0 10px;
            width: 100%;
            box-sizing: border-box;
            p{
                font-size: 12px;
                text-align: center;
                // line-height:60px;
            }
            ul{
                li{
                    display: flex;
                    align-items: center;
                    height: 60px;
                    width: 100%;
                    p{
                        width: 15%;
                        font-size: 16px;
                        color: #757575;
                        span{
                            font-size: 24px;
                        }
                    }
                    div{
                        width:70%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        h3{
                            font-size: 16px;
                            font-weight: 500;
                            width: 100%;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        p{
                            width: 100%;
                            margin-top: 3px;
                            font-size: 12px;
                            text-align: left;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }

                }
            }
        }
    }
</style>