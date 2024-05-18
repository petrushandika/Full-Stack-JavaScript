type User = {
  name: string;
  age: number;
  location: string;
};

const printUserInfo = (user: User) => {
  return `Name: ${user.name} Age: ${user.age} Location: ${user.location}`;
};

const resultInfo = printUserInfo({
  name: "Petrus",
  age: 22,
  location: "Jakarta",
});

console.log(resultInfo);
