<template>
    <div id="sortProducts">
        <label for="position">Sort</label>
        <select v-model="sortCategory" >
            <option value="name" selected>Name</option>
            <option value="positon">Position</option>
            <option value="animal">Animal</option>
            <option value="Price">Price</option>
        </select>
        <select  v-model="sortType" name="sortType" id="sortType" >
            <option value="ascending" selected>Ascending</option>
            <option value="descending">Descending</option>
        </select>
      <ButtonMulti text="Sort" @click="sorting"/>
      <ButtonMulti text="Clear" @click="clearSort"/>

    </div>
  </template>
  
  <script>
    import { store } from '@/sripts/store';
    import ButtonMulti from './ButtonMulti.vue';

    export default {
      name: 'SortProducts',
      data () {
        return {
          store,
          sortCategory: 'name',
          sortType: 'ascending',
          
        }
      },
      methods: {
        clearSort () {
          console.log(store.products);
          store.displayedProducts = structuredClone(store.products);
        },
        sorting () {
            let tmpProducts = structuredClone(store.products);
            tmpProducts.sort((a,b) => {
            const nameA = a[this.sortCategory.toLocaleLowerCase()];
            const nameB = b[this.sortCategory.toLocaleLowerCase()];

            if(this.sortType === 'ascending'){

              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
            }
            else {
              if (nameA < nameB) {
                return 1;
              }
              if (nameA > nameB) {
                return -1;
              }
            }

            return 0;
          })
          store.displayedProducts = tmpProducts;
        }
      },
      components: {
          ButtonMulti,
      }
    }
  </script>
  
  <style scoped>
    #sortProducts {
        border: 1px solid black;
    }
  </style>
    