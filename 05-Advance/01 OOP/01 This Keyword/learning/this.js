console.log(window);
console.log(this);
console.log(window === this);

window.firstName = 'Petrus';
this.lastName = 'Handika';

let fullName = function() {
    console.log(`Hello, my name is ${this.firstName}  ${this.lastName}`);
}

fullName();

// Using this keyword in object
const obj = {
    firstName: 'Petrus',
    lastName: 'Handika',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
};

const res = obj.fullName();
console.log(res);

// Using this keyword in function
function callThis() {
    return this;
}

const res2 = callThis();
console.log(res2);

// Using this keyword in arrow method
const obj3 = {
    user: 'John',
    regularFunction: function() {
        return this.user;
    },
    arrowFunction: () => this.user,
};

const res3 = obj3.regularFunction();
console.log(res3);

const res4 = obj3.arrowFunction();
console.log(res4);
