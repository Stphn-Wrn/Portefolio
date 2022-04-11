<template>
    <div id="special">
    <div class="left">
        <p><span>S</span>trengh</p>
        <p><span>P</span>erception</p>
        <p><span>E</span>ndurance</p>
        <p><span>C</span>harisma</p>
        <p><span>I</span>ntelligence</p>
        <p><span>A</span>gility</p>
        <p><span>L</span>uck</p>
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
#special {
    display: flex;
    justify-content: center;
    align-items: center;
    color:#15fe18;
    width:80%;
    margin:40px;
}
:is(.right, .left){
    color: #15fe18;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
}
span{
    font-size:30px;
}
p{
    margin: 10px 0;
}
</style>
