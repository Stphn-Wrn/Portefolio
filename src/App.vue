<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

body{
  height:40%;
  width:80%;
  margin:0 auto;
  background-color: black;
}

#app {
  padding-top:10%;
  height:100vh;
  background-color: black;
  font-family: 'Monofonto', sans-serif;                            
}
</style>
