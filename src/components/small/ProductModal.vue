<template>
  <div id="product-modal" v-if="store.modalShow">
    <div id="wrapper">
      <div class="line">
        <p>Name: <strong>{{ store.products[idd].name }}</strong></p>
        <input
          v-model="pName"
          type="text"
          name="name"
          :placeholder="store.products[idd].name"
        />
      </div>

      <div class="line">
        <p>Position: <strong>{{ store.products[idd].positon }}</strong></p>
        <select v-model="pPosition" name="position" id="position">
          <option
            v-for="pos in store.positons"
            v-bind:key="pos.id"
            :value="pos.name"
          >
            {{ pos.name }}
          </option>
        </select>
      </div>
      <div class="line">
        <p>Animal: <strong>{{ store.products[idd].animal }}</strong></p>
        <select v-model="pAnimal" name="animal" id="animal">
          <option
            v-for="animal in store.animals"
            v-bind:key="animal.id"
            :value="animal.name"
          >
            {{ animal.name }}
          </option>
        </select>
      </div>
      <div class="line">
        <p>Price: <strong>{{ store.products[idd].price }}</strong></p>
        <input v-model="pPrice" type="number" name="price" />
      </div>
      <ButtonMulti text="Update" @click="Update" />
    </div>
    <ButtonMulti text="x" @click="closeModal" id="exit" />
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
#wrapper {
  border: 1px solid white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
  width: 50vw;
  height: 50vh;
  margin: auto;
  margin-top: 25vh;
  padding: 20px;
}
.line {
  display: flex;
  justify-content: space-between;
}
button#exit {
  position: fixed;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  font-weight: bold;
}
input,
select,
p {
  height: 30px;
}
p {
  font-size: 1.1rem;
}
input,
select {
  width: 200px;
}
@media only screen and (max-width: 850px) {
  #wrapper {
    width: 430px;
  }
  
  p {
    font-size: 0.9rem;
  }
}
@media only screen and (max-width: 450px) {
  #wrapper {
    width: 90vw;
  }
  input,
  select {
    width: 150px;
  }
  input,
  select,
  p {
    height: 35px;
  }
}
</style>
