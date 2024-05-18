const person: { firstName: string; lastName: string; age: number } = {
  firstName: "Petrus",
  lastName: "Handika",
  age: 22,
};

console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);

function printUser(): { name: string; gender: string; location: String } {
  return {
    name: "Jamal",
    gender: "Shemale",
    location: "Jakarta",
  };
}

const resultObject = printUser();
console.log(resultObject);
