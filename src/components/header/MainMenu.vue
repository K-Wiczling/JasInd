<template>
  <div class="main-menu">
    <ButtonMulti
      @click="setAppState(0)"
      :class="{ active: store.appState === 0 }"
      text="Products"
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
  width: 140px;
  transition: all 0.4s;
}

.active {
  background-color: var(--thirdColor);
  font-weight: bold;
  width: 160px;
}
@media only screen and (max-width: 850px) {
  .main-menu {
    width: 100%;
    justify-content: space-around;
    justify-self: center;
  }
}

@media only screen and (max-width: 450px) {
  button {
    font-size: 0.7rem;
    width: 100px;
  }
  .active {
    width: 110px;
  }
}


@media only screen and (max-width: 360px) {}
</style>
