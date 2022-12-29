<template>
  <div id="table-wrapper">
    <ProductModal :id='idd' :product="product" />
    <table>
      <tr>
        <th>Product name</th>
        <th>Position</th>
        <th>Animal</th>
        <th>Price</th>
      </tr>
      <tr
        v-for="product in store.displayedProducts"
        v-bind:key="product.id"
        @click="showProduct(product)"
      >
        <td>{{ product.name }}</td>
        <td>{{ product.positon }}</td>
        <td>{{ product.animal }}</td>
        <td>{{ currencyChange(product.price) }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { store } from "@/sripts/store";
import validation from "@/sripts/validation";
import ProductModal from "../small/ProductModal.vue";

export default {
  name: "ProductsTable",
  data() {
    return {
      store,
      currency: "pln",
      idd: 0,
      product: {},
    };
  },
  methods: {
    // Open modal and show prodact with id
    showProduct(product) {
      this.product = product;
      this.idd = store.displayedProducts.indexOf(this.product);

      store.modalShow = !store.modalShow;
    },
    currencyChange (price) {
      return validation.currencyChange(price)
    },
  },
  components: {
    ProductModal,
  },
};
</script>

<style scoped>
/* TABLE */
#table-wrapper {
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 60vh;
}
table {
  margin: auto;
  margin-top: 20px;
  width: 90vw;
  border-collapse: collapse;
}
td {
  padding: 3px;
  border: 1px solid black;
  text-align: left;
}
th {
  border: 2px solid black;
}
tr {
  transition: all 0.2s;
}
tr:hover {
  background-color: var(--secondColor);
  color: white;
}
/* Button overwirte */
button {
  height: 18px;
}
</style>
