let password: string | number = 20;

type AccountInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

let User: AccountInfo | AccountDetails = {
  email: "someone@gmail.com",
  password: "Password123",
};

const items: (number | string)[] = [1, 2, 3, "hello", "world"];

console.log(items);
