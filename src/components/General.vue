<template>
  <div id="general">
    <div class="left">
      <address>
        <p>Mes recherches se font autour du bassin rennais, du remote est envisageable avec possibilité de déplacement quelques jours par mois.</p> 
        Si jamais mon portefolio vous a plu et que vous souhaitez débuter une
        nouvelle collaboration avec moi. Vous pouvez me retrouver sur mes
        différents réseaux sociaux ou encore me contacter par mail.
        <ul id="social">
          <li class="social">
            <a href="https://twitter.com/Stphndev" target="_blank" rel="noopener noreferrer">
              <img src="../assets/img/twitter.png" alt="image logo twitter"/>
              </a>
          </li>
          <li class="social">
            <a href="https://www.linkedin.com/in/stephen-woirin/" target="_blank" rel="noopener noreferrer">
            <img src="../assets/img/linkedin.png" alt="image logo linkedin"/>
              </a>
          </li>
          <li class="social">
            <a href="mailto:s.woirin.dev@gmail.com">
                <img src="../assets/img/mail.png" alt="image enveloppe email"/>
                </a>
          </li>
        </ul>
      </address>
    </div>
    <div id="line"></div>
    <div class="right">
      <ul>
        <li class="stacks">Vue.js</li>
        <li class="stacks">Wordpress</li>
        <li class="stacks">Html5</li>
        <li class="stacks">CSS - SASS / Bootstrap</li>
        <li class="stacks">Script Shell</li>
        <li class="stacks">Git & Github</li>
        <li class="stacks">TypeScript (en cours d'apprentissage)</li>
        <li class="stacks">Java (en cours d'apprentissage)</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "General-item",
  components: {},
};
</script>

<style scoped>
#general {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #15fe18;
  width: 80%;
  height: 521px;
}
:is(.right, .left) {
  width: 40%;
}
#line {
  height: 40%;
  width: 1px;
  background-color: #15fe18;
}
li:not(.social) {
  margin: 5px;
  padding: 10px;
  color: #15fe18;
  background-color: #033005;
}
.stacks {
  text-transform: uppercase;
}
a {
  color: #15fe18;
}
#social {
  margin-top: 15px;
  display: flex;
  justify-content: space-evenly;
}
.social, p {
  margin: 15px 0;
}

img {
  filter: grayscale(100%) brightness(60%) sepia(100%) hue-rotate(50deg)
    saturate(1000%) contrast(0.8);
  width: 30px;
  height: auto;
}
</style>
