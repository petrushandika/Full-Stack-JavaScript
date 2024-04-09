function fetchDataFromServer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User data retrieved from the server");
        }, 5000);
    });
};

async function fetchData() {
    try {
        const data = await fetchDataFromServer();
        console.log(data);
        console.log("Remaining task can be executed here.");
    } catch (error) {
        console.log(error);
    };
};

fetchData();

function callbackHell() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = `Inside (callback) function`;
            console.log(data);
            resolve(data);
        }, 2000);
    });
}

function firstFunc(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const processedData = `${data} - Processed first`;
            console.log(processedData);
            resolve(processedData);
        }, 3000);
    });
}

function secondFunc(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const processedData = `${data} - Processed second`;
            console.log(processedData);
            resolve(processedData);
        }, 2000);
    });
}

async function processedDataWithAwait() {
    try {
        const data = await callbackHell();
        const processedDataOne = await firstFunc(data);
        const processedDataTwo = await secondFunc(processedDataOne);
        console.log(`Final result of all function with async await: ${processedDataTwo}`);
    } catch (error) {
        console.log(`Error ${error}`);
    }
}

processedDataWithAwait();
