<template>
  <div>
    <h3 >Search</h3>
    <div id="searchBar">
      <input type="text" v-model="searchText" @change="search">
      <ButtonMulti text="Clear search" @click="clearSearch"/>
    </div>
  </div>
</template>

<script>
  import { store } from '@/sripts/store';
  import ButtonMulti from './ButtonMulti.vue';

  export default {
    name: 'SearchBar',
    components: {
        ButtonMulti,
    },
    data() {
      return {
        store,
        searchText: ''
      }
    },
    methods: {
      clearSearch () {
        store.displayedProducts = structuredClone(store.products);
        this.searchText = '';
      }
    },
    watch: {
      searchText () {
        let tmpProducts = [];
        for (const product of store.products) {
          // Search names of products
          for (let column in product) {
              if( column.toString().toLowerCase() !== 'id'){
                if (product[column].toString().toLowerCase().search(this.searchText) !== -1) {
                  tmpProducts.push(product);
                  break;
                }
              }
          }
        }
        store.displayedProducts = tmpProducts;
      }
    }
  }
</script>

<style scoped>
  #searchBar {
    height: 20px;
  }
  input {
    height: 20px;
  }
  button {
    height: 20px;
  }
  

</style>
  