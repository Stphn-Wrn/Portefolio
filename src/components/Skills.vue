<template>
  <div class="skills">
    <div class="left">
        
    </div>
    <div class="right">
    
    </div>
   
  </div>
</template>

<script>
export default {
  name: "Skills-view",
  components: {},
};
</script>

<style scoped>
.skills {
    display: flex;
    justify-content: center;
    align-items: center;
    color:#15fe18;
    width:80%;
    margin:100px;
}
:is(.right, .left){
    color: #15fe18;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
}
span{
    margin: 15px 0;
}
</style>
<template>
  <div id="special">
    <div id="left">
      <div id="div-container">
      <div class="div-item active" @click="getStats(0)" >
        <p class="special-term">Strengh</p>
        <p>9</p>
      </div>
      
      </div>
    </div>
    <div id="right">
        <img src="../assets/img/stat-0.gif" alt="Vault boy qui montre ses muscles"/>
        
        <div class="special-item">
          <p>Possède suffisament de forcer pour git push mon travail après une grosse journée</p>
        </div>
      </div>
    </div>

</template>

<script>

export default {
  name: "Special-view",
  methods: {
    
  },
}

</script>

<style scoped>
#special {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #15fe18;
  width:80%;
  margin: 100px auto 100px auto
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
    width: 50%;
    margin:15px 0;
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
  margin:15px 10px;
}

.div-item {
    display: flex;
    align-items: center; 
}
.div-item:active {
    color: black;
  background-color: #15fe18;
}
img {
  filter: grayscale(100%) brightness(60%) sepia(100%) hue-rotate(50deg)
  saturate(1000%) contrast(0.8);
  width:250px;
  height:auto; 
}

</style>

