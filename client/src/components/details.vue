<template>
	<div id="details">
		<b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/" id="brand">GamersCrib</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item><router-link to="/login"><p id="router">Login</p></router-link></b-nav-item>
      </b-navbar-nav>
      </b-collapse>
     </b-navbar>	
     <b-container>
     	<h3>{{datas.name}}</h3>
     </b-container>
	</div>
</template>

<script>
import DataService from '../web_service/services'

export default {
	name: 'details',
	props:['userId'],
	data () {
		return {
			datas: null,
			url:'/'+this.userId
		}
	},
	created () {
		DataService.getFindById(this.url)
		  .then((res) => {
		  	this.datas = res.data
		  	console.log(res.data)
		  })
		  .catch ((err) => {
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
</style>
