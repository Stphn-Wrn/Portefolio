<template>
  <div >
    <Info/>
    <Error/>
    <Header/>
  </div>
</template>

<script>
import Header from '../components/Footer.vue'
import Info from '../components/Header.vue'
import Error from '../components/Error.vue'

export default {
  name: 'Error-view',
  components: {
    Header,
    Info,
    Error
  },
  metaInfo: {
      title: '404',
      // override the parent template and just use the above title only
      titleTemplate: null
    }
}
</script>

<style scoped>

</style>
