<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- slot practice -->
    <AppMenu>
      <template v-slot:myslot="slopProps">
        <br>
        <span class="sloter">HELLO, {{ slopProps.user }}</span>
        <!-- slopProps自己随意取名 -->
        <!-- 这里访问到了子组件的user变量 -->
      </template>
    </AppMenu>

    <router-view/>
  </div>
</template>

<script>
import AppMenu from '#/Menu'
export default {
  name: 'App',
  components: { AppMenu }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1px;
}
.sloter {
  font-size: 24px;
  outline: 1px dashed blueviolet;
}
</style>
