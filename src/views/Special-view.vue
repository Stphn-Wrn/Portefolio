<template>
  <div>
    <Info/>
    <Special/>
    <Header/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Info from '../components/Info.vue'
import Special from '../components/Special.vue'
export default {
  name: 'Special-view',
  components: {
    Header,
    Special,
    Info,
  }
}
</script>

<style>

</style>
