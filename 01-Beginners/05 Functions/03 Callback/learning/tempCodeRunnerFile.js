// Regular Callback Function
function callbackFunc(fn) {
    const value = 10;
    console.log(value);
}
function showFunc(callback) {
    console.log(callback);
}
callbackFunc(showFunc);

// Callback Function With Two Parameters
function anyCall(name, callMe) {
    console.log(name);
    callMe();
}
anyCall('Ujang', function callMe() {
    console.log('This is callback function');
})
