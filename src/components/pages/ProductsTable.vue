<template>
  <div id="table-wrapper">
    <ProductModal :idd="idd" />
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
        @click="showProduct(product.id)"
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
import ProductModal from "../small/ProductModal.vue";

export default {
  name: "ProductsTable",
  data() {
    return {
      store,
      currency: "pln",
      idd: 0,
    };
  },
  methods: {
    // Open modal and show prodact with id
    showProduct(id) {
      this.idd = id;
      store.modalShow = !store.modalShow;
    },
    // base on the used currency change price format
    currencyChange(value) {
      let price = "";
      switch (store.currency) {
        // PLN 
        case "pln":
          {
            price = value + "zł";
          }
          break;

        // EUR
        case "eur":
          {
            price = Math.round(value / 4.65) + "€";
          }
          break;

        // USD
        case "usd":
          {
            price = "$" + Math.round(value / 4.37);
          }
          break;

        // gbp
        case "gbp":
          {
            price = "£" + Math.round(value / 5.27);
          }
          break;

        default:
          break;
      }
      return price;
    },
  },
  components: {
    ProductModal,
  },
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 5px var(--secondColor);  */
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--mainColor);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--secondColor);
}
/* TABLE */
#table-wrapper {
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 60vh;
}
table {
  margin: auto;
  margin-top: 20px;
  width: calc(80vw);
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
