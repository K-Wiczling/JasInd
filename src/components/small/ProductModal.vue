<template>
  <div id="product-modal" v-if="store.modalShow">
    <div id="wrapper">
      <div class="line">
        <p>
          Name: <strong>{{ store.products[idd].name }}</strong>
        </p>
        <input
          v-model="mName"
          type="text"
          name="name"
          :placeholder="store.products[idd].name"
        />
      </div>

      <div class="line">
        <p>
          Position: <strong>{{ store.products[idd].positon }}</strong>
        </p>
        <select v-model="mPosition" name="position" id="position">
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
        <p>
          Animal: <strong>{{ store.products[idd].animal }}</strong>
        </p>
        <select v-model="mAnimal" name="animal" id="animal">
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
        <p>
          Price: <strong>{{ store.products[idd].price }}zł</strong>
        </p>
        <input v-model="mPrice" type="number" name="price" />
      </div>
      <ButtonMulti text="Update" @click="updateProduct" />
    </div>
    <ButtonMulti text="x" @click="closeModal" id="exit" />
  </div>
</template>

<script>
import { store } from "@/sripts/store";
import Outcome from "@/sripts/outcome";
import validation from "../../sripts/validation";
import ButtonMulti from "./ButtonMulti.vue";

export default {
  name: "ProductModal",
  props: {
    idd: Number,
  },
  data() {
    return {
      store,
      mName: "",
      mPosition: "",
      mAnimal: "",
      mPrice: "",
    };
  },
  methods: {
    closeModal() {
      store.modalShow = !store.modalShow;
    },

    updateProduct() {
      if (typeof idd === "number") {
        return Outcome.buildOutcome(false, "Can't update product without id");
      }

      let res;
      let message = [];
      if (this.mName !== "") {
        res = validation.validateTextInput(this.mName);
        if (res.result) {
          store.products[this.idd].name = this.mName;
          message.push("Name Updated");
        } else {
          message.push("Name Incorrect");
        }
      }
      if (this.mPosition !== "") {
        res = validation.validateTextInput(this.mPosition);
        if (res.result) {
          store.products[this.idd].positon = this.mPosition;
          message.push("Position Updated");
        } else {
          message.push("Position Incorrect");
        }
      }
      if (this.mAnimal !== "") {
        res = validation.validateTextInput(this.mAnimal);
        if (res.result) {
          store.products[this.idd].positon = this.mAnimal;
          message.push("Animal Updated");
        } else {
          message.push("Animal Incorrect");
        }
      }
      if (this.mPrice !== "") {
        res = validation.validateNumberInput(this.mPrice);
        if (res.result) {
          store.products[this.idd].price = this.mPrice;
          message.push("Price Updated");
        } else {
          message.push("Price Incorrect");
        }
      }
      if(message.length !== 0){
        alert(message);
      }
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
