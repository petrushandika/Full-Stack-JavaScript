/*
Callback Exercise:
1. Create a function name (showCallFunc).
2. pass 'fn' as parameter.
3. Inside that function, create variable which hold value of 10.
4. Pass that value to the callback function.
5. Now create callback function & sprint that value which you pass as parameter.
*/
function showCallFunc(fn) {
    const value = 10;
    fn(value);
}
function resultCallFunc(callback) {
    console.log(`The result is ${callback}`);
}
showCallFunc(resultCallFunc);