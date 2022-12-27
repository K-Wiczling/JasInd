<template>
  <div class="main-menu">
    <ButtonMulti
      @click="setAppState(0)"
      :class="{ active: store.appState === 0 }"
      text="List of Products"
    />
    <ButtonMulti
      @click="setAppState(1)"
      :class="{ active: store.appState === 1 }"
      text="New Product"
    />
    <ButtonMulti
      @click="setAppState(2)"
      :class="{ active: store.appState === 2 }"
      text="New Category"
    />
  </div>
</template>

<script>
import ButtonMulti from "../small/ButtonMulti.vue";
import { store } from "../../sripts/store";

export default {
  name: "MainMenu",
  data() {
    return {
      store,
    };
  },
  methods: {
    setAppState(n) {
      store.appState = n;
    },
  },
  components: {
    ButtonMulti,
  },
};
</script>

<style scoped>
.main-menu {
  display: flex;
  justify-content: flex-end;
  width: 400px;
  margin: 0;
  justify-self: end;
}

button {
  margin-right: 1px;
  border-radius: 5px 5px 0 0;
  height: 100%;
  box-shadow: 1px;
  width: 150px;
  transition: all 0.4s;
}

.active {
  background-color: var(--thirdColor);
  font-weight: bold;
  width: 160px;
}
</style>
