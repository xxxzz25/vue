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
  /* outline: 1px solid #f00; */
}
* a{
  text-decoration: none;
}
* ul,li{
  list-style: none;
}
@media (max-width: 576px) {
  #app{
    width: 100%;
  }
}
@media (min-width: 768px) {
  *{
    font-size: 12px;
  }
}
@media (min-width: 768px) {
  *{
    font-size: 12px;
  }
}
@media (min-width: 992px) {
  *{
    font-size: 14px;
  }
}
@media (min-width: 1200px) {
  *{
    font-size: 14px;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
