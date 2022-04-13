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
