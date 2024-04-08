// object.create
let person = {
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
};

let call = Object.create(person);
call.firstName = "Petrus";
call.lastName = "Handika";  
call.greet();

let talk = Object.create(person, {
    firstName: {value: "Jamal"},
    lastName: {value: "Udin"}
});

talk.greet();