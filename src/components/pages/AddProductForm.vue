<template>
  <div id="add-product-wrapper" class="form-wrapper">
    <label class="input-1">Product Name</label>
    <input
      class="input-1"
      v-model="pName"
      type="text"
      placeholder="Next product"
    />

    <label class="input-1">Position</label>
    <select v-model="pPosition" class="input-1" id="position">
      <option
        v-for="pos in store.positons"
        v-bind:key="pos.id"
        :value="pos.name"
      >
        {{ pos.name }}
      </option>
    </select>

    <label class="input-1">Animal</label>
    <select v-model="pAnimal" class="input-1" id="animal">
      <option
        v-for="animal in store.animals"
        v-bind:key="animal.id"
        :value="animal.name"
      >
        {{ animal.name }}
      </option>
    </select>

    <label class="input-1">Price</label>
    <input v-model="pPrice" type="number" class="input-1" />

    <ButtonMulti text="Add" @click="addProduct" />
  </div>
</template>

<script>
import { store } from "@/sripts/store";
import validation from "../../sripts/validation";
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
      // Create new Id based on the last animal id
      let id = validation.getUniqeId(store.products);

      let message = [];
      // Validate Id
      let res = validation.validateId(id, store.products);
      if (res.result && res.rest.newId) {
        // Validate name text
        res = validation.validateTextInput(this.pName, "name");
        if (!res.result) {
          message.push("Product name incorrect");
        }

        // Validate position text
        res = validation.validateTextInput(this.pPosition, "position");
        if (!res.result) {
          message.push("Product position incorrect");
        }

        // Validate animal text
        res = validation.validateTextInput(this.pAnimal, "animal");
        if (!res.result) {
          message.push("Product animal incorrect");
        }

        // Validate price number
        res = validation.validateNumberInput(this.pPrice, "price");
        if (!res.result) {
          message.push("Product price incorrect");
        }

        if (message.length === 0) {
          store.products.push({
            id: id,
            name: this.pName,
            positon: this.pPosition,
            animal: this.pAnimal,
            price: this.pPrice,
          });
          store.displayedProducts = structuredClone(store.products);

          message.push(`Product ${this.pName} added correctly!`);
          this.pName == "";
        }
        alert(message);
      }
    },
  },
  components: { ButtonMulti },
};
</script>

<style scoped>
button {
  width: 150px;
  margin: auto;
}
</style>
