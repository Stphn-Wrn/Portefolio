<template>
  <div>
    <Info/>
    
    <Vaultboy/>
    
    <Header/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Info from '../components/Info.vue'
import Vaultboy from '../components/Vaultboy.vue'

export default {
  name: 'Home-view',
  components: {
    Header,
    Info,
    Vaultboy
  },
  metaInfo: {
      title: 'Home',
      // override the parent template and just use the above title only
      titleTemplate: null
    }
}
</script>

<style>


</style>
