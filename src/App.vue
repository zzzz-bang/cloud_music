<template>
  <div id="app">
    <div id="nav" v-if="isCreated">
      BANG
    </div>
    <navbar v-if="isCreated"></navbar>
    <router-view/>
  </div>
</template>
<script>
import navbar from '@/components/Navbar'
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['isCreated'])
  },
  components:{
    navbar
  }
}
</script>
<style lang="scss">
    *{
      margin:0;
      padding:0;
    }
    #nav{
      z-index: 5;
      height: 84px;
      line-height: 84px;
      font-size: 24px;
      width: 100%;
      background: #D43C33;
      color:floralwhite;
      text-align:center;
      position: fixed;
      top:0;
      left:0;
    }
    ul,li{
      list-style: none;
    }
</style>