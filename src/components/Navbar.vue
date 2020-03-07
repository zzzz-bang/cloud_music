<template>
    <div>
        <ul>
            <router-link to="/recommond" tag="li" activeClass="navbar">推荐音乐</router-link>
            <router-link to="/hotsong" tag="li" activeClass="navbar">热歌榜</router-link>
            <router-link to="/search" tag="li" activeClass="navbar">搜索</router-link>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    .navbar{
        color:#DD001B;
        border-bottom: 3px solid #DD001B;
    }
    div{
        background: floralwhite;
        position: fixed;
        width:100%;
        top:84px;
        left:0;
        z-index: 5;
    }
    ul{
        display: flex;
        padding:0;
    }
    li{
        width: 33%;
        text-align: center;
        height:40px;
        line-height: 40px;
        font-size: 16px;

    }
</style>