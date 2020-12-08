<template>
  <div class="shop">
    <div id="navbar">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/" id="brand">GamersCrib</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item><router-link to="/login"><p id="router">Login</p></router-link></b-nav-item>
      </b-navbar-nav>
      </b-collapse>
     </b-navbar>
     </div>
     <b-container>
       <div id="sidenav">
        <h4>Category</h4>
         <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1">
           Headset
          </b-form-checkbox>
          <b-form-checkbox
          id="checkbox-2"
          name="checkbox-2">
           Gaming Keyboard
          </b-form-checkbox>
       </div>
       <div id="main">
         <h1>shopping page</h1>
         <b-row class="justify-content-md-center">
          <b-col md>
            <b-card title="Logitech G Pro Wireless">
              <b-card-text>
                Rp.2.000.000
              </b-card-text>
            </b-card>
          </b-col>
          <b-col md>
            <b-card title="Logitech G Pro Wireless">
              <b-card-text>
                Rp.2.000.000
              </b-card-text>
            </b-card>
          </b-col>
          <b-col md>
            <b-card title="Logitech G Pro Wireless">
              <b-card-text>
                Rp.2.000.000
              </b-card-text>
            </b-card>
          </b-col>
          <b-col md>
            <b-card title="Logitech G Pro Wireless">
              <b-card-text>
                Rp.2.000.000
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
       </div>
     </b-container>
  </div>
</template>

<script>
export default {
  name: 'shop'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');

#router {
  font-size: 20px;
  margin-bottom: 0;
  color: white;
}

#brand {
  font-family: 'Krona One', sans-serif;

}

#sidenav {
  height: 50%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 100px;
  left: 350px;
  background-color: #E6E6E6;
  /*overflow-x: hidden; */
  padding-top: 40px;
  border-radius: 10px;
}

#navbar {
  padding-bottom: 50px;

}

#main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}


</style>
