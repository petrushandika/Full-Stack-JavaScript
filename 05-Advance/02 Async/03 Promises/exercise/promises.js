/*
Refactor this code

console.log("Start");

function getUserDataFromDB(name, callback) {
    setTimeout(() => {
        console.log("Getting User Name");
        callback(name);
    }, 2000);
};

function getUserHobbies(name, callback) {
    setTimeout(() => {
        console.log("Getting User Hobbies");
        callback(["Basketball", "Guitar", "Swimming"])
    }, 2000);
};

getUserDataFromDB("Petrus", (data) => {
    console.log(data);
    getUserHobbies(data, (hobby) => {
        console.log(hobby);
    })
})

console.log("End");
*/

console.log("Start");

function getUserDataFromDB(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting Username");
            resolve(name);
        }, 2000);
    });
};

function getUserHobbies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting User Hobbies");
            resolve(["Basketball", "Guitar", "Swimming"]);
        }, 1500);
    });
};

getUserDataFromDB("Petrus")
.then((name) => getUserHobbies(name))
.then((hobby) => console.log(hobby))
.catch((error) => console.log(error))

console.log("End");