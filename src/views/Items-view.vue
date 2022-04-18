<template>
  <div>
    <Info/>
    
    <Items/>
    
    <Header/>
  </div>
</template>

<script>
import Header from '../components/Footer.vue'
import Info from '../components/Header.vue'
import Items from '../components/Items.vue'

export default {
  name: 'Items-view',
  components: {
    Header,
    Info,
    Items
  },
  metaInfo: {
      title: 'Items',
      // override the parent template and just use the above title only
      titleTemplate: null
    }
}
</script>

<style>


</style>
