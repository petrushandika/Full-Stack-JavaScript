<template>
  <div class="container">
    <!-- <h2>Refs</h2>
    <p>{{ valueOne.name }} - {{ valueOne.age }}</p>
    <button @click="updateValueOne">Update</button>

    <h2>Reactive</h2>
    <p>{{ valueTwo.name }} - {{ valueTwo.age }}</p>
    <button @click="updateValueTwo">Update</button>

    <h2>Computed</h2>
    <input
      type="text"
      v-model="search"
    />
    <p>Search Term - {{ search }}</p>
    <div
      v-for="name in macthingNames"
      :key="name"
    >
      {{ name }}
    </div>
    <button @click="handleStop">Stop Wacth</button> -->
  </div>
</template>

<script>
// import { ref, reactive, computed, watch, watchEffect } from "vue";

// export default {
//   name: "HomePage",
//   setup() {
//     const valueOne = ref({ name: "Petrus", age: 22 });
//     const valueTwo = reactive({ name: "Dika", age: 25 });

//     const updateValueOne = () => {
//       valueOne.value.age = 25;
//     };

//     const updateValueTwo = () => {
//       valueTwo.age = 30;
//     };

//     const search = ref("");
//     const names = ref([
//       "Handika",
//       "Annisa",
//       "Mutiara",
//       "Michael",
//       "Samuel",
//       "Isah",
//       "Radja",
//       "Renaldy",
//       "Kezia",
//     ]);

//     const stopWatch = watch(search, () => {
//       console.log("Watch Function Ran");
//     });

//     const stopEffect = watchEffect(() => {
//       console.log("watchEffect Function Ran", search.value);
//     });

//     const handleStop = () => {
//       stopWatch();
//       stopEffect();
//     };

//     const macthingNames = computed(() => {
//       return names.value.filter((name) => name.includes(search.value));
//     });

//     return {
//       valueOne,
//       valueTwo,
//       updateValueOne,
//       updateValueTwo,
//       search,
//       macthingNames,
//       handleStop,
//     };
//   },
// };


</script>

<style>
/* input {
  padding: 0.5rem;
  border-radius: 0.5rem;
  outline: none;
} */
</style>
