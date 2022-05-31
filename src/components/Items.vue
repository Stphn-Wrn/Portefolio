<template>
  <div id="items">
<div class="left">
         <p>Vous pouvez retrouver mes projets sur mon <a href="https://github.com/Stphn-Wrn" target="_blank" rel="noopener noreferrer">Github</a>. Ces derniers seront améliorés avec le temps. Vous pouvez retrouver le code des projets en cliquant sur leurs noms.</p>
    </div>
    <div id="line"></div>
    <div class="right">
      <ul>
        <li class="stacks"><a href="https://github.com/Stphn-Wrn/Portefolio" target="_blank" rel="noopener noreferrer">Portefolio</a></li>
        <li class="stacks"><a href="https://github.com/Stphn-Wrn/Roboto" target="_blank" rel="noopener noreferrer">Roboto</a></li>
        <li class="stacks">À venir</li>
        <li class="stacks">À venir</li>
        <li class="stacks">À venir</li>
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
#items {
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
#line {
  height: 40%;
  width: 1px;
  background-color: #15fe18;
}
li:not(.social) {
  margin: 5px;
  padding: 10px;
  color: #15fe18;
  background-color: #033005;
}
.stacks {
  text-transform: uppercase;
}
a {
  color: #15fe18;
}
#social {
  margin-top: 15px;
  display: flex;
  justify-content: space-evenly;
}
.social, p {
  margin: 15px 0;
}

img {
  filter: grayscale(100%) brightness(60%) sepia(100%) hue-rotate(50deg)
    saturate(1000%) contrast(0.8);
  width: 30px;
  height: auto;
}
</style>

