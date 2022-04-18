<template>
  <div>
    <Info/>
    <General/>
    <Header/>
  </div>
</template>

<script>
import Header from '../components/Footer.vue'
import Info from '../components/Header.vue'
import General from '../components/General.vue'

export default {
  name: 'General-view',
  components: {
    Header,
    Info,
    General
  },
  metaInfo: {
      title: 'General',
      // override the parent template and just use the above title only
      titleTemplate: null
    }

}
</script>

<style>

</style>
