<template>
  <div>
    <Info/>
    <Skills/>
    <Header/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Info from '../components/Info.vue'
import Skills from '../components/Perks.vue'
export default {
  name: 'Skills-view',
  components: {
    Header,
    Info,
    Skills
  }
}
</script>

<style>

</style>
