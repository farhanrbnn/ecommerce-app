<template>
  <div class="homepage">
     <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item href="#">Shop</b-nav-item>
      </b-navbar-nav>
      </b-collapse>
     </b-navbar>
     <b-container class="px-0" fluid>
      <b-img v-bind:src="require('@/assets/home-pic.jpg')" fluid alt="Fluid image"></b-img>
      <h1 class="centered">{{ pic }}</h1>
      <b-button id="button_center" variant="light">Shop Now</b-button>
      <div>
      </div>
     </b-container>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      pic: 'UPGRADE YOUR GAMING NEEDS'
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');

.centered {
  font-family: 'Krona One', sans-serif;
  font-size: 45px;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#button_center {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: 90px;
  transform: translate(-50%, -50%);
}
</style>
