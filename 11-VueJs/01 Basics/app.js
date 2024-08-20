const app = Vue.createApp({
  data() {
    return {
      showTitle: true,
      title: "The Final Empire",
      author: "Petrus Handika",
      age: 22,
      x: 0,
      y: 0,
      books: [
        {
          title: "name of the wind",
          author: "mutiara alzahra",
          img: "assets/book1.jpg",
          isFav: true,
        },
        {
          title: "the way of kings",
          author: "isah veronika",
          img: "assets/book2.jpeg",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "thienezia yola",
          img: "assets/book3.jpeg",
          isFav: true,
        },
      ],
      url: "https://google.com",
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
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
