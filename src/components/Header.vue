<template>
  <div id="header">
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

        <li id="item-skills">
          <router-link to="/Skills" class="link">Skills</router-link>
        </li>

        <li id="item-perks">
          <router-link to="/Perks" class="link">Perks</router-link>
        </li>
        <li id="item-general">
          <router-link to="/General" class="link">General</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header-item",
};
</script>


<style>
#header {
  color: #15fe18;
  width: 80%;
}
#li-nav-items {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  height: 80px;
}
#item-status::before {
  content: "";
  position: absolute;
  border-color: #15fe18;
  border-style: solid;
  border-width: 0 0 0.1em 0.1em;
  height: 2.5em;
  left: 0em;
  bottom: 45%;
  margin: auto;
  width: 6.5%;
}
#item-special::before {
  content: "";
  position: absolute;
  border-color: #15fe18;
  border-style: solid;
  border-width: 0 0 0.1em 0;
  left: 13%;
  bottom: 45%;
  margin: auto;
  width: 13%;
}
#item-skills::before {
  content: "";
  position: absolute;
  border-color: #15fe18;
  border-style: solid;
  border-width: 0 0 0.1em 0;
  left: 35.5%;
  bottom: 45%;
  margin: auto;
  width: 13.5%;
}
#item-perks::before {
  content: "";
  position: absolute;
  border-color: #15fe18;
  border-style: solid;
  border-width: 0 0 0.1em 0;
  left: 54.5%;
  bottom: 45%;
  margin: auto;
  width: 13.5%;
}
#item-general::after {
  content: "";
  position: absolute;
  border-color: #15fe18;
  border-style: solid;
  border-width: 0 0.1em 0.1em 0;
  height: 2.5em;
  right: 0;
  bottom: 45%;
  margin: auto;
  width: 7.5%;
}
#item-general::before {
  content: "";
  position: absolute;
  border-color: #15fe18;
  border-style: solid;
  border-width: 0 0 0.1em 0;
  left: 73.5%;
  bottom: 45%;
  margin: auto;
  width: 14%;
}
.special {
  text-transform: uppercase;
}
a {
  text-decoration: none;
  color: #15fe18;
  /* border: #15fe18 solid 3px; */
  padding: 10px;
}
.link.active {
  border: #15fe18 solid 3px;
}
</style>
