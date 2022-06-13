<template>
  <div id="info">      
    <header class="info-block">
        <h1>Stats</h1>
      <ul>
          <li id="lvl-item">
            age 28
            </li>
          <li id="hp-item">
              Ville Liffré
              </li>
          <li id="ap-item">
            <address>
            cp 35340
            </address> 
            </li>
          <li id="xp-item">
              <address>
                tel 0615676526
              </address>
              </li>

      </ul>
    </header>
  </div>
</template>

<script>

export default {
  components: {  },
  name: 'Header-item',
  methods:{
  }
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
#info {
    color:#15fe18;
    width:80%;
    padding-bottom:25px;
}
:is(#lvl-item, #hp-item, #ap-item, #xp-item){
    text-transform: uppercase;
    border: #15fe18 1px solid;
    border-bottom-width: 0;
    border-left-width: 0;
    height:2em;
    margin: 0 0 0 10px;
    padding:10px 20px;
    word-spacing: 4em;   
    
}
#stats-block{
    position:relative;
}
h1{
    font-size:60px;
    margin-left:10rem;
    text-transform: uppercase;
}
h1::before{
    content: '';
    position: absolute;
    border-color: #15fe18;
    border-style: solid;
    border-width: 0.1em 0 0 0.1em;
    height:2em;
    left: 0;
    top: 35px;
    width: 135px;
    font-size: 16px;
}

.info-block{
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
}
ul {
    position: absolute;
    display: flex;
    top: 35px;
    right: 0;
   
}
address {
    font-style: normal;
}
}
</style>