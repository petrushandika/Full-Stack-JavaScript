// Regular Conditional
function passwordChecker(ps) {
    if (ps === 8) {
        console.log('Password Strong');
    } else {
        console.log('Password Weak');
    }
}
passwordChecker(8);

// Ternary operator
const letter = 1;
const passwordLetter = letter >= 8 ? 'Password Strong' : 'Password Weak';
console.log(passwordLetter);

