<template>
  <div>
    <div v-if="job">
      <h1>Jobs Details</h1>
      <h3>{{ job.title }}</h3>
      <p>The job id is {{ id }}</p>
      <p>{{ job.details }}</p>
    </div>
    <div v-else>
      <p>Loading job details...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
p {
  text-align: center;
}
</style>
