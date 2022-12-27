<template>
  <div id="sort-products">
    <h3>Sort</h3>
    <div id="sort-wrapper">
      <select class="input-2" v-model="sortCategory">
        <option value="name" selected>Name</option>
        <option value="positon">Position</option>
        <option value="animal">Animal</option>
        <option value="Price">Price</option>
      </select>
      <select class="input-2" v-model="sortType" name="sortType" id="sortType">
        <option value="ascending" selected>Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
    <ButtonMulti class="btn-medium" text="Sort" @click="sorting" />
    <ButtonMulti class="btn-medium" text="Clear" @click="clearSort" />
  </div>
</template>

<script>
import { store } from "@/sripts/store";
import ButtonMulti from "./ButtonMulti.vue";

export default {
  name: "SortProducts",
  data() {
    return {
      store,
      sortCategory: "name",
      sortType: "ascending",
    };
  },
  methods: {
    clearSort() {
      console.log(store.products);
      store.displayedProducts = structuredClone(store.products);
    },
    sorting() {
      let tmpProducts = structuredClone(store.displayedProducts);
      tmpProducts.sort((a, b) => {
        const nameA = a[this.sortCategory.toLowerCase()].toLowerCase();
        const nameB = b[this.sortCategory.toLowerCase()].toLowerCase();

        if (this.sortType === "ascending") {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        } else {
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
        }

        return 0;
      });
      store.displayedProducts = tmpProducts;
    },
  },
  components: {
    ButtonMulti,
  },
};
</script>

<style scoped>
#sort-wrapper {
  display: flex;
}
#sort-products {
}
.input-2 {
  width: 125px;
}
button {
  margin-right: 4px;
  width: 73px;
}

@media only screen and (max-width: 850px) {
    .input-2 {
        width: 15vw;
    }
}
@media only screen and (max-width: 450px) {
    .input-2 {
        width: 35vw;
    }
}
</style>
