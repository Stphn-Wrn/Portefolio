<template>
    <div id="special">
    <div class="left">
        <p id="s" @click="activeHoverForS = true" v-bind:class="{ active: isActive }">Strengh</p>
        <p id="p" @click="activeHoverForP = true" v-bind:class="{ active: isActive }">Perception</p>
        <p id="e" @click="activeHoverForE = true" v-bind:class="{ active: isActive }">Endurance</p>
        <p id="c" @click="activeHoverForC = true" v-bind:class="{ active: isActive }">Charisma</p>
        <p id="i" @click="activeHoverForI = true" v-bind:class="{ active: isActive }">Intelligence</p>
        <p id="a" @click="activeHoverForA = true" v-bind:class="{ active: isActive }">Agility</p>
        <p id="l" @click="activeHoverForL = true" v-bind:class="{ active: isActive }">Luck</p>
    </div>
    <div id="right">
    <div class="container">
    <img src="../assets/img/strength.gif" alt="">
    
    <div class="">
        <p v-if="activeHoverForS"> Michel </p>
        <p v-if="activeHoverForP"> Nouille </p>
        <p v-if="activeHoverForE"> Tartuffe</p>
        <p v-if="activeHoverForC"> Yves </p>
        <p v-if="activeHoverForI"> Antoine </p>
        <p v-if="activeHoverForA"> marcus </p>
        <p v-if="activeHoverForL"> This will be showed on hover </p>
        <p v-if ="!activeHoverForS"> Michel </p>
    </div>
    </div>
    </div>
    </div>
</template>

<script>

export default {
  name: 'Special-view',
  components: {

  },
  data(){
      return{
        isActive: false,
        activeHoverForS : false,
        activeHoverForP : false,
        activeHoverForE : false,
        activeHoverForC : false,
        activeHoverForI : false,
        activeHoverForA : false,
        activeHoverForL : false,
    }
}
}

</script>

<style scoped>
#special {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:#15fe18;
    margin:40px 40px;
}
:is(.right,.left){
    color: #15fe18;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
}
.active{
    color:black;
    background-color:#15fe18;
}
.container{
    display: flex;
}
span{
    font-size:30px;
}
p{
    margin: 10px 0;     
    width:130px;
}
.left p::first-letter{
font-size:30px;
}
img{
    filter:grayscale(100%) brightness(60%) sepia(100%) hue-rotate(50deg) saturate(1000%) contrast(0.8);
    height:200px;
    margin-right:60px;
}
</style>
