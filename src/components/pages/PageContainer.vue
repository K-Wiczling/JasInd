<template>
  <div id="page">
    <h2>{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PageContainer",
  props: {
    title: String,
  },
};
</script>

<style>

</style>
