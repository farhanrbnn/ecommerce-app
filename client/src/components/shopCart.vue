<template>
	<div class="shopCart">
		 <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#" id="brand">GamersCrib</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item><b-img v-bind:src="require('@/assets/cart-logo.png')" fluid alt="Fluid image"></b-img></b-nav-item>
        <b-nav-item><router-link to="/login"><p id="router">Login</p></router-link></b-nav-item>
      </b-navbar-nav>
      </b-collapse>
     </b-navbar>
     <b-container>
     	<b-row>
     	</b-row>
     </b-container>
	</div>
</template>

<script>
export default {
	name: 'shopCart',
	data () {
		return {
			orders: null
		}
	},
	created () {
		let storeOrder = this.$store.state.orders
		console.log(storeOrder)
	}
}	

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');

#brand {
  font-family: 'Krona One', sans-serif;

}
#router {
  font-size: 20px;
  margin-bottom: 0;
  color: white;
}
</style>
