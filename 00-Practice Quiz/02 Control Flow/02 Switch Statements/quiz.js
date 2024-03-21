// 1. Create a switch statement to determine the chemical reaction based on its chemical formula. If the formula is "H2O", print "Water", if "CO2", print "Carbon Dioxide", if "NaCl", print "Salt", and if none of the above, print "Unrecognized".
let formula = 'H2O';

switch(formula) {
    case 'H2O':
        console.log('Water');
        break;
    case 'CO2':
        console.log('Carbon Dioxide');
        break;
    case 'NaCL':
        console.log('Salt');
        break;
    default:
        console.log('Unrecognized');
}

// 2. Create a switch statement to determine the direction based on the angle. If the angle is 0, print "North", if 90, print "East", if 180, print "South", if 270, print "West", and if the angle is outside of these ranges, print "Invalid direction".
let angle= 270;

switch (angle) {
    case 0:
        console.log('North');
        break;
    case 90:
        console.log('East');
        break;
    case 180:
        console.log('South');
        break;
    case 270:
        console.log('West');
        break;
    default:
        console.log('Invalid Direction');
}

// 3. Create a switch statement to determine the type of musical instrument based on its category. If the category is "String", print "Guitar", if "Wind", print "Saxophone", if "Percussion", print "Drum", and if not in any of these categories, print "Unrecognized".
let category = 'Percussion';

switch(category) {
    case 'Strings':
        console.log('Guitar');
        break;
    case 'Wind':
        console.log('Saxophone');
        break;
    case 'Percussion':
        console.log('Drum');
        break;
    default:
        console.log('Unrecognized');
}

// 4. Create a switch statement to determine the type of fruit based on its name. If the name is "Apple", print "Fresh Fruit", if "Banana", print "Tropical Fruit", if "Grapes", print "Berry Fruit", and if the fruit name doesn't match, print "Unrecognized".
let name = 'Apple';

switch (name) {
    case 'Apple':
        console.log('Fresh Fruit');
        break;
    case 'Banana':
        console.log('Tropical Fruit');
        break;
    case 'Grapes':
        console.log('Berry Fruit');
        break;
    default:
        console.log('Unrecognized');
}

// 5. Create a switch statement to determine the category of a game based on its genre. If the genre is "FPS", print "Shooting Game", if "RPG", print "Role-playing Game", if "Strategy", print "Strategy Game", and if the genre doesn't match, print "Unknown".
let genre = 'RPG';

switch (genre) {
    case 'FPS':
        console.log('Shooting Game');
        break;
    case 'RPG':
        console.log('Role-playing Game');
        break;
    case 'Strategy':
        console.log('Strategy Game');
        break;
    default:
        console.log('Unknown');
}

// 6. Create a switch statement to determine the internet speed based on the download speed value. If the value is below 5 Mbps, print "Slow", if between 5 and 20 Mbps, print "Moderate", if above 20 Mbps, print "Fast", and if the value is invalid, print "Invalid value".
let internetSpeed = 22

switch (true) {
    case internetSpeed < 5:
        console.log('Slow');
        break;
    case internetSpeed >= 5 && internetSpeed <= 20:
        console.log('Moderate');
        break;
    case internetSpeed > 20:
        console.log('Fast');
        break;
    default:
        console.log('Invalid Value');
}

// 7. Create a switch statement to determine the health status based on body temperature. If the body temperature is below 36.5 degrees Celsius, print "Hypothermia", if between 36.5 and 37.5 degrees Celsius, print "Normal", if above 37.5 degrees Celsius, print "Fever", and if the body temperature is invalid, print "Invalid temperature".
let temperature = 35;

switch(true) {
    case temperature < 36.5:
        console.log('Hypothermia');
        break;
    case temperature >= 36.5 && temperature <= 37.5:
        console.log('Normal');
        break;
    case temperature > 37.5:
        console.log('Fever');
        break;
    default:
        console.log('Invalid Temperature');
}

// 8. Create a switch statement to determine the exercise time based on the type of exercise. If the exercise type is "Running", print "Morning", if "Swimming", print "Afternoon", if "Cycling", print "Evening", and if it doesn't fall into any of these categories, print "Unknown exercise time".
let exercise = 'Swimming';

switch (exercise) {
    case 'Running':
        console.log('Morning');
        break;
    case 'Swimming':
        console.log('Afternoon');
        break;
    case 'Cycling':
        console.log('Evening');
        break;
    default:
        console.log('Unknown exercise time');
}

// 9. Create a switch statement to determine the clothing size based on height and weight of a person. If the height and weight match size S, print "Size S", if M, print "Size M", if L, print "Size L", and if it doesn't match any size, print "Size mismatch".
let height = 170;
let weight = 65;

switch(true) {
    case height < 160 && weight < 50:
        console.log('Size S');
        break;
    case height >= 160 && height < 180 && weight >= 50 && weight < 70:
        console.log('Size M');
        break;
    case height <= 180 && weight <= 70:
        console.log('Size L');
        break;
    default:
        console.log('Size mismatch');
}

// 10. Create a switch statement to determine the class subject based on the subject name. If the subject name is "Mathematics" or "Physics", print "Natural Sciences", if "Biology" or "Chemistry", print "Life Sciences", if "History" or "Geography", print "Social Sciences", and if it doesn't match any of these, print "Unrecognized subject".
let subject = 'Biology';

switch (true) {
    case subject === 'Mathematics' || subject === 'Physics':
        console.log('Natural Science');
        break;
    case subject === 'Biology' || subject === 'Chemistry':
        console.log('Life Sciences');
        break;
    case subject === 'History' || subject === 'Geography':
        console.log('Social Sciences');
        break;
    default:
        console.log('Unrecognized subject');
}
