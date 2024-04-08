function checkNumber(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve(`${number} is an even number`);
        } else {
            reject(`${number} is an odd number`);
        };
    });
};

const numberCheck = 6;

checkNumber(numberCheck).then((message) => {
    console.log(`Success: ${message}`);
}). catch((error) => {
    console.log(`${error}`);
})