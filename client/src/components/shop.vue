<template>
  <div class="shop">
    <div id="navbar">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/" id="brand">GamersCrib</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item><router-link to="/cart"><b-img v-bind:src="require('@/assets/cart-logo.png')" fluid alt="Fluid image"></b-img></router-link></b-nav-item>
        <b-nav-item><router-link to="/login"><p id="router">Login</p></router-link></b-nav-item>
      </b-navbar-nav>
      </b-collapse>
     </b-navbar>
     </div>
     <b-container>
       <div id="sidenav">
        <h4>Category</h4>
        <b-form-select v-model="selected">
         <b-form-select-option :value="cat" v-for="(cat, index) in categoryList" :key="index">{{ cat }}</b-form-select-option>
        </b-form-select>
       <b-button class="mt-3" variant="primary" @click="select">Select</b-button>
       </div>
       <div id="main">
         <h1>shopping page</h1>
        <b-row  v-for="(arr, index) in chunk" :key="index" class="mb-5 justify-content-md-center">
          <b-col v-for="(data, index) in arr" :key="index" md>
          <router-link id="card" :to="{name:'details', params: {userId: data._id}}">
            <b-card :img-src="data.picture" :title="data.name" style="max-width: 15rem;">
              <b-card-text>
                {{data.price}}
              </b-card-text>
            </b-card>
            </router-link>
          </b-col>
        </b-row>
       </div>
     </b-container>
  </div>
</template>

<script>
import DataService from '../web_service/services'

export default {
  name: 'shop',
  data () {
    return {
      datas: null,
      category: null,
      selected: null
    }
  },
  created () {
    DataService.getAllData()
      .then((res) => {
        let apiData = res.data.data
        let categoryArr = []

        for (let i = 0; i < apiData.length; i++) {
          categoryArr.push(apiData[i].category)
          categoryArr.sort()
        }
        this.datas = apiData
        this.category = categoryArr
      })
      .catch((err) => {
        alert('error when fetching API: ' + err)
      })
  },
  methods: {
    select () {
      let postCat = {
        category: this.selected
      }

      if (this.selected === 'All') {
        DataService.getAllData()
          .then((res) => {
            this.datas = res.data.data
          })
          .catch((err) => {
            alert('error when fetching API: ' + err)
          })
      }

      DataService.create('/post/items', postCat)
        .then((res) => {
          this.datas = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {
    chunk () {
      let chunkedArr = []
      let array = this.datas

      if (array) {
        for (let i = 0; i < array.length; i++) {
          let last = chunkedArr[chunkedArr.length - 1]

          if (!last || last.length === 4) {
            chunkedArr.push([array[i]])
          } else {
            last.push(array[i])
          }
        }
      }
      return chunkedArr
    },
    categoryList () {
      let array = this.category
      let categoryArr = ['All']

      if (array) {
        for (let i = 0; i < array.length; i++) {
          let j = i + 1

          if (j <= array.length) {
            if (array[i] !== array[j]) {
              categoryArr.push(array[i])
            }
          }
        }
      }
      return categoryArr
    }
  }
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
  /*background-color: #E6E6E6;*/
  background-color: white;
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

#card {
  color: black;
}
</style>
