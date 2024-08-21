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
    <teleport
      to="#modals"
      class="modal"
      v-if="showModal"
    >
      <p>Welcome</p>
      <AppModal
        theme="sale"
        @close="toggleModal"
      >
        <template v-slot:links>
          <a href="#">Sign Up Now</a>
          <a href="#">More Info</a>
        </template>
        <h1>Sign up for the Giveaway!</h1>
        <p>Grab your ninja swag for half price!</p>
      </AppModal>

      <!-- <AppModal
        :header="header"
        :text="text"
        theme="sale"
        @close="toggleModal"
      /> -->
    </teleport>
    <teleport
      to="#modals"
      class="modalTwo"
      v-if="showModalTwo"
    >
      <AppModal @close="toggleModalTwo">
        <h1>Sign up to the newsletter</h1>
        <p>For updates and promo codes!</p>
      </AppModal>
    </teleport>
    <div>
      <button @click="toggleModal">Open Modal</button>
      <button @click.shift="toggleModalTwo">Open Modal Two</button>
    </div>
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
      header: "Sign up for the Giveaway!",
      text: "Grab your ninja swag for half price!",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
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

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modalTwo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  margin-top: 1rem;
}
</style>
