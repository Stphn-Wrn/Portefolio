<template>
    <div id="general">
    <div class="left">
        <p>Strengh</p>
        <p>Perception</p>
        <p>Endurance</p>
        <p>Charisma</p>
        <p>Intelligence</p>
        <p>Agility</p>
        <p>Luck</p>
    </div>
    <div class="right">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Special-view',
  components: {
    
  }
}
</script>

<style scoped>
#general {
    display: flex;
    justify-content: center;
    align-items: center;
    color:#15fe18;
    width:80%;
    height:521px;
}
:is(.right, .left){
    color: #15fe18;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
}
p{
    margin: 10px 0;
}
</style>
