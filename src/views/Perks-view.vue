<template>
  <div>
    <Info/>
    <Skills/>
    <Header/>
  </div>
</template>

<script>
import Header from '../components/Footer.vue'
import Info from '../components/Header.vue'
import Skills from '../components/Perks.vue'
export default {
  name: 'Skills-view',
  components: {
    Header,
    Info,
    Skills
  },
  metaInfo: {
      title: 'Perks',
      // override the parent template and just use the above title only
      titleTemplate: null
    }
}
</script>

<style>

</style>
