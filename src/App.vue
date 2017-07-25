<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <br><br><br><br><br><br>
    <lazy-img :imgUrl="'https://blog.kakaocorp.com/wp-content/uploads/2015/03/ask-frodo_5-kakao.png'"></lazy-img>
    <br><br><br><br><br><br>
    <lazy-img :imgUrl="'https://t1.daumcdn.net/friends/www/SNS/PC/W_sns_facebook_official.jpg'"></lazy-img>
    <br><br><br><br><br><br>
    <lazy-img :imgUrl="'https://i.ytimg.com/vi/XHT7lcLpIyc/maxresdefault.jpg'"></lazy-img>
    <br><br><br><br><br><br>
    <lazy-img :bgImgUrl="'https://blog.kakaocorp.com/wp-content/uploads/2015/02/Daum-Kakao-Blog-Lunar-New-Year-03.png'"></lazy-img>
    <!-- <div v-lazy:background-image="imgUrl"></div> -->
  </div>
</template>

<script>
import lazyImg from '@/components/ui/lazyImg';

export default {
  name: 'app',
  components: {
    lazyImg
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
