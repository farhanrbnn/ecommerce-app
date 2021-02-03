<template>
  <div id="inputGoods">
    <div id="form">
      <b-form-group id="input-group-1" label="Nama Barang" label-for="input-1">
        <b-form-input id="input-1" placeholder="nama barang" v-model="name"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Harga" label-for="input-2">
        <b-form-input id="input-2" placeholder="Harga" v-model="price"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Kategori" label-for="input-3">
        <b-form-input id="input-3" placeholder="Kategori" v-model="category"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Quantity" label-for="input-4">
        <b-form-input id="input-4" placeholder="Quantity" v-model="quantity"></b-form-input>
      </b-form-group>
       <input type="file" accept=".jpg, .jpeg, .png" @change="fileChange">
      <b-button class="mt-5" variant="primary" @click="postData">Submit</b-button>
    </div>
  </div>
</template>

<script>
import DataService from '../web_service/services'

export default {
  name: 'inputGoods',
  data () {
    return {
      url: null,
      name: '',
      category: '',
      price: '',
      quantity: ''
    }
  },
  methods: {
    fileChange (e) {
      const file = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onload = () => {
        this.url = reader.result
      }
    },
    postData () {
      let data = {
        name: this.name,
        category: this.category,
        price: this.price,
        quantity: this.quantity,
        picture: this.url
      }

      DataService.create('/post', data)
        .then((res) => {
          alert(res)
          // make form empty
          this.name = ''
          this.category = ''
          this.price = ''
          this.quantity = ''

          this.$notify({
            group: 'cart',
            text: 'success add item',
            type: 'success'
          })
          
        })
        .catch((err) => {
          alert('something wrong' + err)
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
