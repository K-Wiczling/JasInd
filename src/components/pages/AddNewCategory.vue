<template>
  <div>
    <!-- Add new animal -->
    <div class="form-wrapper">
      <label class="input-1"  >Animal Name</label>
      <input
        class="input-1"
        v-model="cAnimal"
        type="text"
        placeholder="new animal"
      />
      <ButtonMulti text="Add new animal" @click="addAnimal" />
    </div>

    <!-- Add new position -->
    <div class="form-wrapper">
      <label class="input-1">Position Name</label>
      <input
        class="input-1"
        v-model="cPosition"
        type="text"
        placeholder="new position"
      />
      <ButtonMulti text="Add new positon" @click="addPosition" />
    </div>
  </div>
</template>

<script>
import { store } from "@/sripts/store";

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
      let id = store.positons[store.positons.length - 1] + 1;
      store.positons.push({ id: id, name: this.cPosition });
    },
    // Adding new Animal
    addAnimal() {
      let id = store.animals[store.animals.length - 1] + 1;
      store.animals.push({ id: id, name: this.cAnimal });
    },
  },
};
</script>

<style scoped></style>
