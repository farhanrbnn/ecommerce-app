<template>
	<div id="register">
		<div id="form">
      <h2>Register</h2>
      <b-form-group id="input-group-1" label="First Name" label-for="input-1">
        <b-form-input id="input-1" placeholder="First Name" v-model="firstName" autocomplete="off"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Last Name" label-for="input-2">
        <b-form-input id="input-2" placeholder="Last Name" v-model="lastName" autocomplete="off"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="email" label-for="input-2">
        <b-form-input id="input-2" placeholder="email" v-model="email" autocomplete="off"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Password" label-for="input-4">
        <b-form-input id="input-4" type="password" placeholder="password" v-model="password" autocomplete="off"></b-form-input>
      </b-form-group>
       <b-button class="mt-3" variant="primary" @click="postData">Submit</b-button>
    </div>
	</div>
</template>

<script>
import DataService from '../web_service/services'

export default {
	name: 'register',
	data () {
		return {
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		}
	},
	methods: {
		postData () {
			let data = {
				firstName: this.firstName,
				lastName: this.lastName,
				email: this.email,
				password: this.email
			}

			DataService.create('/post/register', data)
			.then((res) => {
				alert('success')
				this.firstName = ''
				this.lastName = ''
				this.email = ''
				this.password = ''
			})
			.catch((err) => {
				alert('something went wrong' + err)
			})

		}
	}
}
	
</script>

<style scoped>
#form {
  margin: 0 auto;
  width: 500px;
}
	
</style>