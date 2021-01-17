<template>
  <div class="shopCart">
     <b-navbar class="mb-5" toggleable="lg" type="dark" variant="dark">
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
      <h3 class="no-items" v-if="orders.length === 0">Your cart is empty</h3>
        <b-card v-if="orders" v-for="(data, idx) in orders" :key="idx">
          <b-row>
            <b-col md="4">
              <b-card-img id="product-image" :src="data.picture" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
               <b-card-body>
                 <b-card-text>
                   <div class="float-left">
                     <h5>{{data.product}}</h5>
                     <h5 class="mb-3">Rp. {{data.price}}</h5>
                     <label for="quantity">Quantity</label>
                     <b-form-spinbutton id="quantity" v-model="value" inline></b-form-spinbutton>
                     <h5 class="mt-4">Subtotal: Rp. {{data.subTotal}}</h5>
                    </div>
                  </b-card-text>
               </b-card-body>
              <b-button class="float-right mt-5" variant="primary" >Submit</b-button>
              <b-button @click="deleteOrder(idx)" class="float-right mt-5 mr-3" variant="danger" >Delete</b-button>
           </b-col>
         </b-row>
        </b-card>
        <h5 v-if="orders.length" class="float-left mt-5">Grand Total: Rp. {{grandTotal}} </h5>
     </b-container>
  </div>
</template>

<script>
import regex from '../utils/regex'
import grandTotal from '../utils/grandTotal'
import toInteger from '../utils/toInteger'

export default {
  name: 'shopCart',
  data () {
    return {
      orders: null,
      value: 0
    }
  },
  created () {
    let localData = this.$store.state.order
    let total = []

    for (let i = 0; i < localData.length; i++) {
      let priceRegex = regex(localData[i].subTotal)
      total.push(localData[i].subTotal)

      // change int to regexed subTotal
      localData[i].subTotal = priceRegex
    }

    this.grand = total
    this.orders = localData
  },
  methods: {
    deleteOrder (index) {
      let orderData = this.orders

      orderData.splice(index, 1) 
      const parse = JSON.stringify(orderData)

      localStorage.setItem('order', parse)
    }
  },
  computed: {
    grandTotal () {
      let orderData = this.orders
      let arrSubtotal = []

      for (let i = 0; i < orderData.length; i++) {
        let subTotalInt = toInteger(orderData[i].subTotal)
        arrSubtotal.push(subTotalInt)
      }

      let sumTotal = regex(grandTotal(arrSubtotal, 'sum'))
      return sumTotal
    }   
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');

.no-items {
  margin-top: 200px;
}

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
