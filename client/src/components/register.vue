<template>
	<div id="register">
		<div id="form">
      <h2>Register</h2>
      <b-form-group id="input-group-1" label="First Name" label-for="input-1">
        <b-form-input id="input-1" placeholder="First Name" v-model="firstName"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Last Name" label-for="input-2">
        <b-form-input id="input-2" placeholder="Last Name" v-model="lastName"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="email" label-for="input-2">
        <b-form-input id="input-2" placeholder="email" v-model="email"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Password" label-for="input-4">
        <b-form-input id="input-4" placeholder="password" v-model="password"></b-form-input>
      </b-form-group>
       <b-button class="mt-3" variant="primary">Submit</b-button>
    </div>
	</div>
</template>

<script>
export default {
	name: 'register',
	data () {
		return {
			firstName: null,
			lastName: null,
			email: null,
			password: null
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