<template>
  <div id="app">
    <Head/>
    <Banner/>
    <Content/>
    <Foot/>
  </div>
</template>

<script>
import Head from './components/Head'
import Banner from './components/Banner'
import Content from './components/Content'
import Foot from './components/Foot'

export default {
  name: 'App',
  components: {
    Head,
    Banner,
    Content,
    Foot,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
}
* a{
  text-decoration: none;
}
* ul,li{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
