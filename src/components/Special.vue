<template>
  <div id="special">
    <div class="left">
      <div class="div-item" @click="getStats(0)" >
        <p class="special-term">Strengh</p>
        <p>9</p>
      </div>
      <div class="div-item"  @click="getStats(1)" >
        <p class="special-term">Perception</p>
        <p>7</p>
      </div>
      <div class="div-item" @click="getStats(2)" >
        <p class="special-term">Endurance</p>
        <p>9</p>
      </div>
      <div class="div-item" @click="getStats(3)" >
        <p class="special-term">Charisma</p>
        <p>8</p>
      </div>
      <div class="div-item" @click="getStats(4)">
        <p class="special-term">Intelligence</p>
        <p>6</p>
      </div>
      <div class="div-item" @click="getStats(5)" >
        <p class="special-term">Agility</p>
        <p>5</p>
      </div>
      <div class="div-item" @click="getStats(6)" >
        <p class="special-term">Luck</p>
        <p>10</p>
      </div>
    </div>
    <div id="right">
        <img src="../assets/img/stat-0.gif" alt="Vault boy qui montre ses muscles"/>
        
        <div class="special-item">
          <p>Possède suffisamment de force pour git push mon travail après une grosse journée.</p>
        </div>
      </div>
    </div>

</template>

<script>
import stats from "../service/special"

export default {
  name: "Special-view",
  methods: {
     getStats:(e) => {
        // console.log(e)
        let text =  document.querySelector('.special-item > p');
        let img = document.querySelector('#right > img');

        // Récupération des data. 
        text.innerHTML = stats[e].phrase;
        img.src = stats[e].path;
        img.alt = stats[e].alt;
      
        // mise en cache des photos.
         caches.open('porteFolioImg').then(function(cache) {
           return cache.add(stats[e].path);
         }
       )
    }
  },
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

#special {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #15fe18;
  width: 80%;
  height: 521px;
}
.left{
    width: 20%;
}
#right{
    width: 300px;
}
.special-term { 
    width: 50%;
    margin:10px 0;
    padding:0 10px;  
}
p, .special-item {
    font-size: 20px;
}
.special-item p {
  padding-top:50px;
  margin-bottom:50px;
}
.div-item {
    display: flex;
    align-items: center; 
    cursor:pointer;
}

.div-item:hover {
    color: black;
  background-color: #15fe18;
}
img {
  filter: grayscale(100%) brightness(60%) sepia(100%) hue-rotate(50deg)
  saturate(1000%) contrast(0.8);
  width:250px;
  height:auto; 
}
}
</style>

