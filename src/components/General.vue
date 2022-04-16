<template>
    <div id="general">
    <div class="left">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum consectetur consequatur beatae quas neque, ex vitae quos doloremque minima aperiam nesciunt mollitia dolorum accusamus quibusdam, atque a dicta quo? Sapiente facere, cumque deserunt eligendi quae numquam ipsa cum, suscipit velit, qui itaque beatae iusto nulla amet nesciunt ipsum necessitatibus doloremque.</p>
    
    </div>
    <div id="line"></div>
    <div class="right">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dicta velit quasi totam beatae temporibus voluptate, suscipit dolor. Nesciunt at voluptatibus eius pariatur temporibus magnam iure corrupti rerum, obcaecati harum molestiae amet, eligendi, doloribus deserunt fugiat. Quis quo ullam, inventore delectus dignissimos vitae ipsum aliquam culpa tempora minus, rerum illum.</p>
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
    width: 40%;
}
#line {
    height:40%;
    width:1px;
    background-color:#15fe18;
}

</style>
