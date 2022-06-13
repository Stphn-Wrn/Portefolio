<template>
  <div id="general">
    <div class="left">
      <h2>Les projets</h2>
          <p>Etant sorti de formation en février, je n'ai pas de réel projet terminé à présenter. Ils viendront se greffer sur cette partie au fur et à mesure. Néanmoins, vous pouvez retrouver leurs avancées en cliquant sur leurs noms.</p>

    </div>
    <div id="line"></div>
    <div class="right">
      <ul>
        <li class="items"><a href="https://github.com/Stphn-Wrn/Roboto" target="_blank" rel="noopener noreferrer">Roboto</a></li>
        <li class="items-VGL">VideoGamesList ( 
        <a href="https://github.com/Stphn-Wrn/VideoGamesList-Front" target="_blank" rel="noopener noreferrer">Front</a> -  
        <a href="https://github.com/Stphn-Wrn/VideoGamesList-Back" target="_blank" rel="noopener noreferrer">Back</a>) Work in Progress.
        </li>
        <li class="items"><a href="https://github.com/Stphn-Wrn/Pokedex" target="_blank" rel="noopener noreferrer">Pokédex</a></li>
        <li class="items"><a href="https://github.com/Stphn-Wrn/Portefolio" target="_blank" rel="noopener noreferrer">Portefolio</a></li>
        <li class="items">À venir</li>
        <li class="items">À venir</li>
        <li class="items">À venir</li>
        <li class="items">À venir</li>
      </ul>
    </div>
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
#general {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #15fe18;
  width: 80%;
  height: 521px;
}
:is(.right, .left) {
  width: 40%;
}
h2 {
  margin-bottom:10px;
}
#line {
  height: 40%;
  width: 1px;
  background-color: #15fe18;
}
li{
  margin: 5px;
  padding: 10px;
  color: #15fe18;
  background-color: #033005;
}
.items {
  text-transform: uppercase;
}
.items-VGL{
display:flex;
}
a {
  color: #15fe18;
}

}
</style>
