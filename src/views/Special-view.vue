<template>
  <div>
    <Info/>
    <Special/>
    <Header/>
  </div>
</template>

<script>
import Header from '../components/Footer.vue'
import Info from '../components/Header.vue'
import Special from '../components/Special.vue'
export default {
  name: 'Special-view',
  components: {
    Header,
    Special,
    Info,
  },
  metaInfo: {
      title: 'S.P.E.C.I.A.L',
      // override the parent template and just use the above title only
      titleTemplate: null
    }
}
</script>

<style>

</style>
