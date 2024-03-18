/*
Find helper exercise:
1. Iterate over 'ages' array.
2. Print only those ages which is greater then 18.
*/
const ages = [5, 10, 15, 20, 25, 30];

function checkUnderEightTeen(age) {
    return age >= 18;
}

const result = ages.find(checkUnderEightTeen);
console.log(result);


