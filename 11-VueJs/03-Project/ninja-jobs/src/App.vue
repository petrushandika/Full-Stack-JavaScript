<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'AboutPage' }">About</router-link> |
      <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
    </div>
    <router-view />
    <div class="btn">
      <button @click="redirect">Redirect</button>
      <button @click="back">Go Back</button>
      <button @click="forward">Go Forward</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: "HomePage" });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(+1);
    },
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: #fff;
  background-color: crimson;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

button {
  width: 100px;
  color: #fff;
  background-color: rgb(0, 75, 210);
  padding: 0.5rem;
  border: transparent;
  border-radius: 0.5rem;
}
</style>
