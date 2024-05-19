interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

const computerExample: Computer = {
  name: "i7",
  ram: 8,
  hdd: 512,
};

console.log(computerExample.name);
console.log(computerExample.ram);
console.log(computerExample.hdd);

interface Movie {
  readonly name: string;
  ratings: number;
  genre?: string;
}

const movieExample: Movie = {
  name: "Star Wars",
  ratings: 8.5,
};

console.log(movieExample.name);
console.log(movieExample.ratings);
console.log(movieExample.genre);
