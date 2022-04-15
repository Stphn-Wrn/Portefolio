<template>
  <div id="special">
    <div id="left">
      <div id="div-container">
      <div class="div-item active" @click="getSkill(0)" >
        <p class="special-term">Farfouilleur</p>
      </div>
      <div class="div-item active" @click="getSkill(1)" >
        <p class="special-term">Ami des bêtes</p>
      </div>
      <div class="div-item active" @click="getSkill(2)" >
        <p class="special-term">Esprit Vif</p>
      </div>
      <div class="div-item active" @click="getSkill(3)" >
        <p class="special-term">Expert en informatique</p>
      </div>
      <div class="div-item active" @click="getSkill(4)" >
        <p class="special-term">Expert en survie</p>
      </div>
      </div>
    </div>
    <div id="right">
        <img src="../assets/img/skill-0.png" alt="Vault boy qui montre ses muscles"/>
        
        <div class="special-item">
          <p>Je suis tellement déterminé que je peux passer plusieurs heures à faire des recherches pour pouvoir trouver une solution à mon problème.</p>
        </div>
      </div>
    </div>

</template>

<script>
import perks from "../service/perks"
export default {
  name: "Perks-view",
  methods: {
    getSkill:(e) => {
        // console.log(e)
        let text =  document.querySelector('.special-item > p');
        let img = document.querySelector('#right > img');

        // Récupération des data. 
        text.innerHTML = perks[e].phrase;
        img.src = perks[e].path;
        img.alt = perks[e].alt;
      
        // mise en cache des photos.
         caches.open('porteFolioImg').then(function(cache) {
           return cache.add(perks[e].path);
         }
       )
  },
}
}
</script>

<style scoped>
#special {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #15fe18;
  width:80%;
  padding-bottom: 50px;
}
#left{
    width: 50%;
}
#div-container {
  width:50%;
}
#right{
    width: 50%;
    display: flex;
    flex-direction: column;
}
.special-term { 
    width: 80%;
    margin:10px 0;
    padding:0 10px;
}
p, .special-item {
    font-size: 20px;
}
.special-item {
  border:1px solid #15fe18;
  border-left-width: 0;
  border-bottom: 0;
  position: relative;
}
.special-item p {
  margin:15px 15px;
  height:150px;
}

.div-item:active {
    color: black;
  background-color: #15fe18;
}
img {
  filter: grayscale(100%) brightness(60%) sepia(100%) hue-rotate(50deg)
  saturate(1000%) contrast(0.8);
  width:250px;
  height:250px; 
  margin-bottom: 40px;
}

</style>

