<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  metaInfo: {
    title: 'Portefolio Stephen WOIRIN',
    htmlAttrs: {
      lang: 'fr-FR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Portefolio de Stephen WOIRIN inspiré du pipboy 3000 de Fallout 3' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  components: {
  }
}
</script>

<style scoped>
#app {
  padding-top:10%;
  height:100vh;
  background-color: black;
  font-family: 'Monofonto', sans-serif;                            
}
</style>
