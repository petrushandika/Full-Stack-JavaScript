<template>
  <div
    class="backdrop"
    @click.self="closeModal"
  >
    <div
      class="modal"
      :class="{ sale: theme === 'sale' }"
    >
      <slot>default content</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
      <!-- <h1>{{ header }}</h1>
      <p>{{ text }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "text", "theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.backdrop {
  top: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background-color: #fff;
  border-radius: 10px;
}

.modal.sale {
  color: #fff;
  background-color: crimson;
}

.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}

.modal .actions a {
  color: #333;
  padding: 0.5rem;
  border: 1px solid #eee;
  border-radius: 0.25rem;
  text-decoration: none;
  margin: 0.5rem;
}
</style>
