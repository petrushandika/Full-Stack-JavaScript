// Regular function
function regular() {
    console.log('This is regular function');
}
regular();

// Arrow function
regular = () => console.log('This is Arrow Function');
regular();

// Regular function with one parameter
function parameter(one) {
    console.log(one);
}
parameter("This is a one parameter");

// Arrow function with one parameter
parameter = (one) => `This is a one parameter use arrow function`;
console.log(parameter('one'));

// Regular function with two parameter
function parameterTwo (one, two) {
    return one + two;
}
console.log(parameterTwo(20, 30));

// Arrow function with two parameter
parameterTwo = (one, two) => one+ two;
console.log(parameterTwo(20, 30));