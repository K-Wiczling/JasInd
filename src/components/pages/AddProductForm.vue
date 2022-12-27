<template>
  <div id="add-product-wrapper">
    <label for="name">Product Name</label>
    <input v-model="pName" type="text" name="name" placeholder="Next product" />

    <label for="position">Position</label>
    <select v-model="pPosition" name="position" id="position">
      <option
        v-for="pos in store.positons"
        v-bind:key="pos.id"
        :value="pos.name"
      >
        {{ pos.name }}
      </option>
    </select>

    <label for="animal">Animal</label>
    <select v-model="pAnimal" name="animal" id="animal">
      <option
        v-for="animal in store.animals"
        v-bind:key="animal.id"
        :value="animal.name"
      >
        {{ animal.name }}
      </option>
    </select>

    <label for="price">Price</label>
    <input v-model="pPrice" type="number" name="price" />

    <ButtonMulti text="Add" @click="addProduct" />
  </div>
</template>

<script>
import { store } from "@/sripts/store";
import Validation from "../../sripts/validation"
import ButtonMulti from "../small/ButtonMulti.vue";

export default {
  name: "AddProductForm",
  props: {
    add: Boolean,
  },
  data() {
    return {
      store,
      pName: "",
      pPosition: store.positons[0].name,
      pAnimal: store.animals[0].name,
      pPrice: 100,
    };
  },
  methods: {
    addProduct() {
      let i = store.products.length;
      let id = store.products[i - 1].id + 1;
      let valid = Validation.validateNewProduct(
        id,
        this.pName,
        this.pPosition,
        this.pAnimal,
        this.pPrice
      );
      if (valid.result) {
        store.products.push({ id, name: this.pName, positon: this.pPosition, animal: this.pAnimal, price: this.pPrice });
      }
      console.log(store.products);
      console.log(Validation);

      // let result = product.addNewProduct(
      //   this.pName,
      //   this.pPosition,
      //   this.pAnimal,
      //   this.pPrice
      // );
      store.displayedProducts = structuredClone(store.products);
      // return result;
    },
  },
  components: { ButtonMulti },
};
</script>

<style>
input,
select {
  display: block;
  margin-bottom: 15px;
}
</style>
