type AccountInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type Account = AccountInfo & AccountDetails;

const human: Account = {
  first: "Petrus",
  last: "Handika",
  age: 22,
  email: "petrushandikasinaga@gmail.com",
  password: "password123",
};

console.log(
  `Name: ${human.first} ${human.last} Age: ${human.age} Email: ${human.email} Password: ${human.password}`
);
