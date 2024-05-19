interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenre extends MovieDetails {
  genre: string;
}

const movieOne: MovieGenre = {
  name: "Star Wars",
  genre: "Action",
  ratings: 8.8,
  printMovieInfo(
    name: string,
    price: number,
    ratings: number
  ): string | number {
    return `Movie name: ${name}, Price: ${price}, Ratings: ${ratings}`;
  },
};

const resultMovie = movieOne.printMovieInfo("John Wick", 100, 8);
console.log(resultMovie);
