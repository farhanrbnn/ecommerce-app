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
       <b-button class="mt-3" variant="primary">Submit</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>

#form {
  margin: 0 auto;
  width: 500px;
}

</style>
