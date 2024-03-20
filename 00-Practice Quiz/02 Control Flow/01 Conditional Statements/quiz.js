// 1. Create a condition with two branches (if-else) to determine a person's BMI (Body Mass Index) category based on the BMI value. If BMI is less than 18.5, print "Underweight", if between 18.5 and 24.9, print "Normal weight", if between 25 and 29.9, print "Overweight", and if 30 or more, print "Obesity".
let person = 20;

if (person < 18.5) {
    console.log('Underweight');
} else if (person >= 18.5 && person <= 24.9) {
    console.log('Normal weight');
} else if (person >= 25 && person <= 29.9) {
    console.log('Overweight');
} else {
    console.log('Obesity');
}

// 2. Create a condition with three branches (if-else if-else) to determine the letter grade from a student's numerical score based on a scale of 0-100. If the score is greater than or equal to 90, print "A", between 80 and 89, print "B", between 70 and 79, print "C", between 60 and 69, print "D", and if less than 60, print "E".
let score = 50;

if (score >= 90) {
    console.log('A');
} else if (score >= 80 && score <= 89) {
    console.log('B');
} else if (score >= 70 && score <= 79) {
    console.log('C');
} else if (score >= 60 && score <= 69) {
    console.log('D');
} else {
    console.log('E');
}

// 3. Create a condition to determine the discount price based on the total purchase amount. If the total purchase is more than 500000, give a 20% discount, if between 200000 and 499999, give a 10% discount, if between 100000 and 199999, give a 5% discount, and if less than 100000, no discount.
let purchase = 50000;

if (purchase >= 500000) {
    let discountedAmount = purchase * 0.20;
    console.log(`Get Discount 20%: ${purchase - discountedAmount}`);
} else if (purchase >= 200000 && purchase <= 499999) {
    let discountedAmount = purchase * 0.10;
    console.log(`Get Discount 10%: ${purchase - discountedAmount}`);
} else if (purchase >= 100000 && purchase <= 199999) {
    let discountedAmount = purchase * 0.05;
    console.log(`Get Discount 5%: ${purchase - discountedAmount}`);
} else {
    console.log('No Discount');
}

// 4. Create a condition with multiple branches (nested if) to determine the movie ticket category based on age and screening time. If age is less than 13 and the movie is a children's movie (PG), print "Children's ticket", if age is 13 or older and the movie is an adult movie (R), print "Adult ticket", if age is 18 or older and the movie is a horror movie (18+), print "Adult ticket", and if none of the conditions are met, print "Not eligible".
let age = 13;
let movieRating = 'R';
let screeningTime = 'Evening';

if (age < 13) {
    if (movieRating === 'PG') {
        console.log('Childrens Ticket');
    } else {
        console.log('Not Eligible');
    }
} else if (age >= 13 && age < 18) {
    console.log('Adult Ticket');
} else if (age >= 18) {
    if (movieRating === 'R') {
        console.log('Adult Ticket');
    } else {
        console.log('Not Eligible');
    }
} else {
    console.log('Not Eligible');
}

// 5. Create a condition to determine the type of vehicle based on speed. If the speed is less than 20 km/h, print "Bicycle", if between 20 and 60 km/h, print "Car", and if more than 60 km/h, print "Airplane".
let speed = 61;

if (speed < 20) {
    console.log('Bicycle');
} else if (speed >= 20 && speed <= 60) {
    console.log('Car');
} else {
    console.log('Airplane');
}

// 6. Create a condition to recommend a beverage based on weather and temperature. If it's sunny and the temperature is above 30 degrees Celsius, recommend "Iced Tea", if it's sunny and the temperature is between 20 and 30 degrees Celsius, recommend "Orange Juice", if it's raining, recommend "Hot Tea", and if none of the conditions are met, recommend "Water".
let weather = 'rainy';
let temperature = 15;

if (weather === 'sunny') {
    if (temperature > 30) {
        console.log('Iced Tea');
    } else if (temperature >= 20 && temperature <= 30) {
        console.log('Orange Juice');
    } else {
        console.log('Water');
    }
} else if (weather === 'rainy') {
    console.log('Hot Tea');
} else {
    console.log('Water');
}

// 7. Create a condition with logical operators (&&, ||) to determine loan eligibility based on age and income. If age is between 21 and 55 years old and monthly income is above 5000000, print "You are eligible for a loan", otherwise print "Sorry, you are not eligible for a loan".
let ages = 22;
let incomes = 250000;

if (ages >= 21 && ages <= 55 && incomes > 500000) {
    console.log('You are eligible for a loan');
} else {
    console.log('Sorry, you are not aligible for a loan');
}

if (ages >= 21 && ages <= 55 || incomes > 500000) {
    console.log('You are eligible for a loan');
} else {
    console.log('Sorry, you are not aligible for a loan');
}

// 8. Create a condition with a ternary operator to determine if someone passes an exam based on their score. If the score is greater than or equal to 70, print "Pass", otherwise print "Fail".
let scores = 69;

let resultScores = (scores >= 70) ? 'Pass' : 'Fail'
console.log(resultScores);

// 9. Create a condition to determine food choices based on mealtime. If it's breakfast time, recommend "Fried Rice", if it's lunchtime, recommend "Fried Chicken", if it's dinner time, recommend "Meatballs", and if it's not mealtime, recommend "Snacks".
let time = 'breakfast';

if (time === 'breakfast') {
    console.log('Fried Rice');
} else if (time === 'lunch') {
    console.log('Fried Chicken');
} else if (time === 'dinner') {
    console.log('Meat Balls');
} else {
    console.log('Snacks');
}

// 10. Create a condition to determine concert ticket prices based on age and ticket type. If age is less than 12 years old and the ticket type is "Children", the ticket price is 50 thousand, if age is between 12 and 17 years old and the ticket type is "Teenagers", the ticket price is 100 thousand, if age is 18 years old or older and the ticket type is "Adults", the ticket price is 200 thousand, and if none of the conditions are met, print "Not eligible".
let old = 15;
let ticketType = 'Children';
let ticketPrice;

if (old < 12 && ticketType === 'Children') {
    ticketPrice = 50000;
} else if (old >= 12 && old <= 17 && ticketType && ticketType === 'Teenagers') {
    ticketPrice = 100000;
} else if (old >= 18 && ticketType === 'Adults') {
    ticketPrice = 200000;
} else {
    ticketPrice = 'Not eligible';
}

console.log(ticketPrice);