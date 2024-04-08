function callbackHell(callback) {
    setTimeout(() => {
        const data = "Inside (callbackHell) function";
        console.log(data);
        callback(data);
    }, 2000);
};

function firstFunc(data, callback) {
    setTimeout(() => {
        const processedData = `${data} - Processed First`;
        console.log(processedData);
        callback(processedData);
    }, 1000);
};

function secondFunc(data, callback) {
    setTimeout(() => {
        const processedData = `${data} - Processed Second`;
        console.log(processedData);
        callback(processedData);
    }, 1500);
};

callbackHell((data) => {
    firstFunc(data, (processedDataOne) => {
        secondFunc(processedDataOne, (processedDataTwo) => {
            console.log(`Final result of all function: ${processedDataTwo}`);
        });
    });
});