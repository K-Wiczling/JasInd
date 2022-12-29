<template>
  <div>
    <!-- Add new animal -->
    <div class="form-wrapper">
      <label class="input-1">Animal Name</label>
      <input class="input-1" v-model="cAnimal" type="text" placeholder="new animal" />
      <ButtonMulti text="Add new animal" @click="addAnimal" />
    </div>

    <!-- Add new position -->
    <div class="form-wrapper">
      <label class="input-1">Position Name</label>
      <input class="input-1" v-model="cPosition" type="text" placeholder="new position" />
      <ButtonMulti text="Add new positon" @click="addPosition" />
    </div>
  </div>
</template>

<script>
import { store } from "@/sripts/store";
import validation from "@/sripts/validation";

import ButtonMulti from "../small/ButtonMulti.vue";

export default {
  name: "AddNewCategory",
  components: {
    ButtonMulti,
  },
  data() {
    return {
      store,
      cAnimal: "",
      cPosition: "",
    };
  },
  methods: {
    // Add new position
    addPosition() {
      // Create new Id based on the last position id
      let id = validation.getUniqeId(store.positons);

      // Validate input
      if (this.validateAdd(id, this.cPosition, "position", store.positons)) {
        // Add the new position to the position list
        store.positons.push({ id: id, name: this.cPosition });
        alert(`${this.cPosition} added to the positions category`);
      } else {
        alert("Position input can not be empty");
      }
      this.cPosition = "";
    },

    // Adding new Animal
    addAnimal() {
      // Create new Id based on the last animal id
      let id = validation.getUniqeId(store.animals);

      // Validate input
      if (this.validateAdd(id, this.cAnimal, "animal", store.animals)) {
        // Add the new animal to the animal list
        store.animals.push({ id: id, name: this.cAnimal });
        alert(`${this.cAnimal} added to the animals category`);
      } else {
        alert("Animals input can not be empty");
      }
      this.cAnimal = "";
    },

    // Validation procedure to both inputs
    validateAdd(id, text, name, arr) {
      // Validate Id
      let res = validation.validateId(id, arr);
      if (res.result && res.rest.newId) {
        // Validate input text
        let res2 = validation.validateTextInput(text, name);
        if (res2.result) {
          return true;
        }
      }
    },
  },
};
</script>

<style scoped>

</style>
