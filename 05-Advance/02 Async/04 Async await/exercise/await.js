/*
Refactor this code to use async/await
console.log("Start");

function getUserDataFromDB(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Valid Name");
      resolve(name);
    }, 2000);
  });
}

function getUserHobbies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting user hobbies...");
      resolve(["Football", "Singing", "Solving Math"]);
    }, 2000);
  });
}

getUserDataFromDB("HuXn")
  .then((name) => getUserHobbies(name))
  .then((hobby) => console.log(hobby))
  .catch((err) => console.log(err));

console.log("End");
*/

console.log("Start");

function getUserDataFromDB(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Valid Name");
            resolve(name);
        }, 2000);
    });
};

function getUserHobbies() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Getting Username");
            resolve(["Football", "Singing", "Solving Math"]);
        }, 3000);
    });
};

async function showUser() {
    try {
        const name = await getUserDataFromDB("Petrus");
        const hobby = await getUserHobbies(name);
        console.log(hobby);
    } catch (error) {
        console.log(`Error: ${error}`);
    };
};

showUser();

console.log("End");