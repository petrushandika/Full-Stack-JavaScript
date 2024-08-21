<template>
  <div class="app">
    <h1>{{ title }}</h1>
    <div>
      <input
        type="text"
        ref="name"
      />
      <button @click="handleClick">Click Me</button>
    </div>
    <AppModal />
  </div>
</template>

<script>
import AppModal from "./components/AppModal.vue";

export default {
  name: "app",
  components: { AppModal },
  data() {
    return {
      title: "My First Vue App",
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
  },
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
