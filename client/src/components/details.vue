<template>
  <div id="details">
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
     <b-container id="content">
      <b-row class="justify-content-md-center">
        <b-col cols="4">
          <img id="product-image" :src="datas.picture">
        </b-col>
        <b-col cols="8">
          <h3>{{datas.name}}</h3>
          <div>
            <b-row class="justify-content-md-left">
              <h4 id="label" class="mr-3">price</h4>
              <h4>Rp.{{datas.price}}</h4>
            </b-row>
            <b-row class="justify-content-md-left">
              <h4 id="label" class="mr-3">price</h4>
              <h4>{{datas.price}}</h4>
            </b-row>
            <b-button class="mt-3" variant="primary">Add to Cart</b-button>
            <b-button class="mt-3" variant="primary">Buy Now</b-button>
          </div>
        </b-col>
      </b-row>
     </b-container>
  </div>
</template>

<script>
import DataService from '../web_service/services'

export default {
  name: 'details',
  props: ['userId'],
  data () {
    return {
      datas: null,
      url: '/' + this.userId
    }
  },
  created () {
    DataService.getFindById(this.url)
      .then((res) => {
        this.datas = res.data.data
        console.log(res.data.data)
      })
      .catch((err) => {
        console.log('error when fetching API' + err)
      })
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

#product-image {
  width: 300px;
  height: 300px;

}

#content {
  margin-top: 100px;
}

#label {
  color: #bbbfca;
}
</style>
