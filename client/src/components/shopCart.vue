<template>
	<div class="shopCart">
		 <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/" id="brand">GamersCrib</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item><b-img v-bind:src="require('@/assets/cart-logo.png')" fluid alt="Fluid image"></b-img></b-nav-item>
        <b-nav-item><router-link to="/login"><p id="router">Login</p></router-link></b-nav-item>
      </b-navbar-nav>
      </b-collapse>
     </b-navbar>
     <b-container>
     		<b-card v-if="orders" v-for="(data, idx) in orders">
     			<b-row>
      <b-col md="4">
        <b-card-img id="product-image" :src="data.picture" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="8">
        <b-card-body>
          <b-card-text>
          	<div class="float-left">
          	  <h5>{{data.product}}</h5>
          	  <h5>Rp. {{data.price}}</h5>
          	</div>
          </b-card-text>
        </b-card-body>
        <b-button class="float-right mt-5" variant="primary" >Submit</b-button>
        <b-button @click="deleteOrder(idx)" class="float-right mt-5 mr-3" variant="danger" >Delete</b-button>
      </b-col>
    </b-row>
     		</b-card>
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
		this.orders = this.$store.state.order
	},
	methods: {
		deleteOrder (index) {
			this.orders.splice(index, 1)
			const parse = JSON.stringify(this.orders)

			localStorage.setItem('order', parse)
		}
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

#product-image {
	width: 150px;
	height: 150px;
}
</style>
