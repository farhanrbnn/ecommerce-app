<template>
  <div class="checkout">
    <b-navbar class="mb-5" toggleable="lg" type="dark" variant="dark">
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
          <h4 class="float-left">BILLING DETAILS</h4>
        </b-col>
        <b-col md="4">
          <h4 class="mb-4">ORDER SUMMARY</h4>
          <div id="order-summary">
          <h5>Your Order</h5>
          <div id="order-list">
            <b-row>
              <b-col sm="6">
                <p>product</p>
                <div v-if="orders" v-for="(data, idx) in orders" :key="idx">
                  <p>{{data.product}}</p>
                </div>
                <div class="mt-3">
                  <h5>Grand Total: </h5>
                </div>
              </b-col>
              <b-col sm="6">
                <p>subtotal</p>
                <div v-if="orders" v-for="(data, idx) in orders" :key="idx">
                <p> Rp.{{data.subTotal}} </p>
                </div>
              </b-col>
            </b-row>
          </div>
          </div>
        </b-col>
      </b-row>
     </b-container>
  </div>
</template>

<script>
import regex from '../utils/regex'

export default {
  name: 'checkout',
  data () {
    return {
      orders: null
    }
  },
  created () {
    let localData = JSON.parse(localStorage.getItem('order'))

    for (let i = 0; i < localData.length; i++) {
      let subTotalRegex = regex(localData[i].subTotal)
      localData[i].subTotal = subTotalRegex
    }

    this.orders = localData
  }
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

#order-summary {
  border: 1px solid black;
}

#order-list {
  border-top: 1px solid black;
}
</style>
