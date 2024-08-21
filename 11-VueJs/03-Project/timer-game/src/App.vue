<template>
  <div class="container">
    <h1>Ninja Reaction Timer</h1>
    <button
      @click="start"
      :disabled="isPlaying"
    >
      Play
    </button>
    <AppBlock
      v-if="isPlaying"
      :delay="delay"
      @end="endGame"
    />
    <AppResults
      v-if="showResults"
      :score="score"
    />
  </div>
</template>

<script>
import AppBlock from "./components/AppBlock.vue";
import AppResults from "./components/AppResults.vue";

export default {
  name: "App",
  components: { AppBlock, AppResults },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    },
  },
};
</script>

<style>
.container {
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  background-color: #0faf87;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 0.5rem;
}

button [disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
