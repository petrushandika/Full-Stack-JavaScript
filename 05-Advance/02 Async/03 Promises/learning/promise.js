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

function callbackHell(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = "Inside (callbackHell) function";
            console.log(data);
            resolve(data);
        }, 2000);
    })
}

function firstFunc(data) {
    return new Promise((resolve, reject) => {
        const processedData = `${data} - Processed Data One`;
        console.log(processedData);
        resolve(processedData);
    }, 2000);
}

function secondFunc(data) {
    return new Promise((resolve, reject) => {
        const processedData = `${data} - Processed Data Two`;
        console.log(processedData);
        resolve(processedData);
    }, 1500);
}

callbackHell()
.then((data) => firstFunc(data))
.then((processedDataOne) => secondFunc(processedDataOne))
.then((processedDataTwo) => console.log(`Final result of all function with Promises: ${processedDataTwo}`))
.catch((error) => console.log(`Error: ${error}`));
