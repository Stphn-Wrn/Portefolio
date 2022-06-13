<template>
  <div id="items">
    <h2>Les projets</h2>
    <p>Etant sorti de formation en février, je n'ai pas de réel projet terminé à présenter. Ils viendront se greffer sur cette partie au fur et à mesure. Néanmoins, vous pouvez retrouver leurs avancées sur mon profil <a href="https://github.com/Stphn-Wrn" target="_blank" rel="noopener noreferrer">Github</a></p>
  </div>

</template>

<script>

export default {
  name: "Items-item",
  methods: {},
}
</script>

<style scoped>

* {
  display: none;
}
@media (min-width: 1200px) { 
  * {
    display:block;
  }
#items {
  height:521px;
  color: #15fe18;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h2 {
  margin-bottom:15px;
  font-size:32px;
}
a{
  color:#15fe18;
}
p {
  font-size:20px;
  width:50%;
  text-align: center;
}
}
</style>

