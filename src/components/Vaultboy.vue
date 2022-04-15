<template>
  <div class="home">
    <img src="../assets/img/pip-boy-gif.gif" alt="">
    <h2>Stephen <span>Woirin</span></h2>
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
    height:521px;
    color:#15fe18;
}
img {
    height:200px;
}
h2{
    margin-top:30px;
    font-size: 20px;
}
p{
  margin-top:5px;
  font-size: 20px;
}
span {
  text-transform: uppercase;
}
</style>