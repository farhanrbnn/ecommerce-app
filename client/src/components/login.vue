<template>
  <div class="login">
    <div id="form">
      <h2>Log In</h2>
      <b-form-group id="input-group-1" label="Email" label-for="input-1">
        <b-form-input id="input-1" placeholder="Enter Your Email" v-model="email"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <b-form-input id="input-2" placeholder="Enter Your Password" v-model="password"></b-form-input>
      </b-form-group>
      <p>doesnt have an account ? register <span><router-link to="/register">here</router-link></span></p>
       <b-button class="mt-3" variant="primary" @click="postData">Submit</b-button>
    </div>
  </div>
</template>

<script>
import DataService from '../web_service/services'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    postData() {
      let data = {
        email: this.email,
        password: this.password
      }

      DataService.create('/user/auth', data)
      .then((res) => {
        alert(res.data.message)
      })
      .catch((err) => {
        alert(err)
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
