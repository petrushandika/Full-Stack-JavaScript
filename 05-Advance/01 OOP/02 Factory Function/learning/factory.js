// A factory function is a type of function that is used to create and return objects. It's a design pattern that provides an alternative way to create objects compared to using constructors and the new keyword.

function person (firstName, lastName, programmingLanguage) {
    return {
        firstName,
        lastName,
        programmingLanguage,
        intro: function() {
            console.log(`Hello my name is ${this.firstName} ${this.lastName} and i love ${programmingLanguage}`);
        },
    };
};

const petrus = person('Petrus', 'Handika', 'JavaScript');
console.log(petrus);

const handika = person('Handika', 'Sinaga', 'Golang');
handika.intro();