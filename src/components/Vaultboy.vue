<template>
  <div id="home">
    <img src="../assets/img/pip-boy-gif.gif" alt="Vault boy fait un signe du pouce">
    <h2 class="p-text">Stephen <span class="p-text">Woirin</span></h2>
    <p class="p-text">Développeur Web issue d'une reconversion.</p>
    <p id="mobile-text">Hello, pour une meilleure optimisation, utilises un ordinateur. </p>
  </div>
</template>

<script>
export default {
  name: 'Pipboy-item',
}
</script>


<style scoped>
#home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:521px;
    color:#15fe18;
}
.p-text {
  display:none;
}
#mobile-text {
  text-align:center;
}
p{
  margin-top:5px;
  font-size: 20px;
}
img {
    height:200px;
}
@media (min-width:1200px) { 
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
.p-text {
  display:block;
}
#mobile-text {
 display:none;
}
 }

</style>