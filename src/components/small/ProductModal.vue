<template>
  <div id="product-modal" v-if="store.modalShow">
    <ButtonMulti text="Close" @click="closeModal" />
    <h2>{{ store.products[idd].name }}</h2>
    <input
      v-model="pName"
      type="text"
      name="name"
      :placeholder="store.products[idd].name"
    />
    <br />
    <p>Position: {{ store.products[idd].positon }}</p>
    <select v-model="pPosition" name="position" id="position">
      <option
        v-for="pos in store.positons"
        v-bind:key="pos.id"
        :value="pos.name"
      >
        {{ pos.name }}
      </option>
    </select>
    <br />

    <p>Animal: {{ store.products[idd].animal }}</p>
    <select v-model="pAnimal" name="animal" id="animal">
      <option
        v-for="animal in store.animals"
        v-bind:key="animal.id"
        :value="animal.name"
      >
        {{ animal.name }}
      </option>
    </select>
    <br />

    <p>Price: {{ store.products[idd].price }}</p>
    <input v-model="pPrice" type="number" name="price" />

    <br />
    <ButtonMulti text="Update" @click="Update" />
  </div>
</template>

<script>
import { store } from "@/sripts/store";
import Outcome from "@/sripts/outcome";
import ButtonMulti from "./ButtonMulti.vue";

export default {
  name: "ProductModal",
  props: {
    idd: Number,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    closeModal() {
      store.modalShow = !store.modalShow;
    },

    updateProduct(
      id = 0,
      name = null,
      positon = null,
      animal = null,
      price = null
    ) {
      if (id === null) {
        return Outcome.buildOutcome(false, "Can't update productwithout id");
      }
      // let validation = this.validateNewProduct(id, name, positon, animal, price);
      // if(){

      if (name !== null) {
        store.products[id].name = name;
      }
      if (positon !== null) {
        store.products[id].positon = positon;
      }
      if (animal !== null) {
        store.products[id].animal = animal;
      }
      if (price !== null) {
        store.products[id].price = price;
      }
      // }
      return Outcome.buildOutcome(true, "Product Updated");
    },
  },
  components: {
    ButtonMulti,
  },
};
</script>

<style scoped>
#product-modal {
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  color: white;
}
input,
select,
p {
  display: inline;
}
</style>
