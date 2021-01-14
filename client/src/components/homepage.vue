<template>
  <div class="homepage">
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
     <b-container class="px-0" fluid>
      <b-img v-bind:src="require('@/assets/home-pic.jpg')" fluid alt="Fluid image"></b-img>
      <h1 class="centered">{{ pic }}</h1>
      <b-button id="button_center" variant="light"><router-link to="/shop"><p id="router-shop">Shop Now</p></router-link></b-button>
      <b-container>
        <div id="home-content">
        <h2 class="pb-3">Store at a Glance</h2>
        <b-row class="justify-content-md-center">
          <b-col v-for="(data, index) in datas" :key="index" v-if="index<=3" md>
            <router-link id="card" :to="{name:'details', params: {userId: data._id}}">
            <b-card :img-src="data.picture" img-alt="Image" img-top :title="data.name" style="max-width: 15rem;">
              <b-card-text>
                  {{data.price}}
              </b-card-text>
            </b-card>
            </router-link>
          </b-col>
        </b-row>
      </div>
      </b-container>
      <b-container>
        <h3 class="py-5">{{quote}}</h3>
      </b-container>
     </b-container>
  </div>
</template>

<script>
import DataService from '../web_service/services'

export default {
  name: 'homepage',
  data () {
    return {
      pic: 'UPGRADE YOUR GAMING NEEDS',
      quote: '- every gamer needs a good gear -',
      datas: null,
      index: 0
    }
  },
  created () {
    DataService.getAllData()
      .then((res) => {
        this.datas = res.data.data
      })
      .catch((err) => {
        alert('error when catching API' + err)
        console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');

h3 {
  font-family: 'Krona One', sans-serif;

}

.centered {
  font-family: 'Krona One', sans-serif;
  font-size: 45px;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#brand {
  font-family: 'Krona One', sans-serif;

}
#button_center {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: 90px;
  transform: translate(-50%, -50%);
}

#router {
  font-size: 20px;
  margin-bottom: 0;
  color: white;
}

#router-shop {
  color: black;
  margin-bottom: 0;
}

#home-content {
  margin-top: 30px;
}

#card {
  color: black;
}

#card-title {

}
</style>
