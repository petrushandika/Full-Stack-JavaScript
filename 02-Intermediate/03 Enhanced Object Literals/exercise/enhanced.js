let a = 1;
let b = 2;
let c = 3;

enchanced = () => {
    return { a, b, c,
        number: () => {
            console.log(`The value of a is ${a},b = ${b}, and c = ${c}. Total all of them is ${a + b + c}`);
        }
    }
}
const obj = enchanced();
obj.number();