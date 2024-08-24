<template>
  <div>
    <h1>Jobs Details</h1>
    <p>The job id is {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
};
</script>

<style></style>
