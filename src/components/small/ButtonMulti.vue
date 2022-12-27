<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  name: "ButtonMulti",
  props: {
    text: String,
  },
};
</script>

<style scoped>
button {
  background-color: var(--secondColor);
  color: white;
  border: 0;
  padding: 3px 5px;
  border-radius: 5px;
  margin-right: 5px;
}
button:hover {
  color: black;
  background-color: var(--brakerColor);
}
</style>
