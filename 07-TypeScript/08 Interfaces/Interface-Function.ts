interface Person {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}

function greet(person: Person) {
  console.log(`Hello ${person.firstName} ${person.lastName}`);
  person.sayHello();
}

const petrus: Person = {
  firstName: "Petrus",
  lastName: "Handika",
  age: 22,
  sayHello() {
    console.log(`Hi There!`);
  },
};

const udin: Person = {
  firstName: "Jamal",
  lastName: "Udin",
  age: 30,
  sayHello() {
    console.log(`Whats Up Bro!`);
  },
};

greet(petrus);
greet(udin);

interface Song {
  songName: string;
  singerName: string;
  songInfo(songName: string, singerName: string): string;
}

const songExample: Song = {
  songName: "Pure Imagination",
  singerName: "Kompa Kompa",
  songInfo: (songName, singerName) => {
    return `Song: ${songName}, Singer: ${singerName}`;
  },
};

console.log(songExample.songInfo("Pure Imagination", "Kompa Kompa"));
