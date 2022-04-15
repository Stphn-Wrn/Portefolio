<template>
  <div>
    <Info/>
    
    <Items/>
    
    <Header/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Info from '../components/Info.vue'
import Items from '../components/Items.vue'

export default {
  name: 'Items-view',
  components: {
    Header,
    Info,
    Items
    
  }
}
</script>

<style>


</style>
