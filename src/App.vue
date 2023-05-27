<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SliderComponent/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SliderComponent from './components/SliderComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SliderComponent
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import './assets/style/style.less';
</style>
