<template>
    <div class="search">
        <div class="find">
            <van-search
              v-model="value"
              shape="round"
              placeholder="请输入搜索关键词"
            />
        </div>
        <div class="searchlist">
            <p>热门搜索</p>
            <van-list>
              <van-cell v-for="(item,index) in hotsearch" :key="index" :title="item.first" />
            </van-list>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
import { Search } from 'vant';
import { List,Cell } from 'vant';

Vue.use(List);
Vue.use(Cell);
Vue.use(Search);
export default {
    data() {
        return {
            value:'',
            hotsearch:[]
        }
    },
    mounted() {
        axios.get('/search/hot/detail').then(res=>{
            console.log(res.data.result.hots)
            this.hotsearch=res.data.result.hots
            // https://music.163.com/#/search/m/?s=%E6%9C%89%E7%A7%8D
        })
        axios.get('http://musicapi.leanapp.cn/search/multimatch?keywords=有种').then(res=>{
            console.log(res.data.result)
        })
    },
}
</script>
<style lang="scss" scoped>
    .search{
        margin-top:124px
    }
</style>