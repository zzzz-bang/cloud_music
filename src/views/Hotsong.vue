<template>
    <div>
        <div class="hotsong">
            <ul>
                <li v-for="(item,index) in songlist" :key="item.id">
                    <p>{{index}}</p>
                    <div>
                        <h3>{{item.name}}</h3>
                        <p>{{item.ar[0].name}} -- {{item.al.name}}</p>
                    </div>
                    <p><span class="iconfont icon-start"></span></p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            songlist:[]
        }
    },
    mounted() {
        axios.get('/top/list?idx=1').then(res=>{
            console.log(res.data.playlist)
            this.songlist=res.data.playlist.tracks
            console.log(this.songlist.tracks)
        })
    },
}
</script>
<style lang="scss" scoped>
    div{
        margin-top:124px
    }
    .hotsong{
            margin-top: 10px;
            overflow: hidden;
            padding:0 10px;
            width: 100%;
            box-sizing: border-box;
            p{
                font-size: 12px;
                text-align: center;
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
</style>