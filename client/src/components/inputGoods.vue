<template>
  <div id="inputGoods">
    <div id="form">
      <b-form-group id="input-group-1" label="Nama Barang" label-for="input-1">
        <b-form-input id="input-1" placeholder="nama barang"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Harga" label-for="input-2">
        <b-form-input id="input-2" placeholder="Harga"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Kategori" label-for="input-3">
        <b-form-input id="input-3" placeholder="Kategori"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Quantity" label-for="input-4">
        <b-form-input id="input-4" placeholder="Quantity"></b-form-input>
      </b-form-group>
       <input type="file" @change="fileChange">
    </div>
    <div id="preview">
    <img v-if="url" :src="url" />
  </div>
  </div>
</template>

<script>
export default {
  name: 'inputGoods',
  data () {
    return {
      url: null
    }
  },
  methods: {
    fileChange(e) {
      const file = e.target.files[0]
      this.url = URL.createObjectURL(file)
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
