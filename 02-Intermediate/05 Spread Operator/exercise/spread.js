/*
Spread operator exercise:
1. Make a clone of 'arr, arr2' by using spread operator.
2. Make a clone of 'user' object using spread operator
*/
let arr = [1, 2, 3];
let arr2 = [4, 5];
let cloneArr = [...arr, ...arr2];
console.log(cloneArr);

const user = {
    name: "John",
    age: 22,
}
const cloneUser = {...user};
console.log(cloneUser);