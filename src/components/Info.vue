<template>
  <div id="info">
        
    <div class="info-block">
        <h1>Stats</h1>
      <ul>
          <li id="lvl-item">
            lvl
            28
            </li>
          <li id="hp-item">
            hp
            120494
          </li>
          <li id="ap-item">
            ap
            35340
          </li>
          <li id="xp-item">          
            xp
            0615676526
          </li>
      </ul>
        
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info-item',
}
</script>


<style scoped>
#info {
    color:#15fe18;
    width:80%;
}
:is(#lvl-item, #hp-item, #ap-item, #xp-item){
    text-transform: uppercase;
}
#stats-block{
    position:relative;
}
h1{
    font-size:60px;
    margin-left:150px;
    text-transform: uppercase;
}
h1::before{
    content: '';
    position: absolute;
    border-color: #15fe18;
    border-style: solid;
    border-width: 0.1em 0 0 0.1em;
    height:2.5em;
    left: 0em;
    top: 35px;
    width: 135px;
    font-size: 16px;
}

#lvl-item::after{
    content: '';
    position: absolute;
    border-color: #15fe18;
    border-style: solid;
    border-width: 0.1em 0.1em 0 0;
    height: 2.5em;
    right:695px;
    top: -5px;
    width: 225px;
    font-size: 16px;
}
#hp-item::after{
    content: '';
    position: absolute;
    border-color: #15fe18;
    border-style: solid;
    border-width: 0.1em 0.1em 0 0;
    height: 2.5em;
    right: 485px;
    top: -5px;
    width: 200px;
    font-size: 16px;
}
#ap-item::after{
    content: '';
    position: absolute;
    border-color: #15fe18;
    border-style: solid;
    border-width: 0.1em 0.1em 0 0;
    height: 2.5em;
    right: 260px;
    top: -5px;
    width: 215px;
    font-size: 16px;
}
#xp-item::after{
     content: '';
    position: absolute;
    border-color: #15fe18;
    border-style: solid;
    border-width: 0.1em 0.1em 0 0;
    height:2.5em;
    right: 0;
    top: -5px;
    width: 250px;
    font-size: 16px;
}
.info-block{
    position: relative;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
ul {
    position: absolute;
    display:flex;
    justify-content: space-between;
    align-items: center;
    top:40px;
    right:0;
    
}
li:not(#xp-item)  {
    margin: 0 10px 0 10px;
    padding:0 20px;
    word-spacing: 5em;   
}
#xp-item{
    margin: 0 10px 0 10px;
    padding:0 0 0 20px;
    word-spacing: 7.5em;   
}
</style>