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
  border-radius: 5px;
  padding: 3px 5px;
}

button:hover {
  color: black;
  background-color: var(--brakerColor);
}
</style>
