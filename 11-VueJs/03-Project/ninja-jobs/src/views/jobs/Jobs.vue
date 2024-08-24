<template>
  <div>
    <h1>Jobs</h1>
    <div
      v-for="job in jobs"
      :key="job.id"
      class="job"
    >
      <router-link :to="{ name: 'JobDetail', params: { id: job.id } }">
        <h2>
          {{ job.title }}
        </h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { id: 1, title: "Ninja UX Designer", details: "lorem" },
        { id: 2, title: "Ninja React Developer", details: "lorem" },
        { id: 3, title: "Ninja Vue Developer", details: "lorem" },
      ],
    };
  },
};
</script>

<style>
.job h2 {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}

.job h2:hover {
  background-color: #ddd;
}

.job a {
  text-decoration: none;
}
</style>
