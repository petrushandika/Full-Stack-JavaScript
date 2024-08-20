const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
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
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !books.isFav;
    },
  },
});

app.mount("#app");
