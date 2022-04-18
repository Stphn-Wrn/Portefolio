<template>
  <div id="footer">
    <footer>
      <nav>
        <ul id="li-nav-items">
          <li id="item-status">
            <router-link to="/" class="link">Status</router-link>
          </li>

          <li id="item-special">
            <router-link to="/S.P.E.C.I.A.L" class="link special">
              s.p.e.c.i.a.l
            </router-link>
          </li>

          <li id="item-perks">
            <router-link to="/Perks" class="link">Perks</router-link>
          </li>

          <li id="item-general">
            <router-link to="/Items" class="link">Items</router-link>
          </li>

          <li id="item-general">
            <router-link to="/General" class="link">General</router-link>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: "footer-item",
};
</script>


<style scoped>
#footer {
  color: #15fe18;
  width: 80%;
}

#li-nav-items {
  display: flex;
  align-items: center;
  list-style-type: none;
  height: 2.5em;
  border: solid 1px #15fe18;
  border-top-width: 0;
}
.special {
  text-transform: uppercase;
}
a {
  text-decoration: none;
  color: #15fe18;
  padding: 10px;
}
.link.active {
  color:black;
  background-color:#15fe18;
}
</style>
