<template>
  <div id="special">
    <div class="left">
      <div class="div-item active">
        <p @mouseover="getStats(0)" class="special-term">Strengh</p>
        <p>9</p>
      </div>
      <div class="div-item active">
        <p @mouseover="getStats(1)" class="special-term">Perception</p>
        <p>7</p>
      </div>
      <div class="div-item active">
        <p @mouseover="getStats(2)" class="special-term">Endurance</p>
        <p>5</p>
      </div>
      <div class="div-item active">
        <p @mouseover="getStats(3)" class="special-term">Charisma</p>
        <p>5</p>
      </div>
      <div class="div-item active">
        <p @mouseover="getStats(4)" class="special-term">Intelligence</p>
        <p>6</p>
      </div>
      <div class="div-item active">
        <p @mouseover="getStats(5)" class="special-term">Agility</p>
        <p>2</p>
      </div>
      <div class="div-item active">
        <p @mouseover="getStats(6)" class="special-term">Luck</p>
        <p>8</p>
      </div>
    </div>
    <div id="right">
        <img  src="../assets/img/stat-1.gif" alt=""/>
        <div class="special-item">
          <p>Possède suffisament de forcer pour git push mon travail après une grosse journée</p>
        </div>
      </div>
    </div>

</template>

<script>
import stats from "../service/special"

export default {
  name: "Special-view",
  components: {},
  data() {
    return {};
  },
  methods: {
     getStats:(e) => {

         let text =  document.querySelector('#right > .special-item');
        let img = document.querySelector('#right > img');
         text.innerHTML = require(stats[e].phrase);
         img.src = require(stats[e].gif);

}
    }
  }


</script>

<style scoped>
#special {
  display: flex;
  align-items: center;
  color: #15fe18;
  width:80%;
  margin: 100px auto 100px auto
}
.active:hover{
  color: black;
  background-color: #15fe18;
}
.right {
  display: flex;
  justify-content: center;
  align-items:center;
}
.left{
    width: 20%;
}
#right{
    width: 300px;
    height: 300px;
}

.special-term { 
    width: 50%;
    margin:15px 0;
    padding:0 10px;
}
p, .special-item {
    font-size: 20px;
}
.div-item {
    display: flex;
    align-items: center; 
}
.div-item:last-child{
    align-self: flex-end;
}
img {
  filter: grayscale(100%) brightness(60%) sepia(100%) hue-rotate(50deg)
  saturate(1000%) contrast(0.8); 
}
.hidden{
    display: none;
}
.imgBlock {
    display:block;
}
</style>

