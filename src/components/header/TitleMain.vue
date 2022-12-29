<template>
  <div class="title">
    <h1 id="logo-header">Jaś Industries</h1>
    <MainMenu />
  </div>
</template>

<script>
import MainMenu from "./MainMenu.vue";

export default {
  name: "TitleMain",
  props: {
    msg: String,
  },
  components: { MainMenu },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
  border-bottom: 5px solid var(--thirdColor);
  background-color: var(--mainColor);
}

#logo-header {
  font-size: 1.6rem;
  color: var(--brakerColor);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bolder;
  text-align: start;
  width: 250px;
  padding-left: 2px;
  margin: 0;
}

@media only screen and (max-width: 850px) {
  .title {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
  }

  #logo-header {
    padding: 15px;
  }
}

@media only screen and (max-width: 450px) {}

@media only screen and (max-width: 360px) {}
</style>
