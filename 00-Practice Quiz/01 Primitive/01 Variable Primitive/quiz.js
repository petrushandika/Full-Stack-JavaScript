// 1. Declare a variable called `currentAge` and set its value to the result of adding 10 to the variable `birthYear` (which is 1990).
let currentAge  = 10;
let birthYear = 1990;
console.log(birthYear + currentAge);

// 2. Declare a variable called `fullName` and set its value to the concatenation of the strings "John" and "Doe", which are stored in variables `name` and `lastName` respectively.
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// 3. Declare a variable called `isActiveToday` and set its value to the result of the logical AND operation between the current value of `isActive` and a new variable `isWorking`, which is `true`.
let isActive = true;
let isWorking = true;
let isActiveToday= isActive && isWorking;
console.log(isActiveToday);

// 4. Declare a variable called `totalBalance` and set its value to the result of adding 500 to the current value of `balance`.
let totalBalance = balance + 500;
console.log(totalBalance);

// 5. Declare a variable called `currentCity` and set its value to the concatenation of the string "Living in " and the value of `city`.
let currentCity = 'Jakarta';
console.log('Living In', currentCity);

// 6. Declare a variable called `circumferenceOfCircle` and set its value to the result of multiplying the value of `pi` by 2 and then by 10.
let radius = 10;
let circumferenceOfCircle = 2 * Math.PI * radius;
console.log(circumferenceOfCircle);

// 7. Declare a variable called `currentYear` and set its value to the result of subtracting 25 from the current year.
let currentYear = new Date().getFullYear();
currentYear -= 25;
console.log(currentYear);

// 8. Declare a variable called `relationshipStatus` and set its value to the result of the logical NOT operation on the current value of `isMarried`.
let isMarried = true;
let relationshipStatus = !isMarried;
console.log(relationshipStatus);

// 9. Declare a variable called `weightInKilograms` and set its value to the result of dividing the current value of `weight` by 2.20462 (1 pound equals 0.453592 kilograms).
let weight = 2.20462;
let pound = 0.453592;
let weightInKilograms = weight / pound;
console.log(weightInKilograms);

// 10. Declare a variable called `fullNameWithPrefix` and set its value to the concatenation of the string "Mr./Ms. " and the value of `fullName`.
let fullNameWithPrefix = 'Mr./Ms.'; 
let fullNames = 'Ujang';
console.log(fullNameWithPrefix.concat(fullNames));