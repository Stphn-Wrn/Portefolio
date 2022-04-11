<template>
  <div class="home">
    <img src="../assets/img/pip-boy-gif.gif" alt="">
    <h2>Stephen WOIRIN - level 28</h2>
    <p>Développeur Web Front-End</p>
  </div>
</template>

<script>
export default {
  name: 'Pipboy-item',
}
</script>


<style scoped>
.home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    color:#15fe18;
}
img {
    height:300px;
    margin:40px;
}
h2{
    margin:5px;
}
</style>