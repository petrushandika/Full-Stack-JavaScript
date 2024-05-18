type Person = {
  name: string;
  age?: number;
  location: string;
};

const people: Person = {
  name: "Petrus",
  location: "Jakarta",
};

console.log(`Name: ${people.name} Age: ${people.age} Location: ${people.location}`);
