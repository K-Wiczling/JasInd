<template>
  <div id="search-wrapper">
    <h3>Search</h3>
    <div id="search-bar">
      <input class="input-2" type="text" v-model="searchText" @change="search" />
      <ButtonMulti class="btn-medium" text="Clear search" @click="clearSearch" />
    </div>
  </div>
</template>

<script>
import { store } from "@/sripts/store";
import ButtonMulti from "./ButtonMulti.vue";

export default {
  name: "SearchBar",
  data() {
    return {
      store,
      searchText: "",
    };
  },
  methods: {
    // Clear search field and show all products
    clearSearch() {
      store.displayedProducts = structuredClone(store.products);
      this.searchText = "";
    },
  },
  watch: {
    // Search prodacts fields to contain the search texxt
    searchText() {
      let tmpProducts = [];
      for (const product of store.products) {
        for (let column in product) {
          if (column.toString().toLowerCase() !== "id") {
            if (
              product[column]
                .toString()
                .toLowerCase()
                .search(this.searchText) !== -1
            ) {
              tmpProducts.push(product);
              break;
            }
          }
        }
      }
      store.displayedProducts = tmpProducts;
    },
  },
  components: {
    ButtonMulti,
  },
};
</script>

<style scoped>

</style>
