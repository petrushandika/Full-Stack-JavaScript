const app = Vue.createApp({
  data() {
    return {
      showTitle: true,
      title: "The Final Empire",
      author: "Petrus Handika",
      age: 22,
    };
  },
  methods: {
    changeTitle(title) {
      //   this.title = "Words of Randiance";
      this.title = title;
    },
    toggleShowTitle() {
      this.showTitle = !this.showTitle;
    },
  },
});

app.mount("#app");
