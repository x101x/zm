<template>
  <div id="app">
    <Parent></Parent>
    <HoverZoom
    bigSrc="https://img.alicdn.com/imgextra/i3/1714128138/O1CN01K14VAw29zFjiFDawl_!!1714128138.jpg"
    smallSrc="https://img.alicdn.com/imgextra/i3/1714128138/O1CN01K14VAw29zFjiFDawl_!!1714128138.jpg_430x430q90.jpg"/>
    
  </div>
</template>

<script>
import HoverZoom from './components/HoverZoom'

import HelloWorld from './components/HelloWorld'
import Parent from './components/Parent'
export default {
  name: 'App',
  components: {
    HelloWorld,
    HoverZoom,Parent
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
*{
  margin: 0;
  padding: 0;
}
</style>
