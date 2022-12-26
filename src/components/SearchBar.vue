<template>
    <div id="searchBar">
      <input type="text" v-model="searchText" @change="search">
      <ButtonMulti text="Search"/>
      <ButtonMulti text="Clear" @click="clearSearch"/>
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
        border: 1px solid black;
        padding: 2px;
    }
    input {
        
    }
    button {
        background-color: black;
        color: white;
    }
    button:hover {
        background-color: #444;
    }
  </style>
    