<template>
  <div>
    <img v-lazy="imgUrl" v-if="imgUrl"/>
    <div v-lazy:background-image="bgImgUrl" v-if="bgImgUrl"></div>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console */

export default {
  name: 'lazyImg',
  props: {
    imgUrl: String,
    bgImgUrl: String
  },
  data () {
    console.log('imgUrl====', this.imgUrl);
    console.log('bgImgUrl===', this.bgImgUrl)
    return {
      // imgUrl: this.imgUrl
    }
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
