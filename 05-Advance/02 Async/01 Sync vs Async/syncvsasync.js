// Synchronous Code
function myFunc(){
    console.log("Inside Function");
}

console.log("Start");
myFunc();
console.log("End");

// Asynchronous Code
console.log("Start");
setTimeout(() => {
    console.log("Inside Timeout");
}, 2000)
console.log("End");