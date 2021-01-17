<template>
  <div class="checkout">
  	<b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/" id="brand">GamersCrib</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item><router-link to="/cart"><b-img v-bind:src="require('@/assets/cart-logo.png')" fluid alt="Fluid image"></b-img></router-link></b-nav-item>
        <b-nav-item><router-link to="/login"><p id="router">Login</p></router-link></b-nav-item>
      </b-navbar-nav>
      </b-collapse>
     </b-navbar>
     <b-container>
     	<b-row>
     		<b-col md="8">
     			<h4 class="float-left">ORDER SUMMART</h4>
     		</b-col>
     		<b-col md="4">
     			<h4>BILLING DETAILS</h4>
     		</b-col>
     	</b-row>
     </b-container>
  </div>	
</template>

<script>
export default {
	name: 'checkout'
}
	
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');

#router {
  font-size: 20px;
  margin-bottom: 0;
  color: white;
}

#brand {
  font-family: 'Krona One', sans-serif;

}

</style>
